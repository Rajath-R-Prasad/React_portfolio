import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SplitType from 'split-type';
import { BGPattern } from '../ui/bg-pattern';

const roles = ['Full-Stack Developer', 'Data + ML Enthusiast', 'UI/UX Explorer'];

export default function Hero() {
  const heroRef = useRef(null);
  const headingRef = useRef(null);
  const nameRef = useRef(null);
  const photoRef = useRef(null);
  const ctaRef = useRef(null);
  const tagsRef = useRef(null);
  const badgeRef = useRef(null);
  const bgRef = useRef(null);

  const [currentRole, setCurrentRole] = useState(0);
  const [roleFade, setRoleFade] = useState(true);

  // Role cycling
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleFade(false);
      setTimeout(() => {
        setCurrentRole((p) => (p + 1) % roles.length);
        setRoleFade(true);
      }, 350);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  // Parallax background on mouse move
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!bgRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      gsap.to(bgRef.current, {
        x: x,
        y: y,
        duration: 1.8,
        ease: 'power2.out',
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    // Badge
    tl.fromTo(badgeRef.current,
      { opacity: 0, y: -20, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'back.out(1.7)' }
    );

    // Name split animation
    if (nameRef.current) {
      const split = new SplitType(nameRef.current, { types: 'chars' });
      tl.fromTo(split.chars,
        { opacity: 0, y: 60, rotateX: -90 },
        {
          opacity: 1, y: 0, rotateX: 0,
          duration: 0.7, stagger: 0.05, ease: 'back.out(1.4)',
        },
        '-=0.2'
      );
    }

    // Heading lines
    tl.fromTo('.hero-line',
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out' },
      '-=0.3'
    );

    // Tagline
    tl.fromTo('.hero-tagline',
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out' },
      '-=0.2'
    );

    // CTA buttons
    tl.fromTo('.hero-cta-btn',
      { opacity: 0, y: 20, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.12, ease: 'back.out(1.4)' },
      '-=0.2'
    );

    // Tags
    tl.fromTo('.hero-tag',
      { opacity: 0, scale: 0.85 },
      { opacity: 1, scale: 1, duration: 0.4, stagger: 0.06, ease: 'back.out(1.5)' },
      '-=0.2'
    );

    // Photo
    tl.fromTo(photoRef.current,
      { opacity: 0, x: 60, scale: 0.95 },
      { opacity: 1, x: 0, scale: 1, duration: 1, ease: 'power3.out' },
      '-=0.9'
    );

    // Floating elements
    gsap.to('.hero-float-1', {
      y: -18, x: 6, rotation: 2,
      duration: 6, ease: 'sine.inOut', yoyo: true, repeat: -1,
    });
    gsap.to('.hero-float-2', {
      y: -14, x: -8, rotation: -2,
      duration: 8, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 1.5,
    });
    gsap.to('.hero-float-3', {
      y: -22, rotation: 3,
      duration: 5, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 0.8,
    });
  }, []);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/(JPMC)RAJATH R PRASAD - Resume.pdf';
    link.download = 'Rajath_R_Prasad_CV.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen w-full bg-nb-black overflow-hidden flex flex-col pt-[96px]"
    >
      {/* ── BGPattern grid background with mouse parallax ── */}
      <div
        ref={bgRef}
        className="absolute inset-0 pointer-events-none"
        style={{ willChange: 'transform' }}
      >
        <BGPattern
          variant="dots"
          mask="fade-edges"
          size={44}
          fill="rgba(26,26,255,0.18)"
          className="z-0"
        />
      </div>

      {/* ── Floating ambient blobs ── */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #1a1aff 0%, transparent 70%)' }} />
      <div className="absolute bottom-1/3 left-1/5 w-72 h-72 rounded-full opacity-[0.06] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #d4ff00 0%, transparent 70%)' }} />

      {/* ── Floating UI elements ── */}
      <div className="hero-float-1 absolute top-[18%] left-[6%] opacity-10 pointer-events-none hidden lg:block">
        <div className="w-16 h-16 border-2 border-nb-blue rotate-12" />
      </div>
      <div className="hero-float-2 absolute bottom-[25%] right-[8%] opacity-10 pointer-events-none hidden lg:block">
        <div className="w-10 h-10 border-2 border-nb-blue rounded-full" />
      </div>
      <div className="hero-float-3 absolute top-[55%] left-[3%] opacity-10 pointer-events-none hidden lg:block">
        <div className="w-6 h-6 bg-nb-neon rotate-45" />
      </div>
      <div className="hero-float-1 absolute top-[30%] right-[14%] opacity-[0.07] pointer-events-none hidden lg:block">
        <div className="font-mono text-xs text-nb-blue">
          {`{ dev: true,\n  skills: "∞" }`}
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 py-10 lg:py-16 gap-12 flex-1">

        {/* ── LEFT: Typography block ── */}
        <div className="flex flex-col gap-5 flex-1 max-w-2xl">

          {/* Availability badge */}
          <div ref={badgeRef} className="opacity-0 flex items-center gap-2.5 w-fit border-[2px] border-nb-neon px-3 py-1.5">
            <span className="relative flex items-center justify-center w-2 h-2">
              <span className="avail-ring" />
              <span className="relative block w-2 h-2 rounded-full bg-nb-neon" />
            </span>
            <span className="font-mono text-[10px] font-bold text-nb-neon uppercase tracking-[0.1em]">
              Let's build something
            </span>
          </div>

          {/* Name */}
          <div className="overflow-hidden perspective-[600px]">
            <h1
              ref={nameRef}
              className="font-bebas text-[clamp(3.8rem,9vw,8.5rem)] leading-[0.9] tracking-[2px] text-white select-none"
            >
              RAJATH R PRASAD
            </h1>
          </div>

          {/* Role lines */}
          <div className="flex flex-col gap-1">
            <div className="hero-line opacity-0 flex items-center gap-3 flex-wrap">
              <span className="font-bebas text-[clamp(1.6rem,3.5vw,2.8rem)] leading-none text-nb-neon">
                I BUILD
              </span>
              <span className="font-bebas text-[clamp(1.6rem,3.5vw,2.8rem)] leading-none text-nb-neon">
                DIGITAL
              </span>
              <span className="font-bebas text-[clamp(1.6rem,3.5vw,2.8rem)] leading-none text-outline-blue">
                EXPERIENCES
              </span>
            </div>
            <div className="hero-line opacity-0 font-bebas text-[clamp(1rem,2vw,1.6rem)] leading-none text-white/50 tracking-[0.15em] uppercase">
              that feel cinematic.
            </div>
          </div>

          {/* Animated role */}
          <div className="hero-tagline opacity-0 flex items-center gap-3 border-l-[3px] border-nb-neon pl-4 py-1">
            <span className="font-space text-sm text-nb-neon/60 uppercase tracking-[0.08em]">Currently:</span>
            <span
              className={`font-space text-sm font-semibold text-white/80 transition-opacity duration-300 ${roleFade ? 'opacity-100' : 'opacity-0'}`}
            >
              {roles[currentRole]}
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-2">
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="hero-cta-btn magnetic-btn opacity-0 inline-flex items-center gap-2 px-6 py-3.5 bg-nb-blue text-white font-space font-bold text-[12px] uppercase tracking-[0.08em] border-[2.5px] border-nb-blue nb-shadow-neon hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all duration-100"
            >
              View Work ↗
            </a>
            <button
              onClick={handleDownloadCV}
              className="hero-cta-btn magnetic-btn opacity-0 inline-flex items-center gap-2 px-6 py-3.5 bg-transparent text-white font-space font-bold text-[12px] uppercase tracking-[0.08em] border-[2.5px] border-white/25 hover:border-nb-neon hover:text-nb-neon hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-100"
            >
              Download CV
            </button>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="hero-cta-btn magnetic-btn opacity-0 inline-flex items-center gap-2 px-6 py-3.5 bg-transparent text-white/50 font-space font-bold text-[12px] uppercase tracking-[0.08em] border-[2.5px] border-white/10 hover:text-white/80 hover:border-white/20 transition-all duration-200"
            >
              Let's Talk
            </a>
          </div>

          {/* Tech stack tags */}
          <div className="flex flex-wrap gap-2 mt-1">
            {[
              { label: 'React', color: 'hot' },
              { label: 'JavaScript', color: 'blu' },
              { label: 'Python', color: 'hot' },
              { label: 'FastAPI', color: 'blu' },
              { label: 'SQL', color: '' },
              { label: 'ML / AI', color: '' },
              { label: 'Tailwind', color: 'hot' },
              { label: 'Git', color: '' },
            ].map((tag) => (
              <span
                key={tag.label}
                className={`hero-tag opacity-0 font-mono text-[9px] font-bold uppercase tracking-[0.06em] px-2.5 py-[5px] border-[1.5px] transition-all duration-200 cursor-default
                  ${tag.color === 'hot' ? 'border-nb-neon text-nb-neon hover:bg-nb-neon hover:text-nb-black' :
                    tag.color === 'blu' ? 'border-nb-blue-light text-nb-blue-light hover:bg-nb-blue hover:text-white' :
                    'border-white/15 text-white/40 hover:border-white/30 hover:text-white/60'}`}
              >
                {tag.label}
              </span>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Photo ── */}
        <div ref={photoRef} className="opacity-0 relative flex-shrink-0">
          {/* Decorative frame */}
          <div className="absolute -top-3 -right-3 w-full h-full border-[2px] border-nb-neon opacity-50 pointer-events-none" />
          <div className="absolute -bottom-3 -left-3 w-full h-full border-[2px] border-nb-blue opacity-30 pointer-events-none" />

          {/* Photo container */}
          <div className="hero-photo-wrap w-[260px] h-[310px] md:w-[320px] md:h-[380px] lg:w-[380px] lg:h-[460px] overflow-hidden border-[3px] border-white/10 relative">
            <img
              src="/my-photo.png"
              alt="Rajath R Prasad"
              className="w-full h-full object-cover object-top"
            />
            <div className="hero-photo-glow" />

            {/* Corner accent */}
            <div className="absolute bottom-3 right-3 font-mono text-[8px] text-white/20 tracking-[0.1em] z-10">
              RAJATH.DEV
            </div>
          </div>

          {/* Floating stats around photo */}
          <div className="absolute -left-20 top-8 hidden lg:flex flex-col gap-0 hero-float-2">
            <div className="px-3 py-2 bg-nb-dark border-l-[3px] border-nb-blue">
              <div className="font-bebas text-[28px] text-white leading-none">12<sup className="text-nb-neon text-[13px]">+</sup></div>
              <div className="font-mono text-[8px] text-white/30 uppercase tracking-[0.1em]">Projects</div>
            </div>
          </div>

          <div className="absolute -right-20 bottom-16 hidden lg:flex flex-col gap-0 hero-float-1">
            <div className="px-3 py-2 bg-nb-dark border-l-[3px] border-nb-neon">
              <div className="font-bebas text-[22px] text-nb-blue leading-none">Developer</div>
              <div className="font-mono text-[8px] text-white/30 uppercase tracking-[0.1em]">Freelancer</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom scroll indicator ── */}
      <div className="relative z-10 flex items-center justify-between px-6 md:px-10 lg:px-16 py-4 border-t-[1px] border-white/5">
        <div className="flex items-center gap-3">
          {/* GitHub */}
          <a href="https://github.com/Rajath-R-Prasad" target="_blank" rel="noopener noreferrer"
            className="w-9 h-9 border-[1.5px] border-white/20 flex items-center justify-center text-white/50 hover:border-nb-neon hover:text-nb-neon transition-all duration-200">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
          </a>
          {/* LinkedIn */}
          <a href="https://linkedin.com/in/rajath-r-prasad" target="_blank" rel="noopener noreferrer"
            className="w-9 h-9 border-[1.5px] border-white/20 flex items-center justify-center text-white/50 hover:border-nb-blue-light hover:text-nb-blue-light transition-all duration-200">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          {/* Instagram */}
          <a href="https://instagram.com/rajath_rrp_prasad" target="_blank" rel="noopener noreferrer"
            className="w-9 h-9 border-[1.5px] border-white/20 flex items-center justify-center text-white/50 hover:border-nb-neon hover:text-nb-neon transition-all duration-200">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
          </a>
        </div>



        <div className="flex items-center gap-2 font-mono text-[10px] font-bold text-white/20 uppercase tracking-[0.1em]">
          Scroll
          <span className="animate-bounce-slow inline-block">↓</span>
        </div>
      </div>

      {/* ── Ticker marquee — hero section only ── */}
      <div className="relative z-10 bg-nb-blue overflow-hidden py-2.5 border-t-[2px] border-nb-blue">
        <div className="flex whitespace-nowrap">
          <div className="ticker-track font-mono text-[11px] font-bold text-white tracking-[0.1em]">
            {['FULL-STACK DEV', 'DATA ANALYST', 'ML ENGINEER', 'REACT · FASTAPI · PYTHON',
              'OPEN FOR PROJECTS', 'BASED IN INDIA', 'SHIPS FAST', 'UI/UX ENTHUSIAST',
              'BUILDING COOL THINGS'].map((item, i, arr) => (
              <span key={i}>
                {item}
                {i < arr.length - 1 && <span className="text-nb-neon mx-6">✦</span>}
              </span>
            ))}
            {/* duplicate for seamless loop */}
            {['FULL-STACK DEV', 'DATA ANALYST', 'ML ENGINEER', 'REACT · FASTAPI · PYTHON',
              'OPEN FOR PROJECTS', 'BASED IN INDIA', 'SHIPS FAST', 'UI/UX ENTHUSIAST',
              'BUILDING COOL THINGS'].map((item, i, arr) => (
              <span key={`dup-${i}`} className="ml-6">
                {item}
                {i < arr.length - 1 && <span className="text-nb-neon mx-6">✦</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
