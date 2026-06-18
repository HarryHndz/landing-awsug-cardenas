// ─────────────────────────────────────────────────────────────────
// Cliente HTTP de la API de eventos (API Gateway + Lambda)
// La URL base se configura en .env → VITE_API_URL
// ─────────────────────────────────────────────────────────────────

const API_URL = import.meta.env.VITE_API_URL ?? ''

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

/** Campos que el formulario envía al crear un evento (sin id ni createdAt). */
export type EventoInput = Omit<Evento, 'id' | 'createdAt'>

function ensureConfigured() {
  if (!API_URL) {
    throw new Error(
      'Falta configurar VITE_API_URL en el archivo .env (URL invoke de API Gateway).',
    )
  }
}

/** GET /events → lista de eventos. */
export async function getEventos(): Promise<Evento[]> {
  ensureConfigured()
  const res = await fetch(`${API_URL}/events`)
  if (!res.ok) {
    throw new Error(`No se pudieron cargar los eventos (HTTP ${res.status}).`)
  }
  const data = (await res.json()) as { total: number; eventos: Evento[] }
  return data.eventos ?? []
}

/** POST /events → crea un evento y devuelve el creado. */
export async function createEvento(input: EventoInput): Promise<Evento> {
  ensureConfigured()
  const res = await fetch(`${API_URL}/events`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(input),
  })
  const data = (await res.json().catch(() => null)) as
    | { evento?: Evento; error?: string }
    | null

  if (!res.ok) {
    throw new Error(data?.error ?? `No se pudo crear el evento (HTTP ${res.status}).`)
  }
  if (!data?.evento) {
    throw new Error('La API no devolvió el evento creado.')
  }
  return data.evento
}
