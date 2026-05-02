// ============================================================
//  InstagramFeed.jsx — Instagram highlighted posts showcase
//  Shows thumbnail cards linking to Instagram posts.
//  When embedUrl is provided, shows the actual Instagram embed.
//  NOTE: Replace embedUrl values in data.js with real post embed URLs.
// ============================================================

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Heart, ExternalLink, X, Play } from 'lucide-react';
import { instagramPosts, hospitalInfo } from '../data/data';
import './InstagramFeed.css';

const PostCard = ({ post, index, onOpen }) => (
  <motion.button
    className="ig-card"
    initial={{ opacity: 0, y: 40, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ delay: index * 0.07, duration: 0.6, ease: [0.16,1,0.3,1] }}
    whileHover={{ y: -6, scale: 1.02 }}
    onClick={() => onOpen(post)}
    aria-label={`View post: ${post.topic}`}
  >
    {/* Thumbnail */}
    <div className="ig-card__img-wrap">
      <img src={post.thumbnail} alt={post.topic} loading="lazy" className="ig-card__img" />
      <div className="ig-card__overlay">
        <div className="ig-card__play-btn">
          <Play size={24} fill="white" color="white" />
        </div>
      </div>
      {/* IG gradient */}
      <div className="ig-card__grad" />
    </div>

    {/* Meta */}
    <div className="ig-card__meta">
      <span className="ig-card__topic">{post.topic}</span>
      <div className="ig-card__stats">
        <span className="ig-card__likes"><Heart size={12} fill="#EC4899" color="#EC4899" /> {post.likes}</span>
        <Instagram size={14} className="ig-card__ig-icon" />
      </div>
    </div>

    <p className="ig-card__caption">{post.caption}</p>
  </motion.button>
);

// Post modal — shows real embed if available, else a styled card
const PostModal = ({ post, onClose }) => {
  const hasEmbed = post?.embedUrl && post.embedUrl.length > 10;

  if (!post) return null;

  return (
    <motion.div
      className="ig-modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className={`ig-modal-panel ${hasEmbed ? 'ig-modal-panel--embed' : 'ig-modal-panel--card'}`}
        initial={{ scale: 0.88, opacity: 0, y: 40 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.88, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 280, damping: 28 }}
        onClick={e => e.stopPropagation()}
      >
        <button className="ig-modal__close" onClick={onClose} aria-label="Close"><X size={20} /></button>

        {hasEmbed ? (
          /* Real Instagram embed */
          <div className="ig-modal__embed-wrap">
            <iframe
              src={post.embedUrl}
              title={`Instagram post: ${post.topic}`}
              frameBorder="0"
              scrolling="no"
              allowtransparency="true"
              className="ig-modal__iframe"
              loading="lazy"
            />
          </div>
        ) : (
          /* Fallback card when no embed URL provided */
          <>
            <div className="ig-modal__img-wrap">
              <img src={post.thumbnail} alt={post.topic} className="ig-modal__img" />
              <div className="ig-modal__img-overlay" />
              <div className="ig-modal__img-badge">
                <Instagram size={18} />
                <span>Instagram Reel / Post</span>
              </div>
            </div>
            <div className="ig-modal__body">
              <div className="ig-modal__header-row">
                <div className="ig-modal__profile">
                  <img src="/images/logo.png" alt="Hospital logo" className="ig-modal__profile-img" />
                  <div>
                    <div className="ig-modal__handle">@sureshsuperspecialityhospital</div>
                    <div className="ig-modal__verified">Suresh Super Speciality Hospital</div>
                  </div>
                </div>
                <span className="ig-modal__likes"><Heart size={16} fill="#EC4899" color="#EC4899" /> {post.likes}</span>
              </div>
              <p className="ig-modal__caption">{post.caption}</p>
              <div className="ig-modal__note">
                <span>🔗 View the full post on Instagram</span>
                <p>To embed real posts, update <code>embedUrl</code> in <code>data.js</code> with the Instagram embed URL from your post.</p>
              </div>
              <a
                href={post.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary ig-modal__ig-btn"
              >
                <Instagram size={17} /> Open on Instagram
              </a>
            </div>
          </>
        )}
      </motion.div>
    </motion.div>
  );
};

const InstagramFeed = () => {
  const [activePost, setActivePost] = useState(null);

  return (
    <section className="ig-feed">
      {/* BG decoration */}
      <div className="ig-feed__bg" aria-hidden="true" />

      <div className="section-container">
        {/* Header */}
        <div className="ig-feed__header">
          <motion.div
            className="ig-feed__ig-logo"
            initial={{ scale: 0, rotate: -30 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 250, damping: 18 }}
          >
            <Instagram size={28} />
          </motion.div>

          <motion.span
            className="section-tag"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >✦ Follow Us on Instagram</motion.span>

          <motion.h2
            className="section-title section-title--lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            Latest from Our
            <br /><span className="ig-feed__title-accent">Medical Library</span>
          </motion.h2>

          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ maxWidth: 580, margin: '0 auto 12px' }}
          >
            Watch our educational reels and procedure highlights on Instagram.
            Informative content to help you understand your health better.
          </motion.p>

          <motion.a
            href={hospitalInfo.instagram}
            target="_blank"
            rel="noreferrer"
            className="ig-feed__handle-link"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
          >
            <Instagram size={16} />
            @sureshsuperspecialityhospital
            <ExternalLink size={13} />
          </motion.a>
        </div>

        {/* Posts Grid */}
        <div className="ig-feed__grid">
          {instagramPosts.map((post, i) => (
            <PostCard key={post.id} post={post} index={i} onOpen={setActivePost} />
          ))}
        </div>

        {/* Follow CTA */}
        <motion.div
          className="ig-feed__cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <a
            href={hospitalInfo.instagram}
            target="_blank"
            rel="noreferrer"
            className="btn ig-feed__follow-btn"
          >
            <Instagram size={18} />
            Follow on Instagram
            <ExternalLink size={15} />
          </a>
        </motion.div>
      </div>

      {/* Post Modal */}
      <AnimatePresence>
        {activePost && <PostModal post={activePost} onClose={() => setActivePost(null)} />}
      </AnimatePresence>
    </section>
  );
};

export default InstagramFeed;
