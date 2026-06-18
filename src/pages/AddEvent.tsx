import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2, PlusCircle } from 'lucide-react'
import { createEvento, type EventoInput, type Evento } from '../lib/api'

const valoresIniciales: EventoInput = {
  titulo: '',
  descripcion: '',
  fecha: '',
  tipo: 'presencial',
  lugar: '',
  imagen: '',
}

export function AddEvent() {
  const [form, setForm] = useState<EventoInput>(valoresIniciales)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [creado, setCreado] = useState<Evento | null>(null)

  function update<K extends keyof EventoInput>(campo: K, valor: EventoInput[K]) {
    setForm((prev) => ({ ...prev, [campo]: valor }))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)

    const faltantes = (Object.keys(valoresIniciales) as (keyof EventoInput)[]).filter(
      (k) => String(form[k]).trim() === '',
    )
    if (faltantes.length > 0) {
      setError('Por favor completa todos los campos.')
      return
    }

    setSubmitting(true)
    try {
      const evento = await createEvento({
        ...form,
        titulo: form.titulo.trim(),
        descripcion: form.descripcion.trim(),
        lugar: form.lugar.trim(),
        imagen: form.imagen.trim(),
      })
      setCreado(evento)
      setForm(valoresIniciales)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'No se pudo crear el evento.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main>
      <section className="add-event section-gap" aria-labelledby="add-event-heading">
        <div className="section-inner section-inner--narrow">
          <p className="section-kicker">Panel de la comunidad</p>
          <h1 id="add-event-heading">Agregar un nuevo evento</h1>
          <p className="section-lead">
            Registra una charla o taller. Aparecerá en la sección de eventos del sitio.
          </p>

          {creado ? (
            <div className="form-success" role="status">
              <CheckCircle2 size={22} aria-hidden strokeWidth={2} />
              <div>
                <p className="form-success__title">¡Evento creado correctamente!</p>
                <p className="form-success__body">
                  «{creado.titulo}» ya quedó registrado.{' '}
                  <Link to="/#past-events">Verlo en eventos pasados</Link> o{' '}
                  <button
                    type="button"
                    className="link-button"
                    onClick={() => setCreado(null)}
                  >
                    agregar otro
                  </button>
                  .
                </p>
              </div>
            </div>
          ) : (
            <form className="form" onSubmit={handleSubmit} noValidate>
              <div className="form__field">
                <label htmlFor="titulo">Título</label>
                <input
                  id="titulo"
                  type="text"
                  value={form.titulo}
                  onChange={(e) => update('titulo', e.target.value)}
                  placeholder="Ej. Introducción a AWS Lambda"
                  required
                />
              </div>

              <div className="form__field">
                <label htmlFor="descripcion">Descripción</label>
                <textarea
                  id="descripcion"
                  rows={4}
                  value={form.descripcion}
                  onChange={(e) => update('descripcion', e.target.value)}
                  placeholder="¿De qué tratará el evento?"
                  required
                />
              </div>

              <div className="form__grid">
                <div className="form__field">
                  <label htmlFor="fecha">Fecha</label>
                  <input
                    id="fecha"
                    type="date"
                    value={form.fecha}
                    onChange={(e) => update('fecha', e.target.value)}
                    required
                  />
                </div>

                <div className="form__field">
                  <label htmlFor="tipo">Tipo</label>
                  <select
                    id="tipo"
                    value={form.tipo}
                    onChange={(e) => update('tipo', e.target.value as EventoInput['tipo'])}
                    required
                  >
                    <option value="presencial">Presencial</option>
                    <option value="virtual">Virtual</option>
                  </select>
                </div>
              </div>

              <div className="form__field">
                <label htmlFor="lugar">Lugar</label>
                <input
                  id="lugar"
                  type="text"
                  value={form.lugar}
                  onChange={(e) => update('lugar', e.target.value)}
                  placeholder="Ej. Villahermosa, Tabasco u Online (Zoom)"
                  required
                />
              </div>

              <div className="form__field">
                <label htmlFor="imagen">Imagen (URL o nombre de archivo)</label>
                <input
                  id="imagen"
                  type="text"
                  value={form.imagen}
                  onChange={(e) => update('imagen', e.target.value)}
                  placeholder="Ej. https://… o evento-03.jpg"
                  required
                />
              </div>

              {error ? (
                <p className="form-error" role="alert">
                  {error}
                </p>
              ) : null}

              <div className="form__actions">
                <button
                  type="submit"
                  className="btn btn--primary"
                  disabled={submitting}
                >
                  {submitting ? 'Guardando…' : 'Crear evento'}{' '}
                  <PlusCircle className="btn__suffix" size={18} aria-hidden strokeWidth={2.3} />
                </button>
                <Link className="btn btn--outline" to="/">
                  Cancelar
                </Link>
              </div>
            </form>
          )}
        </div>
      </section>
    </main>
  )
}
