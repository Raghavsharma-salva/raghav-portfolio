import React, { useState, useEffect } from 'react';
import { Clock, MapPin, Terminal, Command } from 'lucide-react';

export function LiveTelemetryBar({ onOpenCommandPalette, onOpenTerminal }) {
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Indian Standard Time (IST - UTC+5:30)
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setTimeStr(now.toLocaleTimeString('en-US', options) + ' IST');
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-wrap items-center justify-between gap-3 pt-2 pb-1 text-xs font-mono text-zinc-400 border-b border-white/5">
      {/* Left: Status & Local Time */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full liquid-glass text-zinc-200 border-white/10 hover:border-red-500/30 transition-colors">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-80"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500 shadow-sm shadow-red-500/80"></span>
          </span>
          <span className="text-zinc-200">Open for Systems & Hackathons</span>
        </div>

        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full liquid-glass text-zinc-300">
          <Clock size={12} className="text-zinc-400" />
          <span>{timeStr || 'IST (UTC+5:30)'}</span>
        </div>

        <div className="hidden md:flex items-center gap-1.5 text-zinc-400">
          <MapPin size={12} className="text-red-400/80" />
          <span>Phagwara, Punjab / HP, India</span>
        </div>
      </div>

      {/* Right: Cmd+K Quick Trigger Pill & Terminal Trigger */}
      <div className="flex items-center gap-2">
        <button
          onClick={onOpenTerminal}
          className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full liquid-glass text-zinc-300 hover:text-white hover:border-white/30 transition-colors cursor-pointer"
          title="Open Systems Terminal (~)"
          data-cursor="pointer"
        >
          <Terminal size={12} />
          <span className="text-[11px]">Terminal</span>
          <kbd className="px-1 py-0.2 rounded bg-white/10 text-[10px] text-zinc-400">~</kbd>
        </button>

        <button
          onClick={onOpenCommandPalette}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full liquid-glass text-zinc-300 hover:text-white hover:border-white/30 transition-colors cursor-pointer group"
          title="Open Command Palette"
          data-cursor="pointer"
        >
          <Command size={12} className="text-zinc-400 group-hover:text-white transition-colors" />
          <span className="text-[11px]">Commands</span>
          <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[10px] font-semibold text-zinc-300 border border-white/10 group-hover:border-white/25">
            ⌘K
          </kbd>
        </button>
      </div>
    </div>
  );
}
