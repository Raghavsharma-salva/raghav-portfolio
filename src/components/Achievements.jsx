import React from 'react';
import { ACHIEVEMENTS, CERTIFICATIONS } from '../data/portfolioData';
import { Trophy, Award, Code, GraduationCap, Sparkles, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';

export function Achievements() {
  const getIcon = (type) => {
    switch (type) {
      case 'Trophy':
        return Trophy;
      case 'Award':
        return Award;
      case 'Code':
        return Code;
      case 'GraduationCap':
        return GraduationCap;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="credentials" className="relative py-16 sm:py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto z-10">
      <div className="p-8 sm:p-12 rounded-3xl liquid-glass border border-white/10 shadow-2xl space-y-12">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-[2px] bg-red-500 shadow-sm shadow-red-500/80" />
              <ShieldCheck size={15} className="text-red-400" />
              <span className="font-mono text-xs font-semibold tracking-widest text-red-400 uppercase">
                CREDENTIALS & VERIFIED CERTIFICATIONS
              </span>
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-4xl text-white">
              Authentic Certifications & Milestones
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-md font-mono">
            Directly verified certifications from UC Santa Cruz, Deloitte, GeeksforGeeks, and Infosys Springboard.
          </p>
        </div>

        {/* 4 Pillars Summary Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ACHIEVEMENTS.map((item, idx) => {
            const Icon = getIcon(item.icon);
            return (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl liquid-glass-interactive flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:bg-white/15 transition-colors shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]">
                      <Icon size={20} />
                    </div>
                    {item.verifyUrl && (
                      <a
                        href={item.verifyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded-lg liquid-glass text-zinc-400 hover:text-white transition-colors"
                        title="Verify Certificate"
                      >
                        <ExternalLink size={13} />
                      </a>
                    )}
                  </div>
                  <h3 className="mt-4 font-display font-semibold text-base text-white">
                    {item.title}
                  </h3>
                  <div className="text-xs font-mono text-zinc-400 mt-1">
                    {item.subtitle}
                  </div>
                </div>

                <p className="mt-4 text-xs text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Detailed Verified Certificates Showcase */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-display font-bold text-lg sm:text-xl text-white flex items-center gap-2">
              <span>Verified Certificate Records</span>
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full liquid-glass text-zinc-300">
                Official
              </span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.id}
                className="p-6 rounded-2xl liquid-glass-elevated border border-white/15 flex flex-col justify-between group transition-all duration-300 hover:border-white/30"
              >
                <div>
                  {/* Top Bar with Platform & Date */}
                  <div className="flex items-center justify-between gap-2 pb-3 border-b border-white/5 text-xs font-mono">
                    <span className="px-2.5 py-1 rounded-md bg-white/10 text-white font-semibold border border-white/15">
                      {cert.issuer}
                    </span>
                    <span className="text-zinc-400">{cert.date}</span>
                  </div>

                  {/* Title & Type */}
                  <h4 className="mt-4 font-display font-bold text-lg text-white group-hover:text-zinc-200 transition-colors">
                    {cert.title}
                  </h4>
                  <div className="text-xs font-mono text-zinc-400 mt-0.5">
                    {cert.type} · {cert.platform}
                  </div>

                  {/* Instructor or Signatory info if present */}
                  {cert.instructor && (
                    <div className="mt-3 text-xs text-zinc-300 font-mono flex items-center gap-1.5">
                      <span className="text-zinc-500">Instructor:</span>
                      <span>{cert.instructor}</span>
                    </div>
                  )}
                  {cert.signatory && (
                    <div className="mt-3 text-xs text-zinc-300 font-mono flex items-center gap-1.5">
                      <span className="text-zinc-500">Signatory:</span>
                      <span>{cert.signatory}</span>
                    </div>
                  )}
                  {cert.standing && (
                    <div className="mt-3 text-xs text-zinc-300 font-mono flex items-center gap-1.5">
                      <span className="text-zinc-500">Honor:</span>
                      <span className="text-white font-semibold">{cert.standing}</span>
                    </div>
                  )}

                  {/* Courses List */}
                  <div className="mt-4 space-y-1.5">
                    {cert.courses.map((course, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-2 text-xs text-zinc-400">
                        <CheckCircle2 size={13} className="text-zinc-300 shrink-0 mt-0.5" />
                        <span>{course}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Footer: Verification Code / Button */}
                <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                  {cert.credentialId && (
                    <div className="text-zinc-400 text-[11px]">
                      ID: <span className="text-zinc-200 select-all">{cert.credentialId}</span>
                    </div>
                  )}

                  {cert.verifyUrl ? (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors shadow-md shadow-white/10"
                      data-cursor="pointer"
                    >
                      <span>Verify Credential</span>
                      <ExternalLink size={12} />
                    </a>
                  ) : (
                    <span className="px-2.5 py-1 rounded liquid-glass text-zinc-400 text-[11px]">
                      Verified Record
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

