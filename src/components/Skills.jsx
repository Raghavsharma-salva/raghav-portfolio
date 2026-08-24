import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Code, Terminal, Database, Cpu, Layers } from 'lucide-react';

export function Skills() {
  const [activeTab, setActiveTab] = useState(SKILL_CATEGORIES[0].id);

  const getCategoryIcon = (id) => {
    switch (id) {
      case 'languages':
        return Code;
      case 'dev-tools':
        return Terminal;
      case 'databases':
        return Database;
      case 'hardware':
        return Cpu;
      default:
        return Layers;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="relative py-24 sm:py-32 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto z-10">
      {/* Section Tag */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-[2px] bg-red-500 shadow-sm shadow-red-500/80" />
        <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-red-400 uppercase">
          03 // TECH STACK
        </span>
      </div>

      {/* Heading */}
      <div className="max-w-3xl">
        <h2 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl tracking-tight text-white">
          Things I Work With
        </h2>
        <p className="mt-3 text-base sm:text-lg text-zinc-400 font-normal">
          Systems programming languages, Linux environments, PostgreSQL, frameworks, and embedded toolchains.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="mt-10 flex flex-wrap gap-2 sm:gap-3 border-b border-white/5 pb-6">
        {SKILL_CATEGORIES.map((cat) => {
          const Icon = getCategoryIcon(cat.id);
          const isActive = activeTab === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                isActive
                  ? 'bg-white text-black font-semibold shadow-md shadow-white/10'
                  : 'liquid-glass text-zinc-400 hover:text-white hover:border-white/20'
              }`}
              data-cursor="pointer"
            >
              <Icon size={16} className={isActive ? 'text-black' : 'text-zinc-400'} />
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>

      {/* Active Category Skills Grid */}
      {SKILL_CATEGORIES.map((cat) => {
        if (cat.id !== activeTab) return null;

        return (
          <motion.div
            key={cat.id}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="mt-8"
          >
            <div className="mb-6 flex items-center justify-between">
              <p className="text-xs sm:text-sm font-mono text-zinc-400">{cat.description}</p>
              <span className="text-xs font-mono text-zinc-300 liquid-glass px-3 py-1 rounded-md">
                {cat.skills.length} Items
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cat.skills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="group relative p-5 rounded-2xl liquid-glass-interactive flex flex-col justify-between"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-display font-bold text-lg text-white group-hover:text-zinc-200 transition-colors">
                        {skill.name}
                      </h3>
                      <p className="mt-1 text-xs text-zinc-400 font-mono">
                        {skill.level}
                      </p>
                    </div>

                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/5 border border-white/10 text-zinc-400 group-hover:text-white group-hover:border-white/30 transition-colors">
                      {skill.tag}
                    </span>
                  </div>

                  {/* Micro Monochrome Bar */}
                  <div className="mt-4 w-full h-[1.5px] bg-white/5 rounded-full overflow-hidden">
                    <div className="w-0 group-hover:w-full h-full bg-gradient-to-r from-zinc-400 to-white transition-all duration-500 rounded-full" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );
      })}

      {/* All Skills Summary Matrix */}
      <div className="mt-14 p-6 sm:p-8 rounded-3xl liquid-glass border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h3 className="font-display font-semibold text-lg text-white">
            Practical Systems Engineering Over Rote Percentages
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-zinc-400 max-w-xl">
            I assess capability by working systems, algorithmic complexity, POSIX/Linux proficiency, and clean relational database schema design.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1.5 rounded-lg liquid-glass text-xs font-mono text-zinc-200">
            C++20
          </span>
          <span className="px-3 py-1.5 rounded-lg liquid-glass text-xs font-mono text-zinc-200">
            Linux / Bash
          </span>
          <span className="px-3 py-1.5 rounded-lg liquid-glass text-xs font-mono text-zinc-200">
            PostgreSQL
          </span>
          <span className="px-3 py-1.5 rounded-lg liquid-glass text-xs font-mono text-zinc-200">
            Python
          </span>
        </div>
      </div>
    </section>
  );
}
