import React, { useState, useRef } from 'react'
import { navlinks } from '../../constants/index.js'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'


function Header() {
  // Set initial state based on screen width
  const [showMenu, setShowMenu] = useState(window.innerWidth >= 768)
  const menuRef = useRef(null)

  useGSAP(() => {
    gsap.fromTo('.nav', {y: -100, opacity: 0}, {y: 0, opacity: 1, duration: 0.5, ease: "power2.out"});
    if (showMenu) {
      gsap.to(menuRef.current, { x: 0, opacity: 1, duration: 0.5, display: 'flex', ease: "power2.out" })
    } else {
      gsap.to(menuRef.current, { x: -120, opacity: 0, duration: 0.7, display: 'none', ease: "power2.inOut" })
    }
  }, [showMenu]); 

  const handleMenuToggle = () => {
    if (window.innerWidth < 768) setShowMenu((prev) => !prev)
  }

  return (
    <>
      <nav className='nav flex flex-col md:flex-row justify-around sticky top-0 left-0 z-1000 w-[100%] text-xl items-center text-white bg-gradient-to-r from-blue-400 to-blue-800 opacity-90 p-4'>
        <div className='logo flex items-center justify-center gap-3 '>
          <img src="https://img.icons8.com/?size=100&id=8113&format=png&color=FFFFFF" alt="logo" className='w-6 h-6 m-2 visible md:hidden cursor-pointer' onClick={handleMenuToggle} />
          <p className='name span md:m-0 m-2 cursor-pointer text-2xl' onClick={handleMenuToggle}>Rajath's Portfolio</p> 
        </div>
        <ul ref={menuRef} className={`menu flex flex-col md:flex-row space-y-2 md:space-x-8 w-1/2 items-center justify-center mb-2 md:justify-around ${showMenu ? '' : 'hidden'} md:flex`}>
          {navlinks.map((link)=>(
            <li className='hover:font-bold transition-all ease-in-out' key={link.id}>
                <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default Header
