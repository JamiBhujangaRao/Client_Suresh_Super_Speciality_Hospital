// ============================================================
//  Contact.jsx — Contact form + info cards + Google Maps embed
// ============================================================

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone, MapPin, Clock, MessageCircle,
  Send, CheckCircle, AlertCircle,
} from 'lucide-react';
import { hospitalInfo } from '../data/data';
import './Contact.css';

const SERVICES_LIST = [
  'Cardiology / Angioplasty',
  'Urology / URSL',
  'General Surgery',
  'Obstetrics & Gynaecology',
  'Orthopaedics',
  'General Medicine',
  'Neurology',
  'Diagnostics / Lab',
  'Other',
];

const inputVariant = {
  focus: { scale: 1.01, borderColor: 'var(--teal)', transition: { duration: 0.2 } },
};

const Contact = () => {
  const [form, setForm]     = useState({ name: '', phone: '', email: '', service: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim())                        e.name    = 'Name is required';
    if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\D/g,''))) e.phone   = 'Enter a valid 10-digit Indian mobile number';
    if (form.email && !/\S+@\S+\.\S+/.test(form.email))     e.email   = 'Enter a valid email address';
    if (!form.message.trim())                     e.message = 'Please describe your concern';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length) { setErrors(e2); return; }
    setStatus('submitting');
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1600));
    setStatus('success');
    setForm({ name: '', phone: '', email: '', service: '', message: '' });
  };

  const infoCards = [
    {
      icon: <Phone size={22} />,
      title: 'Call / WhatsApp',
      lines: [hospitalInfo.phone],
      link: `tel:${hospitalInfo.phone}`,
      linkLabel: 'Call Now',
      color: '#0891B2',
      wa: `https://wa.me/${hospitalInfo.whatsapp}`,
    },
    {
      icon: <MapPin size={22} />,
      title: 'Location',
      lines: ['Opposite Kalyanapuri Colony,', 'Vinukonda, AP 522647'],
      link: 'https://maps.google.com/?q=Suresh+Super+Speciality+Hospital+Vinukonda',
      linkLabel: 'Get Directions',
      color: '#059669',
    },
    {
      icon: <Clock size={22} />,
      title: 'Working Hours',
      lines: ['Open 24 Hours · 7 Days a Week', 'Emergency services always available'],
      color: '#D97706',
    },
  ];

  return (
    <section id="contact" className="contact">
      {/* BG decoration */}
      <div className="contact__bg" aria-hidden="true">
        <div className="contact__bg-circle" />
      </div>

      <div className="section-container">
        {/* Header */}
        <div className="contact__header">
          <motion.span
            className="section-tag"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            ✦ Contact Us
          </motion.span>

          <motion.h2
            className="section-title section-title--lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            Get In Touch
            <br />
            <span className="contact__title-accent">We're Here For You</span>
          </motion.h2>
        </div>

        {/* Info Cards */}
        <div className="contact__info-row">
          {infoCards.map((card, i) => (
            <motion.div
              key={card.title}
              className="contact__info-card"
              style={{ '--card-color': card.color }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -4 }}
            >
              <div className="contact__info-icon">{card.icon}</div>
              <div className="contact__info-title">{card.title}</div>
              {card.lines.map((l, j) => (
                <div key={j} className="contact__info-line">{l}</div>
              ))}
              {card.link && (
                <a href={card.link} className="contact__info-link" target="_blank" rel="noreferrer">
                  {card.linkLabel} →
                </a>
              )}
              {card.wa && (
                <a href={card.wa} className="contact__info-link contact__info-link--wa" target="_blank" rel="noreferrer">
                  <MessageCircle size={14} /> WhatsApp
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Main grid: Form + Map */}
        <div className="contact__main-grid">

          {/* Form */}
          <motion.div
            className="contact__form-wrap"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16,1,0.3,1] }}
          >
            <h3 className="contact__form-title">Book an Appointment</h3>
            <p className="contact__form-sub">Fill in the form and our team will contact you within 30 minutes.</p>

            {status === 'success' ? (
              <motion.div
                className="contact__success"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                <CheckCircle size={48} className="contact__success-icon" />
                <h4>Request Sent Successfully!</h4>
                <p>Our team will call you within 30 minutes to confirm your appointment.</p>
                <button className="btn btn-primary" onClick={() => setStatus('idle')}>
                  Send Another Request
                </button>
              </motion.div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit} noValidate>
                <div className="contact__row">
                  <div className="contact__field">
                    <label htmlFor="c-name" className="contact__label">Full Name *</label>
                    <motion.input
                      id="c-name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={`contact__input ${errors.name ? 'contact__input--error' : ''}`}
                      whileFocus={inputVariant.focus}
                      aria-describedby={errors.name ? 'c-name-err' : undefined}
                    />
                    {errors.name && <span id="c-name-err" className="contact__error"><AlertCircle size={12}/>{errors.name}</span>}
                  </div>
                  <div className="contact__field">
                    <label htmlFor="c-phone" className="contact__label">Mobile Number *</label>
                    <motion.input
                      id="c-phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className={`contact__input ${errors.phone ? 'contact__input--error' : ''}`}
                      whileFocus={inputVariant.focus}
                    />
                    {errors.phone && <span className="contact__error"><AlertCircle size={12}/>{errors.phone}</span>}
                  </div>
                </div>

                <div className="contact__row">
                  <div className="contact__field">
                    <label htmlFor="c-email" className="contact__label">Email (optional)</label>
                    <motion.input
                      id="c-email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={`contact__input ${errors.email ? 'contact__input--error' : ''}`}
                      whileFocus={inputVariant.focus}
                    />
                    {errors.email && <span className="contact__error"><AlertCircle size={12}/>{errors.email}</span>}
                  </div>
                  <div className="contact__field">
                    <label htmlFor="c-service" className="contact__label">Department</label>
                    <select
                      id="c-service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="contact__input contact__select"
                    >
                      <option value="">Select a department</option>
                      {SERVICES_LIST.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>

                <div className="contact__field">
                  <label htmlFor="c-message" className="contact__label">Message / Symptoms *</label>
                  <motion.textarea
                    id="c-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your concern or preferred appointment time..."
                    rows={4}
                    className={`contact__input contact__textarea ${errors.message ? 'contact__input--error' : ''}`}
                    whileFocus={inputVariant.focus}
                  />
                  {errors.message && <span className="contact__error"><AlertCircle size={12}/>{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  className="btn btn-primary contact__submit-btn"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? (
                    <><span className="contact__spinner" /> Sending...</>
                  ) : (
                    <><Send size={16} /> Send Appointment Request</>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Map */}
          <motion.div
            className="contact__map-wrap"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16,1,0.3,1] }}
          >
            <div className="contact__map-header">
              <MapPin size={18} className="contact__map-pin" />
              <div>
                <div className="contact__map-name">Suresh Super Speciality Hospital</div>
                <div className="contact__map-address">Vinukonda, Andhra Pradesh 522647</div>
              </div>
            </div>
            <div className="contact__map">
              <iframe
                title="Suresh Super Speciality Hospital Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15323.45678901234!2d79.73505!3d16.05685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f7aa2d8a7e4b%3A0xe0a36d3f7bcd2e6a!2sVinukonda%2C%20Andhra%20Pradesh%20522647!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0, width: '100%', height: '100%' }}
              />
            </div>
            {/* Quick action row */}
            <div className="contact__map-actions">
              <a
                href={`https://wa.me/${hospitalInfo.whatsapp}?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Suresh%20Super%20Speciality%20Hospital.`}
                className="btn btn-primary contact__wa-btn"
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={18} /> WhatsApp Us
              </a>
              <a
                href="https://maps.google.com/?q=Suresh+Super+Speciality+Hospital+Vinukonda+AP"
                className="btn btn-outline"
                target="_blank"
                rel="noreferrer"
                style={{ borderColor: 'var(--teal)', color: 'var(--teal)' }}
              >
                <MapPin size={16} /> Get Directions
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
