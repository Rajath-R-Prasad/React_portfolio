/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nb-black': '#0a0a0a',
        'nb-dark': '#0f0f0f',
        'nb-blue': '#1a1aff',
        'nb-blue-light': '#4d6bff',
        'nb-neon': '#d4ff00',
        'nb-white': '#ffffff',
        'nb-muted': 'rgba(255,255,255,0.5)',
        'nb-faint': 'rgba(255,255,255,0.1)',
      },
      fontFamily: {
        'bebas': ['"Bebas Neue"', 'sans-serif'],
        'space': ['"Space Grotesk"', 'sans-serif'],
        'mono': ['"JetBrains Mono"', 'monospace'],
        'outfit': ['Outfit', 'sans-serif'],
      },
      animation: {
        'ticker': 'ticker 18s linear infinite',
        'blink': 'blink 1.2s step-start infinite',
        'bounce-slow': 'bounce 1.5s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 2s infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'border-trace': 'borderTrace 2s linear infinite',
        'scanline': 'scanline 3s linear infinite',
        'gradient-shift': 'gradientShift 4s ease infinite',
        'marquee': 'marquee 20s linear infinite',
        'marquee2': 'marquee2 20s linear infinite',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blink: {
          '50%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(212,255,0,0.3), 0 0 20px rgba(212,255,0,0.1)' },
          '50%': { boxShadow: '0 0 20px rgba(212,255,0,0.6), 0 0 40px rgba(212,255,0,0.3)' },
        },
        borderTrace: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '200% 0%' },
        },
        scanline: {
          '0%': { top: '-10%' },
          '100%': { top: '110%' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(26,26,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(26,26,255,0.07) 1px, transparent 1px)',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
      boxShadow: {
        'nb-blue': '4px 4px 0 #1a1aff',
        'nb-neon': '4px 4px 0 #d4ff00',
        'nb-glow': '0 0 30px rgba(26,26,255,0.3)',
        'nb-neon-glow': '0 0 20px rgba(212,255,0,0.4)',
        'nb-brutal': '6px 6px 0 #d4ff00',
        'nb-inner': 'inset 0 0 30px rgba(26,26,255,0.1)',
      },
      screens: {
        'xs': '480px',
      },
    },
  },
  plugins: [],
}
