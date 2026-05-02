# 🏥 Suresh Super Speciality Hospital — Landing Page

A production-grade React landing page for **Suresh Super Speciality Hospital**, Vinukonda, Andhra Pradesh.

---

## ✨ Features

- **Full-viewport Hero** with parallax, image slideshow, animated text, and floating stat cards
- **Animated Sections** using Framer Motion — fade-up, scale, stagger on scroll
- **Services Grid** — 8 specialities with glassmorphism cards on dark background
- **Doctor Profiles** — Real hospital images, credentials, and booking CTAs
- **Testimonials Carousel** — Auto-sliding with keyboard navigation
- **Masonry Gallery** with lightbox (all 13 hospital photos included)
- **Contact Form** with validation + Google Maps embed
- **Appointment Modal** with React Context state management
- **WhatsApp Floating Button** with call/book actions
- **Custom Animated Counter** stats (10,000+ patients, 7+ years, etc.)
- **Mobile-First** fully responsive design
- **Lazy Loading** for below-fold sections (performance optimised)

---

## 🚀 Quick Start

### Prerequisites
- Node.js 16+
- npm 8+

### Installation

```bash
# 1. Navigate to project folder
cd suresh-hospital

# 2. Install dependencies
npm install

# 3. Start development server
npm start
```

The app will open at **http://localhost:3000**

### Production Build

```bash
npm run build
```

Output is in the `build/` folder — ready for deployment on Vercel, Netlify, or any static host.

---

## 📁 Project Structure

```
src/
├── App.js                    # Root with lazy-loaded sections
├── index.js                  # React entry point
├── components/
│   ├── Navbar.jsx/.css        # Fixed glassmorphism navbar
│   ├── Hero.jsx/.css          # Full-viewport hero with parallax
│   ├── About.jsx/.css         # Split layout + animated counters
│   ├── Services.jsx/.css      # 8-card specialities grid
│   ├── Doctors.jsx/.css       # Doctor profile cards
│   ├── Testimonials.jsx/.css  # Auto-scrolling carousel
│   ├── WhyChooseUs.jsx/.css   # Feature cards on dark bg
│   ├── Gallery.jsx/.css       # Masonry gallery + lightbox
│   ├── Contact.jsx/.css       # Form + map + info cards
│   ├── Footer.jsx/.css        # Rich multi-column footer
│   ├── AppointmentModal.jsx/.css # Global booking modal
│   ├── Toast.jsx/.css         # Notification toast
│   └── WhatsAppFAB.jsx/.css   # Floating action button
├── context/
│   └── AppContext.js          # Global state (modal, scroll, toast)
├── hooks/
│   └── useScrollAnimation.js  # useInView, useCounter, useParallax
├── data/
│   └── data.js                # All content: services, doctors, reviews
└── styles/
    └── index.css              # CSS variables, resets, utility classes
```

---

## 📦 Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| react | ^18.3.1 | UI framework |
| react-dom | ^18.3.1 | DOM rendering |
| framer-motion | ^11.3.0 | Animations |
| lucide-react | ^0.383.0 | Icons |

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary Font | Cormorant Garamond (display) |
| Body Font | DM Sans |
| Navy | `#0B1F3A` |
| Teal | `#0891B2` |
| Gold | `#D97706` |

---

## 📱 Contact

- **Phone/WhatsApp**: +91 74115 56259
- **Location**: Opposite Kalyanapuri Colony, Vinukonda, AP 522647
- **Instagram**: [@sureshsuperspecialityhospital](https://www.instagram.com/sureshsuperspecialityhospital/)
- **JustDial**: [View Profile](https://www.justdial.com/Palnadu/Suresh-Super-Speciality-Hospital-Opposite-To-Kalyanapuri-Colony-Vinukonda/9999P8647-8647-210327191028-B2M2_BZDET)
