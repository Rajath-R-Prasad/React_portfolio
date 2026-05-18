import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { projects } from '../../constants';
import { BGPattern } from '../ui/bg-pattern';

gsap.registerPlugin(ScrollTrigger);

const categoryColors = {
  'Web App': { border: 'border-nb-blue', text: 'text-nb-blue' },
  'Hackathon': { border: 'border-nb-neon', text: 'text-nb-neon' },
  'Data Science': { border: 'border-nb-blue-light', text: 'text-nb-blue-light' },
  'Frontend': { border: 'border-white/30', text: 'text-white/60' },
};

const projectMeta = {
  'Todo-List':                { category: 'Frontend',     tech: ['React', 'CSS', 'LocalStorage'], year: '2024' },
  'ChronoLog':                { category: 'Web App',      tech: ['React', 'Vite', 'LocalStorage'], year: '2025', live: true },
  'Personal Portfolio Website': { category: 'Frontend',  tech: ['React', 'GSAP', 'Tailwind'], year: '2025', live: true },
  'IMDb Movie Analysis':      { category: 'Data Science', tech: ['Python', 'Pandas', 'BeautifulSoup'], year: '2025', live: true },
  'Agrinex':                  { category: 'Hackathon',    tech: ['ML', 'Python', 'FastAPI', 'React'], year: '2025' },
  'AlveolaAI':                { category: 'Hackathon',    tech: ['Deep Learning', 'PyTorch', 'Grad-CAM'], year: '2026' },
};

export default function Projects() {
  const sectionRef = useRef(null);
  const [hovered, setHovered] = useState(null);

  useGSAP(() => {
    gsap.fromTo('.projects-header > *',
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: '.projects-header', start: 'top 82%', toggleActions: 'play none none reverse' }
      }
    );

    gsap.fromTo('.project-card',
      { opacity: 0, y: 60 },
      {
        opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: '.projects-grid', start: 'top 80%', toggleActions: 'play none none reverse' }
      }
    );
  }, { scope: sectionRef });

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative w-full bg-nb-dark overflow-hidden py-24 md:py-32"
    >
      <BGPattern variant="vertical-lines" mask="fade-y" size={44} fill="rgba(26,26,255,0.08)" />
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-nb-blue" />

      <div className="relative z-10 max-w-[1300px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Header */}
        <div className="projects-header flex items-end justify-between mb-16 border-b-[2px] border-white/5 pb-8">
          <div>
            <p className="section-num mb-3">// 03 — Featured Work</p>
            <h2 className="font-bebas text-[clamp(3rem,7vw,6rem)] leading-none text-white">
              PROJECTS THAT<br />
              <span className="text-outline-blue">SHIP</span> <span className="text-nb-neon">&</span> WORK
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-nb-neon animate-pulse" />
            <span className="font-mono text-[10px] text-white/30 uppercase tracking-[0.15em]">
              {projects.length} Projects
            </span>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((proj, i) => {
            const meta = projectMeta[proj.title] || { category: 'Project', tech: [], year: '2024' };
            const catStyle = categoryColors[meta.category] || categoryColors['Frontend'];
            const isFeatured = ['Agrinex', 'AlveolaAI'].includes(proj.title);

            return (
              <div
                key={proj.id}
                className={`project-card group relative border-[1.5px] border-white/10 bg-nb-black/40 overflow-hidden cursor-pointer
                  ${isFeatured ? 'xl:col-span-1 md:col-span-2' : ''}`}
                onMouseEnter={() => setHovered(proj.id)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Image area */}
                <div className="project-card-img relative w-full h-48 md:h-52 overflow-hidden bg-nb-dark border-b-[1.5px] border-white/8">
                  <img
                    src={`/${proj.image}`}
                    alt={proj.title}
                    className="w-full h-full object-cover object-top"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />

                  {/* Overlay on hover */}
                  <div className={`absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 transition-opacity duration-300
                    ${hovered === proj.id ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                    style={{ background: 'rgba(10,10,10,0.88)' }}>
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                      className="flex items-center gap-2 px-5 py-2.5 bg-nb-blue text-white font-space font-bold text-[12px] uppercase tracking-[0.08em] hover:bg-nb-neon hover:text-nb-black transition-colors duration-200"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                      GitHub ↗
                    </a>
                    {proj.live && (
                      <a
                        href={proj.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={e => e.stopPropagation()}
                        className="flex items-center gap-2 px-5 py-2.5 border-[2px] border-nb-neon text-nb-neon font-space font-bold text-[12px] uppercase tracking-[0.08em] hover:bg-nb-neon hover:text-nb-black transition-colors duration-200"
                      >
                        Live Demo ↗
                      </a>
                    )}
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-3 left-3">
                    <span className={`font-mono text-[10px] font-bold uppercase tracking-[0.12em] px-2.5 py-1 bg-nb-black/80 border-[1.5px] ${catStyle.border} ${catStyle.text}`}>
                      {meta.category}
                    </span>
                  </div>

                  {isFeatured && (
                    <div className="absolute top-3 right-3">
                      <span className="font-mono text-[8px] font-bold uppercase tracking-[0.12em] px-2 py-1 bg-nb-neon text-nb-black">
                        ✦ Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 relative z-10">
                  <div className="flex items-start justify-between mb-2">
                    <div className="font-mono text-[9px] text-nb-neon/50 uppercase tracking-[0.15em]">
                      // {meta.year}
                    </div>
                  </div>

                  <h3 className="font-bebas text-[26px] text-white tracking-[0.5px] mb-2 group-hover:text-nb-neon transition-colors duration-300">
                    {proj.title}
                  </h3>

                  <p className="font-space text-[13px] text-white/40 leading-relaxed mb-4 line-clamp-3">
                    {proj.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {meta.tech.map((t) => (
                      <span
                        key={t}
                        className={`font-mono text-[10px] border-[1px] px-2.5 py-1 uppercase tracking-wider
                          ${meta.category === 'Hackathon' ? 'text-nb-neon/60 border-nb-neon/20' : 'text-white/30 border-white/10'}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Footer links */}
                  <div className="flex items-center gap-3 pt-3 border-t-[1px] border-white/5">
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`font-mono text-[11px] font-bold uppercase tracking-[0.1em] ${catStyle.text} hover:opacity-80 transition-opacity duration-200 flex items-center gap-1`}
                    >
                      ↗ View Code
                    </a>
                    {proj.live && (
                      <>
                        <span className="text-white/10">|</span>
                        <a
                          href={proj.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-white/30 hover:text-nb-neon transition-colors duration-200 flex items-center gap-1"
                        >
                          ↗ Live Demo
                        </a>
                      </>
                    )}
                  </div>
                </div>

                {/* Bottom accent bar */}
                <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-nb-blue to-nb-neon transform scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left`} />
              </div>
            );
          })}
        </div>

        {/* View more CTA */}
        <div className="flex justify-center mt-12">
          <a
            href="https://github.com/Rajath-R-Prasad"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border-[2px] border-white/20 text-white/60 font-space font-bold text-[12px] uppercase tracking-[0.08em] hover:border-nb-blue hover:text-white transition-all duration-300 nb-shadow-blue group"
          >
            See All on GitHub
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
