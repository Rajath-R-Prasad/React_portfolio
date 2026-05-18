import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const navLinks = [
  { href: '#home', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

const tickerItems = [
  'FULL-STACK DEV', 'DATA ANALYST', 'ML ENGINEER',
  'REACT · NODE · PYTHON', 'OPEN FOR PROJECTS', 'BASED IN INDIA', 'SHIPS FAST',
  'UI/UX ENTHUSIAST', 'IEEE WEB LEAD', 'BUILDING COOL THINGS',
];

export default function Navbar() {
  const [active, setActive] = useState('#home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useGSAP(() => {
    gsap.fromTo(navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.2 }
    );
  }, []);

  useEffect(() => {
    if (mobileMenuRef.current) {
      if (menuOpen) {
        gsap.fromTo(mobileMenuRef.current,
          { height: 0, opacity: 0 },
          { height: 'auto', opacity: 1, duration: 0.35, ease: 'power2.out' }
        );
      } else {
        gsap.to(mobileMenuRef.current,
          { height: 0, opacity: 0, duration: 0.25, ease: 'power2.in' }
        );
      }
    }
  }, [menuOpen]);

  const handleNavClick = (href) => {
    setActive(href);
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const tickerContent = tickerItems.join(' ✦  ') + ' ✦  ';

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-lg shadow-black/50' : ''}`}
    >
      {/* ── Main Nav ── */}
      <nav className="nb-nav flex items-center justify-between px-6 md:px-7 py-4">
        {/* Logo */}
        <a
          href="#home"
          onClick={() => handleNavClick('#home')}
          className="font-bebas text-2xl md:text-[26px] tracking-[3px] text-white hover:text-nb-neon transition-colors duration-200 select-none"
        >
          R<span className="text-nb-neon">R</span>P
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-0">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className={`nb-nav-link ${active === link.href ? 'active' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Hire CTA */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
            className="hidden md:inline-flex items-center gap-1 px-5 py-2.5 bg-nb-neon text-nb-black font-space font-bold text-[12px] uppercase tracking-[0.08em] border-[2.5px] border-nb-neon nb-shadow-blue hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-100"
          >
            Hire Me →
          </a>

          {/* Mobile Burger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 group"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-6 h-[2px] bg-nb-neon transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </nav>

      {/* ── Mobile Menu ── */}
      <div
        ref={mobileMenuRef}
        className="md:hidden overflow-hidden h-0 opacity-0 border-b-[3px] border-nb-blue"
        style={{ background: '#0a0a0a' }}
      >
        <div className="flex flex-col">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className={`px-6 py-4 text-[13px] font-bold uppercase tracking-[0.12em] border-b border-white/5 transition-colors duration-200 font-space flex items-center gap-3
                ${active === link.href ? 'text-nb-neon' : 'text-white/60 hover:text-nb-neon'}`}
            >
              <span className={`w-1 h-4 flex-shrink-0 ${active === link.href ? 'bg-nb-neon' : 'bg-white/10'}`} />
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
            className="mx-6 my-4 px-5 py-3.5 bg-nb-neon text-nb-black font-bold text-[13px] uppercase tracking-[0.08em] text-center"
          >
            Hire Me →
          </a>
        </div>
      </div>

    </header>
  );
}
