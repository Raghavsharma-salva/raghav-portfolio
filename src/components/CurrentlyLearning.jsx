import React, { useState } from 'react';
import { LEARNING_TOPICS } from '../data/portfolioData';
import { ArrowRight, BookOpen, Hammer, Rocket, ChevronRight } from 'lucide-react';

export function CurrentlyLearning() {
  const [selectedTopic, setSelectedTopic] = useState(LEARNING_TOPICS[0]);

  const pipelineStages = [
    {
      title: "Learning",
      icon: BookOpen,
      desc: "Core DSA concepts, asymptotic complexity, C++ memory models, STL internals & POSIX APIs.",
    },
    {
      title: "Building",
      icon: Hammer,
      desc: "Implementing algorithms from scratch, lossless compression engines, Linux CLI tools & PostgreSQL schemas.",
    },
    {
      title: "Shipping",
      icon: Rocket,
      desc: "Integrating efficient logic into hackathon MVPs, simulation systems, and IoT microcontrollers.",
    },
  ];

  return (
    <section id="learning" className="relative py-24 sm:py-32 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto z-10">
      {/* Section Tag */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-[2px] bg-red-500 shadow-sm shadow-red-500/80" />
        <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-red-400 uppercase">
          04 // CONTINUOUS GROWTH
        </span>
      </div>

      {/* Heading */}
      <div className="max-w-3xl">
        <h2 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl tracking-tight text-white">
          Currently Learning
        </h2>
        <p className="mt-3 text-base sm:text-lg text-zinc-400 font-normal">
          A transparent window into my algorithmic growth, C++ practice, Linux systems programming, and ongoing explorations.
        </p>
      </div>

      {/* Learning -> Building -> Shipping Pipeline Visual */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
        {pipelineStages.map((stage, idx) => {
          const Icon = stage.icon;
          return (
            <div
              key={idx}
              className="relative p-6 sm:p-7 rounded-2xl liquid-glass flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]">
                    <Icon size={20} />
                  </div>
                  <span className="font-mono text-xs text-zinc-500">STAGE 0{idx + 1}</span>
                </div>

                <h3 className="mt-5 font-display font-bold text-xl text-white">
                  {stage.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {stage.desc}
                </p>
              </div>

              {idx < 2 && (
                <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-[#08080b] border border-white/20 items-center justify-center text-zinc-400">
                  <ArrowRight size={12} />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Interactive Topics Explorer & Code Snippet Inspector */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Topic Selector List */}
        <div className="lg:col-span-5 flex flex-col gap-2.5">
          {LEARNING_TOPICS.map((topic) => {
            const isSelected = selectedTopic.id === topic.id;
            return (
              <button
                key={topic.id}
                onClick={() => setSelectedTopic(topic)}
                className={`text-left p-4 sm:p-5 rounded-2xl transition-all flex items-center justify-between border ${
                  isSelected
                    ? 'bg-white/10 border-white/30 text-white shadow-lg shadow-white/5'
                    : 'liquid-glass text-zinc-400 hover:text-white hover:border-white/20'
                }`}
                data-cursor="pointer"
              >
                <div>
                  <div className="font-display font-semibold text-sm sm:text-base flex items-center gap-2">
                    <span>{topic.title}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-zinc-300">
                      {topic.status}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-zinc-400 font-mono truncate max-w-[280px] sm:max-w-xs">
                    {topic.focus}
                  </p>
                </div>

                <ChevronRight
                  size={16}
                  className={`transition-transform ${isSelected ? 'text-white translate-x-1' : 'text-zinc-600'}`}
                />
              </button>
            );
          })}
        </div>

        {/* Live Code Snippet Display */}
        <div className="lg:col-span-7 rounded-2xl liquid-glass-elevated p-5 sm:p-6 flex flex-col justify-between shadow-2xl">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-white/5">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-white/20 border border-white/30" />
                  <div className="w-3 h-3 rounded-full bg-white/20 border border-white/30" />
                  <div className="w-3 h-3 rounded-full bg-white/20 border border-white/30" />
                </div>
                <span className="font-mono text-xs text-zinc-300 ml-2">{selectedTopic.id}.cpp</span>
              </div>
              <span className="font-mono text-[11px] text-zinc-500">C++20 Implementation</span>
            </div>

            <div className="my-4">
              <div className="text-sm font-semibold text-white font-display">
                {selectedTopic.title}
              </div>
              <div className="text-xs font-mono text-zinc-400 mt-0.5">
                Key Focus: {selectedTopic.focus}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-black/70 border border-white/10 overflow-x-auto">
              <pre className="font-mono text-xs sm:text-[13px] text-zinc-200 leading-relaxed">
                <code>{selectedTopic.codeSnippet}</code>
              </pre>
            </div>
          </div>

          <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-zinc-500">
            <span>DISCIPLINED PROBLEM SOLVING</span>
            <span className="text-white">STL // MEMORY EFFICIENT</span>
          </div>
        </div>
      </div>
    </section>
  );
}
