import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, X, Minimize2, Maximize2, CornerDownLeft } from 'lucide-react';
import { sound } from '../utils/audio';
import { PERSONAL_INFO, PROJECTS, CERTIFICATIONS, SKILL_CATEGORIES } from '../data/portfolioData';

export function TerminalDrawer({ isOpen, onToggle, onOpenResume }) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: 'Raghav Sharma [Systems CLI v2.4.0-posix]' },
    { type: 'system', text: 'Type "help" to view available diagnostics or "projects" to view active builds.' },
  ]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [commandHistory, setCommandHistory] = useState([]);
  const [isMaximized, setIsMaximized] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      sound.playCommand();
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmd) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    sound.playGlassClick();
    setCommandHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    const newHistory = [...history, { type: 'prompt', text: `raghav@systems-lpu:~$ ${trimmed}` }];
    const lower = trimmed.toLowerCase();
    const args = lower.split(' ');
    const mainCmd = args[0];

    switch (mainCmd) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: `Available Commands:
  whoami        - Identity, B.Tech CSE (8.89 CGPA), systems focus
  projects      - List MarketPulse 2.0, FireWatch Nexus, Food Freshness, Compressor
  skills        - Display C++, Linux, PostgreSQL, FastAPI & IoT stack
  certs         - Display verified UCSC Coursera & Deloitte credentials
  about         - Read Raghav's systems engineering philosophy
  bench         - Run simulated C++ Huffman lossless compression benchmark
  top           - Display live simulated systems processes & telemetry
  resume        - Open in-browser Curriculum Vitae modal
  contact       - Output email, phone, GitHub, LinkedIn coordinates
  clear         - Clear terminal screen buffer
  exit          - Close interactive terminal window`,
        });
        break;

      case 'whoami':
        newHistory.push({
          type: 'output',
          text: `Name: ${PERSONAL_INFO.name}
Role: ${PERSONAL_INFO.role}
Education: ${PERSONAL_INFO.institution} (${PERSONAL_INFO.year})
Qualification: Bachelor of Technology — Computer Science & Engineering
Standing: Top 8 Hackathon Finalist (GeeksforGeeks Infoverse 24H Sprint)`,
        });
        break;

      case 'projects':
        newHistory.push({
          type: 'output',
          text: PROJECTS.map(
            (p, idx) => `[${idx + 1}] ${p.title} (${p.category})
    Badge: ${p.badge}
    Tech: ${p.tech.join(', ')}
    GitHub: ${p.github || 'N/A'}
    Demo: ${p.demo || 'N/A'}`
          ).join('\n\n'),
        });
        break;

      case 'skills':
        newHistory.push({
          type: 'output',
          text: SKILL_CATEGORIES.map(
            (cat) => `== [${cat.name.toUpperCase()}] ==\n` + cat.skills.map((s) => `  * ${s.name} (${s.level}) [${s.tag}]`).join('\n')
          ).join('\n\n'),
        });
        break;

      case 'certs':
        newHistory.push({
          type: 'output',
          text: CERTIFICATIONS.map(
            (c) => `* ${c.title} — ${c.issuer} (${c.date})
    ID: ${c.credentialId || 'N/A'} | ${c.verifyUrl ? 'Verify: ' + c.verifyUrl : c.standing || 'Verified'}`
          ).join('\n\n'),
        });
        break;

      case 'about':
        newHistory.push({
          type: 'output',
          text: `${PERSONAL_INFO.bio}\n\nPhilosophy: Build practical, memory-efficient systems from scratch — combining algorithmic rigor in C++, Linux environments, clean relational schemas in PostgreSQL, and responsive telemetry.`,
        });
        break;

      case 'bench':
        newHistory.push({
          type: 'output',
          text: `[SYSTEM BENCHMARK: C++20 Huffman Compression Engine]
Allocating 10,485,760 bytes random ASCII test payload...
Constructing std::priority_queue min-heap prefix tree... [OK: 0.042ms]
Generating canonical binary prefix codes... [OK: 0.018ms]
Serializing bitstream bit-packed buffer... [OK: 0.114ms]
--------------------------------------------------------
Original Payload:  10.00 MB (10,485,760 bytes)
Compressed Output:  5.48 MB ( 5,746,196 bytes)
Space Reduction:   -45.2% Lossless
Throughput:        89.4 MB/s on single-core POSIX Linux stream`,
        });
        break;

      case 'top':
        newHistory.push({
          type: 'output',
          text: `PID   COMMAND           CPU%   MEM%   STATUS   PORT/SOCKET
1024  fastapi_server    1.2%   3.4%   ACTIVE   http://localhost:8000
1025  postgres_daemon   0.8%   6.1%   ACTIVE   tcp://5432 (ACID WAL)
1026  leaflet_engine    0.4%   2.1%   ACTIVE   ws://telemetry.sync
1027  arduino_serial    0.1%   0.9%   ACTIVE   /dev/ttyUSB0 (115200)`,
        });
        break;

      case 'resume':
        newHistory.push({ type: 'output', text: 'Opening Curriculum Vitae modal...' });
        if (onOpenResume) onOpenResume();
        break;

      case 'contact':
        newHistory.push({
          type: 'output',
          text: `Email:    ${PERSONAL_INFO.email}
Phone:    ${PERSONAL_INFO.phone}
GitHub:   ${PERSONAL_INFO.github}
LinkedIn: ${PERSONAL_INFO.linkedin}`,
        });
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      case 'exit':
      case 'quit':
        onToggle(false);
        setInput('');
        return;

      default:
        newHistory.push({
          type: 'error',
          text: `Command not found: "${trimmed}". Type "help" for a list of diagnostics.`,
        });
        break;
    }

    setHistory(newHistory);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIdx = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIdx);
        setInput(commandHistory[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const nextIdx = historyIndex + 1;
        if (nextIdx >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput('');
        } else {
          setHistoryIndex(nextIdx);
          setInput(commandHistory[nextIdx]);
        }
      }
    } else if (e.key === 'Escape') {
      onToggle(false);
    }
  };

  return (
    <>
      {/* Floating CLI Drawer Launcher Button */}
      <button
        onClick={() => onToggle(!isOpen)}
        className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full liquid-glass-elevated text-zinc-300 hover:text-white border border-white/20 hover:border-red-500/40 shadow-2xl transition-all hover:scale-105 group cursor-pointer flex items-center gap-2.5 backdrop-blur-2xl"
        title="Open Interactive Systems Terminal (Shortcut: ` or Ctrl+`)"
        data-cursor="pointer"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-80"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500 shadow-sm shadow-red-500/80"></span>
        </span>
        <TerminalIcon size={16} className="group-hover:text-red-400 transition-colors" />
        <span className="hidden md:inline font-mono text-xs font-semibold text-zinc-200">
          CLI Terminal
        </span>
        <span className="hidden md:inline px-1.5 py-0.5 rounded bg-white/10 text-[10px] font-mono text-zinc-400">
          ~
        </span>
      </button>

      {/* Terminal Modal / Drawer */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 pointer-events-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => onToggle(false)}
              className="fixed inset-0 bg-[#050507]/80 backdrop-blur-xl"
            />

            {/* Terminal Window Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 28, stiffness: 320 }}
              className={`relative w-full rounded-3xl liquid-glass-elevated border border-white/20 hover:border-red-500/30 shadow-2xl flex flex-col overflow-hidden z-10 ${
                isMaximized ? 'max-w-6xl h-[90vh]' : 'max-w-3xl h-[560px]'
              }`}
            >
              {/* Terminal Window Bar */}
              <div className="px-5 py-3.5 border-b border-white/10 bg-black/60 flex items-center justify-between select-none">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => onToggle(false)}
                      className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors shadow-sm shadow-red-500/60"
                      title="Close"
                    />
                    <button
                      onClick={() => setHistory([])}
                      className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors"
                      title="Clear Buffer"
                    />
                    <button
                      onClick={() => setIsMaximized(!isMaximized)}
                      className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors"
                      title="Maximize / Restore"
                    />
                  </div>
                  <span className="font-mono text-xs text-zinc-300 ml-3 flex items-center gap-1.5">
                    <TerminalIcon size={13} className="text-red-400" />
                    <span>raghav@systems-lpu: ~</span>
                  </span>
                </div>

                <div className="flex items-center gap-2 text-zinc-400">
                  <button
                    onClick={() => setIsMaximized(!isMaximized)}
                    className="p-1 rounded hover:text-white transition-colors"
                  >
                    {isMaximized ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
                  </button>
                  <button
                    onClick={() => onToggle(false)}
                    className="p-1 rounded hover:text-white transition-colors"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>

              {/* Terminal Output Log */}
              <div
                className="flex-1 p-5 overflow-y-auto font-mono text-xs sm:text-[13px] leading-relaxed space-y-3 bg-[#07070a]/95 text-zinc-200"
                onClick={() => inputRef.current?.focus()}
              >
                {history.map((item, idx) => (
                  <div key={idx}>
                    {item.type === 'system' && (
                      <div className="text-zinc-400 italic">{item.text}</div>
                    )}
                    {item.type === 'prompt' && (
                      <div className="text-white font-semibold">{item.text}</div>
                    )}
                    {item.type === 'output' && (
                      <pre className="text-zinc-300 whitespace-pre-wrap pl-2 border-l-2 border-red-500/30">
                        {item.text}
                      </pre>
                    )}
                    {item.type === 'error' && (
                      <div className="text-red-400 pl-2 border-l-2 border-red-500/50">{item.text}</div>
                    )}
                  </div>
                ))}
                <div ref={bottomRef} />
              </div>

              {/* Terminal Input Line */}
              <div className="p-4 border-t border-white/10 bg-black/80 flex items-center gap-2">
                <span className="font-mono text-xs sm:text-sm text-zinc-300 font-semibold shrink-0">
                  raghav@systems-lpu:<span className="text-red-400 font-bold">~$</span>
                </span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="type 'help', 'bench', 'projects'..."
                  className="flex-1 bg-transparent font-mono text-xs sm:text-sm text-white placeholder-zinc-600 focus:outline-none"
                  autoFocus
                />
                <button
                  onClick={() => handleCommand(input)}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-red-500/20 hover:border-red-500/30 text-zinc-300 hover:text-white transition-colors"
                >
                  <CornerDownLeft size={14} />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
