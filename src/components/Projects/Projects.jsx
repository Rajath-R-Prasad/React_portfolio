import React, { use } from 'react'
import { projects } from '../../constants'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import SplitText from "gsap/SplitText";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);



function Projects() {

  useGSAP(() => {
    // Animate the heading text
    const split = new SplitType('.project-text', { types: 'chars' });
// gsap.from(".char", { y: 50, opacity: 0, stagger: 0.04 });
    // const split = new SplitText(".project-text", { type: "chars" });
    split.chars.forEach(char => {
      char.classList.add("bg-clip-text", "text-transparent", "bg-gradient-to-r", "from-blue-500", "to-teal-500");
    });
    gsap.from(split.chars, {
      duration: 0.7,
      autoAlpha: 0,
      stagger: 0.05,
      y: 100,
      scrollTrigger: {
        trigger: '.project-text',
        start: 'top 85%',
        end: 'bottom 15%',
        toggleActions: 'play none none none'
      }
    });
    
    // Responsive animation for project cards with improved timing
    const isDesktop = window.innerWidth >= 1024; // Tailwind's lg breakpoint

    if (isDesktop) {
      // Stagger all cards together on desktop when the container enters
      gsap.from(".project-card", {
        x: 50,
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.18,
        ease: "power2.out",
        scrollTrigger: {
          // trigger the whole container so the cards animate as a group
          trigger: ".projects-container",
          start: "top 75%",
          end: "bottom 15%",
          toggleActions: "play none none none"
        }
      });
    } else {
      // Animate each card on scroll on mobile/tablet (individual triggers)
      gsap.utils.toArray(".project-card").forEach((card) => {
        gsap.from(card, {
          x: 50,
          y: 100,
          opacity: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none none"
          }
        });
      });
    }
  }, [])

  return (
    <>
      <main id='projects' className='projects-main w-full h-max flex flex-col items-center justify-center p-8 mb-20'>
        <h2 className='project-text h-max text-5xl font-bold mb-14 mt-14 text-center'>PROJECTS</h2>
        <div className='projects-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-screen-2xl'>
          {projects.map((project, index) => (
            <div key={index} className='project-card bg-slate-800 bg-opacity-40 p-4 rounded-lg shadow-md hover:shadow-lg hover:shadow-blue-900 transition-shadow duration-300'>
              <h3 className='text-xl text-white font-semibold mb-2'>{project.title}</h3>
              <img src={project.image} alt={project.title} className='mb-2 rounded-md w-full h-max' />
              
              {/* Project Links */}
              <div className='flex flex-wrap gap-2 mb-3'>
                {/* View Code Button */}
                <div className='text-gray-300 text-md hover:text-slate-400 rounded-full border-2 border-slate-700 w-max px-2 transition-colors duration-300'>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/?size=100&id=AZOZNnY73haj&format=png&color=000000" alt="github" className='w-6 h-6 inline mr-1' />
                    View Code
                  </a>
                </div>
                
                {/* Live Demo Button - Only show if live link exists */}
                {project.live && (
                  <div className='text-gray-300 text-md hover:text-slate-400 rounded-full border-2 border-slate-700 w-max px-2 transition-colors duration-300'>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      
                      Live Demo
                    </a>
                  </div>
                )}
              </div>
              
              <p className='text-gray-300'>{project.description}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}
export default Projects
