// ============================================================
//  WhyChooseUs.jsx — Feature cards on gradient background
// ============================================================

import React from 'react';
import { motion } from 'framer-motion';
import {
  Clock, Award, Shield, Microscope,
  HeartHandshake, MapPin,
} from 'lucide-react';
import { whyChooseUs } from '../data/data';
import { useApp } from '../context/AppContext';
import './WhyChooseUs.css';

const ICON_MAP = { Clock, Award, Shield, Microscope, HeartHandshake, MapPin };

const FeatureCard = ({ item, index }) => {
  const Icon = ICON_MAP[item.icon] || Shield;

  return (
    <motion.article
      className="why-card"
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.08, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      style={{ '--why-color': item.color }}
    >
      <div className="why-card__icon-wrap">
        <div className="why-card__icon-bg" />
        <div className="why-card__icon">
          <Icon size={26} />
        </div>
      </div>
      <h3 className="why-card__title">{item.title}</h3>
      <p className="why-card__desc">{item.description}</p>
    </motion.article>
  );
};

const WhyChooseUs = () => {
  const { openModal } = useApp();

  return (
    <section className="why-choose-us">
      {/* Decorative bg */}
      <div className="why__bg-decoration" aria-hidden="true">
        <div className="why__bg-circle-1" />
        <div className="why__bg-circle-2" />
      </div>

      <div className="section-container">
        <div className="why__layout">
          {/* Left text */}
          <div className="why__text-col">
            <motion.span
              className="section-tag section-tag--dark"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              ✦ Why Choose Us
            </motion.span>

            <motion.h2
              className="section-title section-title--lg why__title"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.7 }}
            >
              The Right Choice
              <br />
              <span className="why__title-accent">For Your Family</span>
            </motion.h2>

            <div className="divider divider--gold" />

            <motion.p
              className="section-subtitle why__subtitle"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              With over 10,000 happy patients and a reputation built on trust, skill,
              and compassion, Suresh Super Speciality Hospital is the definitive healthcare
              destination for Vinukonda and the entire Palnadu region.
            </motion.p>

            {/* Image preview */}
            <motion.div
              className="why__img-preview"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <img
                src="/images/lobby_wide.jpg"
                alt="Suresh Super Speciality Hospital lobby"
                loading="lazy"
              />
              <div className="why__img-overlay">
                <div className="why__img-text">
                  <span className="why__img-num">10,000+</span>
                  <span className="why__img-label">Patients Treated</span>
                </div>
              </div>
            </motion.div>

            <motion.button
              className="btn btn-gold why__cta-btn"
              onClick={openModal}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Book Appointment Today
            </motion.button>
          </div>

          {/* Right grid */}
          <div className="why__cards-col">
            <div className="why__cards-grid">
              {whyChooseUs.map((item, i) => (
                <FeatureCard key={item.id} item={item} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
