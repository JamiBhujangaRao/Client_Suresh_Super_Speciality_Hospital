// ============================================================
//  AppointmentModal.jsx — Full-screen appointment booking modal
// ============================================================

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Phone, Calendar, AlertCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';
import './AppointmentModal.css';

const SERVICES_LIST = [
  'Cardiology / Angioplasty','Urology / URSL','General Surgery',
  'Obstetrics & Gynaecology','Orthopaedics','General Medicine',
  'Neurology','Diagnostics / Lab','Other',
];

const SLOTS = ['Morning (8AM–12PM)','Afternoon (12PM–4PM)','Evening (4PM–8PM)','Emergency / ASAP'];

const AppointmentModal = () => {
  const { isModalOpen, closeModal } = useApp();
  const [form, setForm]   = useState({ name:'', phone:'', service:'', slot:'', note:'' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const validate = () => {
    const e = {};
    if (!form.name.trim())                              e.name  = 'Required';
    if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\D/g,''))) e.phone = 'Enter a valid 10-digit number';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ev = validate();
    if (Object.keys(ev).length) { setErrors(ev); return; }
    setStatus('submitting');
    await new Promise((r) => setTimeout(r, 1500));
    setStatus('success');
  };

  const handleClose = () => {
    closeModal();
    setTimeout(() => { setStatus('idle'); setForm({ name:'',phone:'',service:'',slot:'',note:'' }); }, 400);
  };

  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          role="dialog"
          aria-modal="true"
          aria-label="Book Appointment"
        >
          <motion.div
            className="modal-panel"
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 280, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="modal__header">
              <div className="modal__header-left">
                <img src="/images/logo.png" alt="Logo" className="modal__logo" />
                <div>
                  <div className="modal__title">Book Appointment</div>
                  <div className="modal__subtitle">Suresh Super Speciality Hospital</div>
                </div>
              </div>
              <button className="modal__close-btn" onClick={handleClose} aria-label="Close modal">
                <X size={20} />
              </button>
            </div>

            {/* Body */}
            <div className="modal__body">
              {status === 'success' ? (
                <motion.div
                  className="modal__success"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1, type: 'spring', stiffness: 300 }}
                  >
                    <CheckCircle size={64} className="modal__success-icon" />
                  </motion.div>
                  <h3>Appointment Request Received!</h3>
                  <p>Our team will contact you within <strong>30 minutes</strong> to confirm your appointment.</p>
                  <div className="modal__success-contact">
                    <a href="tel:+917411556259" className="btn btn-primary">
                      <Phone size={16} /> Call Directly: 74115 56259
                    </a>
                    <button className="btn btn-outline" onClick={handleClose} style={{ borderColor:'var(--teal)', color:'var(--teal)' }}>
                      Close
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form className="modal__form" onSubmit={handleSubmit} noValidate>
                  <div className="modal__row">
                    <div className="modal__field">
                      <label className="modal__label">Full Name *</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className={`modal__input ${errors.name ? 'modal__input--error' : ''}`}
                      />
                      {errors.name && <span className="modal__error"><AlertCircle size={11}/>{errors.name}</span>}
                    </div>
                    <div className="modal__field">
                      <label className="modal__label">Mobile Number *</label>
                      <input
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className={`modal__input ${errors.phone ? 'modal__input--error' : ''}`}
                      />
                      {errors.phone && <span className="modal__error"><AlertCircle size={11}/>{errors.phone}</span>}
                    </div>
                  </div>

                  <div className="modal__row">
                    <div className="modal__field">
                      <label className="modal__label">Department</label>
                      <select name="service" value={form.service} onChange={handleChange} className="modal__input modal__select">
                        <option value="">Select Department</option>
                        {SERVICES_LIST.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div className="modal__field">
                      <label className="modal__label">Preferred Time</label>
                      <select name="slot" value={form.slot} onChange={handleChange} className="modal__input modal__select">
                        <option value="">Select Time Slot</option>
                        {SLOTS.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="modal__field">
                    <label className="modal__label">Additional Notes (optional)</label>
                    <textarea
                      name="note"
                      value={form.note}
                      onChange={handleChange}
                      placeholder="Briefly describe your symptoms or any special requirements..."
                      rows={3}
                      className="modal__input modal__textarea"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary modal__submit"
                    disabled={status === 'submitting'}
                  >
                    {status === 'submitting' ? (
                      <><span className="modal__spinner"/> Booking...</>
                    ) : (
                      <><Calendar size={17}/> Confirm Appointment</>
                    )}
                  </button>

                  <p className="modal__privacy">
                    Your details are confidential and will only be used to contact you regarding your appointment.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AppointmentModal;
