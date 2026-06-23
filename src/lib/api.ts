export type TipoEvento = 'virtual' | 'presencial'

export type Evento = {
  id: number
  titulo: string
  descripcion: string
  fecha: string
  tipo: TipoEvento
  lugar: string
  imagen: string
  createdAt: string
}

export const eventos: Evento[] = [
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
]

/** GET /events → lista de eventos estáticos. */
export async function getEventos(): Promise<Evento[]> {
  return eventos
}
