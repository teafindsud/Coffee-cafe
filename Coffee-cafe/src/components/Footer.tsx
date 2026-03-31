import { Link } from 'react-router-dom'
import './Footer.css'
import {
  IconMapPin, IconClock, IconPhone, IconMail,
  IconInstagram, IconFacebook, IconTwitter, IconPinterest,
} from './Icons'

export default function Footer() {
  const year = new Date().getFullYear()

  const socials = [
    { label: 'Instagram', Icon: IconInstagram },
    { label: 'Facebook',  Icon: IconFacebook  },
    { label: 'Twitter',   Icon: IconTwitter   },
    { label: 'Pinterest', Icon: IconPinterest },
  ]

  const contactItems = [
    { Icon: IconMapPin, text: <>42 Brew Street, Colaba,<br />Mumbai, Maharashtra 400001</> },
    { Icon: IconClock,  text: <>Mon–Fri: 7am – 10pm<br />Sat–Sun: 8am – 11pm</> },
    { Icon: IconPhone,  text: <a href="tel:+912234567890" className="footer__link">+91 22 3456 7890</a> },
    { Icon: IconMail,   text: <a href="mailto:hello@teafindss.com" className="footer__link">hello@teafindss.com</a> },
  ]

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container footer__grid">

          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <img src="/logo.png" alt="Teafindss" className="footer__logo-img" />
              <span className="footer__logo-text">Teafindss</span>
            </div>
            <p className="footer__tagline">
              Where every sip tells a story.<br />
              Premium coffee &amp; artisan bakery since 2018.
            </p>
            <div className="footer__socials">
              {socials.map(({ label, Icon }) => (
                <a key={label} href="#" className="footer__social" aria-label={label}>
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div className="footer__col">
            <h4 className="footer__col-title">Explore</h4>
            <ul className="footer__links">
              {[
                { label: 'Home',         path: '/'        },
                { label: 'Our Menu',     path: '/menu'    },
                { label: 'Our Story',    path: '/about'   },
                { label: 'Reservations', path: '/booking' },
                { label: 'Contact',      path: '/contact' },
              ].map(l => (
                <li key={l.path}>
                  <Link to={l.path} className="footer__link">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu Categories */}
          <div className="footer__col">
            <h4 className="footer__col-title">On The Menu</h4>
            <ul className="footer__links">
              {[
                'Espresso & Coffee',
                'Cold Brew & Iced',
                'Speciality Lattes',
                'Pastries & Cakes',
                'Sandwiches & More',
                'Seasonal Specials',
              ].map(item => (
                <li key={item}>
                  <Link to="/menu" className="footer__link">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h4 className="footer__col-title">Visit Us</h4>
            <div className="footer__contact-items">
              {contactItems.map(({ Icon, text }, i) => (
                <div key={i} className="footer__contact-item">
                  <span className="footer__contact-icon">
                    <Icon size={15} />
                  </span>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copy">© {year} Teafindss. All rights reserved.</p>
          <div className="footer__legal">
            <a href="#" className="footer__legal-link">Privacy Policy</a>
            <a href="#" className="footer__legal-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
