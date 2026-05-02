// ============================================================
//  About.jsx — Split layout with animated counters
// ============================================================

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Users, Award, UserCheck, Stethoscope } from 'lucide-react';
import { useInView, useCounter } from '../hooks/useScrollAnimation';
import { stats } from '../data/data';
import './About.css';

const ICON_MAP = { Users, Award, UserCheck, Stethoscope };

const highlights = [
  'Expert specialists across 8+ medical disciplines',
  'State-of-the-art operation theatres & ICU',
  'Fully equipped in-house diagnostics laboratory',
  'Empanelled with Aarogyasri & major insurance providers',
  'Emergency & trauma care available 24 × 7',
];

const fadeUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  }),
};

/* Animated counter card */
const StatCard = ({ label, value, suffix, icon, index }) => {
  const [ref, inView] = useInView(0.3);
  const count = useCounter(value, inView, 2200);
  const Icon  = ICON_MAP[icon] || Award;

  return (
    <motion.div
      ref={ref}
      className="about__stat"
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -6, scale: 1.03 }}
    >
      <div className="about__stat-icon">
        <Icon size={22} />
      </div>
      <div className="about__stat-value">
        {count}{suffix}
      </div>
      <div className="about__stat-label">{label}</div>
    </motion.div>
  );
};

const About = () => {
  return (
    <section id="about" className="about">
      {/* Decorative top wave */}
      <div className="about__wave" aria-hidden="true" />

      <div className="section-container">
        <div className="about__grid">

          {/* Left — Image mosaic */}
          <motion.div
            className="about__images"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="about__img-main">
              <img
                src="/images/reception_wide.jpg"
                alt="Suresh Super Speciality Hospital reception"
                loading="lazy"
              />
              <div className="about__img-overlay">
                <img src="/images/logo.png" alt="Hospital logo" className="about__img-logo" />
              </div>
            </div>
            <div className="about__img-secondary">
              <img
                src="/images/corridor.jpg"
                alt="Hospital corridor"
                loading="lazy"
              />
            </div>
            {/* Established badge */}
            <div className="about__established-badge">
              <span className="about__est-year">2018</span>
              <span className="about__est-label">Established</span>
            </div>
          </motion.div>

          {/* Right — Text */}
          <div className="about__text">
            <motion.span
              className="section-tag"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              ✦ About Us
            </motion.span>

            <motion.h2
              className="section-title section-title--lg about__title"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.7 }}
            >
              Dedicated to Your
              <br />
              <span className="about__title-accent">Health &amp; Wellbeing</span>
            </motion.h2>

            <div className="divider" />

            <motion.p
              className="section-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              Suresh Super Speciality Hospital is Vinukonda's premier multi-disciplinary 
              medical centre, trusted by over 10,000 patients across the Palnadu region. 
              Founded by Dr. A.M. Suresh, we bring city-level super-speciality expertise 
              to your doorstep — with the warmth and care of a family doctor.
            </motion.p>

            <motion.p
              className="section-subtitle"
              style={{ marginTop: '16px' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              Our mission is simple: <strong>quality healthcare for everyone</strong>, 
              regardless of background. Rated 5.0 on Google with 47 reviews and 4.9 on 
              Justdial with 799 ratings, our commitment to excellence speaks for itself.
            </motion.p>

            {/* Highlights */}
            <ul className="about__highlights">
              {highlights.map((item, i) => (
                <motion.li
                  key={i}
                  className="about__highlight-item"
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <CheckCircle2 size={18} className="about__check-icon" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stats Row */}
        <div className="about__stats-row">
          {stats.map((s, i) => (
            <StatCard key={s.label} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
