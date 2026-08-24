import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowUpRight, Terminal } from 'lucide-react';
import { GithubIcon } from './Icons';
import { useBodyScrollLock } from '../hooks/useBodyScrollLock';

export function ProjectModal({ project, isOpen, onClose }) {
  useBodyScrollLock(isOpen);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto overscroll-contain"
          data-lenis-prevent="true"
          onWheel={(e) => e.stopPropagation()}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#07080c]/85 backdrop-blur-xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 26, stiffness: 300 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl liquid-glass-elevated p-6 sm:p-8 md:p-10 shadow-2xl z-10 overscroll-contain"
            data-lenis-prevent="true"
            onWheel={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/15 text-zinc-400 hover:text-white transition-colors"
              aria-label="Close project modal"
            >
              <X size={20} />
            </button>

            {/* Header Badge & Category */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-white/10 text-zinc-200 border border-white/15">
                {project.badge}
              </span>
              <span className="text-xs font-mono text-zinc-500">
                {project.category} · {project.year}
              </span>
            </div>

            {/* Title & Tagline */}
            <h2 className="mt-4 font-display font-bold text-2xl sm:text-4xl text-white">
              {project.title}
            </h2>
            <p className="mt-2 text-base sm:text-lg text-zinc-300">
              {project.tagline}
            </p>

            {/* Description */}
            <div className="mt-6 pt-6 border-t border-white/10 text-zinc-400 leading-relaxed text-sm sm:text-base">
              {project.description}
            </div>

            {/* Key Engineering Highlights */}
            <div className="mt-8">
              <h3 className="font-display font-semibold text-lg text-white mb-4 flex items-center gap-2">
                <CheckCircle2 size={18} className="text-zinc-300" />
                <span>Key Engineering Highlights</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white/[0.03] border border-white/5 text-xs sm:text-sm text-zinc-300 leading-relaxed"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture / Technical Specifications */}
            {project.architecture && (
              <div className="mt-8 p-5 rounded-2xl liquid-glass border border-white/10">
                <h3 className="font-display font-semibold text-sm sm:text-base text-white mb-4 flex items-center gap-2">
                  <Terminal size={16} className="text-zinc-300" />
                  <span>System Architecture Breakdown</span>
                </h3>
                <div className="space-y-2 text-xs sm:text-sm">
                  {Object.entries(project.architecture).map(([key, val]) => (
                    <div key={key} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 py-1.5 border-b border-white/5 last:border-0">
                      <span className="font-mono text-zinc-500 capitalize min-w-[110px]">{key}:</span>
                      <span className="text-zinc-300">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technologies Grid */}
            <div className="mt-8">
              <h3 className="font-display font-semibold text-sm text-zinc-400 uppercase tracking-wider mb-3">
                Technologies & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg liquid-glass text-xs font-mono text-zinc-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black text-xs sm:text-sm font-semibold transition-colors shadow-lg shadow-white/10 hover:bg-zinc-200"
                  >
                    <span>Launch Live Demo</span>
                    <ArrowUpRight size={15} />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl liquid-glass hover:bg-white/15 text-zinc-200 text-xs sm:text-sm font-medium transition-colors"
                  >
                    <GithubIcon size={15} />
                    <span>View Repository</span>
                  </a>
                )}
              </div>

              <button
                onClick={onClose}
                className="px-4 py-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
              >
                Close (Esc)
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
