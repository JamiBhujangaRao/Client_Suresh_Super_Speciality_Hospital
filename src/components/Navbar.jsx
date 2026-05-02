// ============================================================
//  Navbar.jsx — Fixed glassmorphism navbar with scroll detection
// ============================================================

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, Calendar } from 'lucide-react';
import { useApp } from '../context/AppContext';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home',         id: 'home'         },
  { label: 'About',        id: 'about'        },
  { label: 'Services',     id: 'services'     },
  { label: 'Doctors',      id: 'doctors'      },
  { label: 'Testimonials', id: 'testimonials' },
  { label: 'Gallery',      id: 'gallery'      },
  { label: 'Contact',      id: 'contact'      },
];

const Navbar = () => {
  const { isScrolled, isMobileMenuOpen, setIsMobileMenuOpen,
          activeSection, scrollToSection, openModal } = useApp();

  return (
    <>
      <motion.nav
        className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="navbar__inner">
          {/* Logo */}
          <button
            className="navbar__logo"
            onClick={() => scrollToSection('home')}
            aria-label="Go to homepage"
          >
            <img src="/images/logo.png" alt="Suresh Super Speciality Hospital Logo" className="navbar__logo-img" />
            <div className="navbar__logo-text">
              <span className="navbar__logo-name">Suresh</span>
              <span className="navbar__logo-sub">Super Speciality Hospital</span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <ul className="navbar__links" role="navigation" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <button
                  className={`navbar__link ${activeSection === link.id ? 'navbar__link--active' : ''}`}
                  onClick={() => scrollToSection(link.id)}
                  aria-current={activeSection === link.id ? 'page' : undefined}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <motion.span
                      className="navbar__link-indicator"
                      layoutId="nav-indicator"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA Row */}
          <div className="navbar__cta">
            <a
              href="tel:+917411556259"
              className="navbar__phone"
              aria-label="Call us"
            >
              <Phone size={15} />
              <span>74115 56259</span>
            </a>
            <button className="btn btn-primary navbar__book-btn" onClick={openModal}>
              <Calendar size={15} />
              Book Appointment
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="navbar__hamburger"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {/* Overlay */}
            <motion.div
              className="mobile-menu__overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.nav
              className="mobile-menu__panel"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div className="mobile-menu__header">
                <img src="/images/logo.png" alt="Logo" className="mobile-menu__logo" />
                <button
                  className="mobile-menu__close"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              <ul className="mobile-menu__links">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.id}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.4 }}
                  >
                    <button
                      className={`mobile-menu__link ${activeSection === link.id ? 'mobile-menu__link--active' : ''}`}
                      onClick={() => scrollToSection(link.id)}
                    >
                      {link.label}
                    </button>
                  </motion.li>
                ))}
              </ul>

              <div className="mobile-menu__footer">
                <a href="tel:+917411556259" className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center', background: 'rgba(8,145,178,0.15)', color: 'var(--teal)', border: '1.5px solid rgba(8,145,178,0.3)' }}>
                  <Phone size={16} /> Call Now
                </a>
                <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: 10 }} onClick={() => { openModal(); setIsMobileMenuOpen(false); }}>
                  <Calendar size={16} /> Book Appointment
                </button>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
