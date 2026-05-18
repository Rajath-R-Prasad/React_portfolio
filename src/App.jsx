import React from 'react';
import Cursor from './components/Cursor/Cursor';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Freelance from './components/Freelance/Freelance';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      {/* Custom cursor (desktop only) */}
      <div className="hidden lg:block">
        <Cursor />
      </div>

      {/* Fixed navbar */}
      <Header />

      {/* Main content */}
      <main className="w-full bg-nb-black overflow-x-hidden">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Freelance />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
