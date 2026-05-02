// ============================================================
//  Hero.jsx — Full-viewport hero with parallax, animated text,
//             floating stats, and gradient orbs
// ============================================================

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Phone, Calendar, Star, MapPin, Clock, ChevronDown } from 'lucide-react';
import { useApp } from '../context/AppContext';
import './Hero.css';

const HERO_IMAGES = [
  '/images/lobby_main.jpg',
  '/images/waiting_area.jpg',
  '/images/lobby_wide.jpg',
];

const floatingVariants = {
  initial: { opacity: 0, y: 30 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 1.2 + i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  }),
};

const Hero = () => {
  const { openModal, scrollToSection } = useApp();
  const [bgIndex, setBgIndex] = useState(0);
  const { scrollY } = useScroll();
  const bgY       = useTransform(scrollY, [0, 600], ['0%', '30%']);
  const textY     = useTransform(scrollY, [0, 400], ['0px', '-60px']);
  const overlayOp = useTransform(scrollY, [0, 300], [0, 0.4]);

  // Slideshow every 5s
  useEffect(() => {
    const t = setInterval(() => setBgIndex((i) => (i + 1) % HERO_IMAGES.length), 5000);
    return () => clearInterval(t);
  }, []);

  const stats = [
    { icon: <Star size={14} fill="currentColor" />, value: '5.0', label: 'Google Rating', color: '#F59E0B' },
    { icon: <Clock size={14} />,                    value: '24/7', label: 'Always Open',  color: '#22D3EE' },
    { icon: <MapPin size={14} />,                   value: '10K+', label: 'Patients Served', color: '#34D399' },
  ];

  return (
    <section id="home" className="hero" aria-label="Hero section">
      {/* Background Images (Slideshow) */}
      <div className="hero__bg-container" aria-hidden="true">
        {HERO_IMAGES.map((img, i) => (
          <motion.div
            key={img}
            className="hero__bg-slide"
            style={{ backgroundImage: `url(${img})`, y: bgY }}
            animate={{ opacity: i === bgIndex ? 1 : 0 }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
          />
        ))}
        {/* Dark overlay */}
        <div className="hero__overlay" />
        {/* Gradient overlay on scroll */}
        <motion.div className="hero__overlay-scroll" style={{ opacity: overlayOp }} />
      </div>

      {/* Decorative Orbs */}
      <div className="hero__orbs" aria-hidden="true">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />
      </div>

      {/* Content */}
      <div className="hero__content-wrap">
        <motion.div className="hero__content" style={{ y: textY }}>

          {/* Tag line */}
          <motion.div
            className="hero__badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="hero__badge-dot" />
            Super Speciality Healthcare · Vinukonda, AP
          </motion.div>

          {/* Main Title */}
          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            Where <em>Healing</em>
            <br />
            Meets Excellence
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="hero__subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Advanced super-speciality care with compassion — serving Vinukonda &amp;
            the Palnadu region with world-class medical expertise, 24 hours a day, every day.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="hero__cta-group"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
          >
            <button className="btn btn-primary hero__btn-book" onClick={openModal}>
              <Calendar size={18} />
              Book Appointment
            </button>
            <a
              href="tel:+917411556259"
              className="btn btn-secondary hero__btn-call"
              aria-label="Call Suresh Super Speciality Hospital"
            >
              <Phone size={18} />
              Call Now · 74115 56259
            </a>
          </motion.div>

          {/* Floating Stats */}
          <div className="hero__stats" role="list">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                className="hero__stat-card"
                custom={i}
                variants={floatingVariants}
                initial="initial"
                animate="animate"
                role="listitem"
                whileHover={{ y: -4, scale: 1.04 }}
              >
                <div className="hero__stat-icon" style={{ color: s.color, background: `${s.color}18` }}>
                  {s.icon}
                </div>
                <div>
                  <div className="hero__stat-value" style={{ color: s.color }}>{s.value}</div>
                  <div className="hero__stat-label">{s.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right — hero image card */}
        <motion.div
          className="hero__image-card"
          initial={{ opacity: 0, x: 60, scale: 0.92 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero__image-frame">
            <img
              src="/images/dr_suresh_close.jpg"
              alt="Dr. A.M. Suresh, Chief Surgeon"
              className="hero__doctor-img"
              loading="eager"
            />
            <div className="hero__doctor-badge">
              <img src="/images/logo.png" alt="" className="hero__doctor-badge-logo" />
              <div>
                <div className="hero__doctor-badge-name">Dr. A.M. Suresh</div>
                <div className="hero__doctor-badge-title">Chief Surgeon & Director</div>
              </div>
            </div>
          </div>

          {/* Rating pill */}
          <motion.div
            className="hero__rating-pill"
            initial={{ opacity: 0, scale: 0, x: -20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 1.3, duration: 0.6, type: 'spring' }}
          >
            <div className="hero__rating-stars">
              {[1,2,3,4,5].map((s) => <Star key={s} size={12} fill="#F59E0B" color="#F59E0B" />)}
            </div>
            <div className="hero__rating-text">
              <strong>5.0</strong> · 47 Reviews
            </div>
          </motion.div>

          {/* Experience pill */}
          <motion.div
            className="hero__exp-pill"
            initial={{ opacity: 0, scale: 0, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 0.6, type: 'spring' }}
          >
            <span className="hero__exp-num">15+</span>
            <span className="hero__exp-label">Years of<br/>Excellence</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        className="hero__scroll-btn"
        onClick={() => scrollToSection('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        aria-label="Scroll to about section"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.button>

      {/* Slideshow dots */}
      <div className="hero__dots" aria-label="Image slideshow">
        {HERO_IMAGES.map((_, i) => (
          <button
            key={i}
            className={`hero__dot ${i === bgIndex ? 'hero__dot--active' : ''}`}
            onClick={() => setBgIndex(i)}
            aria-label={`Show image ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
