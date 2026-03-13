'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'About',        href: '/about' },
  { name: 'Services',     href: '/services' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog',         href: '/blog' },
  { name: 'Contact',      href: '/contact' },
];

// Neural-circuit "E" logo mark
function LogoMark() {
  return (
    <div className="w-8 h-8 rounded-[8px] bg-gradient-to-br from-violet-700 to-cyan-600 flex items-center justify-center flex-shrink-0 shadow-sm">
      <svg viewBox="0 0 20 20" fill="none" className="w-[18px] h-[18px]">
        <path d="M4 4L4 16M4 4L14 4M4 10L12 10M4 16L14 16"
              stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="14" cy="4" r="2" fill="white"/>
        <circle cx="12" cy="10" r="1.5" fill="white" opacity="0.75"/>
        <circle cx="14" cy="16" r="2" fill="white"/>
      </svg>
    </div>
  );
}

export default function Navbar() {
  const [isOpen,   setIsOpen]   = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/90 backdrop-blur-xl border-b border-black/[0.06] shadow-sm'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <LogoMark />
            <div className="flex flex-col leading-none">
              <span className="font-display text-[18px] font-bold gradient-text tracking-tight">Eigur</span>
              <span className="text-[9px] font-semibold tracking-[0.12em] uppercase text-[#b0aec8] mt-0.5">Think AI. Build India.</span>
            </div>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-7">
            {navItems.map(item => (
              <Link key={item.name} href={item.href}
                className="text-sm text-[#5a5878] hover:text-[#0f0f1a] transition-colors font-medium">
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link href="/ai-assistant"
              className="hidden md:flex items-center gap-1.5 text-xs font-semibold text-primary-600 hover:text-primary-700 transition-colors px-3 py-1.5 rounded-lg hover:bg-primary-50">
              <svg viewBox="0 0 20 20" fill="none" className="w-3.5 h-3.5">
                <path d="M4 4L4 16M4 4L14 4M4 10L12 10M4 16L14 16"
                      stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="14" cy="4" r="1.75" fill="currentColor"/>
                <circle cx="12" cy="10" r="1.25" fill="currentColor" opacity="0.6"/>
                <circle cx="14" cy="16" r="1.75" fill="currentColor"/>
              </svg>
              AI Assistant
            </Link>
            <Link href="/contact" className="hidden md:flex btn-primary !py-2 !px-4 !text-sm">
              Get Started <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <button onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-[#5a5878] hover:text-[#0f0f1a] transition-colors rounded-lg hover:bg-primary-50">
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-b border-black/[0.06]">
            <div className="px-4 py-4 space-y-1">
              {navItems.map(item => (
                <Link key={item.name} href={item.href} onClick={() => setIsOpen(false)}
                  className="block px-3 py-2.5 text-sm text-[#5a5878] hover:text-[#0f0f1a] hover:bg-primary-50 rounded-xl transition-all">
                  {item.name}
                </Link>
              ))}
              <div className="pt-2">
                <Link href="/contact" onClick={() => setIsOpen(false)}
                  className="btn-primary w-full justify-center !text-sm">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
