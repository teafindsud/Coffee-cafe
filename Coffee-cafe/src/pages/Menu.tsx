import { useState, useRef, useEffect } from 'react'
import './Menu.css'

function useReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } }, { threshold })
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}

const menuCategories = [
  {
    id: 'espresso',
    name: 'Espresso & Coffee',
    description: 'Classic Italian tradition brewed to perfection',
    items: [
      { name: 'Espresso Solo', desc: 'Single shot of our signature blend', price: '₹180', tag: '' },
      { name: 'Espresso Doppio', desc: 'Double shot for maximum intensity', price: '₹220', tag: '' },
      { name: 'Americano', desc: 'Espresso with hot water, clean and bold', price: '₹220', tag: '' },
      { name: 'Cappuccino', desc: 'Equal parts espresso, steamed & frothed milk', price: '₹280', tag: 'Best Seller' },
      { name: 'Flat White', desc: 'Velvety microfoam over double espresso', price: '₹300', tag: '' },
      { name: 'Macchiato', desc: 'Espresso "stained" with a dot of foam', price: '₹240', tag: '' },
      { name: 'Cortado', desc: 'Equal espresso and warm milk, no froth', price: '₹260', tag: '' },
      { name: 'Long Black', desc: 'Bold espresso over hot water, full crema', price: '₹230', tag: '' },
    ],
  },
  {
    id: 'lattes',
    name: 'Speciality Lattes',
    description: 'House-crafted flavour profiles for the discerning palate',
    items: [
      { name: 'Classic Latte', desc: 'Silky espresso with steamed oat or whole milk', price: '₹300', tag: '' },
      { name: 'Caramel Cloud Latte', desc: 'House-made salted caramel over oat milk espresso', price: '₹380', tag: 'Fan Favourite' },
      { name: 'Hazelnut Praline Latte', desc: 'Toasted hazelnut syrup meets velvety espresso', price: '₹360', tag: '' },
      { name: 'Lavender Honey Latte', desc: 'Floral lavender infusion with wildflower honey', price: '₹390', tag: 'Seasonal' },
      { name: 'Rose Gold Latte', desc: 'Rose water, cardamom & espresso harmony', price: '₹400', tag: 'Signature' },
      { name: 'Turmeric Latte', desc: 'Golden milk blend with espresso and spice', price: '₹350', tag: 'Wellness' },
      { name: 'Matcha Latte', desc: 'Ceremonial grade matcha with steamed milk', price: '₹370', tag: '' },
      { name: 'Chai Latte', desc: 'Spiced masala chai with frothy steamed milk', price: '₹290', tag: '' },
    ],
  },
  {
    id: 'cold',
    name: 'Cold Brew & Iced',
    description: '18-hour cold-steeped smoothness, served over ice',
    items: [
      { name: 'Classic Cold Brew', desc: '18-hour steeped, clean and smooth', price: '₹320', tag: '' },
      { name: 'Cold Brew Tonic', desc: 'Cold brew over tonic water with citrus', price: '₹360', tag: '' },
      { name: 'Iced Cappuccino', desc: 'Double espresso, cold foam, served over ice', price: '₹310', tag: '' },
      { name: 'Iced Caramel Latte', desc: 'Espresso, salted caramel, milk over ice', price: '₹350', tag: 'Best Seller' },
      { name: 'Nitro Cold Brew', desc: 'Nitrogen-infused silky cold brew on tap', price: '₹400', tag: 'Premium' },
      { name: 'Shaken Espresso', desc: 'Shaken espresso with ice and brown sugar', price: '₹340', tag: '' },
      { name: 'Vietnamese Iced Coffee', desc: 'Robusta drip with sweetened condensed milk', price: '₹330', tag: '' },
      { name: 'Cold Matcha Lemonade', desc: 'Matcha meets fresh-squeezed lemonade on ice', price: '₹360', tag: 'New' },
    ],
  },
  {
    id: 'pastries',
    name: 'Pastries & Bakery',
    description: 'Freshly baked every morning from traditional recipes',
    items: [
      { name: 'Butter Croissant', desc: 'Classic French-style, 72-hour laminated dough', price: '₹180', tag: 'Fresh Daily' },
      { name: 'Almond Croissant', desc: 'Double-baked with almond cream & flaked almonds', price: '₹220', tag: '' },
      { name: 'Pain au Chocolat', desc: 'Dark Valrhona chocolate wrapped in buttery pastry', price: '₹240', tag: '' },
      { name: 'Cinnamon Roll', desc: 'Classic soft roll with cream cheese glaze', price: '₹260', tag: 'Best Seller' },
      { name: 'Banana Walnut Loaf', desc: 'Moist banana bread with toasted walnuts', price: '₹220', tag: '' },
      { name: 'Blueberry Scone', desc: 'Flaky scone with fresh blueberries & clotted cream', price: '₹230', tag: '' },
      { name: 'Lemon Tart', desc: 'Crisp pastry shell with zesty lemon curd', price: '₹280', tag: '' },
      { name: 'Chocolate Eclair', desc: "Choux pastry with crème pàtissière & chocolate glaze", price: '₹290', tag: 'Chef\'s Pick' },
    ],
  },
  {
    id: 'food',
    name: 'Savoury & Light Bites',
    description: 'Wholesome options crafted to complement your brew',
    items: [
      { name: 'Avocado Toast', desc: 'Sourdough, smashed avo, poached egg, chilli flakes', price: '₹380', tag: '' },
      { name: 'Eggs Benedict', desc: 'English muffin, hollandaise, smoked salmon', price: '₹480', tag: 'Brunch' },
      { name: 'Truffle Mushroom Bruschetta', desc: 'Toasted baguette, truffle oil, sautéed mushrooms', price: '₹360', tag: '' },
      { name: 'Caprese Panini', desc: 'Fresh mozzarella, tomato, basil pesto, pressed & grilled', price: '₹420', tag: '' },
      { name: 'Smoked Salmon Bagel', desc: 'Cream cheese, capers, red onion on sesame bagel', price: '₹460', tag: '' },
      { name: 'Quinoa Power Bowl', desc: 'Seasonal roasted vegetables, tahini, mixed grains', price: '₹440', tag: 'Healthy' },
    ],
  },
]

export default function Menu() {
  const [searchQuery, setSearchQuery] = useState('')
  const { ref: headerRef, visible: headerVisible } = useReveal()

  const isSearching = searchQuery.trim().length > 0
  const filteredCategories = menuCategories.map(cat => {
    if (!isSearching) return cat
    const filteredItems = cat.items.filter(i => 
      i.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      i.desc.toLowerCase().includes(searchQuery.toLowerCase())
    )
    return { ...cat, items: filteredItems }
  }).filter(cat => cat.items.length > 0)

  // Scroll to category utility
  const scrollToCat = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      window.scrollTo({ top: el.offsetTop - 120, behavior: 'smooth' })
    }
  }

  return (
    <main className="menu-page">

      {/* Page Header */}
      <section className="menu-hero">
        <div className="menu-hero__bg" />
        <div className="menu-hero__overlay" />
        <div className="container menu-hero__content" ref={headerRef}>
          <span className={`eyebrow ${headerVisible ? 'fade-in' : ''}`} style={{ color: 'var(--gold-light)' }}>The Teafindss Menu</span>
          <h1 className={`heading-xl menu-hero__title ${headerVisible ? 'fade-in' : ''}`} style={{ color: 'var(--white)', marginTop: '12px' }}>
            Every Sip, <em>Every Bite</em>
          </h1>
          <p className={`body-lg menu-hero__sub ${headerVisible ? 'fade-in' : ''}`} style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '520px', margin: '16px auto 0' }}>
            From our single-origin espressos to our artisan bakery — every item is crafted with intention.
          </p>
        </div>
      </section>

      {/* Menu Body - Editorial Layout */}
      <section className="section menu-body">
        <div className="container menu-layout">
          
          {/* Sidebar / Table of Contents */}
          <aside className="menu-sidebar">
            <div className="menu-sidebar__sticky">
              <h3 className="heading-sm" style={{ marginBottom: '24px' }}>Contents</h3>
              <nav className="menu-nav">
                {menuCategories.map(c => (
                  <button key={c.id} className="menu-nav__link" onClick={() => scrollToCat(c.id)}>
                    {c.name}
                  </button>
                ))}
              </nav>

              <div className="menu-search">
                <input
                  type="text"
                  placeholder="Search menu..."
                  className="menu-search__input"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                />
                {searchQuery && <button className="menu-search__clear" onClick={() => setSearchQuery('')}>✕</button>}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="menu-content">
            {filteredCategories.length === 0 ? (
              <div className="menu-empty">
                <p>No items found for "<strong>{searchQuery}</strong>"</p>
                <button className="btn btn-outline" onClick={() => setSearchQuery('')}>Clear Search</button>
              </div>
            ) : (
              filteredCategories.map((cat, i) => (
                <div key={cat.id} id={cat.id} className="menu-category" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="menu-category__header">
                    <h2 className="heading-lg">{cat.name}</h2>
                    <p className="body-md" style={{ fontStyle: 'italic', color: 'var(--text-light)', marginTop: '8px' }}>
                      {cat.description}
                    </p>
                  </div>

                  <div className="menu-list">
                    {cat.items.map((item, j) => (
                      <div key={j} className="menu-list__item">
                        <div className="menu-list__info">
                          <span className="menu-list__name">{item.name}</span>
                          {item.tag && <span className="menu-list__badge">{item.tag}</span>}
                        </div>
                        <div className="menu-list__leader"></div>
                        <div className="menu-list__price">{item.price}</div>
                        
                        <div className="menu-list__desc">{item.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Allergy Note */}
      <section className="menu-note section-sm">
        <div className="container">
          <div className="menu-note__inner">
            <span className="menu-note__icon">ℹ️</span>
            <p className="body-sm" style={{ color: 'var(--text-light)' }}>
              <strong style={{ color: 'var(--text-mid)' }}>Allergen Information:</strong> Please inform our team of any dietary requirements or allergies. All prices are inclusive of taxes. Menu subject to seasonal availability. We proudly source ingredients from ethical, sustainable suppliers.
            </p>
          </div>
        </div>
      </section>

    </main>
  )
}
