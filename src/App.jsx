import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { useScrollSpy } from './hooks/useScrollSpy';
import { useReducedMotion } from './hooks/useReducedMotion';
import { useSpotlight } from './hooks/useSpotlight';

import { CustomCursor } from './components/CustomCursor';
import { AmbientCanvas } from './components/AmbientCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { CurrentlyLearning } from './components/CurrentlyLearning';
import { Journey } from './components/Journey';
import { Achievements } from './components/Achievements';
import { ResumeSection } from './components/ResumeSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { CommandPalette } from './components/CommandPalette';
import { TerminalDrawer } from './components/TerminalDrawer';

const SECTIONS = ['hero', 'about', 'projects', 'skills', 'learning', 'journey', 'credentials', 'resume', 'contact'];

export function App() {
  const prefersReducedMotion = useReducedMotion();
  const { activeSection, isScrolled } = useScrollSpy(SECTIONS, 100);
  useSpotlight();

  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [toastState, setToastState] = useState({ isVisible: false, message: '' });

  const showToast = (message) => {
    setToastState({ isVisible: true, message });
    setTimeout(() => {
      setToastState({ isVisible: false, message: '' });
    }, 4000);
  };

  // Global Keyboard Shortcuts (Cmd+K / Ctrl+K & ` for Terminal)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      } else if (e.key === '`' || e.key === '~') {
        // Only toggle terminal if not typing in an input/textarea
        if (!['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) {
          e.preventDefault();
          setIsTerminalOpen((prev) => !prev);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Initialize smooth scrolling with Lenis
  useEffect(() => {
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    window.__lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      window.__lenis = null;
      lenis.destroy();
    };
  }, [prefersReducedMotion]);

  return (
    <div className="relative min-h-screen bg-[#050507] text-[#f1f3f7] selection:bg-white/20 selection:text-white">
      {/* Context-aware Magnetic Desktop Cursor */}
      <CustomCursor />

      {/* Interactive Constellation & Ambient Mesh Canvas */}
      <AmbientCanvas />

      {/* Floating Glassmorphic Navigation */}
      <Navbar
        activeSection={activeSection}
        isScrolled={isScrolled}
        onOpenResume={() => setIsResumeModalOpen(true)}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero
          onOpenResume={() => setIsResumeModalOpen(true)}
          onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
          onOpenTerminal={() => setIsTerminalOpen(true)}
        />
        <About />
        <Projects />
        <Skills />
        <CurrentlyLearning />
        <Journey />
        <Achievements />
        <ResumeSection
          isModalOpen={isResumeModalOpen}
          onToggleModal={setIsResumeModalOpen}
        />
        <Contact onShowToast={showToast} />
      </main>

      {/* Minimal Footer */}
      <Footer />

      {/* Interactive Command Palette (Cmd+K) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onOpenResume={() => setIsResumeModalOpen(true)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onShowToast={showToast}
      />

      {/* Systems Terminal CLI Drawer */}
      <TerminalDrawer
        isOpen={isTerminalOpen}
        onToggle={setIsTerminalOpen}
        onOpenResume={() => setIsResumeModalOpen(true)}
      />

      {/* Global Toast Notification */}
      <Toast
        isVisible={toastState.isVisible}
        message={toastState.message}
        onClose={() => setToastState({ isVisible: false, message: '' })}
      />
    </div>
  );
}

export default App;

