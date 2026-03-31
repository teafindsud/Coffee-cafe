import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Menu', path: '/menu' },
  { label: 'Our Story', path: '/about' },
  { label: 'Reservations', path: '/booking' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${menuOpen ? 'navbar--open' : ''}`}>
        <div className="navbar__inner container">
          {/* Logo */}
          <Link to="/" className="navbar__logo">
            <img src="/logo.png" alt="Teafindss Logo" className="navbar__logo-img" />
            <span className="navbar__logo-text">Teafindss</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="navbar__links">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`navbar__link ${location.pathname === link.path ? 'navbar__link--active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <Link to="/booking" className="btn btn-primary navbar__cta">
            Reserve a Table
          </Link>

          {/* Hamburger */}
          <button
            className={`navbar__hamburger ${menuOpen ? 'is-open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      {/* Mobile Menu — rendered OUTSIDE header so it's a true independent overlay */}
      <div className={`navbar__mobile ${menuOpen ? 'is-open' : ''}`}>
        {navLinks.map(link => (
          <Link
            key={link.path}
            to={link.path}
            className={`navbar__mobile-link ${location.pathname === link.path ? 'is-active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <Link to="/booking" className="btn btn-primary navbar__mobile-cta" onClick={() => setMenuOpen(false)}>
          Reserve a Table
        </Link>
      </div>
    </>
  )
}
