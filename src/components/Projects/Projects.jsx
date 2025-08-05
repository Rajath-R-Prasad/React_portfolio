import React, { use } from 'react'
import { projects } from '../../constants'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);



function Projects() {

  useGSAP(()=>{
  const split= new SplitText(".project-text",{type:"chars"});
  split.chars.forEach(char =>{
    char.classList.add("bg-clip-text","text-transparent", "bg-gradient-to-r","from-blue-500","to-teal-500")
  })
  gsap.from(split.chars, {
        duration: 0.7,
        autoAlpha: 0,
        stagger: 0.05,
        delay: 0.8,
        y: 100,
        scrollTrigger: {
          trigger: '.project-text',
          start: 'top bottom',
          end: 'top top',
          toggleActions: 'play reverse play reverse'
        }
      });
  gsap.fromTo(".project-card",{
    x:50,
    y:100,
    opacity:0
  },{
    x:0,y:0,opacity:1,
    duration:0.8,
    stagger:0.5,
    scrollTrigger: {
      trigger: '.projects-container',
      start: 'top bottom',
      end: 'top top',
      toggleActions: 'play reverse play reverse'
    }
  })
},[])

  return (
    <>
      <main id='projects' className='projects-main w-full h-screen flex flex-col items-center justify-center p-8'>
        <h2 className='project-text h-max text-5xl font-bold mb-14 text-center'>PROJECTS</h2>
        <div className='projects-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-screen-xl'>
          {projects.map((project, index) => (
            <div key={index} className='project-card bg-slate-800 bg-opacity-40 p-4 rounded-lg shadow-md'>
              <h3 className='text-xl text-white font-semibold mb-2'>{project.title}</h3>
              <img src={project.image} alt={project.title} className='mb-2 rounded-md w-full h-[250px]' />
              <p className='text-gray-300'>{project.description}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}

export default Projects
