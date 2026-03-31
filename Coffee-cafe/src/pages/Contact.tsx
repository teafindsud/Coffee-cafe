import { useState, FormEvent } from 'react'
import './Contact.css'
import { IconMapPin, IconClock, IconPhone, IconGlobe, IconMail, IconCheckCircle } from '../components/Icons'

interface ContactForm {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

const subjects = [
  '', 'General Enquiry', 'Reservation Help', 'Private Events', 'Feedback', 'Partnership / Collaboration', 'Press & Media', 'Other',
]

const initialContact: ContactForm = { name: '', email: '', phone: '', subject: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState<ContactForm>(initialContact)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<ContactForm>>({})

  const validate = () => {
    const e: Partial<ContactForm> = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required'
    if (!form.message.trim() || form.message.length < 10) e.message = 'Please write at least 10 characters'
    return e
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof ContactForm]) setErrors(prev => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setSubmitted(true)
  }

  const contactCards = [
    { Icon: IconMapPin, title: 'Our Location',    lines: ['42 Brew Street, Colaba', 'Mumbai, Maharashtra 400001', 'India'] },
    { Icon: IconClock,  title: 'Opening Hours',   lines: ['Monday – Friday: 7 AM – 10 PM', 'Saturday – Sunday: 8 AM – 11 PM', 'Public Holidays: 9 AM – 9 PM'] },
    { Icon: IconPhone,  title: 'Phone & Email',   lines: ['+91 22 3456 7890', 'hello@teafindss.com', 'events@teafindss.com'] },
    { Icon: IconGlobe,  title: 'Follow Us',       lines: ['@teafindss on Instagram', '@teafindss on Facebook', 'Teafindss on Pinterest'] },
  ]

  return (
    <main className="contact-page">

      {/* Hero */}
      <section className="contact-hero">
        <div className="contact-hero__bg" />
        <div className="contact-hero__overlay" />
        <div className="container contact-hero__content">
          <span className="eyebrow" style={{ color: 'var(--gold-light)' }}>Get In Touch</span>
          <h1 className="heading-xl" style={{ marginTop: '12px', color: 'var(--white)' }}>
            We'd Love to <em>Hear From You</em>
          </h1>
          <p className="body-lg" style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '480px', margin: '16px auto 0' }}>
            Questions, feedback, event enquiries — our team responds within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="contact-cards-section">
        <div className="container contact-cards">
          {contactCards.map(({ Icon, title, lines }, i) => (
            <div key={i} className="contact-card card">
              <div className="contact-card__icon"><Icon size={24} /></div>
              <h3 className="heading-sm contact-card__title">{title}</h3>
              {lines.map((line, j) => (
                <p key={j} className="body-sm contact-card__line">{line}</p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Form + Map */}
      <section className="section contact-main">
        <div className="container contact-main__grid">

          {/* Message Form */}
          <div className="contact-form-wrap">
            {submitted ? (
              <div className="contact-success">
                <div className="contact-success__icon">
                  <IconCheckCircle size={56} style={{ color: 'var(--gold)' }} />
                </div>
                <h2 className="heading-md">Message Sent!</h2>
                <p className="body-lg" style={{ color: 'var(--text-light)', marginTop: '12px' }}>
                  Thank you, <strong>{form.name}</strong>. We've received your message and will get back to you at <strong>{form.email}</strong> within 24 hours.
                </p>
                <button className="btn btn-outline" style={{ marginTop: '28px' }} onClick={() => { setSubmitted(false); setForm(initialContact) }}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <div className="contact-form-header">
                  <span className="eyebrow">Send a Message</span>
                  <h2 className="heading-md" style={{ marginTop: '8px' }}>Drop Us a Line</h2>
                </div>
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="c-name">Full Name *</label>
                      <input id="c-name" name="name" type="text" className={`form-input ${errors.name ? 'is-error' : ''}`} placeholder="Arjun Sharma" value={form.name} onChange={handleChange} />
                      {errors.name && <span className="form-error">{errors.name}</span>}
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="c-email">Email Address *</label>
                      <input id="c-email" name="email" type="email" className={`form-input ${errors.email ? 'is-error' : ''}`} placeholder="arjun@example.com" value={form.email} onChange={handleChange} />
                      {errors.email && <span className="form-error">{errors.email}</span>}
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="c-phone">Phone (Optional)</label>
                      <input id="c-phone" name="phone" type="tel" className="form-input" placeholder="+91 98765 43210" value={form.phone} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="c-subject">Subject</label>
                      <select id="c-subject" name="subject" className="form-input form-select" value={form.subject} onChange={handleChange}>
                        {subjects.map(s => <option key={s} value={s}>{s || '— Select a subject —'}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="c-message">Your Message *</label>
                    <textarea
                      id="c-message"
                      name="message"
                      className={`form-input form-textarea ${errors.message ? 'is-error' : ''}`}
                      placeholder="Tell us how we can help…"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                    />
                    {errors.message && <span className="form-error">{errors.message}</span>}
                  </div>

                  <button type="submit" className="btn btn-primary contact-submit">
                    <IconMail size={16} /> Send Message
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Map & Hours */}
          <div className="contact-sidebar">
            <div className="contact-map">
              <div className="contact-map__embed">
                {/* Stylised mock map */}
                <div className="contact-map__visual">
                  <div className="contact-map__grid">
                    {Array.from({ length: 30 }).map((_, i) => (
                      <div key={i} className="contact-map__cell" />
                    ))}
                  </div>
                  <div className="contact-map__roads">
                    <div className="contact-map__road contact-map__road--h" />
                    <div className="contact-map__road contact-map__road--v" />
                  </div>
                  <div className="contact-map__pin">
                    <div className="contact-map__pin-body">
                      <IconMapPin size={22} style={{ color: 'var(--gold)' }} />
                    </div>
                    <div className="contact-map__pin-label">Teafindss</div>
                    <div className="contact-map__pin-pulse" />
                  </div>
                </div>
              </div>
              <div className="contact-map__address">
                <strong>42 Brew Street, Colaba, Mumbai</strong>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ marginTop: '12px', fontSize: '0.8rem', padding: '10px 20px' }}>
                  Open in Google Maps →
                </a>
              </div>
            </div>

            <div className="contact-hours-card card">
              <h3 className="heading-sm" style={{ marginBottom: '16px' }}>Opening Hours</h3>
              {[
                { day: 'Monday – Friday',  hours: '7:00 AM – 10:00 PM' },
                { day: 'Saturday',          hours: '8:00 AM – 11:00 PM' },
                { day: 'Sunday',            hours: '8:00 AM – 11:00 PM' },
                { day: 'Public Holidays',   hours: '9:00 AM – 9:00 PM'  },
              ].map((row, i) => (
                <div key={i} className="hours-row">
                  <span className="hours-row__day">{row.day}</span>
                  <span className="hours-row__time">{row.hours}</span>
                </div>
              ))}
              <div className="hours-row hours-row--status">
                <span className="hours-status"><span className="hours-status__dot" /> Currently Open</span>
              </div>
            </div>
          </div>

        </div>
      </section>

    </main>
  )
}
