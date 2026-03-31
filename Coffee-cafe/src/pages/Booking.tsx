import { useState, FormEvent } from 'react'
import './Booking.css'
import { IconClock, IconUsers, IconPhone, IconMail, IconChair, IconCake, IconCup, IconZap, IconCheckCircle, IconCheck } from '../components/Icons'

const timeSlots = [
  '08:00 AM', '08:30 AM', '09:00 AM', '09:30 AM',
  '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM',
  '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM',
  '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM',
  '06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM',
  '08:00 PM', '08:30 PM', '09:00 PM',
]

const occasions = ['', 'Birthday Celebration', 'Anniversary', 'Business Meeting', 'Date Night', 'Family Gathering', 'Casual Visit', 'Other']

interface FormData {
  name: string
  email: string
  phone: string
  date: string
  time: string
  guests: string
  occasion: string
  requests: string
}

const initialForm: FormData = { name: '', email: '', phone: '', date: '', time: '', guests: '2', occasion: '', requests: '' }

export default function Booking() {
  const [form, setForm] = useState<FormData>(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const validate = () => {
    const e: Partial<FormData> = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required'
    if (!form.phone.trim() || form.phone.length < 8) e.phone = 'Valid phone required'
    if (!form.date) e.date = 'Date is required'
    if (!form.time) e.time = 'Time is required'
    return e
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormData]) setErrors(prev => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setSubmitted(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const today = new Date().toISOString().split('T')[0]

  return (
    <main className="booking-page">

      {/* Hero */}
      <section className="booking-hero">
        <div className="booking-hero__bg" />
        <div className="booking-hero__overlay" />
        <div className="container booking-hero__content">
          <span className="eyebrow" style={{ color: 'var(--gold-light)' }}>Reservations</span>
          <h1 className="heading-xl" style={{ color: 'var(--white)', marginTop: '12px' }}>
            Reserve Your <em>Perfect Table</em>
          </h1>
          <p className="body-lg" style={{ color: 'rgba(255,255,255,0.75)', marginTop: '16px', maxWidth: '520px', margin: '16px auto 0' }}>
            Whether it's an intimate morning or a vibrant evening — your table at Teafindss awaits.
          </p>
        </div>
      </section>

      {/* Info strip */}
      <div className="booking-info-strip">
        <div className="container booking-info-strip__inner">
          {[
            { Icon: IconClock, label: 'Opening Hours', value: 'Mon–Fri 7am–10pm · Sat–Sun 8am–11pm' },
            { Icon: IconUsers, label: 'Group Bookings', value: 'Available for up to 20 guests' },
            { Icon: IconPhone, label: 'Direct Line',    value: '+91 22 3456 7890' },
          ].map(({ Icon, label, value }, i) => (
            <div key={i} className="booking-info-item">
              <span className="booking-info-item__icon"><Icon size={20} /></span>
              <div>
                <div className="booking-info-item__label">{label}</div>
                <div className="booking-info-item__value">{value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Section */}
      <section className="section booking-main">
        <div className="container booking-main__grid">

          {/* Form */}
          <div className="booking-form-wrap">
            {submitted ? (
              <div className="booking-success">
                <div className="booking-success__icon">
                  <IconCheckCircle size={56} style={{ color: 'var(--gold)' }} />
                </div>
                <h2 className="heading-md">Reservation Confirmed!</h2>
                <p className="body-lg" style={{ color: 'var(--text-light)', marginTop: '12px' }}>
                  Thank you, <strong>{form.name}</strong>! Your table for <strong>{form.guests} guest{Number(form.guests) > 1 ? 's' : ''}</strong> on <strong>{new Date(form.date + 'T12:00').toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long' })}</strong> at <strong>{form.time}</strong> has been reserved.
                </p>
                <p className="body-sm" style={{ color: 'var(--text-light)', marginTop: '8px' }}>
                  A confirmation has been sent to <strong>{form.email}</strong>. We look forward to welcoming you!
                </p>
                <button className="btn btn-primary" style={{ marginTop: '28px' }} onClick={() => { setSubmitted(false); setForm(initialForm) }}>
                  Make Another Reservation
                </button>
              </div>
            ) : (
              <>
                <div className="booking-form-header">
                  <span className="eyebrow">Book Online</span>
                  <h2 className="heading-md" style={{ marginTop: '8px' }}>Reserve a Table</h2>
                  <p className="body-sm" style={{ color: 'var(--text-light)', marginTop: '6px' }}>
                    Complete the form below and we'll confirm within 2 hours.
                  </p>
                </div>
                <form className="booking-form" onSubmit={handleSubmit} noValidate>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="name">Full Name *</label>
                      <input id="name" name="name" type="text" className={`form-input ${errors.name ? 'is-error' : ''}`} placeholder="Priya Mehta" value={form.name} onChange={handleChange} />
                      {errors.name && <span className="form-error">{errors.name}</span>}
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="email">Email Address *</label>
                      <input id="email" name="email" type="email" className={`form-input ${errors.email ? 'is-error' : ''}`} placeholder="priya@example.com" value={form.email} onChange={handleChange} />
                      {errors.email && <span className="form-error">{errors.email}</span>}
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="phone">Phone Number *</label>
                      <input id="phone" name="phone" type="tel" className={`form-input ${errors.phone ? 'is-error' : ''}`} placeholder="+91 98765 43210" value={form.phone} onChange={handleChange} />
                      {errors.phone && <span className="form-error">{errors.phone}</span>}
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="guests">Number of Guests *</label>
                      <select id="guests" name="guests" className="form-input form-select" value={form.guests} onChange={handleChange}>
                        {[1,2,3,4,5,6,7,8,9,10,'10+'].map(n => (
                          <option key={n} value={n}>{n} {Number(n) === 1 ? 'Guest' : 'Guests'}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="date">Preferred Date *</label>
                      <input id="date" name="date" type="date" min={today} className={`form-input ${errors.date ? 'is-error' : ''}`} value={form.date} onChange={handleChange} />
                      {errors.date && <span className="form-error">{errors.date}</span>}
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="time">Preferred Time *</label>
                      <select id="time" name="time" className={`form-input form-select ${errors.time ? 'is-error' : ''}`} value={form.time} onChange={handleChange}>
                        <option value="">Select a time slot</option>
                        {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                      {errors.time && <span className="form-error">{errors.time}</span>}
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="occasion">Occasion (Optional)</label>
                    <select id="occasion" name="occasion" className="form-input form-select" value={form.occasion} onChange={handleChange}>
                      {occasions.map(o => <option key={o} value={o}>{o || 'Select occasion (optional)'}</option>)}
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="requests">Special Requests (Optional)</label>
                    <textarea
                      id="requests"
                      name="requests"
                      className="form-input form-textarea"
                      placeholder="Dietary requirements, seating preferences, decorations…"
                      rows={3}
                      value={form.requests}
                      onChange={handleChange}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary booking-submit">
                    <IconCheck size={16} /> Confirm Reservation
                  </button>

                  <p className="form-disclaimer">
                    By confirming, you agree to our reservation policy. Cancellations must be made 2 hours in advance.
                  </p>
                </form>
              </>
            )}
          </div>

          {/* Sidebar Info */}
          <div className="booking-sidebar">
            <div className="booking-sidebar__card">
              <h3 className="heading-sm" style={{ marginBottom: '20px' }}>Why Reserve in Advance?</h3>
              {[
                { Icon: IconChair, text: 'Guaranteed preferred seating in our lounge, bar or outdoor terrace' },
                { Icon: IconCake,  text: 'Pre-arrange special cakes or decorations for celebrations' },
                { Icon: IconCup,   text: 'Request your custom coffee preference ahead of arrival' },
                { Icon: IconZap,   text: 'Skip the queue during peak morning and weekend hours' },
              ].map(({ Icon, text }, i) => (
                <div key={i} className="booking-sidebar__benefit">
                  <span className="booking-sidebar__benefit-icon"><Icon size={18} /></span>
                  <p className="body-sm" style={{ color: 'var(--text-mid)' }}>{text}</p>
                </div>
              ))}
            </div>

            <div className="booking-sidebar__card booking-sidebar__card--dark">
              <h3 className="heading-sm" style={{ color: 'var(--cream)', marginBottom: '16px' }}>Large Groups?</h3>
              <p className="body-sm" style={{ color: 'rgba(245,236,215,0.7)', lineHeight: 1.7 }}>
                For parties of 10 or more, or for private event enquiries, please contact us directly. We offer exclusive buyouts of our private dining room.
              </p>
              <a href="tel:+912234567890" className="btn btn-primary" style={{ marginTop: '20px', width: '100%', justifyContent: 'center' }}>
                <IconPhone size={16} /> Call Us
              </a>
              <a href="mailto:events@teafindss.com" className="btn btn-secondary" style={{ marginTop: '10px', width: '100%', justifyContent: 'center', borderColor: 'rgba(255,255,255,0.3)', color: 'var(--cream)' }}>
                <IconMail size={16} /> Email Events Team
              </a>
            </div>
          </div>

        </div>
      </section>

    </main>
  )
}
