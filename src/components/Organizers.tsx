import { ExternalLink } from 'lucide-react'
import { community, organizers } from '../data/site'

export function Organizers() {
  return (
    <section id="lideres" className="organizers section-gap" aria-labelledby="organizers-heading">
      <div className="section-inner">
        <p className="section-kicker">El equipo inicial</p>
        <h2 id="organizers-heading">Líderes de la comunidad</h2>
        <p className="section-lead">
          Host y organizadores anunciados públicamente en Meetup; sumamos más perfiles cuando se confirmen.
        </p>

        <ul className="organizer-grid">
          {organizers.map((member) => (
            <li
              key={`${member.name}-${member.role}`}
              className={`organizer-card ${member.featured ? 'organizer-card--featured' : ''}`}
            >
              <div className="organizer-card__badge" aria-hidden>
                <span>{member.initials}</span>
              </div>
              <div className="organizer-card__content">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
              {member.featured ? (
                <a className="organizer-card__meetup-link" href={community.meetupUrl} target="_blank" rel="noreferrer">
                  Perfil Meetup{' '}
                  <ExternalLink size={16} aria-hidden strokeWidth={2.4} />
                </a>
              ) : (
                <span className="organizer-card__note">Nombre oficial próximamente</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
