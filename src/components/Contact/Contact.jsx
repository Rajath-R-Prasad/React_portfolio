import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import emailjs from '@emailjs/browser';
import { BGPattern } from '../ui/bg-pattern';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // 'sending' | 'success' | 'error'

  useGSAP(() => {
    gsap.fromTo('.contact-header > *',
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: '.contact-header', start: 'top 82%', toggleActions: 'play none none reverse' }
      }
    );

    gsap.fromTo('.contact-form-wrap',
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.contact-form-wrap', start: 'top 82%', toggleActions: 'play none none reverse' }
      }
    );

    gsap.fromTo('.contact-info-item',
      { opacity: 0, x: 30 },
      {
        opacity: 1, x: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: '.contact-info', start: 'top 82%', toggleActions: 'play none none reverse' }
      }
    );
  }, { scope: sectionRef });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // EmailJS integration — replace with your actual service/template/public key
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Rajath R Prasad',
        },
        'YOUR_PUBLIC_KEY'
      );
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      // Graceful fallback: open mailto
      window.location.href = `mailto:rajath2010rrp@gmail.com?subject=Project Inquiry from ${formData.name}&body=${encodeURIComponent(formData.message)}`;
      setStatus('error');
    }

    setTimeout(() => setStatus(null), 4000);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative w-full bg-nb-dark overflow-hidden py-24 md:py-32"
    >
      <BGPattern variant="grid" mask="fade-center" size={44} fill="rgba(212,255,0,0.05)" />
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-nb-blue" />

      {/* Glow blob */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #d4ff00 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-[1300px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Header */}
        <div className="contact-header flex items-end justify-between mb-16 border-b-[2px] border-white/5 pb-8">
          <div>
            <p className="section-num mb-3">// 06 — Contact</p>
            <h2 className="font-bebas text-[clamp(3rem,7vw,6rem)] leading-none text-white">
              SAY <span className="text-nb-neon">HELLO</span><br />
              <span className="text-outline-blue">LET'S TALK</span>
            </h2>
          </div>
          <div className="hidden md:block font-mono text-[10px] text-white/20 uppercase tracking-[0.15em] text-right">
            I read every message<br />
            <span className="text-nb-neon">No spam, just work</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12">

          {/* ── Contact Form ── */}
          <div className="contact-form-wrap opacity-0">
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[9px] text-white/30 uppercase tracking-[0.15em]">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="nb-input"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[9px] text-white/30 uppercase tracking-[0.15em]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="nb-input"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-mono text-[9px] text-white/30 uppercase tracking-[0.15em]">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell me about your project..."
                  className="nb-input resize-none"
                />
              </div>

              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="px-8 py-4 bg-nb-blue text-white font-space font-bold text-[12px] uppercase tracking-[0.08em] border-[2.5px] border-nb-blue nb-shadow-neon hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all duration-100 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message ↗'}
                </button>

                {status === 'success' && (
                  <span className="font-mono text-[10px] text-nb-neon uppercase tracking-[0.1em]">
                    ✓ Message sent!
                  </span>
                )}
                {status === 'error' && (
                  <span className="font-mono text-[10px] text-white/40 uppercase tracking-[0.1em]">
                    Opening email client...
                  </span>
                )}
              </div>
            </form>
          </div>

          {/* ── Contact Info ── */}
          <div className="contact-info flex flex-col gap-4">
            {[
              {
                label: 'Email',
                value: 'rajath2010rrp@gmail.com',
                href: 'mailto:rajath2010rrp@gmail.com',
                icon: '✉',
              },
              {
                label: 'GitHub',
                value: 'Rajath-R-Prasad',
                href: 'https://github.com/Rajath-R-Prasad',
                icon: '⌨',
              },
              {
                label: 'LinkedIn',
                value: 'rajath-r-prasad',
                href: 'https://linkedin.com/in/rajath-r-prasad',
                icon: '◈',
              },
              {
                label: 'Instagram',
                value: '@rajath_rrp_prasad',
                href: 'https://instagram.com/rajath_rrp_prasad',
                icon: '⬡',
              },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target={item.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="contact-info-item opacity-0 group flex items-center gap-4 p-5 border-[1.5px] border-white/10 hover:border-nb-blue/60 transition-all duration-300 hover:bg-nb-blue/5"
              >
                <span className="text-nb-neon font-mono text-lg w-6 flex-shrink-0">{item.icon}</span>
                <div>
                  <div className="font-mono text-[9px] text-white/25 uppercase tracking-[0.15em] mb-0.5">{item.label}</div>
                  <div className="font-space text-[13px] text-white/70 group-hover:text-white transition-colors duration-200 break-all">
                    {item.value}
                  </div>
                </div>
                <span className="ml-auto text-white/20 group-hover:text-nb-blue transition-colors duration-200">→</span>
              </a>
            ))}

            {/* Location note */}
            <div className="mt-4 p-5 border-[1.5px] border-nb-neon/20 bg-nb-neon/5">
              <div className="font-mono text-[9px] text-nb-neon uppercase tracking-[0.15em] mb-1">Location</div>
              <div className="font-space text-[13px] text-white/60">
                India — Remote friendly worldwide
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
