import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Flame, Cpu, Binary } from 'lucide-react';
import { GithubIcon } from './Icons';
import { sound } from '../utils/audio';

export function ProjectCard({ project, index, onSelectProject }) {
  // Render bespoke monochromatic liquid glass custom visual per project
  const renderVisual = () => {
    switch (project.visualType) {
      case 'trading':
        return (
          <div className="relative w-full h-full min-h-[220px] sm:min-h-[280px] bg-[#070709] p-4 sm:p-6 rounded-2xl border border-white/10 flex flex-col justify-between overflow-hidden group-hover:border-white/30 transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]">
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span className="font-mono text-xs font-semibold text-zinc-300">SIMULATION ENGINE // POSTGRESQL</span>
              </div>
              <span className="font-mono text-xs text-white bg-white/10 px-2 py-0.5 rounded border border-white/15">
                +14.2% Simulated P&L
              </span>
            </div>

            {/* Middle Stock Chart Graphic */}
            <div className="my-auto py-3">
              <div className="flex items-baseline justify-between mb-2">
                <div className="flex items-baseline gap-2">
                  <span className="font-display font-bold text-xl sm:text-2xl text-white">NVDA</span>
                  <span className="font-mono text-xs text-zinc-400">$128.40</span>
                </div>
                <span className="font-mono text-xs text-zinc-400">Vol: 4.8M · yfinance</span>
              </div>

              {/* Monochromatic SVG Sparkline */}
              <svg className="w-full h-20 sm:h-24 overflow-visible" viewBox="0 0 300 80" fill="none">
                <defs>
                  <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="80" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFFFFF" stopOpacity="0.18" />
                    <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 65 Q 40 50, 70 58 T 130 35 T 190 42 T 240 18 T 300 12 L 300 80 L 0 80 Z"
                  fill="url(#chartGrad)"
                />
                <path
                  d="M0 65 Q 40 50, 70 58 T 130 35 T 190 42 T 240 18 T 300 12"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="300" cy="12" r="3.5" fill="#FFFFFF" />
              </svg>
            </div>

            {/* Bottom Meta */}
            <div className="grid grid-cols-3 gap-2 pt-3 border-t border-white/5 text-[11px] font-mono text-zinc-400">
              <div>BALANCE: <span className="text-white">$10,000</span></div>
              <div>ORDERS: <span className="text-white">Relational</span></div>
              <div>DB: <span className="text-zinc-200">Postgres / SQLite</span></div>
            </div>
          </div>
        );

      case 'safety':
        return (
          <div className="relative w-full h-full min-h-[220px] sm:min-h-[280px] bg-[#070709] p-4 sm:p-6 rounded-2xl border border-white/10 flex flex-col justify-between overflow-hidden group-hover:border-red-500/30 transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]">
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <div className="flex items-center gap-2">
                <Flame size={14} className="text-red-400" />
                <span className="font-mono text-xs font-semibold text-zinc-200">HAZARD TELEMETRY</span>
              </div>
              <span className="font-mono text-xs text-red-300 bg-red-500/10 px-2 py-0.5 rounded border border-red-500/30 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                Top 8 Finalist · 24H Sprint
              </span>
            </div>

            <div className="my-auto py-3 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-400">Wildfire Risk Index:</span>
                <span className="font-mono text-xs font-bold text-red-300 px-2 py-0.5 bg-red-500/15 rounded border border-red-500/30 shadow-sm shadow-red-500/20">
                  INDEX 4.2 · EVALUATED
                </span>
              </div>

              {/* Red-Orange Gradient Progress bar */}
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div className="w-[68%] h-full bg-gradient-to-r from-red-600 via-red-500 to-rose-400 rounded-full shadow-sm shadow-red-500/50" />
              </div>

              {/* Evacuation Node Grid */}
              <div className="grid grid-cols-2 gap-2 mt-2">
                <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5 group-hover:border-red-500/20 transition-colors">
                  <div className="text-[10px] font-mono text-red-400">DYNAMIC ROUTE</div>
                  <div className="text-xs font-medium text-white flex items-center gap-1 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    <span>Sector 4-B Active</span>
                  </div>
                </div>
                <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5">
                  <div className="text-[10px] font-mono text-zinc-500">24H HACKATHON</div>
                  <div className="text-xs font-medium text-zinc-300 mt-0.5">Team Leader MVP</div>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-400">
              <span>METEOROLOGICAL SCORING</span>
              <span className="text-red-400 font-semibold">TOP 8 FINALIST</span>
            </div>
          </div>
        );

      case 'hardware':
        return (
          <div className="relative w-full h-full min-h-[220px] sm:min-h-[280px] bg-[#070709] p-4 sm:p-6 rounded-2xl border border-white/10 flex flex-col justify-between overflow-hidden group-hover:border-white/30 transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]">
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <div className="flex items-center gap-2">
                <Cpu size={14} className="text-zinc-300" />
                <span className="font-mono text-xs font-semibold text-zinc-300">EMBEDDED ARDUINO</span>
              </div>
              <span className="font-mono text-xs text-white bg-white/10 px-2 py-0.5 rounded border border-white/15">
                16x2 LCD + SENSORS
              </span>
            </div>

            {/* Monochromatic 16x2 LCD Simulation Display */}
            <div className="my-auto py-3">
              <div className="p-3 rounded-xl bg-white/[0.04] border border-white/15 font-mono text-xs text-zinc-200 shadow-inner">
                <div className="flex justify-between">
                  <span>[FOOD QUALITY]: OPTIMAL</span>
                  <span className="animate-pulse">●</span>
                </div>
                <div className="text-[11px] text-zinc-400 mt-1 flex justify-between">
                  <span>pH: 6.8 | Gas: 120ppm</span>
                  <span>Moist: 62%</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 mt-3 text-center">
                <div className="p-2 rounded bg-white/[0.02] border border-white/5">
                  <div className="text-[9px] font-mono text-zinc-500">MQ GAS</div>
                  <div className="text-xs font-mono text-zinc-200 mt-0.5">Calibrated</div>
                </div>
                <div className="p-2 rounded bg-white/[0.02] border border-white/5">
                  <div className="text-[9px] font-mono text-zinc-500">pH PROBE</div>
                  <div className="text-xs font-mono text-white mt-0.5">6.8 pH</div>
                </div>
                <div className="p-2 rounded bg-white/[0.02] border border-white/5">
                  <div className="text-[9px] font-mono text-zinc-500">ALERTS</div>
                  <div className="text-xs font-mono text-zinc-200 mt-0.5">Buzzer/LED</div>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-400">
              <span>PLATFORMIO / C++</span>
              <span className="text-white font-semibold">HARDWARE I/O</span>
            </div>
          </div>
        );

      case 'compressor':
        return (
          <div className="relative w-full h-full min-h-[220px] sm:min-h-[280px] bg-[#070709] p-4 sm:p-6 rounded-2xl border border-white/10 flex flex-col justify-between overflow-hidden group-hover:border-white/30 transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]">
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <div className="flex items-center gap-2">
                <Binary size={14} className="text-zinc-300" />
                <span className="font-mono text-xs font-semibold text-zinc-300">HUFFMAN COMPRESSION</span>
              </div>
              <span className="font-mono text-xs text-white bg-white/10 px-2 py-0.5 rounded border border-white/15">
                -45% File Size · C++
              </span>
            </div>

            <div className="my-auto py-3">
              {/* Bitstream Matrix Visual */}
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 font-mono text-xs space-y-1.5">
                <div className="text-zinc-500 text-[10px]">PREFIX TREE ENCODING // LINUX STREAMS:</div>
                <div className="text-white tracking-widest text-[11px]">
                  01100101 11010010 10101100
                </div>
                <div className="flex items-center justify-between text-[10px] text-zinc-400 pt-1 border-t border-white/5">
                  <span>Raw: 2.4 MB</span>
                  <span className="text-white font-bold">Compressed: 1.3 MB</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 mt-3">
                <div className="p-2 rounded bg-white/[0.02] border border-white/5 text-center">
                  <div className="text-[9px] font-mono text-zinc-500">DATA STRUCTURE</div>
                  <div className="text-xs font-mono text-zinc-200 mt-0.5">Min-Heap STL</div>
                </div>
                <div className="p-2 rounded bg-white/[0.02] border border-white/5 text-center">
                  <div className="text-[9px] font-mono text-zinc-500">ENCODING</div>
                  <div className="text-xs font-mono text-white mt-0.5">Bit-Level I/O</div>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-400">
              <span>C++20 BINARY PIPELINE</span>
              <span className="text-white font-semibold">LOSSLESS</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="group relative rounded-2xl sm:rounded-3xl liquid-glass-interactive p-5 sm:p-8 md:p-10 transition-all duration-300 flex flex-col justify-between cursor-pointer spotlight-card"
      onClick={() => {
        sound.playGlassClick();
        onSelectProject(project);
      }}
      data-cursor="view"
      data-cursor-text="VIEW"
    >
      {/* Top Header */}
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2.5 sm:gap-3 mb-4 sm:mb-6">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="font-mono text-[11px] sm:text-xs text-zinc-200 font-semibold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/10 border border-white/15">
              {project.badge}
            </span>
            <span className="text-[11px] sm:text-xs font-mono text-zinc-500">
              0{index + 1} // {project.category}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-zinc-400 hover:text-white transition-colors"
                title="View GitHub Repository"
                data-cursor="pointer"
              >
                <GithubIcon size={15} />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-zinc-400 hover:text-white transition-colors"
                title="View Live Demo"
                data-cursor="pointer"
              >
                <ExternalLink size={15} />
              </a>
            )}
          </div>
        </div>

        {/* Title & Tagline */}
        <h3 className="font-display font-bold text-xl sm:text-2xl md:text-3xl text-white group-hover:text-zinc-200 transition-colors flex items-center justify-between">
          <span>{project.title}</span>
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 group-hover:text-black group-hover:bg-white transition-all">
            <ArrowUpRight size={15} />
          </div>
        </h3>

        <p className="mt-2.5 sm:mt-3 text-xs sm:text-base text-zinc-400 leading-relaxed font-normal">
          {project.description}
        </p>
      </div>

      {/* Visual Component Showcase */}
      <div className="my-6">
        {renderVisual()}
      </div>

      {/* Bottom Tech Tags */}
      <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {project.tech.map((t, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-md text-[11px] font-mono text-zinc-300 bg-white/[0.04] border border-white/5"
            >
              {t}
            </span>
          ))}
        </div>

        <span className="text-xs font-mono text-zinc-300 group-hover:translate-x-1 transition-transform flex items-center gap-1">
          <span>Explore Details</span>
          <ArrowUpRight size={13} />
        </span>
      </div>
    </motion.div>
  );
}
