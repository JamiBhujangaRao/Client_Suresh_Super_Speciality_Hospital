// ============================================================
//  Toast.jsx — Floating toast notifications
// ============================================================

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react';
import { useApp } from '../context/AppContext';
import './Toast.css';

const ICONS = {
  success: <CheckCircle size={20} />,
  error:   <AlertCircle  size={20} />,
  info:    <Info         size={20} />,
};

const Toast = () => {
  const { toast, showToast } = useApp();

  return (
    <div className="toast-container" aria-live="polite" aria-atomic="true">
      <AnimatePresence>
        {toast && (
          <motion.div
            className={`toast toast--${toast.type || 'info'}`}
            initial={{ opacity: 0, x: 60, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 60, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
            role="alert"
          >
            <div className="toast__icon">{ICONS[toast.type] || ICONS.info}</div>
            <p className="toast__message">{toast.message}</p>
            <button
              className="toast__close"
              onClick={() => showToast(null)}
              aria-label="Dismiss notification"
            >
              <X size={14} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Toast;
