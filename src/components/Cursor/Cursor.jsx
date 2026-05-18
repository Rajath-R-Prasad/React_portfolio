import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Cursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    const glow = glowRef.current;

    if (!cursor || !ring || !glow) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      gsap.to(cursor, {
        x: mouseX,
        y: mouseY,
        duration: 0.05,
        ease: 'none',
      });

      gsap.to(ring, {
        x: mouseX,
        y: mouseY,
        duration: 0.15,
        ease: 'power2.out',
      });

      gsap.to(glow, {
        x: mouseX,
        y: mouseY,
        duration: 0.5,
        ease: 'power2.out',
      });
    };

    // Hover effects on interactive elements
    const addHoverClass = (e) => {
      gsap.to(cursor, { scale: 2.5, duration: 0.2 });
      gsap.to(ring, { scale: 1.8, opacity: 0.3, duration: 0.2 });
    };
    const removeHoverClass = () => {
      gsap.to(cursor, { scale: 1, duration: 0.2 });
      gsap.to(ring, { scale: 1, opacity: 1, duration: 0.2 });
    };

    // On button/link hover
    const interactiveEls = document.querySelectorAll('a, button, [data-cursor]');
    interactiveEls.forEach(el => {
      el.addEventListener('mouseenter', addHoverClass);
      el.addEventListener('mouseleave', removeHoverClass);
    });

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      interactiveEls.forEach(el => {
        el.removeEventListener('mouseenter', addHoverClass);
        el.removeEventListener('mouseleave', removeHoverClass);
      });
    };
  }, []);

  return (
    <>
      <div id="cursor-glow" ref={glowRef} />
      <div id="cursor-ring" ref={ringRef} />
      <div id="cursor" ref={cursorRef} />
    </>
  );
}
