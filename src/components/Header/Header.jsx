import React, { useState, useRef, useEffect } from 'react'
import { navlinks } from '../../constants/index.js'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'


function Header() {
  const [showMenu, setShowMenu] = useState(window.innerWidth >= 768)
  const menuRef = useRef(null)
  const logoRef = useRef(null)

  useGSAP(() => {
    gsap.fromTo('.nav', {y: -100, opacity: 0}, {y: 0, opacity: 1, duration: 0.5, ease: "power2.out"});
    // if (showMenu) {
    //   gsap.to(menuRef.current, { x: 0, opacity: 1, duration: 0.5, display: 'flex', ease: "power2.out" })
    // } else {
    //   gsap.to(menuRef.current, { x: -120, opacity: 0, duration: 0.7, display: 'none', ease: "power2.inOut" })
    // }
  }, []); 

  // Toggle menu on mobile
  const handleMenuToggle = () => {
    if (window.innerWidth < 768) setShowMenu((prev) => !prev)
  }

  // Close menu when clicking outside (mobile only)
  useEffect(() => {
    if (window.innerWidth >= 768) return // Only for mobile

    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        logoRef.current &&
        !logoRef.current.contains(event.target)
      ) {
        setShowMenu(false)
      }
    }

    if (showMenu) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showMenu])

  // Always show menu on desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowMenu(true)
      } else {
        setShowMenu(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <nav className='nav flex flex-col md:flex-row justify-around fixed top-0 z-50 w-full text-xl items-center text-white bg-gradient-to-b from-blue-700 via-blue-800 to-blue-900 opacity-90 p-3'>
        <div
          className='logo flex items-center justify-center gap-3'
          ref={logoRef}
        >
          <img
            src="https://img.icons8.com/?size=100&id=8113&format=png&color=FFFFFF"
            alt="logo"
            className='w-6 h-6 m-2 visible md:hidden cursor-pointer'
            onClick={handleMenuToggle}
          />
          <p
            className='name span md:m-0 m-2 cursor-pointer text-2xl'
            onClick={handleMenuToggle}
          >
            Rajath's Portfolio
          </p>
        </div>
        <ul
          ref={menuRef}
          className={`menu flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 w-1/3 items-center justify-center md:justify-around ${showMenu ? '' : 'hidden'} `} >
          {navlinks.map((link) => (
            <li
              className='hover:font-semibold transition-all duration-700 ease-in-out hover:text-slate-700 p-2' key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default Header
