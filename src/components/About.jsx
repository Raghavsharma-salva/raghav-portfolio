import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Code2, Database, Terminal } from 'lucide-react';
import { METRICS } from '../data/portfolioData';

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  const pillars = [
    {
      icon: Code2,
      title: "C++ & DSA Foundations",
      description: "Disciplined problem solving, STL internals, memory efficiency, recursion, and object-oriented architecture.",
    },
    {
      icon: Terminal,
      title: "Linux & Systems Toolchains",
      description: "Bash automation, POSIX environments, build toolchains, process management, and systems scripting.",
    },
    {
      icon: Database,
      title: "PostgreSQL & Database Design",
      description: "Relational schema modeling, ACID transactions, data persistence, and query optimization.",
    },
    {
      icon: Cpu,
      title: "IoT & Hardware Sensors",
      description: "Interfacing physical multi-sensor arrays (pH, MQ gas, moisture), Arduino microcontrollers, and PlatformIO.",
    },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto z-10">
      {/* Section Tag */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-[2px] bg-red-500 shadow-sm shadow-red-500/80" />
        <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-red-400 uppercase">
          01 // ABOUT ME
        </span>
      </div>

      {/* Main Punchy Statement */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
        className="max-w-4xl"
      >
        <motion.h2
          variants={itemVariants}
          className="font-display font-bold text-3xl sm:text-5xl md:text-6xl tracking-tight leading-[1.15] text-white"
        >
          Building. Learning. <br />
          <span className="text-zinc-500">Breaking things. Fixing them.</span>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="mt-8 text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed font-normal"
        >
          I am a 2nd Year Computer Science student at <span className="text-white font-semibold">Lovely Professional University</span> focused on core systems programming, algorithmic rigor in C++, Linux environments, PostgreSQL, and full-stack software.
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed"
        >
          I build practical systems from the ground up: from low-level memory allocation, bitstream compression, and data structures in C++, to managing relational persistence in PostgreSQL, developing FastAPI predictive services, and leading 24-hour sprint teams to a Top 8 finish in university hackathons.
        </motion.p>
      </motion.div>

      {/* Animated Key Metrics Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={containerVariants}
        className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4"
      >
        {METRICS.map((metric, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="group relative p-4 sm:p-7 md:p-8 rounded-xl sm:rounded-2xl liquid-glass transition-all duration-300 hover:translate-y-[-2px] hover:border-white/25"
          >
            <div className={`text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold bg-gradient-to-b ${metric.accent} bg-clip-text text-transparent`}>
              {metric.value}
            </div>
            <div className="mt-2 sm:mt-3 font-display font-semibold text-xs sm:text-base text-white">
              {metric.label}
            </div>
            <div className="mt-0.5 sm:mt-1 text-[11px] sm:text-xs text-zinc-400 font-mono">
              {metric.subtext}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Engineering Pillars Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={containerVariants}
        className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
      >
        {pillars.map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="p-5 sm:p-6 rounded-2xl liquid-glass-interactive flex flex-col justify-between group"
            >
              <div>
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:bg-white/15 transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]">
                  <Icon size={18} />
                </div>
                <h3 className="mt-3 sm:mt-4 font-display font-semibold text-sm sm:text-base text-white">
                  {pillar.title}
                </h3>
                <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
