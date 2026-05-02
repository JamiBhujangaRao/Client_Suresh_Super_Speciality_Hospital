// ============================================================
//  Gallery.jsx — Masonry-style gallery with lightbox
// ============================================================

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { galleryImages } from '../data/data';
import './Gallery.css';

const CATEGORIES = ['All', 'Facility', 'Doctors', 'Care'];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex]   = useState(null);

  const filtered = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox  = (i) => { setLightboxIndex(i); document.body.style.overflow = 'hidden'; };
  const closeLightbox = () => { setLightboxIndex(null); document.body.style.overflow = ''; };
  const prevImage     = () => setLightboxIndex((i) => (i - 1 + filtered.length) % filtered.length);
  const nextImage     = () => setLightboxIndex((i) => (i + 1) % filtered.length);

  // Keyboard nav
  React.useEffect(() => {
    const handler = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape')      closeLightbox();
      if (e.key === 'ArrowLeft')   prevImage();
      if (e.key === 'ArrowRight')  nextImage();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  });

  return (
    <section id="gallery" className="gallery">
      <div className="section-container">
        {/* Header */}
        <div className="gallery__header">
          <motion.span
            className="section-tag"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            ✦ Photo Gallery
          </motion.span>

          <motion.h2
            className="section-title section-title--lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            A Glimpse Inside
            <br />
            <span className="gallery__title-accent">Our Hospital</span>
          </motion.h2>

          {/* Filter tabs */}
          <motion.div
            className="gallery__filters"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`gallery__filter-btn ${activeCategory === cat ? 'gallery__filter-btn--active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Grid */}
        <motion.div
          className="gallery__grid"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((img, i) => (
              <motion.button
                key={img.id}
                className="gallery__item"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                onClick={() => openLightbox(i)}
                aria-label={`View ${img.alt}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="gallery__img"
                />
                <div className="gallery__item-overlay">
                  <ZoomIn size={28} />
                  <span>{img.alt}</span>
                </div>
                <div className="gallery__item-tag">{img.category}</div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
          >
            {/* Close */}
            <button className="lightbox__close" onClick={closeLightbox} aria-label="Close lightbox">
              <X size={24} />
            </button>

            {/* Image */}
            <motion.div
              className="lightbox__img-wrap"
              key={lightboxIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.35 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filtered[lightboxIndex]?.src}
                alt={filtered[lightboxIndex]?.alt}
                className="lightbox__img"
              />
              <div className="lightbox__caption">
                {filtered[lightboxIndex]?.alt}
                <span className="lightbox__counter">
                  {lightboxIndex + 1} / {filtered.length}
                </span>
              </div>
            </motion.div>

            {/* Nav */}
            <button
              className="lightbox__nav lightbox__nav--prev"
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              aria-label="Previous image"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              className="lightbox__nav lightbox__nav--next"
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              aria-label="Next image"
            >
              <ChevronRight size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
