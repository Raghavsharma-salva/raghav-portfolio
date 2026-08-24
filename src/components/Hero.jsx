import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Code2, GraduationCap, Terminal, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { LiveTelemetryBar } from './LiveTelemetryBar';
import { sound } from '../utils/audio';
import { scrollToSection } from '../utils/scroll';

export function Hero({ onOpenResume, onOpenCommandPalette, onOpenTerminal }) {
  const scrollTo = (id) => {
    sound.playGlassClick();
    scrollToSection(id);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex flex-col justify-between pt-28 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto z-10"
    >
      {/* Top Live Telemetry & Quick Action Bar */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full pt-1 sm:pt-2"
      >
        <motion.div variants={itemVariants}>
          <LiveTelemetryBar
            onOpenCommandPalette={onOpenCommandPalette}
            onOpenTerminal={onOpenTerminal}
          />
        </motion.div>
      </motion.div>

      {/* Main Hero Split: Editorial Typography Left + Dark Liquid Glass Portrait Right */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="my-auto py-8 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center"
      >
        {/* Left Column: Headline & Bio */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Monogram / Subtitle */}
          <motion.div variants={itemVariants} className="flex items-center gap-2.5 mb-4 sm:mb-6">
            <div className="w-8 h-[2px] bg-red-500 shadow-sm shadow-red-500/80" />
            <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-zinc-300 uppercase">
              RAGHAV SHARMA // <span className="text-red-400">2ND YEAR B.TECH CSE</span>
            </span>
          </motion.div>

          {/* Bold Silver/White Monochromatic Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight leading-[1.06] text-white"
          >
            Computer Science <br className="hidden sm:inline" />
            <span className="bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
              Student & Developer
            </span>
          </motion.h1>

          {/* Narrative Subtitle */}
          <motion.p
            variants={itemVariants}
            className="mt-5 sm:mt-8 max-w-xl text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed font-normal"
          >
            2nd Year B.Tech CSE student at Lovely Professional University. Building software, experimenting with systems, Linux, PostgreSQL, and solving problems with C++ and DSA.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            variants={itemVariants}
            className="mt-6 sm:mt-10 flex flex-wrap items-center gap-2.5 sm:gap-4 w-full sm:w-auto"
          >
            {/* Primary CTA */}
            <button
              onClick={() => scrollTo('projects')}
              className="group relative inline-flex items-center justify-center gap-2.5 sm:gap-3 px-5 sm:px-8 py-3 sm:py-4 rounded-full bg-white text-black font-semibold text-xs sm:text-base hover:bg-zinc-200 shadow-2xl shadow-white/15 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer w-full min-[420px]:w-auto"
              data-cursor="pointer"
            >
              <span>View Projects</span>
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowDown size={14} />
              </div>
            </button>

            {/* Secondary CTA */}
            <button
              onClick={() => scrollTo('contact')}
              className="group inline-flex items-center justify-center gap-2 sm:gap-2.5 px-5 sm:px-8 py-3 sm:py-4 rounded-full liquid-glass hover:border-red-500/30 text-white font-medium text-xs sm:text-base transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer w-full min-[420px]:w-auto"
              data-cursor="pointer"
            >
              <span>Let's Connect</span>
              <ArrowUpRight size={15} className="text-zinc-400 group-hover:text-red-400 transition-colors" />
            </button>

            {/* Direct Resume CTA */}
            <button
              onClick={() => {
                sound.playGlassClick();
                onOpenResume();
              }}
              className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3.5 rounded-full text-zinc-400 hover:text-white text-xs sm:text-sm font-mono transition-colors hover:bg-white/[0.04] w-full min-[420px]:w-auto"
              data-cursor="pointer"
            >
              <Code2 size={14} className="text-zinc-400" />
              <span>Resume</span>
            </button>
          </motion.div>
        </div>

        {/* Right Column: Dark Liquid Glass Portrait Card with Dynamic Spotlight */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[340px] sm:max-w-[380px] group">
            {/* Ambient Red & Silver Backlight */}
            <div className="absolute inset-0 bg-gradient-to-tr from-red-600/15 via-white/5 to-transparent blur-3xl rounded-3xl -z-10 group-hover:from-red-600/25 transition-all duration-700" />

            {/* Outer Liquid Glass Frame */}
            <div className="relative rounded-3xl p-3 sm:p-4 liquid-glass-elevated border border-white/20 hover:border-red-500/30 shadow-2xl shadow-black spotlight-card transition-colors">
              {/* Image Container with Dark Mood Filter */}
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-[#0a0a0d] border border-white/10">
                <img
                  src={PERSONAL_INFO.avatar}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover object-center filter grayscale contrast-[118%] brightness-[86%] group-hover:brightness-[95%] group-hover:contrast-[122%] transition-all duration-700 scale-[1.02] group-hover:scale-105"
                  loading="eager"
                />

                {/* Dark Vignette & Liquid Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-black/20 pointer-events-none" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/15 rounded-2xl pointer-events-none" />

                {/* Floating Liquid Glass Badges on Top of Photo */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <div className="px-3 py-1 rounded-full liquid-glass text-[11px] font-mono text-zinc-200 backdrop-blur-xl border border-white/20 shadow-lg flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shadow-sm shadow-red-500/80" />
                    <span>LPU CSE</span>
                  </div>
                  <div className="px-3 py-1 rounded-full liquid-glass text-[11px] font-mono text-white backdrop-blur-xl border border-white/20 shadow-lg font-semibold flex items-center gap-1">
                    <GraduationCap size={13} className="text-zinc-300" />
                    <span>B.Tech CSE</span>
                  </div>
                </div>

                {/* Bottom Overlay Pill */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl liquid-glass backdrop-blur-2xl border border-white/20 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-display font-bold text-sm text-white flex items-center gap-1.5">
                        <span>Raghav Sharma</span>
                        <Sparkles size={12} className="text-red-400" />
                      </div>
                      <div className="text-[11px] font-mono text-zinc-400 mt-0.5">
                        Top 8 Hackathon Finalist
                      </div>
                    </div>
                    <div className="px-2.5 py-1 rounded-md bg-red-500/15 border border-red-500/30 text-[10px] font-mono text-red-300 font-semibold shadow-sm shadow-red-500/20">
                      C++ / SYSTEMS
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer Details */}
              <div className="mt-3 px-1 py-1 flex items-center justify-between text-xs font-mono text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <Terminal size={12} className="text-red-400" />
                  <span>Linux / PostgreSQL</span>
                </span>
                <span className="text-zinc-300 font-semibold">2025–2029</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Hero Bottom Bar & Scroll Indicator */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 pt-6 border-t border-white/5"
      >
        {/* Core Focus Tech Tags */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-400">
          <span className="text-red-400 font-semibold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span>CORE //</span>
          </span>
          <span className="px-2.5 py-1 rounded-md liquid-glass text-zinc-200">C++ / STL</span>
          <span className="px-2.5 py-1 rounded-md liquid-glass text-zinc-200">DSA</span>
          <span className="px-2.5 py-1 rounded-md liquid-glass text-zinc-200">Linux</span>
          <span className="px-2.5 py-1 rounded-md liquid-glass text-zinc-200">PostgreSQL</span>
          <span className="px-2.5 py-1 rounded-md liquid-glass text-zinc-200">FastAPI</span>
          <span className="px-2.5 py-1 rounded-md liquid-glass text-zinc-200">Systems & IoT</span>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          variants={itemVariants}
          onClick={() => scrollTo('about')}
          className="flex items-center gap-3 text-xs font-mono text-zinc-500 hover:text-zinc-300 transition-colors group cursor-pointer"
          data-cursor="pointer"
        >
          <span>SCROLL TO EXPLORE</span>
          <div className="w-5 h-8 rounded-full border border-zinc-700 flex items-start justify-center p-1 group-hover:border-white transition-colors">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
              className="w-1 h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.button>
      </motion.div>
    </section>
  );
}
