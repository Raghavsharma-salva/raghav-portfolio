import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, X } from 'lucide-react';

export function Toast({ isVisible, message, onClose }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          className="fixed bottom-8 right-8 z-50 flex items-center gap-3 px-5 py-3.5 rounded-2xl liquid-glass-elevated text-white shadow-2xl"
        >
          <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-white/10 text-white border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
            <CheckCircle2 size={18} />
          </div>
          <div className="text-sm">
            <p className="font-medium text-zinc-100">{message}</p>
          </div>
          <button
            onClick={onClose}
            className="ml-2 p-1 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close notification"
          >
            <X size={14} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
