import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const roles = [
  "Web Developer",
  "Data Analyst",
  "Data Scientist",
  "ML Engineer"
];

function Hero() {
    // GSAP animation for the hero section
    const timeline= gsap.timeline({ defaults: { duration: 1 } });
    useGSAP(() => {

    timeline.fromTo(
      ".image",
      { opacity: 0,x:50 },
      { opacity: 1 ,x:0, duration: 1.3, ease: "power2.out" },
      
    );
    timeline.fromTo(
      ".text>*",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1,stagger:0.2 }
    );
  }, []);
  const [currentRole, setCurrentRole] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setFade(true);
      }, 300); // fade out duration
    }, 2000); // change role every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="home" className="hero-container bg-slate-900 w-[100vw] text-white flex flex-row gap-4 items-center justify-center h-max md:h-screen text-3xl md:text-4xl">
      <main  className="main flex flex-col-reverse w-full md:w-[85vw] md:flex-row gap-6 md:gap-4 md:mt-2 mt-[15vh] rounded-lg items-center justify-around">
        
        <div className=" text flex flex-col gap-3 items-center md:items-start ">
          <h1 className="font-extrabold text-3xl md:text-5xl">Hello, I am</h1>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-teal-500 font-bold text-4xl md:text-6xl">
            RAJATH R PRASAD
          </span>
          <h1 className="font-extrabold text-3xl md:text-5xl">I am a{" "}
            <span
              className={`inline-block transition-opacity text-slate-400 duration-300 ${
                fade ? "opacity-100" : "opacity-0"
              }`}
            >
              {roles[currentRole]}
            </span>
          </h1>
          
            <p className="text-lg md:text-xl text-wrap">
              I'm Rajath, a developer passionate about building sleek web apps and exploring the power of data. I blend frontend skills with backend logic, and dive into data analysis and machine learning to solve real-world problems.
            </p>
            <div className="buttons flex flex-col md:flex-row gap-4 mt-4">
              <a href="#projects"><button className="bg-white text-blue-500 font-bold py-2 px-4 rounded">View my work</button></a>
              <button className="bg-transparent border-2 border-white text-white font-bold py-2 px-4 rounded" >Download CV</button>
            </div>
        </div>
        <div className="image h-[200px] md:h-[430px] w-[200px] md:w-[430px] rounded-full border-4 border-slate-600 overflow-hidden shrink-0">
          <img src="my_photo.webp" alt="my_pic" className="object-bottom object-cover rounded-full w-full h-full"/>
        </div>
      </main>
    </div>
  );
}

export default Hero;
