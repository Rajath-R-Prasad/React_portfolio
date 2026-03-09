import React, { use } from 'react'
import { projects } from '../../constants'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import SplitText from "gsap/SplitText";
import SplitType from "split-type";
import { FlippingCard } from '../ui/flipping-card';
import { Github, ExternalLink } from 'lucide-react';

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
            <div key={index} className='project-card w-full mb-8'>
              <FlippingCard
                width="100%"
                height={380}
                className="bg-transparent border-none shadow-none w-full"
                frontContent={<GenericCardFront project={project} />}
                backContent={<GenericCardBack project={project} />}
              />
            </div>
          ))}
        </div>
      </main>
    </>
  )
}
export default Projects

function GenericCardFront({ project }) {
  return (
    <div className="flex flex-col h-full w-full">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-[60%] object-cover min-h-0 rounded-t-xl"
      />
      <div className="p-4 flex-grow flex flex-col justify-center items-center">
        <h3 className="text-xl font-bold text-center mt-2">{project.title}</h3>
      </div>
    </div>
  );
}

function GenericCardBack({ project }) {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full p-6">
      <h3 className="text-xl font-bold mb-4 text-center">{project.title}</h3>
      <p
        className="text-[14px] leading-relaxed text-gray-300 text-center flex-grow overflow-y-auto w-full no-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {project.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-4 justify-center">
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-md text-sm transition-colors duration-300">
          <Github className="w-4 h-4" />
          Code
        </a>
        {project.live && (
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-md text-sm transition-colors duration-300">
            <ExternalLink className="w-4 h-4" />
            Live
          </a>
        )}
      </div>
    </div>
  );
}
