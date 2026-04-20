/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        accent: {
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
        },
      },
      fontFamily: {
        display: ['var(--font-syne)', 'sans-serif'],
        sans:    ['var(--font-outfit)', 'sans-serif'],
      },
      spacing: {
        '4.5': '1.125rem',
      },
      animation: {
        'fade-up':    'fadeUp 0.7s cubic-bezier(0.21,0.47,0.32,0.98) forwards',
        'fade-in':    'fadeIn 0.5s ease-out forwards',
        'float':      'float 9s ease-in-out infinite',
        'marquee':    'marquee 38s linear infinite',
        'pulse-ring': 'pulseRing 2.5s ease-out infinite',
        'blink':      'blink 1s step-end infinite',
      },
      keyframes: {
        fadeUp:    { from:{ opacity:'0',transform:'translateY(20px)' }, to:{ opacity:'1',transform:'translateY(0)' } },
        fadeIn:    { from:{ opacity:'0' }, to:{ opacity:'1' } },
        float:     { '0%,100%':{ transform:'translateY(0)' }, '50%':{ transform:'translateY(-18px)' } },
        marquee:   { from:{ transform:'translateX(0)' }, to:{ transform:'translateX(-50%)' } },
        pulseRing: { '0%':{ transform:'scale(1)',opacity:'0.6' }, '100%':{ transform:'scale(1.6)',opacity:'0' } },
        blink:     { '0%,100%':{ opacity:'1' }, '50%':{ opacity:'0' } },
      },
    },
  },
  plugins: [],
}
