import { CalendarRange, MapPin } from 'lucide-react'
import { useEffect, useState } from 'react'
import { getEventos, type Evento } from '../lib/api'

const fechaLarga = new Intl.DateTimeFormat('es-MX', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
})

function formatFecha(fecha: string) {
  const d = new Date(fecha)
  return isNaN(d.getTime()) ? fecha : fechaLarga.format(d)
}

function PastEventCard({ event }: { event: Evento }) {
  const [imgError, setImgError] = useState(false)
  const showImg = Boolean(event.imagen) && !imgError

  return (
    <li className="past-card">
      {showImg ? (
        <img
          className="past-card__img"
          src={event.imagen}
          alt=""
          width={400}
          height={240}
          loading="lazy"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="past-card__placeholder" aria-hidden />
      )}
      <div className="past-card__body">
        <div className="past-card__meta">
          <span className="past-card__date">{formatFecha(event.fecha)}</span>
          <span className={`past-card__tag past-card__tag--${event.tipo}`}>
            {event.tipo === 'virtual' ? 'Virtual' : 'Presencial'}
          </span>
        </div>
        <h4>{event.titulo}</h4>
        {event.descripcion ? <p>{event.descripcion}</p> : null}
        {event.lugar ? (
          <p className="past-card__place">
            <MapPin size={16} aria-hidden strokeWidth={2} />
            <span>{event.lugar}</span>
          </p>
        ) : null}
      </div>
    </li>
  )
}

export function PastEvents() {
  const [eventos, setEventos] = useState<Evento[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let activo = true

    async function cargar() {
      setLoading(true)
      setError(null)
      try {
        const data = await getEventos()
        if (activo) setEventos(data)
      } catch (err) {
        if (activo) setError(err instanceof Error ? err.message : 'Error desconocido')
      } finally {
        if (activo) setLoading(false)
      }
    }

    cargar()
    return () => {
      activo = false
    }
  }, [])

  const hasPast = eventos.length > 0

  return (
    <section
      id="past-events"
      className="past-events section-gap section-surface"
      aria-labelledby="past-events-heading"
    >
      <div className="section-inner">
        <div className="past-events__head">
          <div>
            <p className="section-kicker">Memoria de la comunidad</p>
            <h2 id="past-events-heading">Eventos pasados</h2>
            <p className="section-lead">
              Cada encuentro será documentado con visuales, temas tratados y
              grabaciones públicas cuando estén disponibles.
            </p>
          </div>
          <div className="past-events__icon" aria-hidden>
            <CalendarRange size={72} strokeWidth={1} />
          </div>
        </div>

        {loading ? (
          <p className="events-status" role="status">
            Cargando eventos…
          </p>
        ) : error ? (
          <div className="events-status events-status--error" role="alert">
            <p>No se pudieron cargar los eventos.</p>
            <p className="events-status__detail">{error}</p>
          </div>
        ) : !hasPast ? (
          <div className="empty-state">
            <p className="empty-state__title">Todavía no hay historia que contar...</p>
            <p className="empty-state__body">
              Aún no registramos encuentros cerrados públicamente — nuestra historia
              comienza el <strong>6 de mayo de 2026</strong>. Vuelve pronto para
              revivir cada charla desde aquí mismo.
            </p>
          </div>
        ) : (
          <ul className="past-grid">
            {eventos.map((e) => (
              <PastEventCard key={e.id} event={e} />
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
