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
      animation: {
        'fade-up':    'fadeUp 0.7s cubic-bezier(0.21,0.47,0.32,0.98) forwards',
        'fade-in':    'fadeIn 0.6s ease-out forwards',
        'float':      'float 10s ease-in-out infinite',
        'marquee':    'marquee 40s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(22px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-30px)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
        pulseGlow: {
          '0%,100%': { boxShadow: '0 0 15px rgba(124,58,237,0.2)' },
          '50%':     { boxShadow: '0 0 40px rgba(124,58,237,0.55)' },
        },
      },
    },
  },
  plugins: [],
}
