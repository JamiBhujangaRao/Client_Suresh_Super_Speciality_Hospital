// ============================================================
//  App.js — Root application component (updated with new sections)
// ============================================================

import React, { Suspense, lazy } from 'react';
import { AppProvider } from './context/AppContext';

// Eager loaded — critical path
import Navbar            from './components/Navbar';
import Hero              from './components/Hero';
import AppointmentModal  from './components/AppointmentModal';
import Toast             from './components/Toast';
import WhatsAppFAB       from './components/WhatsAppFAB';

// Lazy loaded below-fold sections
const About          = lazy(() => import('./components/About'));
const Services       = lazy(() => import('./components/Services'));
const Doctors        = lazy(() => import('./components/Doctors'));
const Testimonials   = lazy(() => import('./components/Testimonials'));
const WhyChooseUs    = lazy(() => import('./components/WhyChooseUs'));
const Highlights     = lazy(() => import('./components/Highlights'));
const Gallery        = lazy(() => import('./components/Gallery'));
const InstagramFeed  = lazy(() => import('./components/InstagramFeed'));
const Contact        = lazy(() => import('./components/Contact'));
const Footer         = lazy(() => import('./components/Footer'));

const SectionLoader = () => (
  <div style={{
    padding: '80px 0',
    background: 'var(--off-white)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }}>
    <div style={{
      width: '48px',
      height: '48px',
      borderRadius: '50%',
      border: '3px solid var(--gray-200)',
      borderTopColor: 'var(--teal)',
      animation: 'spin-slow 0.8s linear infinite',
    }} />
  </div>
);

function App() {
  return (
    <AppProvider>
      {/* Global overlays */}
      <AppointmentModal />
      <Toast />
      <WhatsAppFAB />

      <div className="app" id="app-root">
        <Navbar />

        <main id="main-content">
          <Hero />

          <Suspense fallback={<SectionLoader />}>
            <About />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <Services />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <Doctors />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <Testimonials />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <WhyChooseUs />
          </Suspense>

          {/* NEW: Award & milestone highlights */}
          <Suspense fallback={<SectionLoader />}>
            <Highlights />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <Gallery />
          </Suspense>

          {/* NEW: Instagram posts showcase */}
          <Suspense fallback={<SectionLoader />}>
            <InstagramFeed />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <Contact />
          </Suspense>
        </main>

        <Suspense fallback={<div style={{ background: 'var(--navy)', height: '200px' }} />}>
          <Footer />
        </Suspense>
      </div>
    </AppProvider>
  );
}

export default App;
