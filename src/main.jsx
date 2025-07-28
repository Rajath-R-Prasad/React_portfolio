
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/Header/Header.jsx'
import Hero from './components/Hero/Hero.jsx'

createRoot(document.getElementById('root')).render(
  <div className='min-h-screen'>
    <Header />
    <Hero />

  </div>
)
