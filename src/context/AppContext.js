// ============================================================
//  AppContext.js — Global state via React Context API
//  Manages: appointment modal, nav scroll state, active section
// ============================================================

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  // ── Modal state ──────────────────────────────────────────
  const [isModalOpen, setIsModalOpen]         = useState(false);
  const [modalFormData, setModalFormData]     = useState({ name: '', phone: '', service: '', message: '' });
  const [modalSubmitted, setModalSubmitted]   = useState(false);

  // ── Navbar scroll state ──────────────────────────────────
  const [isScrolled, setIsScrolled]           = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // ── Active section for nav highlight ────────────────────
  const [activeSection, setActiveSection]     = useState('home');

  // ── Toast notifications ──────────────────────────────────
  const [toast, setToast]                     = useState(null);

  // ── Scroll listener ─────────────────────────────────────
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);

      // Determine active section
      const sections = ['home','about','services','doctors','testimonials','gallery','contact'];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ── Lock body scroll when modal open ────────────────────
  useEffect(() => {
    document.body.style.overflow = (isModalOpen || isMobileMenuOpen) ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isModalOpen, isMobileMenuOpen]);

  // ── Actions ──────────────────────────────────────────────
  const openModal  = useCallback(() => { setIsModalOpen(true); setModalSubmitted(false); }, []);
  const closeModal = useCallback(() => { setIsModalOpen(false); setModalFormData({ name:'', phone:'', service:'', message:'' }); }, []);

  const submitAppointment = useCallback((data) => {
    setModalFormData(data);
    setModalSubmitted(true);
    // In production, call an API here
    showToast('✅ Appointment request sent! We will call you shortly.', 'success');
  }, []);

  const showToast = useCallback((message, type = 'info') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  }, []);

  const scrollToSection = useCallback((sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  }, []);

  const value = {
    // Modal
    isModalOpen, openModal, closeModal,
    modalFormData, setModalFormData,
    modalSubmitted, submitAppointment,
    // Navbar
    isScrolled,
    isMobileMenuOpen, setIsMobileMenuOpen,
    activeSection,
    scrollToSection,
    // Toast
    toast, showToast,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// ── Custom hook ──────────────────────────────────────────────
export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
};

export default AppContext;
