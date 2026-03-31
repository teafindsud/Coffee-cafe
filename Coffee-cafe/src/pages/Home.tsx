import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import { IconCup, IconCroissant, IconStar, IconClock, IconMapPin } from '../components/Icons'

/* ── Intersection Observer helper ─────────────────────────── */
function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}

/* ── Data ─────────────────────────────────────────────────── */
const bestItems = [
  {
    id: 1,
    name: 'Signature Cappuccino',
    description: 'Velvety espresso crowned with perfectly steamed micro-foam, dusted with premium cacao.',
    price: '₹320',
    tag: 'Best Seller',
    image: '/cappuccino.png',
  },
  {
    id: 2,
    name: 'Butter Croissant',
    description: "Flaky, golden layers of pure French-style pastry made fresh every morning.",
    price: '₹180',
    tag: 'Bakery Favourite',
    image: '/croissant.png',
  },
  {
    id: 3,
    name: 'Caramel Cloud Latte',
    description: 'Silky espresso over oat milk, finished with house-made salted caramel drizzle.',
    price: '₹380',
    tag: 'Fan Favourite',
    image: '/latte.png',
  },
  {
    id: 4,
    name: 'Artisan Bakery Box',
    description: 'Curated selection of our finest pastries — perfect for sharing or indulging solo.',
    price: '₹650',
    tag: "Chef's Pick",
    image: '/bakery.png',
  },
]

const testimonials = [
  {
    id: 1,
    name: 'Priya Mehta',
    role: 'Food Blogger, Mumbai',
    text: 'Teafindss is simply the best cafe experience I\'ve had in the city. The cappuccino is life-changing and the ambiance is absolutely stunning.',
    rating: 5,
    avatar: 'PM',
  },
  {
    id: 2,
    name: 'Arjun Sharma',
    role: 'Architect, Pune',
    text: 'I work from Teafindss at least three times a week. The coffee is consistently exceptional, the space is calming, and the staff remember my order.',
    rating: 5,
    avatar: 'AS',
  },
  {
    id: 3,
    name: 'Sneha Kapoor',
    role: 'Creative Director, Delhi',
    text: 'Flew to Mumbai just for a meeting and ended up spending my entire free time here. The bakery spread is a work of art.',
    rating: 5,
    avatar: 'SK',
  },
  {
    id: 4,
    name: 'Rahul Verma',
    role: 'Tech Entrepreneur',
    text: 'The perfect blend of premium quality and warm hospitality. Teafindss sets a benchmark for what a modern cafe should be.',
    rating: 5,
    avatar: 'RV',
  },
]

const galleryItems = [
  { label: 'Our Lounge', image: '/gallery-lounge.png' },
  { label: 'The Bar', image: '/gallery-bar.png' },
  { label: 'Outdoor Terrace', image: '/gallery-terrace.png' },
  { label: 'Pastry Display', image: '/gallery-pastries.png' },
  { label: 'Private Dining', image: '/gallery-private.png' },
  { label: 'Barista\'s Den', image: '/gallery-barista.png' },
]

/* ── Stars ────────────────────────────────────────────────── */
function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="stars">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="star">★</span>
      ))}
    </div>
  )
}

/* ── Animated Counter ─────────────────────────────────────── */
function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const { ref, visible } = useReveal()

  useEffect(() => {
    if (!visible) return
    let start = 0
    const step = Math.ceil(to / 60)
    const timer = setInterval(() => {
      start += step
      if (start >= to) { setCount(to); clearInterval(timer) }
      else setCount(start)
    }, 20)
    return () => clearInterval(timer)
  }, [visible, to])

  return <span ref={ref}>{count}{suffix}</span>
}

/* ── Home Page ────────────────────────────────────────────── */
export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { ref: statsRef, visible: statsVisible } = useReveal()
  const { ref: itemsRef, visible: itemsVisible } = useReveal()
  const { ref: storyRef, visible: storyVisible } = useReveal()
  const { ref: testimonRef, visible: testimonialsVisible } = useReveal()
  const { ref: galleryRef, visible: galleryVisible } = useReveal()
  const { ref: ctaRef, visible: ctaVisible } = useReveal()

  // Parallax on hero
  useEffect(() => {
    const onScroll = () => {
      if (heroRef.current) {
        const y = window.scrollY * 0.4
        heroRef.current.style.backgroundPositionY = `calc(50% + ${y}px)`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <main className="home">

      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="hero" ref={heroRef}>
        <div className="hero__bg" />
        <div className="hero__overlay" />
        <div className="hero__content container">
          <div className="hero__eyebrow">
            <span className="eyebrow">Est. 2018 · Mumbai, India</span>
          </div>
          <h1 className="hero__title heading-xl">
            Where Coffee<br />
            <em>Meets Craft</em>
          </h1>
          <p className="hero__subtitle">
            Experience the art of precision brewing, artisan baking<br className="hero__br" />
            and an ambiance that inspires — at Teafindss.
          </p>
          <div className="hero__actions">
            <Link to="/menu" className="btn btn-primary">Explore Menu</Link>
            <Link to="/booking" className="btn btn-secondary">Reserve a Table</Link>
          </div>
          <div className="hero__badges">
            <div className="hero__badge"><IconCup size={14} /> 50+ Coffee Varieties</div>
            <div className="hero__badge"><IconCroissant size={14} /> Freshly Baked Daily</div>
            <div className="hero__badge"><IconStar size={13} /> 4.9 Rating</div>
          </div>
        </div>
        <div className="hero__scroll-indicator">
          <span>Scroll to explore</span>
          <div className="hero__scroll-line" />
        </div>
      </section>

      {/* ── Stats Bar ──────────────────────────────────────── */}
      <section className="stats" ref={statsRef}>
        <div className="container stats__grid">
          {[
            { value: 50, suffix: '+', label: 'Coffee Varieties' },
            { value: 6, suffix: '', label: 'Years of Excellence' },
            { value: 12000, suffix: '+', label: 'Happy Customers' },
            { value: 4, suffix: '.9', label: 'Average Rating' },
          ].map((s, i) => (
            <div key={i} className={`stats__item ${statsVisible ? 'is-visible' : ''}`} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="stats__value">
                {statsVisible ? <Counter to={s.value} suffix={s.suffix} /> : `0${s.suffix}`}
              </div>
              <div className="stats__label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Best Items ─────────────────────────────────────── */}
      <section className="section best-items" ref={itemsRef}>
        <div className="container">
          <div className={`section-header ${itemsVisible ? 'is-visible' : ''}`}>
            <span className="eyebrow">Chef's Selections</span>
            <span className="accent-bar" />
            <h2 className="heading-lg">Our Signature Offerings</h2>
            <p className="body-lg section-header__sub">
              Hand-crafted with the finest ingredients, each item is a celebration of flavour and artistry.
            </p>
          </div>
          <div className="best-items__grid">
            {bestItems.map((item, i) => (
              <div
                key={item.id}
                className={`item-card card ${itemsVisible ? 'is-visible' : ''}`}
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                <div className="item-card__image-wrap">
                  <img src={item.image} alt={item.name} className="item-card__image" />
                  <div className="item-card__image-overlay" />
                  <span className="item-card__tag badge badge-gold">{item.tag}</span>
                </div>
                <div className="item-card__body">
                  <div className="item-card__top">
                    <h3 className="heading-sm item-card__name">{item.name}</h3>
                    <span className="item-card__price">{item.price}</span>
                  </div>
                  <p className="body-sm item-card__desc">{item.description}</p>
                  <Link to="/menu" className="item-card__cta">View in Menu →</Link>
                </div>
              </div>
            ))}
          </div>
          <div className="best-items__footer">
            <Link to="/menu" className="btn btn-outline">View Full Menu</Link>
          </div>
        </div>
      </section>

      {/* ── Story Banner ───────────────────────────────────── */}
      <section className="story-banner" ref={storyRef}>
        <div className={`story-banner__inner container ${storyVisible ? 'is-visible' : ''}`}>
          <div className="story-banner__text">
            <span className="eyebrow" style={{ color: 'var(--gold-light)' }}>Our Philosophy</span>
            <span className="accent-bar" />
            <h2 className="heading-lg" style={{ color: 'var(--cream)' }}>
              More Than Coffee.<br />
              <em style={{ color: 'var(--gold-light)', fontStyle: 'italic' }}>A Way of Life.</em>
            </h2>
            <p className="body-lg" style={{ color: 'rgba(245,236,215,0.8)', marginTop: '16px' }}>
              At Teafindss, we believe every cup is a conversation. We source our beans ethically from single-origin farms, roast them to perfection in small batches, and serve them with the kind of care that only comes from true passion.
            </p>
            <Link to="/about" className="btn btn-primary" style={{ marginTop: '28px' }}>Discover Our Story</Link>
          </div>
          <div className="story-banner__visual">
            <div className="story-banner__circle story-banner__circle--1">
              <img src="/cappuccino.png" alt="Coffee Art" />
            </div>
            <div className="story-banner__circle story-banner__circle--2">
              <img src="/bakery.png" alt="Bakery" />
            </div>
            <div className="story-banner__stats">
              <div className="story-banner__stat">
                <span className="story-banner__stat-num">100%</span>
                <span className="story-banner__stat-label">Arabica Beans</span>
              </div>
              <div className="story-banner__stat">
                <span className="story-banner__stat-num">Farm</span>
                <span className="story-banner__stat-label">to Cup</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Gallery ────────────────────────────────────────── */}
      <section className="section gallery-section" ref={galleryRef}>
        <div className="container">
          <div className={`section-header ${galleryVisible ? 'is-visible' : ''}`}>
            <span className="eyebrow">Inside Teafindss</span>
            <span className="accent-bar" />
            <h2 className="heading-lg">Spaces Made for You</h2>
          </div>
          <div className="gallery-grid">
            {galleryItems.map((g, i) => (
              <div
                key={i}
                className={`gallery-item ${galleryVisible ? 'is-visible' : ''}`}
                style={{
                  transitionDelay: `${i * 0.08}s`,
                  backgroundImage: `url(${g.image})`,
                }}
              >
                <div className="gallery-item__overlay" />
                <span className="gallery-item__label">{g.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ───────────────────────────────────── */}
      <section className="section testimonials" style={{ background: 'var(--ivory-dark)' }} ref={testimonRef}>
        <div className="container">
          <div className={`section-header ${testimonialsVisible ? 'is-visible' : ''}`}>
            <span className="eyebrow">What Guests Say</span>
            <span className="accent-bar" />
            <h2 className="heading-lg">Loved by Coffee Lovers</h2>
          </div>
          <div className="testimonials__grid">
            {testimonials.map((t, i) => (
              <div
                key={t.id}
                className={`testimonial-card card ${testimonialsVisible ? 'is-visible' : ''}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="testimonial-card__top">
                  <Stars count={t.rating} />
                  <span className="testimonial-card__quote">"</span>
                </div>
                <p className="testimonial-card__text">{t.text}</p>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar">{t.avatar}</div>
                  <div>
                    <div className="testimonial-card__name">{t.name}</div>
                    <div className="testimonial-card__role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ─────────────────────────────────────── */}
      <section className="cta-section" ref={ctaRef}>
        <div className={`container cta-section__inner ${ctaVisible ? 'is-visible' : ''}`}>
          <span className="eyebrow" style={{ color: 'var(--gold-light)' }}>Come Visit Us</span>
          <h2 className="heading-lg" style={{ color: 'var(--white)', marginTop: '12px' }}>
            Your Table Awaits
          </h2>
          <p className="body-lg" style={{ color: 'rgba(255,255,255,0.75)', marginTop: '16px', maxWidth: '540px', margin: '16px auto 0' }}>
            Reserve your spot at Teafindss and indulge in an experience crafted just for you. Walk-ins always welcome.
          </p>
          <div className="cta-section__actions">
            <Link to="/booking" className="btn btn-primary">Reserve a Table</Link>
            <Link to="/contact" className="btn btn-secondary">Get In Touch</Link>
          </div>
          <div className="cta-section__hours">
            <span><IconClock size={14} style={{ verticalAlign: 'middle', marginRight: 5 }} /> Mon–Fri: 7am–10pm</span>
            <span className="cta-section__sep">|</span>
            <span>Sat–Sun: 8am–11pm</span>
            <span className="cta-section__sep">|</span>
            <span><IconMapPin size={14} style={{ verticalAlign: 'middle', marginRight: 5 }} /> 42 Brew Street, Mumbai</span>
          </div>
        </div>
      </section>

    </main>
  )
}
