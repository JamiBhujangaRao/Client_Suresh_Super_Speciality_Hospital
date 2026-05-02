// ============================================================
//  Highlights.jsx — Awards, inaugurations & milestone moments
// ============================================================

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, X, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { highlightMoments } from '../data/data';
import './Highlights.css';

const CATEGORY_COLORS = {
  Recognition: { bg: '#D97706', light: 'rgba(217,119,6,0.12)' },
  Milestone:   { bg: '#0891B2', light: 'rgba(8,145,178,0.12)'  },
  Award:       { bg: '#7C3AED', light: 'rgba(124,58,237,0.12)' },
  Community:   { bg: '#059669', light: 'rgba(5,150,105,0.12)'  },
};

const Highlights = () => {
  const [lightboxIdx, setLightboxIdx] = useState(null);

  const open  = (i) => { setLightboxIdx(i); document.body.style.overflow = 'hidden'; };
  const close = () => { setLightboxIdx(null); document.body.style.overflow = ''; };
  const prev  = () => setLightboxIdx(i => (i - 1 + highlightMoments.length) % highlightMoments.length);
  const next  = () => setLightboxIdx(i => (i + 1) % highlightMoments.length);

  React.useEffect(() => {
    const handler = (e) => {
      if (lightboxIdx === null) return;
      if (e.key === 'Escape')     close();
      if (e.key === 'ArrowLeft')  prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  });

  return (
    <section className="highlights">
      {/* Decorative bg */}
      <div className="highlights__bg" aria-hidden="true">
        <div className="highlights__bg-orb-1" />
        <div className="highlights__bg-orb-2" />
      </div>

      <div className="section-container">
        {/* Header */}
        <div className="highlights__header">
          <motion.div
            className="highlights__header-icon"
            initial={{ scale: 0, rotate: -20 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 260, damping: 18 }}
          >
            <Trophy size={28} />
          </motion.div>

          <motion.span
            className="section-tag section-tag--dark"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >✦ Awards & Milestones</motion.span>

          <motion.h2
            className="section-title section-title--lg highlights__title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            Moments of
            <br /><span className="highlights__title-accent">Pride & Achievement</span>
          </motion.h2>

          <motion.p
            className="section-subtitle highlights__subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            From government recognitions to community milestones — a journey of excellence
            reflected in the trust of our patients and leaders.
          </motion.p>
        </div>

        {/* Masonry-style grid */}
        <div className="highlights__grid">
          {highlightMoments.map((item, i) => {
            const catStyle = CATEGORY_COLORS[item.category] || CATEGORY_COLORS.Recognition;
            return (
              <motion.button
                key={item.id}
                className={`highlight-card ${i === 0 || i === 3 ? 'highlight-card--featured' : ''}`}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16,1,0.3,1] }}
                whileHover={{ y: -6, scale: 1.02 }}
                onClick={() => open(i)}
                aria-label={`View ${item.title}`}
              >
                {/* Image */}
                <div className="highlight-card__img-wrap">
                  <img src={item.image} alt={item.title} loading="lazy" className="highlight-card__img" />
                  <div className="highlight-card__overlay" />
                </div>

                {/* Content overlay */}
                <div className="highlight-card__content">
                  <span
                    className="highlight-card__cat"
                    style={{ background: catStyle.bg }}
                  >
                    <Star size={10} fill="white" color="white" />
                    {item.category}
                  </span>
                  <div className="highlight-card__text">
                    <h3 className="highlight-card__title">{item.title}</h3>
                    <p className="highlight-card__desc">{item.description}</p>
                    <span className="highlight-card__year">{item.year}</span>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <motion.div
            className="hl-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <button className="hl-lightbox__close" onClick={close} aria-label="Close"><X size={22} /></button>

            <motion.div
              key={lightboxIdx}
              className="hl-lightbox__content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.35 }}
              onClick={e => e.stopPropagation()}
            >
              <img
                src={highlightMoments[lightboxIdx].image}
                alt={highlightMoments[lightboxIdx].title}
                className="hl-lightbox__img"
              />
              <div className="hl-lightbox__info">
                <span className="hl-lightbox__cat"
                  style={{ background: CATEGORY_COLORS[highlightMoments[lightboxIdx].category]?.bg || '#0891B2' }}
                >
                  {highlightMoments[lightboxIdx].category}
                </span>
                <h3 className="hl-lightbox__title">{highlightMoments[lightboxIdx].title}</h3>
                <p className="hl-lightbox__desc">{highlightMoments[lightboxIdx].description}</p>
                <span className="hl-lightbox__year">{highlightMoments[lightboxIdx].year}</span>
                <div className="hl-lightbox__nav-row">
                  <span className="hl-lightbox__counter">{lightboxIdx + 1} / {highlightMoments.length}</span>
                </div>
              </div>
            </motion.div>

            <button className="hl-lightbox__nav hl-lightbox__nav--prev" onClick={e => { e.stopPropagation(); prev(); }}><ChevronLeft size={26} /></button>
            <button className="hl-lightbox__nav hl-lightbox__nav--next" onClick={e => { e.stopPropagation(); next(); }}><ChevronRight size={26} /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Highlights;
