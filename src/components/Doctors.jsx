// ============================================================
//  Doctors.jsx — Professional doctor cards with pro headshots
// ============================================================

import React from "react";
import { motion } from "framer-motion";
import { Award, GraduationCap, Clock, CheckCircle2 } from "lucide-react";
import { doctors } from "../data/data";
import { useApp } from "../context/AppContext";
import "./Doctors.css";

const DoctorCard = ({ doctor, index }) => {
  const { openModal } = useApp();
  const isLeft = index % 2 === 0;

  return (
    <motion.article
      className="doc-card"
      initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        delay: index * 0.12,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{ "--doc-color": doctor.color }}
    >
      {/* Photo column */}
      <div className="doc-card__photo-col">
        <div className="doc-card__photo-frame">
          <img
            src={doctor.image}
            alt={`${doctor.name}, ${doctor.designation}`}
            loading="lazy"
            className="doc-card__photo"
          />
          {/* Decorative ring */}
          <div className="doc-card__photo-ring" />
        </div>

        {/* Floating experience badge */}
        <motion.div
          className="doc-card__exp-badge"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.4 + index * 0.1,
            type: "spring",
            stiffness: 260,
          }}
        >
          <Clock size={13} />
          <span>{doctor.experience}</span>
        </motion.div>
      </div>

      {/* Info column */}
      <div className="doc-card__info">
        <div className="doc-card__top">
          <div className="doc-card__name-row">
            <h3 className="doc-card__name">{doctor.name}</h3>
            <span className="doc-card__desig" style={{ color: doctor.color }}>
              {doctor.designation}
            </span>
          </div>
          <div className="doc-card__quals">
            <GraduationCap size={14} />
            <span>{doctor.qualifications}</span>
          </div>
          <div
            className="doc-card__speciality-tag"
            style={{
              background: `${doctor.color}18`,
              color: doctor.color,
              borderColor: `${doctor.color}30`,
            }}
          >
            {doctor.speciality}
          </div>
        </div>

        <p className="doc-card__bio">{doctor.description}</p>

        <div className="doc-card__highlights">
          {doctor.highlights.map((h) => (
            <div key={h} className="doc-card__highlight">
              <CheckCircle2
                size={14}
                style={{ color: doctor.color, flexShrink: 0 }}
              />
              <span>{h}</span>
            </div>
          ))}
        </div>

        <button
          className="doc-card__btn btn"
          style={{
            background: `linear-gradient(135deg, ${doctor.color} 0%, ${doctor.color}CC 100%)`,
            color: "white",
            boxShadow: `0 8px 24px ${doctor.color}35`,
          }}
          onClick={openModal}
        >
          Book Appointment with {doctor.name}
        </button>
      </div>
    </motion.article>
  );
};

const Doctors = () => (
  <section id="doctors" className="doctors">
    <div className="section-container">
      {/* Header */}
      <div className="doctors__header">
        <motion.span
          className="section-tag"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          ✦ Our Specialists
        </motion.span>

        <motion.h2
          className="section-title section-title--lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7 }}
        >
          Meet the Experts Behind
          <br />
          <span className="doctors__title-accent">Your Recovery</span>
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{ maxWidth: 600, margin: "0 auto" }}
        >
          Our multi-specialist team combines decades of expertise with genuine
          compassion — ensuring every patient receives the very best possible
          care.
        </motion.p>
      </div>

      {/* Doctor Cards */}
      <div className="doctors__list">
        {doctors.map((doc, i) => (
          <DoctorCard key={doc.id} doctor={doc} index={i} />
        ))}
      </div>

      {/* Banner */}
      <motion.div
        className="doctors__banner"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        <img
          src="/images/logo.png"
          alt="Hospital logo"
          className="doctors__banner-logo"
        />
        <div>
          <div className="doctors__banner-title">
            More Specialists Available On-Call
          </div>
          <div className="doctors__banner-sub">
            We collaborate with visiting consultants in Cardiology, Neurology,
            Orthopaedics, and more.
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Doctors;
