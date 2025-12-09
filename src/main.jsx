
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/Header/Header.jsx'
import Hero from './components/Hero/Hero.jsx'
import About from './components/About/About.jsx'
import Projects from './components/Projects/Projects.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'
import { Analytics } from "@vercel/analytics/react"
import PillNav from './components/PillNav/Pill_nav.jsx';
import logo from '/my_photo.webp';
import { BrowserRouter as Router } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <Router>
    <div className='w-full p-0 m-0 overflow-x-hidden overflow-y-hidden bg-gradient-to-br from-black via-blue-800 to-blue-950'>

    <div className='flex w-full justify-center items-center sticky top-0 z-50'>
    <PillNav
      logo={logo}
      logoAlt="Company Logo"
      items={[
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Project', href: '#projects' },
        { label: 'Contact', href: '#contact' }
      ]}
      activeHref="/"
      className="custom-nav"
      ease="power2.easeOut"
      baseColor="#000000"
      pillColor="#ffffff"
      hoveredPillTextColor="#ffffff"
      pillTextColor="#000000"
    />
    </div>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <Analytics />
    </div>
  </Router>
)
