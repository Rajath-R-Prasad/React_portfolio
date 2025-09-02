import React from 'react'
import { skills } from '../../constants'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import SplitText from "gsap/SplitText";

function About() {
  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(SplitText);
  // GSAP animation for the about section with improved ScrollTrigger
  useGSAP(() => {
    // About section animations
    gsap.fromTo('.about-section', 
      { opacity: 0, y: 50 }, 
      { 
        opacity: 1, 
        y: 0, 
        duration: 1,
        scrollTrigger: {
          trigger: '.about-section',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play reverse play reverse'
        }
      }
    );
    
    gsap.fromTo('.about-content', 
      { opacity: 0, y: 50 }, 
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        delay: 0.2,
        scrollTrigger: {
          trigger: '.about-content',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play reverse play reverse'
        }
      }
    );
  }, []);
  // GSAP ScrollTrigger for the skills section with improved timing
  useGSAP(() => {
    
    gsap.fromTo('.skill-category', 
      { opacity: 0, y: 50, scale: 0 }, 
      { 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        duration: 1, 
        stagger: 0.3, 
        scrollTrigger: {
          trigger: '.skill-category',
          start: 'top 85%',
          end: 'bottom 15%',
          toggleActions: 'play reverse play reverse'
        }
      }
    );
    
    const split = new SplitText(".about-me-text, .skill-text", { type: "chars" });
    split.chars.forEach(char => {
      char.classList.add(
        "bg-clip-text",
        "text-transparent",
        "bg-gradient-to-r",
        "from-blue-500",
        "to-teal-500"
      );
    });
    
    gsap.from(split.chars, {
      duration: 0.7,
      autoAlpha: 0,
      stagger: 0.05,
      delay: 0.8,
      y: 100,
      scrollTrigger: {
        trigger: '.about-me-text, .about-para',
        start: 'top 85%',
        end: 'bottom 15%',
        toggleActions: 'play reverse play reverse'
      }
    });
    
  }, []);
  
  return (
    <>
             <main id='about' className="about-main w-full h-max">
        <section  className="about-section w-full flex-col">
          <div className="about-content w-full md:w-[40vw] mx-auto p-6 shadow-lg">
            <h2 className="about-me-text text-3xl md:text-5xl font-bold mb-4 text-center mt-10">About Me</h2>
            
            <p className=" about-para md:text-lg text-gray-300 mb-4">I'm Rajath, a developer passionate about building sleek web apps and exploring the power of data. I blend frontend skills with backend logic, and dive into data analysis and machine learning to solve real-world problems. I have experience working with various technologies and frameworks, and I'm always eager to learn more. My projects showcase my skills and dedication to creating impactful solutions.</p>
            </div>
            <div className="skills-section w-full md:w-[60vw] mx-auto h-max mt-10">
                <h3 className="skill-text text-3xl md:text-5xl font-bold text-center mt-8 mb-4">Skills</h3>
                <div className='flex flex-col flex-wrap justify-center gap-3 items-center'>

                {skills.map((skillCategory, index) => (

                  <div key={index} className="skill-category p-2 rounded-xl w-full md:w-[50vw]">
                    <h4 className=" text-lg md:text-xl font-semibold mb-2 text-center  text-white">{Object.keys(skillCategory)[0]}</h4>
                    
                    <ul className="list-none flex flex-wrap justify-center items-center gap-0">
                      {skillCategory[Object.keys(skillCategory)[0]].map((skill) => (
                        <span className='"bg-slate-700 text-sm rounded-full m-2 w-[50px] md:w-[100px] text-center py-0.5 px-1.5 span text-white hover:bg-slate-600'>
                        <img src={skill.logo} alt="" className="inline-block w-6 h-6 mr-1" />
                        <li key={skill.id} className="">{skill.title}</li>
                        </span>
                      ))}
                    </ul>
                  </div>
                ))}
              </div> 
              </div>   
            
          
            
        </section>
      </main>
    </>
  )
}

export default About
