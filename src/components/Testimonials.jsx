// ============================================================
//  Testimonials.jsx — Auto-scrolling testimonial carousel
// ============================================================

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../data/data';
import './Testimonials.css';

const StarRating = ({ rating }) => (
  <div className="star-row" aria-label={`${rating} out of 5 stars`}>
    {[1,2,3,4,5].map((s) => (
      <Star
        key={s}
        size={15}
        fill={s <= rating ? '#F59E0B' : 'none'}
        color={s <= rating ? '#F59E0B' : '#D1D5DB'}
      />
    ))}
  </div>
);

const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? 100 : -100, opacity: 0, scale: 0.96 }),
  center: { x: 0, opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.16,1,0.3,1] } },
  exit:  (dir) => ({ x: dir > 0 ? -100 : 100, opacity: 0, scale: 0.96, transition: { duration: 0.3 } }),
};

const Testimonials = () => {
  const [page, setPage]       = useState(0);
  const [direction, setDir]   = useState(1);
  const [paused, setPaused]   = useState(false);
  const timerRef              = useRef(null);

  const total    = testimonials.length;
  const perPage  = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1;
  const pages    = Math.ceil(total / perPage);

  const goTo = useCallback((idx) => {
    setDir(idx > page ? 1 : -1);
    setPage(idx < 0 ? pages - 1 : idx >= pages ? 0 : idx);
  }, [page, pages]);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => goTo(page + 1), 4500);
    return () => clearInterval(timerRef.current);
  }, [page, paused, goTo]);

  const visibleItems = testimonials.slice(page * perPage, page * perPage + perPage);

  return (
    <section id="testimonials" className="testimonials">
      {/* BG wave */}
      <div className="testimonials__bg-wave" aria-hidden="true" />

      <div className="section-container">
        {/* Header */}
        <div className="testimonials__header">
          <motion.span
            className="section-tag"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            ✦ Patient Stories
          </motion.span>

          <motion.h2
            className="section-title section-title--lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            What Our Patients
            <br />
            <span className="testimonials__title-accent">Have to Say</span>
          </motion.h2>

          {/* Rating row */}
          <motion.div
            className="testimonials__ratings-row"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="testimonials__rating-badge">
              <StarRating rating={5} />
              <span><strong>5.0</strong> on Google · 47 reviews</span>
            </div>
            <div className="testimonials__rating-divider" />
            <div className="testimonials__rating-badge">
              <StarRating rating={5} />
              <span><strong>4.9</strong> on Justdial · 799 ratings</span>
            </div>
          </motion.div>
        </div>

        {/* Carousel */}
        <div
          className="testimonials__carousel"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={page}
              className="testimonials__slide"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              {visibleItems.map((t) => (
                <article key={t.id} className="testimonial-card">
                  <div className="testimonial-card__quote-icon">
                    <Quote size={24} />
                  </div>
                  <StarRating rating={t.rating} />
                  <p className="testimonial-card__text">{t.text}</p>
                  <footer className="testimonial-card__footer">
                    <div className="testimonial-card__avatar">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="testimonial-card__name">{t.name}</div>
                      <div className="testimonial-card__meta">{t.location} · {t.service}</div>
                    </div>
                    <div className="testimonial-card__date">{t.date}</div>
                  </footer>
                </article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="testimonials__controls">
          <button
            className="testimonials__nav-btn"
            onClick={() => goTo(page - 1)}
            aria-label="Previous testimonials"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="testimonials__dots">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                className={`testimonials__dot ${i === page ? 'testimonials__dot--active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>

          <button
            className="testimonials__nav-btn"
            onClick={() => goTo(page + 1)}
            aria-label="Next testimonials"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
