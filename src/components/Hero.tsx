import { MapPin } from 'lucide-react'
import { DecorativeCloudOutline } from './icons'
import { HexPatternDefs } from './HexPattern'
import { community } from '../data/site'
import { upcomingEvent } from '../data/site'

export function Hero() {
  const patternId = 'hex-hero-pattern'

  return (
    <section id="top" className="hero" aria-labelledby="hero-heading">
      <svg
        className="hero__hex-layer"
        aria-hidden
      >
        <HexPatternDefs patternId={patternId} />
        <rect width="100%" height="100%" fill={`url(#${patternId})`} className="hero__pattern-fill" />
      </svg>
      <div className="hero__glow hero__glow--one" aria-hidden />
      <div className="hero__glow hero__glow--two" aria-hidden />

      <div className="hero__decor hero__decor--cloud" aria-hidden>
        <DecorativeCloudOutline />
      </div>

      <div className="hero__grid section-inner hero__layout">
        <div className="hero__copy">
          <p className="hero__eyebrow">// Comunidad oficial AWS · Tabasco</p>
          <h1 id="hero-heading" className="hero__title">
            Cloud desde el <span className="hero__title-accent">sureste</span> de México
          </h1>
          <p className="hero__lead">
            {community.displayName} — aprende, colabora y crece junto a la
            comunidad de Amazon Web Services en la región.
          </p>
          <div className="hero__actions">
            <a
              className="btn btn--primary"
              href={upcomingEvent.slugUrl}
              target="_blank"
              rel="noreferrer"
            >
              Asistir al evento inaugural
            </a>
            <a className="btn btn--ghost" href="#comunidad">
              Conocer la comunidad
            </a>
          </div>
          <dl className="hero__stats">
            <div>
              <dt>Miembros</dt>
              <dd>{community.members}+</dd>
              <small>Meetup oficial</small>
            </div>
            <div>
              <dt>Red global AWS UG</dt>
              <dd>{community.globalGroupsApprox}+</dd>
              <small>Parte del ecosistema</small>
            </div>
            <div className="hero__stat-locale">
              <dt>
                <MapPin size={14} aria-hidden strokeWidth={2.4} /> Región base
              </dt>
              <dd>{community.locale}</dd>
              <small>Villahermosa · encuentros presenciales</small>
            </div>
          </dl>
        </div>

        <div className="hero__visual" aria-hidden>
          <figure className="hero__banner-card">
            <img
              className="hero__banner-img"
              src="/banner-aws-user-group.png"
              alt=""
              width={640}
              height={560}
              fetchPriority="high"
            />
          </figure>
          <span className="hero__ribbon" />
          <span className="hero__orb" aria-hidden />
        </div>
      </div>
    </section>
  )
}
