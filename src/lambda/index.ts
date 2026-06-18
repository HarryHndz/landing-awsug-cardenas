// ─────────────────────────────────────────────────────────────────
// AWS Lambda — API de eventos AWS UG Cárdenas (TypeScript)
// Runtime de Lambda: Node.js 22.x
// Compilar con `tsc` antes de desplegar → genera dist/index.mjs
//
// Endpoints:
//   GET  /eventos   → lista todos los eventos
//   POST /eventos   → crea un nuevo evento
// ─────────────────────────────────────────────────────────────────

import type {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Handler,
} from "aws-lambda";

// ─── Tipos del dominio ───────────────────────────────────────────
type TipoEvento = "virtual" | "presencial";

interface EventoInput {
  titulo: string;
  descripcion: string;
  fecha: string;        // ISO date (YYYY-MM-DD)
  tipo: TipoEvento;
  lugar: string;
  imagen: string;
}

interface Evento extends EventoInput {
  id: number;
  createdAt: string;    // ISO datetime
}

// ─── Almacenamiento en memoria ───────────────────────────────────
//    Se pierde cuando el contenedor Lambda se recicla. Para producción,
//    migrar a DynamoDB (siguiente paso del reto de la comunidad).
const eventos: Evento[] = [
  {
    id: 1,
    titulo: "Introducción a AWS + Despliegue en S3",
    descripcion: "Primer evento de la comunidad. Conceptos básicos de AWS y despliegue de un sitio estático.",
    fecha: "2026-04-20",
    tipo: "presencial",
    lugar: "Villahermosa, Tabasco",
    imagen: "Slides-platica1.png",
    createdAt: "2026-04-01T10:00:00.000Z",
  },
  {
    id: 2,
    titulo: "Arquitecturas Serverless con API Gateway + Lambda",
    descripcion: "Construye una API REST sin servidores. Demo en vivo con Node.js.",
    fecha: "2026-06-25",
    tipo: "virtual",
    lugar: "Online (Zoom)",
    imagen: "slidecharla2.png",
    createdAt: "2026-06-01T10:00:00.000Z",
  },
];

// ─── Helpers de respuesta HTTP ───────────────────────────────────
const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
};

const ok = <T>(data: T, statusCode = 200): APIGatewayProxyResult => ({
  statusCode,
  headers,
  body: JSON.stringify(data),
});

const error = (mensaje: string, statusCode = 400): APIGatewayProxyResult => ({
  statusCode,
  headers,
  body: JSON.stringify({ error: mensaje }),
});

// ─── Validación con type guards ──────────────────────────────────
const camposRequeridos: (keyof EventoInput)[] = [
  "titulo", "descripcion", "fecha", "tipo", "lugar", "imagen",
];

const tiposValidos: TipoEvento[] = ["virtual", "presencial"];

function validarEvento(data: unknown): { ok: true; data: EventoInput } | { ok: false; mensaje: string } {

  if (typeof data !== "object" || data === null) {
    return { ok: false, mensaje: "El payload debe ser un objeto JSON" };
  }

  const obj = data as Record<string, unknown>;

  const faltantes = camposRequeridos.filter(
    (c) => typeof obj[c] !== "string" || (obj[c] as string).trim() === ""
  );

  if (faltantes.length > 0) {
    return { ok: false, mensaje: `Faltan campos requeridos: ${faltantes.join(", ")}` };
  }

  if (!tiposValidos.includes(obj.tipo as TipoEvento)) {
    return { ok: false, mensaje: `El campo "tipo" debe ser uno de: ${tiposValidos.join(", ")}` };
  }

  if (isNaN(Date.parse(obj.fecha as string))) {
    return { ok: false, mensaje: `La fecha debe tener formato ISO válido (ej. "2026-07-15")` };
  }

  return {
    ok: true,
    data: {
      titulo:      (obj.titulo as string).trim(),
      descripcion: (obj.descripcion as string).trim(),
      fecha:       obj.fecha as string,
      tipo:        obj.tipo as TipoEvento,
      lugar:       (obj.lugar as string).trim(),
      imagen:      (obj.imagen as string).trim(),
    },
  };
}

// ─── Handler principal ───────────────────────────────────────────
export const handler: Handler<APIGatewayProxyEvent, APIGatewayProxyResult> =
  async (event) => {

    const method = event.httpMethod;
    const path   = event.path;

    console.log(`[${new Date().toISOString()}] ${method} ${path}`);

    try {

      // ── GET /eventos ─────────────────────────────────────────
      if (method === "GET" && path === "/events") {
        return ok({
          total: eventos.length,
          eventos,
        });
      }

      // ── POST /eventos ────────────────────────────────────────
      if (method === "POST" && path === "/events") {

        if (!event.body) {
          return error("El cuerpo de la solicitud es requerido", 400);
        }

        let payload: unknown;
        try {
          payload = JSON.parse(event.body);
        } catch {
          return error("El cuerpo no es un JSON válido", 400);
        }

        const resultado = validarEvento(payload);
        if (!resultado.ok) {
          return error(resultado.mensaje, 400);
        }

        const nuevoEvento: Evento = {
          id: Date.now(),
          ...resultado.data,
          createdAt: new Date().toISOString(),
        };

        eventos.push(nuevoEvento);

        return ok({
          mensaje: "Evento creado correctamente",
          evento: nuevoEvento,
        }, 201);
      }

      // ── Ruta no encontrada ───────────────────────────────────
      return error(`Ruta no encontrada: ${method} ${path}`, 404);

    } catch (err) {
      console.error("Error interno:", err);
      return error("Error interno del servidor", 500);
    }
  };