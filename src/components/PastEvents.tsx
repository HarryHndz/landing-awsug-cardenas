import { CalendarRange } from 'lucide-react'
import {
  pastEvents as pastEventsList,
  type PastEvent as PastEventType,
} from '../data/site'

function PastEventCard({ event }: { event: PastEventType }) {
  return (
    <li className="past-card">
      {event.imageSrc ? (
        <img
          className="past-card__img"
          src={event.imageSrc}
          alt=""
          width={400}
          height={240}
          loading="lazy"
        />
      ) : (
        <div className="past-card__placeholder" aria-hidden />
      )}
      <div className="past-card__body">
        <span className="past-card__date">{event.dateLabel}</span>
        <h4>{event.title}</h4>
        {event.summary ? <p>{event.summary}</p> : null}
        {event.href ? (
          <a className="past-card__link" href={event.href} target="_blank" rel="noreferrer">
            Ver detalles
          </a>
        ) : null}
      </div>
    </li>
  )
}

export function PastEvents() {
  const hasPast = pastEventsList.length > 0

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

        {!hasPast ? (
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
            {pastEventsList.map((e) => (
              <PastEventCard key={e.id} event={e} />
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
