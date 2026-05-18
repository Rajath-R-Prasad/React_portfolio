import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { BGPattern } from '../ui/bg-pattern';

gsap.registerPlugin(ScrollTrigger);

const services = [
  { label: 'Frontend Development', desc: 'React, Tailwind, GSAP. Pixel-perfect, performant, and polished.' },
  { label: 'Full-Stack Web Apps', desc: 'FastAPI + React. End-to-end web products built with care.' },
  { label: 'Data Dashboards', desc: 'Python, SQL, visualization. Raw data → actionable insight.' },
  { label: 'ML Prototyping', desc: 'Classification, prediction, inference. Proof of concept to production.' },
];

export default function Freelance() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo('.freelance-content > *',
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: '.freelance-content', start: 'top 80%', toggleActions: 'play none none reverse' }
      }
    );

    gsap.fromTo('.service-item',
      { opacity: 0, x: 30 },
      {
        opacity: 1, x: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: '.services-list', start: 'top 82%', toggleActions: 'play none none reverse' }
      }
    );
  }, { scope: sectionRef });

  return (
    <section
      id="freelance"
      ref={sectionRef}
      className="relative w-full overflow-hidden py-24 md:py-32"
      style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #050510 50%, #0a0a0a 100%)' }}
    >
      {/* Grid */}
      <BGPattern variant="diagonal-stripes" mask="fade-y" size={36} fill="rgba(26,26,255,0.07)" />
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-nb-blue" />

      {/* Glow blob */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] rounded-full opacity-[0.05]"
          style={{ background: 'radial-gradient(ellipse, #1a1aff 0%, transparent 70%)' }} />
      </div>

      <div className="relative z-10 max-w-[1300px] mx-auto px-6 md:px-10 lg:px-16">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-16 items-center">

          {/* Left */}
          <div className="freelance-content flex flex-col gap-8">
            <div>
              <p className="section-num mb-3">// 05 — Availability</p>
              <h2 className="font-bebas text-[clamp(3rem,7vw,5.5rem)] leading-none text-white mb-4">
                LET'S BUILD<br />
                <span className="text-nb-neon">SOMETHING</span><br />
                <span className="text-outline">REAL</span>
              </h2>
              <p className="font-space text-[15px] md:text-[17px] text-white/50 leading-relaxed max-w-lg">
                I'm actively taking on freelance projects — websites, web apps, data tools.
                I'm early in the journey, but my engineering mindset, clean code, and commitment
                to quality mean you get{' '}
                <span className="text-white/80 font-semibold">real value</span>, not bloat.
              </p>
            </div>

            {/* Availability status */}
            <div className="inline-flex items-center gap-3 border-[2px] border-nb-neon px-5 py-3 w-fit">
              <span className="relative flex items-center justify-center w-2.5 h-2.5">
                <span className="avail-ring" style={{ animationDuration: '1.6s' }} />
                <span className="relative block w-2.5 h-2.5 rounded-full bg-nb-neon" />
              </span>
              <span className="font-mono text-[11px] font-bold text-nb-neon uppercase tracking-[0.1em]">
                Open for Work
              </span>
            </div>

            {/* What I offer */}
            <div className="services-list flex flex-col gap-3">
              <p className="font-mono text-[10px] text-white/30 uppercase tracking-[0.15em] mb-1">
                What I can build for you:
              </p>
              {services.map((s, i) => (
                <div
                  key={i}
                  className="service-item opacity-0 group flex items-start gap-4 p-4 border-[1.5px] border-white/8 hover:border-nb-blue/50 transition-all duration-300 hover:bg-nb-blue/5"
                >
                  <span className="text-nb-neon font-mono text-sm mt-0.5 font-bold group-hover:text-white transition-colors">→</span>
                  <div>
                    <div className="font-space text-[13px] font-bold text-white/80 mb-0.5">{s.label}</div>
                    <div className="font-space text-[12px] text-white/35">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: CTA card */}
          <div className="relative">
            <div className="absolute -top-3 -right-3 w-full h-full border-[2px] border-nb-neon/15 pointer-events-none" />
            <div className="relative border-[2px] border-white/10 p-8 md:p-10 bg-nb-dark flex flex-col gap-6">
              <div className="font-mono text-[9px] text-nb-blue uppercase tracking-[0.2em]">
                // Start a conversation
              </div>

              <div>
                <h3 className="font-bebas text-[36px] text-white leading-none mb-2">
                  HAVE A PROJECT<br />IN MIND?
                </h3>
                <p className="font-space text-[13px] text-white/40 leading-relaxed">
                  Tell me what you're building. I'll tell you if I can make it happen — and how.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="w-full px-6 py-4 bg-nb-neon text-nb-black font-space font-bold text-[13px] uppercase tracking-[0.08em] text-center nb-shadow-blue hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all duration-100"
                >
                  Start a Project ↗
                </a>
                <a
                  href="mailto:rajath2010rrp@gmail.com"
                  className="w-full px-6 py-4 bg-transparent text-white border-[2px] border-white/20 font-space font-bold text-[13px] uppercase tracking-[0.08em] text-center hover:border-white/40 hover:text-white/80 transition-all duration-200"
                >
                  Email Directly
                </a>
              </div>

              <div className="border-t-[1px] border-white/5 pt-4 flex items-center justify-between">
                <div className="font-mono text-[9px] text-white/20 uppercase tracking-[0.1em]">Response time</div>
                <div className="font-mono text-[9px] text-nb-neon uppercase tracking-[0.1em]">&lt; 24 hours</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
