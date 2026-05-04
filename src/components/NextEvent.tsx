import { CalendarDays, Clock, ExternalLink, MapPin, Users } from 'lucide-react'
import { mapSearchUrl, upcomingEvent } from '../data/site'

function formatVerboseRange(startIso: string, endIso: string) {
  const start = new Date(startIso)
  const end = new Date(endIso)
  const long = new Intl.DateTimeFormat('es-MX', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'America/Mexico_City',
  }).format(start)
  const hm = new Intl.DateTimeFormat('es-MX', {
    hour: 'numeric',
    minute: '2-digit',
    timeZoneName: 'shortGeneric',
    timeZone: 'America/Mexico_City',
  })
  const timeLine = `${hm.format(start)} — ${hm.format(end)}`
  return { long, timeLine }
}

export function NextEvent() {
  const { long, timeLine } = formatVerboseRange(
    upcomingEvent.startIso,
    upcomingEvent.endIso,
  )

  return (
    <section
      id="eventos"
      className="next-event section-gap"
      aria-labelledby="next-event-heading"
    >
      <div className="section-inner">
        <p className="section-kicker">Próximo encuentro presencial</p>
        <h2 id="next-event-heading">Evento inaugural destacado</h2>
        <p className="section-lead">
          Nuestra primera sesión será el punto de partida oficial del grupo en Meetup —
          ¡reserva lugar y llega puntual para conocer propósitos, ritmo y equipo!
        </p>

        <article className="event-spotlight">
          <div className="event-spotlight__media">
            <img
              src={upcomingEvent.imageSlides}
              alt=""
              width={940}
              height={530}
              loading="lazy"
            />
            <span className="event-spotlight__badge">{upcomingEvent.badge}</span>
          </div>

          <div className="event-spotlight__body">
            <h3 className="event-spotlight__title">{upcomingEvent.title}</h3>
            <ul className="event-meta">
              <li className="event-meta__item">
                <CalendarDays size={20} aria-hidden strokeWidth={2} />
                <div>
                  <span className="event-meta__label">Fecha</span>
                  <span className="event-meta__value">{long}</span>
                </div>
              </li>
              <li className="event-meta__item">
                <Clock size={20} aria-hidden strokeWidth={2} />
                <div>
                  <span className="event-meta__label">Horario</span>
                  <span className="event-meta__value">{timeLine}</span>
                </div>
              </li>
              <li className="event-meta__item">
                <MapPin size={20} aria-hidden strokeWidth={2} />
                <div>
                  <span className="event-meta__label">Lugar</span>
                  <span className="event-meta__value">
                    {upcomingEvent.venueName}
                  </span>
                  <span className="event-meta__sub">{upcomingEvent.venueAddress}</span>
                </div>
              </li>
              <li className="event-meta__item">
                <Users size={20} aria-hidden strokeWidth={2} />
                <div>
                  <span className="event-meta__label">Asistentes</span>
                  <span className="event-meta__value">
                    {upcomingEvent.attendeesApprox}+ confirmados · Meetup
                  </span>
                </div>
              </li>
            </ul>
            <p className="event-spotlight__desc">{upcomingEvent.description}</p>
            <div className="event-spotlight__actions">
              <a
                className="btn btn--primary btn--stretch"
                href={upcomingEvent.slugUrl}
                target="_blank"
                rel="noreferrer"
              >
                Reservar mi lugar{' '}
                <ExternalLink className="btn__suffix" size={18} aria-hidden strokeWidth={2.3} />
              </a>
              <a className="btn btn--outline" href={mapSearchUrl} target="_blank" rel="noreferrer">
                Ver en mapa{' '}
                <ExternalLink className="btn__suffix" size={18} aria-hidden strokeWidth={2.3} />
              </a>
            </div>

            <div className="map-card">
              <div>
                <p className="map-card__heading">¿Cómo llegar?</p>
                <p className="map-card__muted">
                  {upcomingEvent.venueAddress}
                </p>
              </div>
              <a className="map-card__link" href={mapSearchUrl} target="_blank" rel="noreferrer">
                Abrir en Google Maps
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
