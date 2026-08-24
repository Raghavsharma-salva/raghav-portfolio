import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';
import { scrollToTop } from '../utils/scroll';

export function Footer() {

  return (
    <footer className="relative border-t border-white/10 bg-[#050507] pt-16 pb-12 px-4 sm:px-6 md:px-12 z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-gradient-to-b from-white to-zinc-400 p-[1px] shadow-sm">
              <div className="w-full h-full bg-[#08080a] rounded-full flex items-center justify-center font-mono font-bold text-xs text-white">
                RS
              </div>
            </div>
            <span className="font-display font-bold text-lg text-white">Raghav Sharma</span>
          </div>
          <p className="mt-2 text-xs sm:text-sm text-zinc-400 font-mono">
            2nd Year CSE · Systems & Software Developer · Lovely Professional University
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-3">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-full liquid-glass text-zinc-400 hover:text-white transition-colors"
            aria-label="GitHub Profile"
            data-cursor="pointer"
          >
            <GithubIcon size={17} />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-full liquid-glass text-zinc-400 hover:text-white transition-colors"
            aria-label="LinkedIn Profile"
            data-cursor="pointer"
          >
            <LinkedinIcon size={17} />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="p-2.5 rounded-full liquid-glass text-zinc-400 hover:text-white transition-colors"
            aria-label="Email Raghav Sharma"
            data-cursor="pointer"
          >
            <Mail size={17} />
          </a>
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full liquid-glass text-zinc-300 hover:text-white text-xs font-mono transition-colors cursor-pointer"
          data-cursor="pointer"
        >
          <span>BACK TO TOP</span>
          <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>

      {/* Copyright Line */}
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
        <div>© 2026 Raghav Sharma. All rights reserved.</div>
        <div>Monochrome Liquid Glass Aesthetic · React 19 & Tailwind</div>
      </div>
    </footer>
  );
}
