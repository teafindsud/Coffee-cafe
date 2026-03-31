import { useEffect, useRef, useState } from 'react'
import './About.css'
import { IconLeaf, IconFlame, IconBrush, IconEarth } from '../components/Icons'

function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } }, { threshold })
    obs.observe(el); return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}

const values = [
  { Icon: IconLeaf,  title: 'Ethically Sourced',   desc: 'We partner directly with single-origin farms in Ethiopia, Colombia, and Coorg — fair trade, always.' },
  { Icon: IconFlame, title: 'Small-Batch Roasted',  desc: 'Every bean is roasted in-house weekly in small batches to guarantee peak freshness and flavour.' },
  { Icon: IconBrush, title: 'Crafted with Care',    desc: 'From barista training to plating our pastries, artistry is at the heart of everything we do.' },
  { Icon: IconEarth, title: 'Sustainably Minded',   desc: 'Compostable packaging, zero-waste kitchens, and community-first sourcing guide our operations.' },
]

const timeline = [
  { year: '2018', event: 'Teafindss opens its first location on Brew Street, Mumbai with a vision of accessible luxury.' },
  { year: '2019', event: 'In-house roastery established. We begin sourcing directly from Ethiopian Yirgacheffe farms.' },
  { year: '2020', event: 'Artisan bakery launched. Chef Aditi Rao joins as Head Pastry Chef from Paris.' },
  { year: '2021', event: 'Awarded "Best Independent Cafe" by Mumbai Food Awards for two consecutive years.' },
  { year: '2022', event: 'Extended to include a private dining room for events, launches & curated coffee experiences.' },
  { year: '2024', event: 'Teafindss reaches 12,000+ verified reviews with an average 4.9 across platforms.' },
]

const team = [
  { name: 'Vikram Nair',   role: 'Founder & Head Barista',     initials: 'VN', bio: 'Trained at World Barista Championship events and obsessed with extraction science.' },
  { name: 'Aditi Rao',     role: 'Head Pastry Chef',           initials: 'AR', bio: 'Pastry Arts graduate from Le Cordon Bleu Paris. She turns butter into poetry.' },
  { name: 'Sahil Kapoor',  role: 'Coffee Sourcing Lead',       initials: 'SK', bio: 'Travels the world, cup in hand, to find the perfect single-origin for your morning.' },
  { name: 'Meera Joshi',   role: 'Guest Experience Director',  initials: 'MJ', bio: 'Hospitality veteran who believes every guest deserves a Michelin-star welcome.' },
]

export default function About() {
  const { ref: heroRef, visible: heroVisible } = useReveal()
  const { ref: storyRef, visible: storyVisible } = useReveal()
  const { ref: valRef, visible: valVisible } = useReveal()
  const { ref: timeRef, visible: timeVisible } = useReveal()
  const { ref: teamRef, visible: teamVisible } = useReveal()

  return (
    <main className="about-page">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="about-hero">
        <div className="about-hero__bg" />
        <div className="about-hero__overlay" />
        <div className="container about-hero__content" ref={heroRef}>
          <span className={`eyebrow ${heroVisible ? 'anim-fadein' : ''}`} style={{ color: 'var(--gold-light)' }}>Who We Are</span>
          <h1 className={`heading-xl about-hero__title ${heroVisible ? 'anim-fadein' : ''}`}>
            Born from a Passion<br />
            <em>for the Perfect Cup</em>
          </h1>
          <p className={`body-lg about-hero__sub ${heroVisible ? 'anim-fadein' : ''}`}>
            Teafindss is more than a cafe. It's a ritual, a community, and a relentless pursuit of extraordinary coffee.
          </p>
        </div>
        <div className="about-hero__scroll-hint">
          <div className="about-hero__scroll-bar" />
        </div>
      </section>

      {/* ── Origin Story ──────────────────────────────────────── */}
      <section className="section about-story" ref={storyRef}>
        <div className="container">
          <div className={`about-story__inner ${storyVisible ? 'is-visible' : ''}`}>
            <div className="about-story__visual">
              <div className="about-story__img-main">
                <img src="/cappuccino.png" alt="Signature Cappuccino" />
                <div className="about-story__img-badge">
                  <span className="about-story__badge-num">6</span>
                  <span className="about-story__badge-label">Years of Excellence</span>
                </div>
              </div>
              <div className="about-story__img-accent">
                <img src="/bakery.png" alt="Artisan Bakery" />
              </div>
            </div>
            <div className="about-story__text">
              <span className="eyebrow">Our Origin Story</span>
              <span className="accent-bar" />
              <h2 className="heading-lg">From a Small Dream to Mumbai's Finest</h2>
              <p className="body-lg" style={{ marginTop: '20px', color: 'var(--text-mid)', lineHeight: 1.8 }}>
                In 2018, founder <strong>Vikram Nair</strong> returned from a coffee pilgrimage through Ethiopia and Colombia with nothing but a duffel bag of single-origin beans and an unwavering conviction — that Indian coffee lovers deserved a world-class experience without flying to Vienna.
              </p>
              <p className="body-md" style={{ marginTop: '16px', color: 'var(--text-light)', lineHeight: 1.8 }}>
                Starting with a modest 400 sq ft space on Brew Street, Teafindss quickly became a destination. Today, our team of 24 passionate individuals serves over 400 cups a day, bakes fresh every morning and has earned the loyalty of thousands of coffee lovers across Mumbai.
              </p>
              <p className="body-md" style={{ marginTop: '16px', color: 'var(--text-light)', fontStyle: 'italic', fontFamily: 'var(--ff-display)', fontSize: '1.05rem' }}>
                "We don't just serve coffee. We curate moments that people carry with them all day."
                <br /><strong style={{ color: 'var(--gold)', fontStyle: 'normal', fontSize: '0.85rem' }}>— Vikram Nair, Founder</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ────────────────────────────────────────────── */}
      <section className="section about-values" style={{ background: 'var(--espresso)' }} ref={valRef}>
        <div className="container">
          <div className={`section-header-dark ${valVisible ? 'is-visible' : ''}`}>
            <span className="eyebrow" style={{ color: 'var(--gold-light)' }}>What We Stand For</span>
            <span className="accent-bar" style={{ margin: '12px auto' }} />
            <h2 className="heading-lg" style={{ color: 'var(--cream)' }}>Our Guiding Principles</h2>
          </div>
          <div className="values-grid">
            {values.map(({ Icon, title, desc }, i) => (
              <div
                key={i}
                className={`value-card ${valVisible ? 'is-visible' : ''}`}
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                <div className="value-card__icon">
                  <Icon size={28} />
                </div>
                <h3 className="heading-sm value-card__title">{title}</h3>
                <p className="body-sm value-card__desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ──────────────────────────────────────────── */}
      <section className="section about-timeline" ref={timeRef}>
        <div className="container">
          <div className={`section-header ${timeVisible ? 'is-visible' : ''}`}>
            <span className="eyebrow">Our Journey</span>
            <span className="accent-bar" />
            <h2 className="heading-lg">Six Years in the Making</h2>
          </div>
          <div className="timeline">
            {timeline.map((t, i) => (
              <div
                key={i}
                className={`timeline-item ${i % 2 === 0 ? 'timeline-item--left' : 'timeline-item--right'} ${timeVisible ? 'is-visible' : ''}`}
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                <div className="timeline-item__content">
                  <div className="timeline-item__year">{t.year}</div>
                  <p className="timeline-item__text">{t.event}</p>
                </div>
                <div className="timeline-item__dot" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ──────────────────────────────────────────────── */}
      <section className="section about-team" style={{ background: 'var(--ivory-dark)' }} ref={teamRef}>
        <div className="container">
          <div className={`section-header ${teamVisible ? 'is-visible' : ''}`}>
            <span className="eyebrow">Meet the Team</span>
            <span className="accent-bar" />
            <h2 className="heading-lg">The People Behind Your Cup</h2>
          </div>
          <div className="team-grid">
            {team.map((m, i) => (
              <div
                key={i}
                className={`team-card card ${teamVisible ? 'is-visible' : ''}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="team-card__avatar">{m.initials}</div>
                <h3 className="heading-sm team-card__name">{m.name}</h3>
                <p className="team-card__role eyebrow" style={{ marginBottom: '12px', textTransform: 'none', letterSpacing: '0.03em' }}>{m.role}</p>
                <p className="body-sm team-card__bio" style={{ color: 'var(--text-light)', lineHeight: 1.6 }}>{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
