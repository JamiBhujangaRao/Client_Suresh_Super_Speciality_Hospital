// ============================================================
//  Footer.jsx — Rich footer with quick links, social, copyright
// ============================================================

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, Instagram, ExternalLink, Heart } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { hospitalInfo } from '../data/data';
import './Footer.css';

const QUICK_LINKS = [
  { label: 'Home',         id: 'home'         },
  { label: 'About Us',     id: 'about'        },
  { label: 'Services',     id: 'services'     },
  { label: 'Our Doctors',  id: 'doctors'      },
  { label: 'Testimonials', id: 'testimonials' },
  { label: 'Gallery',      id: 'gallery'      },
  { label: 'Contact',      id: 'contact'      },
];

const SERVICES_LINKS = [
  'Cardiology & Angioplasty',
  'Urology & URSL',
  'General Surgery',
  'Obstetrics & Gynaecology',
  'Orthopaedics',
  'General Medicine',
  'Neurology',
  'Diagnostics & Lab',
];

const Footer = () => {
  const { scrollToSection, openModal } = useApp();

  return (
    <footer className="footer" role="contentinfo">
      {/* Top CTA band */}
      <div className="footer__cta-band">
        <div className="footer__cta-band-inner">
          <div className="footer__cta-text">
            <h3>Need Immediate Medical Assistance?</h3>
            <p>Our team is available 24 hours a day, every day of the year.</p>
          </div>
          <div className="footer__cta-actions">
            <a href={`tel:${hospitalInfo.phone}`} className="btn btn-gold">
              <Phone size={17} /> {hospitalInfo.phone}
            </a>
            <button className="btn btn-secondary footer__book-btn" onClick={openModal}>
              Book Appointment
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer__main">
        <div className="footer__grid">
          {/* Brand Column */}
          <div className="footer__brand-col">
            <div className="footer__logo-row">
              <img src="/images/logo.png" alt="Suresh Super Speciality Hospital" className="footer__logo" />
              <div>
                <div className="footer__brand-name">Suresh</div>
                <div className="footer__brand-sub">Super Speciality Hospital</div>
              </div>
            </div>
            <p className="footer__brand-desc">
              Providing advanced super-speciality medical care to the people of Vinukonda
              and the Palnadu region with compassion, expertise, and dedication since 2018.
            </p>
            <div className="footer__contact-items">
              <a href={`tel:${hospitalInfo.phone}`} className="footer__contact-item">
                <Phone size={15} /> {hospitalInfo.phone}
              </a>
              <div className="footer__contact-item">
                <MapPin size={15} /> Vinukonda, Andhra Pradesh 522647
              </div>
              <div className="footer__contact-item">
                <Clock size={15} /> Open 24 Hours · All Days
              </div>
            </div>
            {/* Social */}
            <div className="footer__social-row">
              <a
                href={hospitalInfo.instagram}
                target="_blank"
                rel="noreferrer"
                className="footer__social-btn"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href={hospitalInfo.justdial}
                target="_blank"
                rel="noreferrer"
                className="footer__social-btn"
                aria-label="JustDial"
                title="JustDial"
              >
                <ExternalLink size={18} />
              </a>
              <a
                href={`https://wa.me/${hospitalInfo.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="footer__social-btn footer__social-btn--wa"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__links-col">
            <h4 className="footer__col-title">Quick Links</h4>
            <ul className="footer__link-list">
              {QUICK_LINKS.map((l) => (
                <li key={l.id}>
                  <button
                    className="footer__link"
                    onClick={() => scrollToSection(l.id)}
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer__links-col">
            <h4 className="footer__col-title">Our Services</h4>
            <ul className="footer__link-list">
              {SERVICES_LINKS.map((s) => (
                <li key={s}>
                  <button
                    className="footer__link"
                    onClick={() => scrollToSection('services')}
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Rating & Trust */}
          <div className="footer__trust-col">
            <h4 className="footer__col-title">Patient Trust</h4>
            <div className="footer__rating-card">
              <div className="footer__rating-source">Google Reviews</div>
              <div className="footer__rating-score">
                <span className="footer__rating-num">5.0</span>
                <div className="footer__rating-stars">
                  {[1,2,3,4,5].map((s) => (
                    <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                  ))}
                </div>
                <span className="footer__rating-count">47 reviews</span>
              </div>
            </div>
            <div className="footer__rating-card">
              <div className="footer__rating-source">JustDial</div>
              <div className="footer__rating-score">
                <span className="footer__rating-num">4.9</span>
                <div className="footer__rating-stars">
                  {[1,2,3,4,5].map((s) => (
                    <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                  ))}
                </div>
                <span className="footer__rating-count">799 ratings</span>
              </div>
            </div>
            <div className="footer__accred">
              <div className="footer__accred-item">✓ Aarogyasri Empanelled</div>
              <div className="footer__accred-item">✓ 24/7 Emergency Services</div>
              <div className="footer__accred-item">✓ ISO Certified Processes</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="footer__bottom-inner">
          <p className="footer__copyright">
            © {new Date().getFullYear()} Suresh Super Speciality Hospital · Vinukonda, AP.
            All rights reserved.
          </p>
          <p className="footer__made-with">
            Made with <Heart size={12} fill="#EF4444" color="#EF4444" /> for the people of Palnadu
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
