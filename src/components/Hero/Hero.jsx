import React, { useEffect, useState } from "react";

const roles = [
  "Web Developer",
  "Data Analyst",
  "Data Scientist",
  "ML Engineer"
];

function Hero() {
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
    <div id="hero" className="hero-container w-full bg-black text-white flex flex-row gap-4 items-center justify-center h-[80vh] md:h-[91vh] text-3xl md:text-4xl">
      <main className="flex flex-col w-[85vw] md:w-[70vw] md:flex-row gap-2 md:gap-4 border-r-4 border-b-8 m-2 p-5 rounded-lg border-red-500 items-center justify-center">
        <div className="flex justify-center items-center h-[200px] md:h-[300px] w-[200px] md:w-[300px] rounded-full overflow-hidden">
          <img src="my_pic.jpg" alt="my_pic" />
        </div>
        <div className="flex flex-col gap-3 items-center md:items-start ">
          <h1>Hello, I am</h1>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-red-500 font-bold text-4xl md:text-5xl">
            RAJATH R PRASAD
          </span>
          <h1>
            I am a{" "}
            <span
              className={`inline-block transition-opacity duration-300 ${
                fade ? "opacity-100" : "opacity-0"
              }`}
            >
              {roles[currentRole]}
            </span>
          </h1>
        </div>
      </main>
    </div>
  );
}

export default Hero;
