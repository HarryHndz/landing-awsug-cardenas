import { Compass, Cpu, Rocket } from 'lucide-react'
import { DecorativeCacaoOutline, DecorativeSugarcaneOutline } from './icons'
import { aboutCopy } from '../data/site'

const pillars = [
  {
    title: 'Aprende',
    body:
      'Charlas y talleres prácticos para ir de fundamentos AWS a proyectos más avanzados, con foco aplicado.',
    Icon: Cpu,
  },
  {
    title: 'Colabora',
    body:
      'Conecta con estudiantes, builders y especialistas locales que comparten retos cloud reales.',
    Icon: Compass,
  },
  {
    title: 'Crece',
    body:
      'Fortalece tu portafolio, prepárate para certificaciones y descubre rutas dentro del ecosistema AWS.',
    Icon: Rocket,
  },
]

export function About() {
  return (
    <section
      id="comunidad"
      className="about section-gap"
      aria-labelledby="about-heading"
    >
      <div className="section-inner about__layout">
        <div className="about__lead">
          <p className="section-kicker">Sobre nosotras y nosotros</p>
          <h2 id="about-heading">Comunidad y propósito</h2>
          <p className="about__text">{aboutCopy}</p>

          <ul className="about__pillars">
            {pillars.map(({ title, body, Icon: PillIcon }) => (
              <li key={title} className="about-card">
                <PillIcon className="about-card__icon" size={24} aria-hidden strokeWidth={2} />
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <aside className="identity-card" aria-label="Identidad regional">
          <div className="identity-card__art" aria-hidden>
            <DecorativeCacaoOutline className="identity-card__coco" />
            <DecorativeSugarcaneOutline className="identity-card__can" />
          </div>
          <h3>Vaina, caña y nube</h3>
          <p>
            Nuestro emblema mezcla la herencia agrícola de Cárdenas y Tabasco
            —cacao y caña— con la infraestructura que impulsa el internet
            actual. Una comunidad con raíz local y mirada cloud.
          </p>
          <p className="identity-card__tag">Región petrolera + cacao + innovación práctica.</p>
        </aside>
      </div>
    </section>
  )
}
