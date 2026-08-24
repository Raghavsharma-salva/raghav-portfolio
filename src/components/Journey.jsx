import React from 'react';
import { motion } from 'framer-motion';
import { TIMELINE } from '../data/portfolioData';
import { GraduationCap, Trophy, Cpu, Code2 } from 'lucide-react';

export function Journey() {
  const getTimelineIcon = (type) => {
    switch (type) {
      case 'Education':
        return GraduationCap;
      case 'Leadership & Build':
        return Trophy;
      case 'Projects':
        return Cpu;
      default:
        return Code2;
    }
  };

  return (
    <section id="journey" className="relative py-24 sm:py-32 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto z-10">
      {/* Section Tag */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-[2px] bg-red-500 shadow-sm shadow-red-500/80" />
        <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-red-400 uppercase">
          05 // TIMELINE
        </span>
      </div>

      {/* Heading */}
      <div className="max-w-3xl">
        <h2 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl tracking-tight text-white">
          Journey & Milestones
        </h2>
        <p className="mt-3 text-base sm:text-lg text-zinc-400 font-normal">
          Academic progression, Top 8 hackathon leadership, and technical development chapters.
        </p>
      </div>

      {/* Connected Timeline Line */}
      <div className="relative mt-12 sm:mt-16 pl-6 sm:pl-10 md:pl-12 border-l border-white/10 space-y-8 sm:space-y-12">
        {TIMELINE.map((item, idx) => {
          const Icon = getTimelineIcon(item.type);
          const isPresent = idx === 0;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline Node (Glowing Red for Present, Silver for past) */}
              <div
                className={`absolute -left-[36px] sm:-left-[52px] md:-left-[60px] top-1.5 w-6 h-6 rounded-full bg-[#050507] border-2 flex items-center justify-center group-hover:scale-125 transition-all duration-300 ${
                  isPresent
                    ? 'border-red-500 shadow-md shadow-red-500/50'
                    : 'border-white/40 group-hover:border-white shadow-md shadow-white/10'
                }`}
              >
                <div
                  className={`w-2 h-2 rounded-full ${
                    isPresent
                      ? 'bg-red-500 animate-pulse shadow-sm shadow-red-500/80'
                      : 'bg-zinc-400 group-hover:bg-white transition-colors'
                  }`}
                />
              </div>

              {/* Timeline Content Card */}
              <div className={`p-5 sm:p-8 rounded-2xl sm:rounded-3xl liquid-glass transition-all duration-300 hover:translate-x-1 ${
                isPresent ? 'hover:border-red-500/30' : 'hover:border-white/25'
              }`}>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-white/5 text-zinc-300 border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]">
                      <Icon size={14} className={isPresent ? 'text-red-400' : ''} />
                    </div>
                    <span className={`font-mono text-xs sm:text-sm font-semibold liquid-glass px-3 py-1 rounded-full ${
                      isPresent ? 'text-red-300 border-red-500/30 bg-red-500/10' : 'text-zinc-200'
                    }`}>
                      {item.period}
                    </span>
                    <span className="text-xs font-mono text-zinc-400">
                      {item.type}
                    </span>
                  </div>

                  <span className={`text-xs font-mono font-medium ${
                    isPresent ? 'text-red-400' : 'text-zinc-300'
                  }`}>
                    {item.highlight}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl sm:text-2xl text-white group-hover:text-zinc-200 transition-colors">
                  {item.title}
                </h3>

                <div className="mt-1 text-xs sm:text-sm font-medium text-zinc-300 flex items-center gap-2">
                  <span>{item.organization}</span>
                  <span className="text-zinc-600">·</span>
                  <span className="text-zinc-500">{item.location}</span>
                </div>

                <p className="mt-4 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap gap-2">
                  {item.tags.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono text-zinc-300 bg-white/[0.03] border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
