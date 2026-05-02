// ============================================================
//  Services.jsx — Animated cards with real condition images
// ============================================================

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Activity, Zap, Droplets, Microscope, Scissors,
  Flame, Heart, Stethoscope, Layers, Thermometer, ArrowRight, X,
} from 'lucide-react';
import { services } from '../data/data';
import { useApp } from '../context/AppContext';
import './Services.css';

const ICON_MAP = { Activity, Zap, Droplets, Microscope, Scissors, Flame, Heart, Stethoscope, Layers, Thermometer };

const ServiceCard = ({ service, index, onOpen }) => {
  const Icon = ICON_MAP[service.icon] || Stethoscope;
  return (
    <motion.article
      className="svc-card"
      custom={index}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ delay: index * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8 }}
      style={{ '--svc-color': service.color }}
      onClick={() => onOpen(service)}
    >
      {/* Condition image */}
      <div className="svc-card__img-wrap">
        <img src={service.image} alt={service.title} className="svc-card__img" loading="lazy" />
        <div className="svc-card__img-overlay" />
        <div className="svc-card__badge">
          <Icon size={14} />
          <span>{service.shortTitle}</span>
        </div>
      </div>

      <div className="svc-card__body">
        <div className="svc-card__icon-row">
          <div className="svc-card__icon"><Icon size={20} /></div>
        </div>
        <h3 className="svc-card__title">{service.title}</h3>
        <p className="svc-card__desc">{service.description}</p>
        <div className="svc-card__cta">
          <ArrowRight size={15} />
          <span>Learn More</span>
        </div>
      </div>
    </motion.article>
  );
};

// Detail modal
const ServiceModal = ({ service, onClose }) => {
  const { openModal } = useApp();
  if (!service) return null;
  const Icon = ICON_MAP[service.icon] || Stethoscope;

  return (
    <motion.div
      className="svc-modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="svc-modal-panel"
        initial={{ scale: 0.9, opacity: 0, y: 40 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 280, damping: 28 }}
        onClick={e => e.stopPropagation()}
        style={{ '--svc-color': service.color }}
      >
        <button className="svc-modal__close" onClick={onClose}><X size={20} /></button>
        <div className="svc-modal__img">
          <img src={service.image} alt={service.title} />
          <div className="svc-modal__img-grad" />
          <div className="svc-modal__img-label">
            <div className="svc-modal__icon"><Icon size={22} /></div>
            <span>{service.title}</span>
          </div>
        </div>
        <div className="svc-modal__body">
          <h2 className="svc-modal__title">{service.title}</h2>
          <p className="svc-modal__desc">{service.description}</p>
          <button
            className="btn btn-primary svc-modal__btn"
            onClick={() => { onClose(); openModal(); }}
          >
            Book Consultation
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Services = () => {
  const { openModal } = useApp();
  const [activeService, setActiveService] = useState(null);

  return (
    <section id="services" className="services">
      <div className="services__bg-grid" aria-hidden="true" />
      <div className="services__orb-1" aria-hidden="true" />
      <div className="services__orb-2" aria-hidden="true" />

      <div className="section-container">
        {/* Header */}
        <div className="services__header">
          <motion.span
            className="section-tag section-tag--dark"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >✦ Our Specialities</motion.span>

          <motion.h2
            className="section-title section-title--lg services__title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            Comprehensive Care<br />
            <span className="services__title-accent">Across Every Discipline</span>
          </motion.h2>

          <motion.p
            className="section-subtitle services__subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            From kidney stone removal to complex transplants, our specialist team
            delivers world-class treatment within your community. Click any card to learn more.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="services__grid">
          {services.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} onOpen={setActiveService} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="services__cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p>Not sure which department you need? Our team is happy to guide you.</p>
          <button className="btn btn-gold" onClick={openModal}>Book a Consultation</button>
        </motion.div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {activeService && (
          <ServiceModal service={activeService} onClose={() => setActiveService(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
