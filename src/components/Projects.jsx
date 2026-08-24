import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

const CATEGORIES = ['All', 'Full-Stack & ML', 'Systems & Software', 'Hardware & IoT', 'Systems & C++'];

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filteredProjects =
    selectedCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="relative py-24 sm:py-32 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto z-10">
      {/* Section Tag */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-[2px] bg-red-500 shadow-sm shadow-red-500/80" />
        <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-red-400 uppercase">
          02 // PORTFOLIO
        </span>
      </div>

      {/* Headline & Filter Bar */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/5">
        <div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl tracking-tight text-white">
            Selected Work
          </h2>
          <p className="mt-3 text-base sm:text-lg text-zinc-400 max-w-xl font-normal">
            A curation of systems utilities, financial simulators, hackathon MVPs, and embedded hardware architectures.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`relative px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                  isActive
                    ? 'bg-white text-black font-semibold shadow-md shadow-white/10'
                    : 'liquid-glass text-zinc-400 hover:text-white hover:border-white/25'
                }`}
                data-cursor="pointer"
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid / Editorial Layout */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            onSelectProject={(proj) => setActiveModalProject(proj)}
          />
        ))}
      </div>

      {/* In-depth Project Details Modal */}
      <ProjectModal
        project={activeModalProject}
        isOpen={Boolean(activeModalProject)}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
