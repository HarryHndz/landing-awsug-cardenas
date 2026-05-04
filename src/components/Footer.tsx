import { ExternalLink } from 'lucide-react'
import { IconInstagram } from './icons'
import { community } from '../data/site'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="section-inner site-footer__grid">
        <div className="site-footer__brand">
          <img
            src="/aws.cardenas-logo.png"
            width={54}
            height={54}
            alt=""
          />
          <div>
            <strong>{community.displayName}</strong>
            <p>Hablemos infraestructura, identidad regional y práctica aplicada.</p>
          </div>
        </div>

        <div className="site-footer__cols">
          <div>
            <p className="site-footer__label">Enlaces</p>
            <nav aria-label="Pie de página">
              <ul className="site-footer__links">
                <li><a href="#top">Portada</a></li>
                <li><a href="#eventos">Eventos</a></li>
                <li><a href="#lideres">Líderes</a></li>
                <li>
                  <a href={community.meetupUrl} target="_blank" rel="noreferrer">
                    Meetup
                    <ExternalLink size={14} aria-hidden strokeWidth={2} className="site-footer__ext" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <p className="site-footer__label">Red social</p>
            <ul className="site-footer__links">
              <li>
                <a href={community.instagramUrl} target="_blank" rel="noreferrer">
                  <IconInstagram width={18} height={18} aria-hidden className="site-footer__soc" /> Instagram oficial
                  <ExternalLink size={14} aria-hidden strokeWidth={2} className="site-footer__ext" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="site-footer__disclaimer-wrap">
        <div className="section-inner">
          <p className="site-footer__disclaimer">
            AWS User Group Cárdenas es una comunidad independiente. Las marcas comerciales y logotipos de
            AWS y Amazon Web Services son propiedad de sus respectivas titulares. Este sitio no está
            afiliado oficialmente ni patrocinado por Amazon Web Services Inc.
          </p>
          <p className="site-footer__legal">© {year} AWS User Group Cárdenas. Hecho con comunidad desde Tabasco.</p>
        </div>
      </div>
    </footer>
  )
}
