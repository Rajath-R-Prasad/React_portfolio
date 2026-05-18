import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { BGPattern } from '../ui/bg-pattern';

gsap.registerPlugin(ScrollTrigger);

const traits = [
  { label: 'Frontend Dev', icon: '⬡', desc: 'React, Tailwind, GSAP — I craft interfaces that feel alive.' },
  { label: 'Full-Stack', icon: '◈', desc: 'Node.js, FastAPI, SQL — bridging UI with server-side logic.' },
  { label: 'Data + ML', icon: '◉', desc: 'Python, Pandas, Scikit-learn — turning data into insight.' },
  { label: 'UI/UX Design', icon: '◇', desc: 'I care deeply about the experience, not just the function.' },
];

export default function About() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    // Section header
    gsap.fromTo('.about-header > *',
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: '.about-header', start: 'top 82%', toggleActions: 'play none none reverse' }
      }
    );

    // Text blocks
    gsap.fromTo('.about-para',
      { opacity: 0, x: -30 },
      {
        opacity: 1, x: 0, duration: 0.7, stagger: 0.15, ease: 'power2.out',
        scrollTrigger: { trigger: '.about-paras', start: 'top 80%', toggleActions: 'play none none reverse' }
      }
    );

    // Trait cards
    gsap.fromTo('.about-trait',
      { opacity: 0, y: 30, scale: 0.95 },
      {
        opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.1, ease: 'back.out(1.3)',
        scrollTrigger: { trigger: '.about-traits', start: 'top 80%', toggleActions: 'play none none reverse' }
      }
    );

    // Photo
    gsap.fromTo('.about-photo',
      { opacity: 0, x: 50, scale: 0.97 },
      {
        opacity: 1, x: 0, scale: 1, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: '.about-photo', start: 'top 80%', toggleActions: 'play none none reverse' }
      }
    );
  }, { scope: sectionRef });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full bg-nb-dark overflow-hidden py-24 md:py-32"
    >
      {/* ── Grid Background ── */}
      <BGPattern variant="diagonal-stripes" mask="fade-edges" size={36} fill="rgba(212,255,0,0.04)" />
      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-nb-blue" />

      <div className="relative z-10 max-w-[1300px] mx-auto px-6 md:px-10 lg:px-16">

        {/* ── Section Header ── */}
        <div className="about-header flex items-end justify-between mb-16 md:mb-20 border-b-[2px] border-white/5 pb-8">
          <div>
            <p className="section-num mb-3">// 01 — About</p>
            <h2 className="font-bebas text-[clamp(3rem,7vw,6rem)] leading-none text-white">
              THE HUMAN<br />
              <span className="text-outline-blue">BEHIND</span> <span className="text-nb-neon">THE CODE</span>
            </h2>
          </div>
          <div className="hidden md:block text-right">
            <div className="font-mono text-[10px] text-white/20 uppercase tracking-[0.15em] leading-relaxed">
              Based in India<br />
              Open to Remote<br />
              <span className="text-nb-blue">Freelance Ready</span>
            </div>
          </div>
        </div>

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 lg:gap-20 items-start">

          {/* ── Left: Text ── */}
          <div>
            <div className="about-paras flex flex-col gap-6 mb-12">
              <p className="about-para font-space text-[15px] md:text-[17px] text-white/70 leading-relaxed border-l-[3px] border-nb-blue pl-5">
                I'm <strong className="text-white">Rajath R Prasad</strong> — a developer who lives at the intersection of
                design and engineering. I build web experiences that don't just work, they{' '}
                <span className="text-nb-neon font-semibold">feel premium</span>.
              </p>
              <p className="about-para font-space text-[15px] md:text-[17px] text-white/50 leading-relaxed">
                Currently deep in my full-stack journey — from pixel-perfect React interfaces to
                FastAPI backends, SQL databases, and machine learning pipelines. I'm not just
                learning; I'm <span className="text-white/70">building real things</span> that solve real problems.
              </p>
              <p className="about-para font-space text-[15px] md:text-[17px] text-white/50 leading-relaxed">
                As Web Developer at <span className="text-nb-blue font-semibold">IEEE SJCE and DSC-JSSSTU</span>, I've led digital
                initiatives, collaborated with teams, and shipped products on deadline.
                The freelancing journey is just beginning — and I'm{' '}
                <span className="text-nb-neon font-semibold">all in</span>.
              </p>
            </div>

            {/* ── Trait cards ── */}
            <div className="about-traits grid grid-cols-1 sm:grid-cols-2 gap-4">
              {traits.map((t, i) => (
                <div
                  key={i}
                  className="about-trait group relative overflow-hidden border-[1.5px] border-white/10 p-5 hover:border-nb-blue/60 transition-all duration-300 cursor-default"
                >
                  {/* Hover fill */}
                  <div className="absolute inset-0 bg-nb-blue opacity-0 group-hover:opacity-[0.04] transition-opacity duration-300" />

                  <div className="flex items-start gap-3">
                    <span className="text-nb-neon text-xl mt-0.5 font-mono">{t.icon}</span>
                    <div>
                      <div className="font-bebas text-[18px] text-white tracking-wide mb-1">{t.label}</div>
                      <p className="font-space text-[12px] text-white/40 leading-relaxed">{t.desc}</p>
                    </div>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[16px] border-l-transparent border-b-[16px] border-b-nb-blue/20 group-hover:border-b-nb-blue/40 transition-all duration-300" />
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Photo ── */}
          <div className="about-photo relative hidden lg:block">
            <div className="relative">
              {/* Photo */}
              <div className="hero-photo-wrap w-full aspect-[3/4] overflow-hidden border-[2px] border-white/10">
                <img
                  src="/my-photo.jpg"
                  alt="Rajath R Prasad"
                  className="w-full h-full object-cover object-top"
                />
                <div className="hero-photo-glow" />
              </div>

              {/* Decoration */}
              <div className="absolute -top-4 -left-4 w-full h-full border-[2px] border-nb-neon/20 pointer-events-none" />
              <div className="absolute -bottom-2 -right-2 px-3 py-2 bg-nb-black border-[1.5px] border-nb-blue">
                <div className="font-mono text-[9px] text-nb-blue uppercase tracking-[0.1em]">FREELANCER</div>
                <div className="font-bebas text-[18px] text-white">DEVELOPER</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
