import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  FileText,
  ExternalLink,
  Mail,
  Phone,
  Terminal,
  Volume2,
  VolumeX,
  Code2,
  Sparkles,
  Compass,
  Trophy,
  Cpu,
  Layers,
  X,
} from 'lucide-react';
import { sound } from '../utils/audio';
import { PERSONAL_INFO } from '../data/portfolioData';

import { scrollToSection as scrollHelper } from '../utils/scroll';

export function CommandPalette({ isOpen, onClose, onOpenResume, onOpenTerminal, onShowToast }) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(() => sound.isEnabled());
  const inputRef = useRef(null);

  // Focus input and play chirp when opened
  useEffect(() => {
    if (isOpen) {
      sound.playCommand();
      const timer = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleClose = () => {
    setQuery('');
    setSelectedIndex(0);
    onClose();
  };

  const handleNavigate = (id) => {
    onClose();
    sound.playGlassClick();
    scrollHelper(id);
  };

  const copyToClipboard = (text, label) => {
    onClose();
    sound.playSuccess();
    navigator.clipboard.writeText(text);
    if (onShowToast) onShowToast(`${label} copied to clipboard!`);
  };

  // Commands definition
  const allCommands = [
    // Navigation
    {
      id: 'nav-home',
      group: 'Navigation',
      title: 'Home // Top',
      subtitle: 'Jump to hero section & profile',
      icon: Compass,
      action: () => handleNavigate('hero'),
      keywords: 'home hero start top raghav',
    },
    {
      id: 'nav-about',
      group: 'Navigation',
      title: 'About Raghav Sharma',
      subtitle: '2nd Year B.Tech CSE at Lovely Professional University',
      icon: Code2,
      action: () => handleNavigate('about'),
      keywords: 'about background bio lpu university student',
    },
    {
      id: 'nav-projects',
      group: 'Navigation',
      title: 'Projects & Systems Builds',
      subtitle: 'MarketPulse 2.0, FireWatch Nexus, IoT Freshness, Compressor',
      icon: Layers,
      action: () => handleNavigate('projects'),
      keywords: 'projects portfolio work builds apps code',
    },
    {
      id: 'nav-skills',
      group: 'Navigation',
      title: 'Technical Capabilities & Stack',
      subtitle: 'C++, Linux, PostgreSQL, FastAPI, Python, Arduino',
      icon: Cpu,
      action: () => handleNavigate('skills'),
      keywords: 'skills tech stack languages tools posix bash',
    },
    {
      id: 'nav-learning',
      group: 'Navigation',
      title: 'Continuous Learning & C++20 Drills',
      subtitle: 'Binary Trees, Linux POSIX streams, PostgreSQL schemas',
      icon: Terminal,
      action: () => handleNavigate('learning'),
      keywords: 'learning dsa practice c++20 algorithms growth',
    },
    {
      id: 'nav-journey',
      group: 'Navigation',
      title: 'Timeline & Milestones',
      subtitle: 'Academic progress and hackathon journey',
      icon: Compass,
      action: () => handleNavigate('journey'),
      keywords: 'journey timeline history milestones education',
    },
    {
      id: 'nav-credentials',
      group: 'Navigation',
      title: 'Verified Certifications & Credentials',
      subtitle: 'UC Santa Cruz, Deloitte, GeeksforGeeks, Infosys',
      icon: Trophy,
      action: () => handleNavigate('credentials'),
      keywords: 'credentials certificates ucsc coursera deloitte verify awards',
    },
    {
      id: 'nav-resume',
      group: 'Navigation',
      title: 'Curriculum Vitae (CV)',
      subtitle: 'Verified academic and project resume',
      icon: FileText,
      action: () => handleNavigate('resume'),
      keywords: 'resume cv curriculum vitae experience',
    },
    {
      id: 'nav-contact',
      group: 'Navigation',
      title: 'Get in Touch // Contact',
      subtitle: 'Direct email and collaboration form',
      icon: Mail,
      action: () => handleNavigate('contact'),
      keywords: 'contact email message connect hire collaborate',
    },

    // Quick Actions
    {
      id: 'act-view-resume',
      group: 'Actions & Utilities',
      title: 'View Interactive Resume Modal',
      subtitle: 'Open clean in-browser CV viewer',
      icon: FileText,
      action: () => {
        onClose();
        sound.playGlassClick();
        if (onOpenResume) onOpenResume();
      },
      keywords: 'view resume cv modal experience background',
    },
    {
      id: 'act-terminal',
      group: 'Actions & Utilities',
      title: 'Open Systems Terminal CLI (~)',
      subtitle: 'Interactive shell diagnostics & C++ benchmark',
      icon: Terminal,
      action: () => {
        onClose();
        sound.playCommand();
        if (onOpenTerminal) onOpenTerminal();
      },
      keywords: 'terminal cli shell command line bash console system',
    },
    {
      id: 'act-marketpulse-demo',
      group: 'Live Demos',
      title: 'Launch MarketPulse 2.0 Live Demo',
      subtitle: 'Full-stack financial analytics & ML platform',
      icon: ExternalLink,
      action: () => {
        onClose();
        sound.playGlassClick();
        window.open('https://frontend-indol-eight-85.vercel.app/#intelligence', '_blank');
      },
      keywords: 'marketpulse demo finance trading stock market ml fastapi',
    },
    {
      id: 'act-firewatch-demo',
      group: 'Live Demos',
      title: 'Launch FireWatch Nexus Live Demo',
      subtitle: 'Top 8 Hackathon 24-Hour Finalist alert platform',
      icon: ExternalLink,
      action: () => {
        onClose();
        sound.playGlassClick();
        window.open('https://firewatchnexus.vercel.app/', '_blank');
      },
      keywords: 'firewatch nexus demo hackathon top 8 leaflet map',
    },
    {
      id: 'act-ucsc-verify',
      group: 'Certifications',
      title: 'Verify UCSC C/C++ Specialization (Coursera)',
      subtitle: 'Official UC Santa Cruz Verification: PHZNKK2D4V8W',
      icon: Trophy,
      action: () => {
        onClose();
        sound.playGlassClick();
        window.open('https://coursera.org/verify/specialization/PHZNKK2D4V8W', '_blank');
      },
      keywords: 'ucsc coursera verify certificate c++ ira pohl santacruz',
    },
    {
      id: 'act-copy-email',
      group: 'Contact & Socials',
      title: `Copy Email (${PERSONAL_INFO.email})`,
      subtitle: 'Copy direct email address to clipboard',
      icon: Mail,
      action: () => copyToClipboard(PERSONAL_INFO.email, 'Email address'),
      keywords: 'copy email raghavsharma282007 gmail mail',
    },
    {
      id: 'act-copy-phone',
      group: 'Contact & Socials',
      title: `Copy Phone (${PERSONAL_INFO.phone})`,
      subtitle: 'Copy mobile phone number to clipboard',
      icon: Phone,
      action: () => copyToClipboard(PERSONAL_INFO.phone, 'Phone number'),
      keywords: 'copy phone mobile call whatsapp',
    },
    {
      id: 'act-open-github',
      group: 'Contact & Socials',
      title: 'Open GitHub Profile (@Raghavsharma-salva)',
      subtitle: 'Explore source code and repository commits',
      icon: ExternalLink,
      action: () => {
        onClose();
        sound.playGlassClick();
        window.open(PERSONAL_INFO.github, '_blank');
      },
      keywords: 'github code repo git raghavsharma-salva',
    },
    {
      id: 'act-open-linkedin',
      group: 'Contact & Socials',
      title: 'Open LinkedIn Profile',
      subtitle: 'Connect professionally with Raghav Sharma',
      icon: ExternalLink,
      action: () => {
        onClose();
        sound.playGlassClick();
        window.open(PERSONAL_INFO.linkedin, '_blank');
      },
      keywords: 'linkedin connect network profile',
    },
    {
      id: 'act-toggle-audio',
      group: 'Actions & Utilities',
      title: soundEnabled ? 'Mute Tactile Audio' : 'Enable Tactile Audio',
      subtitle: soundEnabled ? 'Disable Web Audio sound feedback' : 'Enable rich synthesized glass clicks',
      icon: soundEnabled ? VolumeX : Volume2,
      action: () => {
        const next = sound.toggle();
        setSoundEnabled(next);
        if (onShowToast) onShowToast(next ? 'Sound FX Enabled' : 'Sound FX Muted');
      },
      keywords: 'sound audio sfx mute unmute volume web audio',
    },
  ];

  // Filter commands
  const filteredCommands = allCommands.filter((cmd) => {
    if (!query.trim()) return true;
    const cleanQuery = query.toLowerCase().trim();
    return (
      cmd.title.toLowerCase().includes(cleanQuery) ||
      cmd.subtitle.toLowerCase().includes(cleanQuery) ||
      cmd.keywords.toLowerCase().includes(cleanQuery)
    );
  });

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => {
        const next = (prev + 1) % filteredCommands.length;
        sound.playHoverTone();
        return next;
      });
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => {
        const next = (prev - 1 + filteredCommands.length) % filteredCommands.length;
        sound.playHoverTone();
        return next;
      });
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredCommands[selectedIndex]) {
        filteredCommands[selectedIndex].action();
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      handleClose();
    }
  };

  // Group commands for visual clarity
  const groupedCommands = filteredCommands.reduce((acc, cmd) => {
    if (!acc[cmd.group]) acc[cmd.group] = [];
    acc[cmd.group].push(cmd);
    return acc;
  }, {});

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 pb-6 overflow-y-auto">
        {/* Frosted Obsidian Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="fixed inset-0 bg-[#050507]/90 backdrop-blur-2xl"
        />

        {/* Command Palette Modal Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: -10 }}
          transition={{ type: 'spring', damping: 28, stiffness: 340 }}
          className="relative w-full max-w-2xl rounded-3xl liquid-glass-elevated border border-white/20 shadow-2xl overflow-hidden z-10"
        >
          {/* Top Search Input Box */}
          <div className="relative flex items-center px-5 sm:px-6 py-4 border-b border-white/10 bg-white/[0.02]">
            <Search size={18} className="text-zinc-400 shrink-0" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Type a command, section name, or project..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSelectedIndex(0);
              }}
              onKeyDown={handleKeyDown}
              className="w-full ml-3.5 bg-transparent text-sm sm:text-base text-white placeholder-zinc-500 focus:outline-none font-mono"
            />
            {query && (
              <button
                onClick={() => {
                  setQuery('');
                  inputRef.current?.focus();
                }}
                className="p-1 rounded-md text-zinc-500 hover:text-white"
              >
                <X size={15} />
              </button>
            )}
            <div className="hidden sm:flex items-center gap-1 ml-3 px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-400">
              <span>ESC</span>
            </div>
          </div>

          {/* Command List Results */}
          <div className="max-h-[60vh] overflow-y-auto p-3 sm:p-4 space-y-4">
            {filteredCommands.length === 0 ? (
              <div className="py-12 text-center text-zinc-500 font-mono text-xs">
                No matching actions found for "{query}"
              </div>
            ) : (
              Object.entries(groupedCommands).map(([groupName, items]) => (
                <div key={groupName}>
                  <div className="px-3 py-1 text-[11px] font-mono uppercase tracking-wider text-zinc-500 font-semibold">
                    {groupName}
                  </div>
                  <div className="mt-1 space-y-1">
                    {items.map((cmd) => {
                      const globalIdx = filteredCommands.findIndex((c) => c.id === cmd.id);
                      const isSelected = globalIdx === selectedIndex;
                      const Icon = cmd.icon;

                      return (
                        <button
                          key={cmd.id}
                          onClick={cmd.action}
                          onMouseEnter={() => setSelectedIndex(globalIdx)}
                          className={`w-full px-3.5 py-3 rounded-2xl flex items-center justify-between transition-all text-left ${
                            isSelected
                              ? 'bg-white text-black font-semibold shadow-lg shadow-white/10'
                              : 'text-zinc-300 hover:bg-white/5'
                          }`}
                          data-cursor="pointer"
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                                isSelected
                                  ? 'bg-black/10 text-black'
                                  : 'bg-white/5 border border-white/10 text-zinc-400'
                              }`}
                            >
                              <Icon size={16} />
                            </div>
                            <div>
                              <div className="text-sm font-medium leading-tight">
                                {cmd.title}
                              </div>
                              <div
                                className={`text-xs mt-0.5 ${
                                  isSelected ? 'text-zinc-700' : 'text-zinc-500 font-mono'
                                }`}
                              >
                                {cmd.subtitle}
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            {isSelected && (
                              <div className="flex items-center gap-1 text-xs font-mono">
                                <span>Press</span>
                                <span className="px-1.5 py-0.5 rounded bg-black/15 text-black font-bold">↵</span>
                              </div>
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Shortcuts Hint */}
          <div className="px-5 py-3 border-t border-white/10 bg-white/[0.02] flex flex-wrap items-center justify-between text-[11px] font-mono text-zinc-400">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 rounded bg-white/10 border border-white/15 text-white">↑</kbd>
                <kbd className="px-1.5 py-0.5 rounded bg-white/10 border border-white/15 text-white">↓</kbd>
                <span>Navigate</span>
              </span>
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 rounded bg-white/10 border border-white/15 text-white">↵</kbd>
                <span>Select</span>
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Sparkles size={12} className="text-red-400" />
              <span>Raghav Sharma // <span className="text-red-400 font-semibold">Systems Developer</span></span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
