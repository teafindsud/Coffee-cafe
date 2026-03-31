# Teafindss — Premium Coffee Cafe & Bakery

A modern, responsive web application for a premium coffee cafe and artisan bakery. Built with React, TypeScript, and Vite with smooth animations powered by Framer Motion.

![React](https://img.shields.io/badge/React-18.2-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue)
![Vite](https://img.shields.io/badge/Vite-5.1-brightgreen)
![License](https://img.shields.io/badge/License-MIT-green)

## 🌟 Features

- **Responsive Design** — Mobile-first approach, works seamlessly on all devices
- **Smooth Animations** — Framer Motion for elegant scroll-triggered reveals and transitions
- **Modern UX** — Intersection Observer for performance-optimized animations
- **SEO Optimized** — Semantic HTML, meta tags, and structured data
- **Dark Coffee Aesthetic** — Premium color palette with espresso, gold, and cream tones
- **Multiple Pages** — Home, Menu, About (Our Story), Booking, and Contact
- **Navigation** — Router-based navigation with mobile-responsive hamburger menu
- **Product Showcase** — Detailed menu with categories, prices, and item descriptions
- **Testimonials** — Customer reviews and ratings
- **Gallery** — Visual showcase of cafe spaces and pastries

## 📋 Pages

- **Home** — Hero section with featured items, testimonials, and gallery
- **Menu** — Complete menu with searchable categories and pricing
- **About** — Brand story and values
- **Booking** — Table reservation system
- **Contact** — Contact form and information

## 🛠️ Tech Stack

- **Frontend Framework** — React 18.2
- **Language** — TypeScript 5.2
- **Build Tool** — Vite 5.1
- **Styling** — CSS3 with design system tokens
- **Routing** — React Router 6.22
- **Animations** — Framer Motion 11.0
- **Icons** — Lucide React 0.344
- **Type Safety** — Full TypeScript strict mode

## 📦 Installation

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/Coffee-cafe.git
   cd Coffee-cafe
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Create environment file** (optional)

   ```bash
   cp .env.example .env.local
   ```

4. **Start development server**

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173`

## 🚀 Build & Deployment

### Build for Production

```bash
npm run build
```

This generates an optimized production build in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

### Deploy to Vercel

The project is configured for seamless Vercel deployment via `vercel.json`.

**Option 1: Automatic Deployment (Recommended)**
1. Push this repository to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically deploy on every push to main branch

**Option 2: Manual Deployment**
1. Install Vercel CLI: `npm install -g vercel`
2. Run `vercel` from project root
3. Follow the prompts
4. Your site will be live!

### Environment Variables

Set these in your Vercel project settings if needed:

```
VITE_API_URL=https://api.example.com
```

## 📁 Project Structure

```
Coffee-cafe/
├── public/              # Static assets (images, icons)
├── src/
│   ├── components/      # Reusable components
│   │   ├── Footer.tsx
│   │   ├── Icons.tsx
│   │   └── Navbar.tsx
│   ├── pages/           # Page components
│   │   ├── Home.tsx
│   │   ├── Menu.tsx
│   │   ├── About.tsx
│   │   ├── Booking.tsx
│   │   └── Contact.tsx
│   ├── App.tsx          # Main app component with routing
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles & design system
├── index.html           # HTML template
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
├── package.json         # Dependencies & scripts
├── vercel.json          # Vercel deployment config
├── .eslintrc.cjs        # ESLint rules
├── .prettierrc.json     # Code formatter config
├── .gitignore           # Git exclusions
└── .env.example         # Environment template
```

## 🎨 Design System

The project uses a carefully curated coffee-themed color palette:

- **Primary** — Gold (`#BF8020`) for CTAs and highlights
- **Dark** — Espresso (`#1E110A`) for text and backgrounds
- **Light** — Cream (`#F4EAD0`) and Ivory (`#FDFAF4`) for surfaces
- **Accents** — Amber (`#C96F2C`)

### Typography

- **Serif** — Playfair Display (headings)
- **Display** — Cormorant Garamond (descriptive text)
- **Sans** — Inter (body text)

## 📝 Scripts

```bash
# Development
npm run dev          # Start dev server on port 5173

# Production
npm run build        # Build for production (tsc + vite build)
npm run preview      # Preview production build locally

# Code Quality (optional - requires setup)
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
```

## 🔒 Environment & Security

- Uses Vite's environment variable system (`VITE_` prefix required)
- No sensitive data in version control (use `.env.local`)
- Safe CSP headers configured in `vercel.json`

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Mobile 90+)

## 🤝 Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit changes (`git commit -m 'Add amazing feature'`)
3. Push to branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## 📄 License

This project is licensed under the MIT License — see the LICENSE file for details.

## 📞 Support

For issues, questions, or suggestions:
- Email: hello@teafindss.com
- Phone: +91 22 3456 7890
- Address: 42 Brew Street, Colaba, Mumbai, Maharashtra 400001

## 🎯 Roadmap

- [ ] Backend integration for booking system
- [ ] Payment gateway integration
- [ ] Admin dashboard for menu management
- [ ] Customer loyalty program
- [ ] Email notifications
- [ ] Analytics dashboard

---

**Made with ☕ by Teafindss**
