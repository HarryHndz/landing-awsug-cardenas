import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { community } from '../data/site'

const links = [
  { href: '#comunidad', label: 'Comunidad' },
  { href: '#eventos', label: 'Eventos' },
  { href: '#lideres', label: 'Líderes' },
  { href: '#unete', label: 'Únete' },
] as const

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onEscape = (e: KeyboardEvent) =>
      e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onEscape)
    return () => window.removeEventListener('keydown', onEscape)
  }, [])

  return (
    <>
      <header
        className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}
      >
        <div className="site-header__inner">
          <a className="site-header__brand" href="#top">
            <img
              className="site-header__logo"
              src="/aws.cardenas-logo.png"
              width={48}
              height={48}
              alt=""
            />
            <span className="site-header__wordmark">{community.displayName}</span>
          </a>
          <div className="site-header__actions">
            <nav className="site-nav" aria-label="Secciones">
              <button
                type="button"
                className="site-nav__toggle"
                aria-expanded={open}
                aria-controls="site-nav-links"
                onClick={() => setOpen((o) => !o)}
              >
                {open ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
                <span className="visually-hidden">Menú</span>
              </button>
              <ul
                id="site-nav-links"
                className={`site-nav__links ${open ? 'site-nav__links--open' : ''}`}
              >
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="site-nav__link"
                      onClick={() => setOpen(false)}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <a className="btn btn--primary site-header__cta" href={community.meetupUrl} target="_blank" rel="noreferrer">
              Únete en Meetup
            </a>
          </div>
        </div>
      </header>
      <div
        className={`site-nav__backdrop ${open ? 'site-nav__backdrop--visible' : ''}`}
        aria-hidden={!open}
        onClick={() => setOpen(false)}
      />
    </>
  )
}
