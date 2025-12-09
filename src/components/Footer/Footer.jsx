import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SocialLinks from '../SocialLinks/SocialLinks';

gsap.registerPlugin(ScrollTrigger);

function Footer() {
  useGSAP(() => {
    // Footer animations
    gsap.fromTo('.footer-content', 
      { opacity: 0, y: 50 }, 
      { 
        opacity: 1, 
        y: 0, 
        duration: 1,
        scrollTrigger: {
          trigger: '.footer',
          start: 'top 90%',
          end: 'bottom 10%',
          toggleActions: 'play reverse play reverse'
        }
      }
    );

    gsap.fromTo('.footer-section', 
      { opacity: 0, y: 30 }, 
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.footer',
          start: 'top 85%',
          end: 'bottom 15%',
          toggleActions: 'play reverse play reverse'
        }
      }
    );
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer bg-slate-800 border-t border-slate-700">
      <div className="footer-content max-w-6xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* About Section */}
          <div className="footer-section">
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-teal-500">
                Rajath R Prasad
              </span>
            </h3>
            <p className="text-gray-300 mb-4">
              A passionate developer focused on creating innovative web solutions and exploring the power of data science. 
              Always eager to learn and contribute to meaningful projects.
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Available for opportunities</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-cyan-300 transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-cyan-300 transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-cyan-300 transition-colors duration-300">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-cyan-300 transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="text-xl font-semibold text-white mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-cyan-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-gray-300 text-sm">rajath2010rrp@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-cyan-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300 text-sm">Mysuru, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
                  <div className="footer-section mt-8 pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-semibold text-white mb-3">Connect With Me</h4>
              <SocialLinks variant="footer" />
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © {currentYear} Rajath R Prasad. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Built with React, Vite & Tailwind CSS
              </p>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="text-center mt-8">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-gradient-to-r from-cyan-300 to-teal-500 text-slate-900 font-semibold px-6 py-3 rounded-lg hover:from-cyan-400 hover:to-teal-600 transform hover:scale-105 transition-all duration-300"
          >
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
