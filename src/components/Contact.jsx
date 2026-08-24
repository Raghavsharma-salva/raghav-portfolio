import React, { useState } from 'react';
import { Mail, Copy, Send, CheckCircle2, ArrowUpRight, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';

export function Contact({ onShowToast }) {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    onShowToast('Email copied to clipboard: ' + PERSONAL_INFO.email);

    // Silver & Crimson confetti burst
    confetti({
      particleCount: 45,
      spread: 65,
      origin: { y: 0.8 },
      colors: ['#ef4444', '#ffffff', '#f87171', '#a1a1aa'],
      disableForReducedMotion: true,
    });

    setTimeout(() => setCopied(false), 3000);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;

    setIsSubmitting(true);
    const subject = encodeURIComponent(`Systems Portfolio Inquiry from ${formState.name || 'Collaborator'}`);
    const body = encodeURIComponent(`${formState.message}\n\nFrom: ${formState.name} (${formState.email})`);
    
    setTimeout(() => {
      setIsSubmitting(false);
      window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
      onShowToast('Opening your default email client...');
    }, 400);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-36 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto z-10">
      {/* Section Tag */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-[2px] bg-red-500 shadow-sm shadow-red-500/80" />
        <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-red-400 uppercase">
          06 // GET IN TOUCH
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        {/* Left Column: Heading & Direct Links */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            <h2 className="font-display font-bold text-4xl sm:text-6xl md:text-7xl tracking-tight text-white leading-[1.08]">
              Let's build <br />
              <span className="text-gradient-red font-extrabold">something real.</span>
            </h2>

            <p className="mt-6 text-base sm:text-lg md:text-xl text-zinc-300 max-w-lg leading-relaxed font-normal">
              Have an idea, systems project, C++ inquiry, Linux setup, or hackathon collaboration? I'm always open to connecting with engineers and builders.
            </p>

            {/* Quick Email Pill & Copy Action */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-3 px-6 sm:px-8 py-4 rounded-full bg-white text-black font-semibold text-sm sm:text-base hover:bg-zinc-200 shadow-xl shadow-white/10 transition-all hover:scale-[1.02] active:scale-[0.98]"
                data-cursor="pointer"
              >
                <Mail size={18} />
                <span>Email Me</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-5 py-4 rounded-full liquid-glass hover:bg-white/10 text-zinc-200 text-sm font-mono transition-all hover:scale-[1.02]"
                data-cursor="pointer"
                title="Copy email to clipboard"
              >
                {copied ? <CheckCircle2 size={16} className="text-white" /> : <Copy size={16} />}
                <span>{copied ? 'Copied!' : 'Copy Email'}</span>
              </button>
            </div>
          </div>

          {/* Social Presence List */}
          <div className="mt-12 pt-8 border-t border-white/5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="p-5 rounded-2xl liquid-glass-interactive group flex items-center justify-between"
              data-cursor="pointer"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:bg-white/15 transition-colors shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]">
                  <GithubIcon size={20} />
                </div>
                <div>
                  <div className="font-display font-semibold text-white text-sm sm:text-base">GitHub</div>
                  <div className="font-mono text-xs text-zinc-400">@{PERSONAL_INFO.githubUsername}</div>
                </div>
              </div>
              <ArrowUpRight size={16} className="text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-5 rounded-2xl liquid-glass-interactive group flex items-center justify-between"
              data-cursor="pointer"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:bg-white/15 transition-colors shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]">
                  <LinkedinIcon size={20} />
                </div>
                <div>
                  <div className="font-display font-semibold text-white text-sm sm:text-base">LinkedIn</div>
                  <div className="font-mono text-xs text-zinc-400">Raghav Sharma</div>
                </div>
              </div>
              <ArrowUpRight size={16} className="text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Quick Message Form */}
        <div className="lg:col-span-5">
          <div className="p-6 sm:p-8 rounded-3xl liquid-glass-elevated shadow-2xl">
            <div className="flex items-center gap-2 mb-6">
              <MessageSquare size={18} className="text-zinc-300" />
              <h3 className="font-display font-bold text-lg text-white">Send Direct Message</h3>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1.5" htmlFor="name">
                  YOUR NAME
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="e.g. Alex"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus:border-white/40 focus:outline-none text-sm text-white placeholder-zinc-600 transition-colors shadow-inner"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1.5" htmlFor="email">
                  YOUR EMAIL
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="alex@example.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus:border-white/40 focus:outline-none text-sm text-white placeholder-zinc-600 transition-colors shadow-inner"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1.5" htmlFor="message">
                  MESSAGE / PROJECT OVERVIEW
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Tell me about your project, idea, or tech inquiry..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus:border-white/40 focus:outline-none text-sm text-white placeholder-zinc-600 transition-colors resize-none shadow-inner"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-white hover:bg-zinc-200 text-black font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-white/10 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer disabled:opacity-50"
                data-cursor="pointer"
              >
                <Send size={16} />
                <span>{isSubmitting ? 'Preparing Transmission...' : 'Send Message'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
