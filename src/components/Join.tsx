import { ArrowUpRight, CalendarHeart, Cloud } from 'lucide-react'
import { community } from '../data/site'
import { HexPatternDefs } from './HexPattern'
import { IconInstagram } from './icons'

export function Join() {
  const patternId = 'hex-cta-pattern'

  return (
    <section id="unete" className="join section-gap" aria-labelledby="join-heading">
      <div className="join__panel section-inner">
        <div className="join__backdrop" aria-hidden>
          <svg className="join__pattern-svg" preserveAspectRatio="none">
            <HexPatternDefs patternId={patternId} />
            <rect width="100%" height="100%" fill={`url(#${patternId})`} />
          </svg>
          <span className="join__radiant join__radiant--a" />
          <span className="join__radiant join__radiant--b" />
        </div>

        <div className="join__grid">
          <div className="join__copy">
            <Cloud className="join__cloud-badge" aria-hidden strokeWidth={1.4} />
            <h2 id="join-heading">
              Construye el futuro <span className="join__accent">cloud</span> con nosotros
            </h2>
            <p>
              Súmate como miembro oficial en Meetup, activa alertas para los encuentros locales y
              síguenos en Instagram para avisos y material del día a día del grupo.
            </p>
            <div className="join__actions">
              <a className="btn btn--light" href={community.meetupUrl} target="_blank" rel="noreferrer">
                <CalendarHeart className="btn__lead-icon" size={22} aria-hidden strokeWidth={2} />
                Unirse en Meetup
                <ArrowUpRight className="btn__suffix" size={18} aria-hidden strokeWidth={2.3} />
              </a>
              <a className="btn btn--ghost-inverse" href={community.instagramUrl} target="_blank" rel="noreferrer">
                <IconInstagram className="btn__lead-icon" width={22} height={22} aria-hidden />
                Instagram oficial
              </a>
            </div>
          </div>
          <div className="join__poster" aria-hidden>
            <img
              src="/post1-evento.png"
              alt=""
              width={720}
              height={900}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
