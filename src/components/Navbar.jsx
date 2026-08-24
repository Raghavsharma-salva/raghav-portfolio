import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, FileText, Command } from 'lucide-react';
import { AudioToggle } from './AudioToggle';
import { sound } from '../utils/audio';
import { scrollToSection } from '../utils/scroll';

const NAV_ITEMS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'learning', label: 'Learning' },
  { id: 'journey', label: 'Journey' },
  { id: 'credentials', label: 'Credentials' },
  { id: 'contact', label: 'Contact' },
];

export function Navbar({ activeSection, isScrolled, onOpenResume, onOpenCommandPalette }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const handleNavClick = (id) => {
    sound.playGlassClick();
    setMobileMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex justify-center px-3 sm:px-6 py-3 sm:py-5 pointer-events-none">
      <nav
        className={`pointer-events-auto flex items-center justify-between gap-2 sm:gap-4 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-300 ${
          isScrolled
            ? 'liquid-glass-elevated border-white/20'
            : 'liquid-glass'
        } max-w-5xl w-full`}
        aria-label="Main Navigation"
      >
        {/* Brand / Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('hero');
          }}
          className="flex items-center gap-2.5 group cursor-pointer focus:outline-none"
          data-cursor="pointer"
        >
          <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-b from-white via-zinc-300 to-zinc-600 p-[1px] shadow-sm shrink-0">
            <div className="w-full h-full bg-[#08080a] rounded-full flex items-center justify-center font-mono font-bold text-xs text-white group-hover:bg-white/10 transition-colors">
              RS
            </div>
            {/* Red Leica-style accent dot */}
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-red-500 shadow-sm shadow-red-500/80 ring-2 ring-[#050507]" />
          </div>
          <span className="font-display font-semibold text-xs sm:text-sm tracking-tight text-white/90 group-hover:text-white transition-colors flex items-center gap-1.5">
            <span>Raghav<span className="hidden sm:inline"> Sharma</span></span>
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 hidden sm:inline-block shadow-sm shadow-red-500/80" />
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 bg-white/[0.04] p-1 rounded-full border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-3 py-1 rounded-full text-xs font-medium tracking-wide transition-colors ${
                  isActive ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'
                }`}
                data-cursor="pointer"
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 bg-white/15 rounded-full border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Right CTA Actions: Sound Toggle + Cmd+K + Resume + Contact */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Audio Feedback Synthesizer Toggle */}
          <AudioToggle />

          {/* Quick Cmd+K Search Trigger */}
          <button
            onClick={onOpenCommandPalette}
            className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full liquid-glass hover:bg-white/10 text-zinc-300 hover:text-white text-xs font-mono transition-colors"
            title="Open Command Palette (Cmd+K / Ctrl+K)"
            data-cursor="pointer"
          >
            <Command size={12} />
            <kbd className="px-1 py-0.2 rounded bg-white/10 text-[10px] text-zinc-400">⌘K</kbd>
          </button>

          <button
            onClick={() => {
              sound.playGlassClick();
              onOpenResume();
            }}
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-zinc-300 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25 transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
            data-cursor="pointer"
          >
            <FileText size={12} className="text-zinc-400" />
            <span>CV</span>
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            className="inline-flex items-center gap-1 px-3 sm:px-4 py-1.5 rounded-full text-xs font-medium text-black bg-white hover:bg-zinc-200 shadow-md shadow-white/10 transition-all cursor-pointer"
            data-cursor="pointer"
          >
            <span>Let's Talk</span>
            <ArrowUpRight size={13} />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => {
              sound.playGlassClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="lg:hidden p-2 rounded-full text-zinc-300 hover:text-white bg-white/5 border border-white/10 transition-colors"
            aria-label="Toggle navigation menu"
            data-cursor="pointer"
          >
            {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {/* Fullscreen Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(20px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-[#07080c]/95 flex flex-col justify-between p-6 sm:p-8 pointer-events-auto lg:hidden"
          >
            {/* Mobile Header */}
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-gradient-to-b from-white to-zinc-400 p-[1px] shadow-sm">
                  <div className="w-full h-full bg-[#08080a] rounded-full flex items-center justify-center font-mono font-bold text-xs text-white">
                    RS
                  </div>
                </div>
                <span className="font-display font-semibold text-base text-white">Raghav Sharma</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Nav Links */}
            <div className="flex flex-col gap-4 py-8">
              {NAV_ITEMS.map((item, index) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-left text-2xl sm:text-3xl font-display font-semibold tracking-tight py-2 flex items-center justify-between border-b border-white/5 ${
                      isActive ? 'text-white pl-2' : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="font-mono text-xs text-zinc-500 font-normal">0{index + 1}</span>
                  </motion.button>
                );
              })}
            </div>

            {/* Mobile Footer CTAs */}
            <div className="flex flex-col gap-3 pb-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full py-3.5 rounded-xl liquid-glass text-zinc-200 text-sm font-medium flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
              >
                <FileText size={16} className="text-zinc-400" />
                <span>View Full Resume</span>
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full py-3.5 rounded-xl bg-white text-black text-sm font-medium flex items-center justify-center gap-2 shadow-lg shadow-white/10"
              >
                <span>Get In Touch</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
