
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/Header/Header.jsx'
import Hero from './components/Hero/Hero.jsx'
import About from './components/About/About.jsx'
import Projects from './components/Projects/Projects.jsx'

createRoot(document.getElementById('root')).render(
  <div className='min-h-screen w-full p-0 m-0 overflow-x-hidden bg-slate-900'>
    <Header />
    <Hero />
    <About />
    <Projects />
    

  </div>
)
