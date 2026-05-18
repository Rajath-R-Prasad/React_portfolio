import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { BGPattern } from '../ui/bg-pattern';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    role: 'Web Developer',
    org: 'DSC-JSSSTU',
    type: 'Leadership',
    period: '2025 — Present',
    desc: 'Designing, developing, and maintaining the chapter website, coordinating with teams, and driving technical initiatives.',
    highlights: ['Website architecture', 'Team coordination', 'Event digital assets', 'React + Vite stack'],
    color: 'blue',
  },
  {
    role: 'Top-5 Hackathon Project',
    org: 'Agrinex — Smart Irrigation',
    type: 'Hackathon',
    period: '2025',
    desc: 'Built a precision agriculture platform with ML-powered crop yield prediction, zonal micro-forecasting, and a real-time farmer dashboard. Selected among top 5 projects.',
    highlights: ['ML pipeline', 'FastAPI backend', 'React dashboard', 'Top 5 finalist'],
    color: 'neon',
  },
  {
    role: 'Top-10 Hackathon Project',
    org: 'AlveolaAI — Pneumonia Detection',
    type: 'Hackathon',
    period: '2026',
    desc: 'AI-powered pneumonia detection from chest X-rays using a U-Net deep learning architecture with Grad-CAM visualization. Generates patient reports for clinical verification.',
    highlights: ['U-Net architecture', 'Grad-CAM viz', 'Deep Learning', 'Top 10 finalist'],
    color: 'neon',
  },
  {
    role: 'Freelance Frontend Dev',
    org: 'Building Journey',
    type: 'Freelance',
    period: '2025 — Present',
    desc: 'Actively building my freelancing presence. Designing and developing web projects, refining my process, and establishing my personal brand as a developer.',
    highlights: ['React', 'Custom designs', 'Client delivery', 'Portfolio-first approach'],
    color: 'blue',
  },
];

export default function Experience() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo('.exp-header > *',
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: '.exp-header', start: 'top 82%', toggleActions: 'play none none reverse' }
      }
    );

    gsap.fromTo('.exp-card',
      { opacity: 0, x: -40 },
      {
        opacity: 1, x: 0, duration: 0.6, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: '.exp-list', start: 'top 80%', toggleActions: 'play none none reverse' }
      }
    );
  }, { scope: sectionRef });

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative w-full bg-nb-black overflow-hidden py-24 md:py-32"
    >
      <BGPattern variant="dots" mask="fade-center" size={40} fill="rgba(212,255,0,0.06)" />
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-nb-neon/30" />

      <div className="relative z-10 max-w-[1300px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Header */}
        <div className="exp-header flex items-end justify-between mb-16 border-b-[2px] border-white/5 pb-8">
          <div>
            <p className="section-num mb-3">// 04 — Experience</p>
            <h2 className="font-bebas text-[clamp(3rem,7vw,6rem)] leading-none text-white">
              JOURNEY &<br />
              <span className="text-outline-blue">LEADERSHIP</span>
            </h2>
          </div>
          <div className="hidden md:block font-mono text-[10px] text-white/20 uppercase tracking-[0.15em] text-right">
            Real experience<br />
            <span className="text-nb-blue">Real impact</span>
          </div>
        </div>

        {/* Timeline */}
        <div className="exp-list relative">
          {/* Vertical line */}
          <div className="absolute left-[22px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-nb-blue via-nb-neon/50 to-transparent hidden md:block" />

          <div className="flex flex-col gap-8">
            {experiences.map((exp, i) => (
              <div key={i} className="exp-card opacity-0 group relative md:pl-16">
                {/* Timeline dot */}
                <div className={`absolute left-0 top-6 w-[10px] h-[10px] border-[2px] hidden md:block
                  ${exp.color === 'neon' ? 'border-nb-neon bg-nb-neon/30' : 'border-nb-blue bg-nb-blue/30'}`} />

                <div className={`border-[1.5px] p-6 md:p-8 bg-nb-dark/50 transition-all duration-300 group-hover:bg-nb-dark
                  ${exp.color === 'neon' ? 'border-white/10 hover:border-nb-neon/40' : 'border-white/10 hover:border-nb-blue/40'}`}>

                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      {/* Type badge */}
                      <span className={`inline-block font-mono text-[8px] font-bold uppercase tracking-[0.15em] px-2.5 py-1 mb-3 border-[1.5px]
                        ${exp.color === 'neon' ? 'border-nb-neon/50 text-nb-neon' : 'border-nb-blue/50 text-nb-blue'}`}>
                        {exp.type}
                      </span>

                      <h3 className="font-bebas text-[26px] md:text-[32px] text-white leading-none tracking-wide">
                        {exp.role}
                      </h3>
                      <p className={`font-space text-[13px] font-semibold mt-1 ${exp.color === 'neon' ? 'text-nb-neon' : 'text-nb-blue'}`}>
                        {exp.org}
                      </p>
                    </div>

                    <div className="font-mono text-[10px] text-white/25 uppercase tracking-[0.15em] text-right">
                      {exp.period}
                    </div>
                  </div>

                  <p className="font-space text-[14px] text-white/50 leading-relaxed mb-5">
                    {exp.desc}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((h) => (
                      <span
                        key={h}
                        className="font-mono text-[9px] text-white/35 border-[1px] border-white/10 px-2.5 py-1 uppercase tracking-wider hover:text-white/60 hover:border-white/20 transition-colors duration-200"
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                  {/* Bottom accent */}
                  <div className={`absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 ease-out
                    ${exp.color === 'neon' ? 'bg-nb-neon' : 'bg-nb-blue'}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
