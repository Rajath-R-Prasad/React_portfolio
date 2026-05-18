import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { BGPattern } from '../ui/bg-pattern';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    id: 'frontend',
    label: 'Frontend',
    icon: '◈',
    skills: [
      { name: 'React', level: 85, hot: true },
      { name: 'JavaScript', level: 80, hot: true },
      { name: 'Tailwind CSS', level: 90, hot: true },
      { name: 'HTML/CSS', level: 92, hot: false },
      { name: 'GSAP', level: 70, hot: false },
      { name: 'Framer Motion', level: 65, hot: false },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: '⬡',
    skills: [
      { name: 'Python', level: 82, hot: true },
      { name: 'FastAPI', level: 75, hot: true },
      { name: 'Node.js', level: 68, hot: false },
      { name: 'SQL', level: 78, hot: false },
      { name: 'REST APIs', level: 80, hot: false },
      { name: 'MongoDB', level: 60, hot: false },
    ],
  },
  {
    id: 'data',
    label: 'Data + ML',
    icon: '◉',
    skills: [
      { name: 'Pandas', level: 80, hot: true },
      { name: 'NumPy', level: 78, hot: false },
      { name: 'Scikit-learn', level: 72, hot: true },
      { name: 'Matplotlib', level: 75, hot: false },
      { name: 'Seaborn', level: 70, hot: false },
      { name: 'Jupyter', level: 82, hot: false },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    icon: '◇',
    skills: [
      { name: 'Git/GitHub', level: 85, hot: true },
      { name: 'Vite', level: 80, hot: false },
      { name: 'Tableau', level: 68, hot: false },
      { name: 'Excel', level: 72, hot: false },
      { name: 'Figma', level: 60, hot: false },
      { name: 'VS Code', level: 90, hot: false },
    ],
  },
];

const allSkillPills = [
  'React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS',
  'Tailwind CSS', 'GSAP', 'Framer Motion', 'Python', 'FastAPI',
  'Node.js', 'SQL', 'MongoDB', 'REST APIs', 'Pandas', 'NumPy',
  'Scikit-learn', 'Matplotlib', 'Seaborn', 'Git', 'GitHub',
  'Vite', 'Jupyter', 'Tableau', 'Figma', 'Vercel',
];

export default function Skills() {
  const sectionRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('frontend');

  useGSAP(() => {
    gsap.fromTo('.skills-header > *',
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: '.skills-header', start: 'top 82%', toggleActions: 'play none none reverse' }
      }
    );

    gsap.fromTo('.skill-pill-item',
      { opacity: 0, scale: 0.8, y: 20 },
      {
        opacity: 1, scale: 1, y: 0, duration: 0.4, stagger: 0.03, ease: 'back.out(1.5)',
        scrollTrigger: { trigger: '.skills-pills-wrap', start: 'top 82%', toggleActions: 'play none none reverse' }
      }
    );

    gsap.fromTo('.skills-cat-btn',
      { opacity: 0, y: 20 },
      {
        opacity: 1, y: 0, duration: 0.4, stagger: 0.08, ease: 'power2.out',
        scrollTrigger: { trigger: '.skills-cats', start: 'top 82%', toggleActions: 'play none none reverse' }
      }
    );
  }, { scope: sectionRef });

  // Animate bars when category changes
  const animateBars = () => {
    setTimeout(() => {
      gsap.fromTo('.skill-bar-fill',
        { width: '0%', opacity: 0 },
        { width: (i, el) => el.getAttribute('data-level') + '%', opacity: 1, duration: 0.8, stagger: 0.08, ease: 'power3.out' }
      );
      gsap.fromTo('.skill-bar-row',
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.4, stagger: 0.06, ease: 'power2.out' }
      );
    }, 50);
  };

  const handleCategoryChange = (id) => {
    setActiveCategory(id);
    animateBars();
  };

  const activeCat = skillCategories.find(c => c.id === activeCategory);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative w-full bg-nb-black overflow-hidden py-24 md:py-32"
    >
      {/* Grid bg */}
      <BGPattern variant="horizontal-lines" mask="fade-edges" size={44} fill="rgba(26,26,255,0.1)" />
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-nb-neon/30" />

      <div className="relative z-10 max-w-[1300px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Header */}
        <div className="skills-header flex items-end justify-between mb-16 border-b-[2px] border-white/5 pb-8">
          <div>
            <p className="section-num mb-3">// 02 — Skills</p>
            <h2 className="font-bebas text-[clamp(3rem,7vw,6rem)] leading-none text-white">
              MY <span className="text-outline-blue">TECH</span><br />
              <span className="text-nb-neon">ARSENAL</span>
            </h2>
          </div>
          <div className="hidden md:block font-mono text-[10px] text-white/20 uppercase tracking-[0.15em] text-right leading-relaxed">
            Growing every day<br />
            <span className="text-nb-neon">Shipping real projects</span>
          </div>
        </div>

        {/* ── Animated Skill Pills ── */}
        <div className="skills-pills-wrap mb-16">
          <p className="font-mono text-[10px] text-white/30 uppercase tracking-[0.15em] mb-5">
            Technologies I work with
          </p>
          <div className="flex flex-wrap gap-2.5">
            {allSkillPills.map((s, i) => (
              <span
                key={s}
                className={`skill-pill skill-pill-item opacity-0 font-mono text-[10px] font-bold uppercase tracking-[0.06em] px-3 py-2 border-[1.5px] cursor-default select-none
                  ${i % 5 === 0 ? 'border-nb-neon text-nb-neon' :
                    i % 5 === 1 ? 'border-nb-blue-light text-nb-blue-light' :
                    i % 5 === 2 ? 'border-white/20 text-white/50' :
                    i % 5 === 3 ? 'border-nb-blue/60 text-nb-blue' :
                    'border-white/10 text-white/30'}`}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* ── Skill Depth Bars ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
          {/* Category tabs — 2×2 grid on mobile, vertical stack on desktop */}
          <div className="skills-cats grid grid-cols-2 lg:grid-cols-1 gap-2">
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`skills-cat-btn opacity-0 text-left px-4 py-3.5 border-[1.5px] font-space font-bold text-[11px] uppercase tracking-[0.1em] transition-all duration-200 w-full
                  ${activeCategory === cat.id
                    ? 'border-nb-neon bg-nb-neon/10 text-white'
                    : 'border-white/10 text-white/40 hover:border-white/20 hover:text-white/60'
                  }`}
              >
                <span className="text-nb-neon mr-2 font-mono">{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>

          {/* Skill bars */}
          <div className="flex flex-col gap-4 border-[1.5px] border-white/8 p-6 md:p-8 bg-nb-dark/50">
            <div className="font-mono text-[10px] text-nb-blue uppercase tracking-[0.15em] mb-2">
              {activeCat?.icon} {activeCat?.label} Skills
            </div>
            {activeCat?.skills.map((skill, i) => (
              <div key={skill.name} className="skill-bar-row opacity-0">
                <div className="flex justify-between items-center mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="font-space text-[13px] font-semibold text-white/80">{skill.name}</span>
                    {skill.hot && (
                      <span className="font-mono text-[8px] text-nb-neon border border-nb-neon/40 px-1.5 py-0.5 uppercase tracking-wider">
                        core
                      </span>
                    )}
                  </div>
                  <span className="font-mono text-[11px] text-white/30">{skill.level}%</span>
                </div>
                <div className="h-[3px] bg-white/6 w-full overflow-hidden">
                  <div
                    className="skill-bar-fill h-full bg-gradient-to-r from-nb-blue to-nb-neon"
                    data-level={skill.level}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
