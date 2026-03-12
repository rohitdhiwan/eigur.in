'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'About',        href: '/about' },
  { name: 'Services',     href: '/services' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog',         href: '/blog' },
  { name: 'Contact',      href: '/contact' },
];

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
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-7 h-7 rounded-lg bg-primary-100 border border-primary-200 flex items-center justify-center group-hover:bg-primary-200 transition-colors">
              <Sparkles className="h-3.5 w-3.5 text-primary-600" />
            </div>
            <span className="font-display text-xl font-bold gradient-text tracking-tight">Eigur</span>
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
              <Sparkles className="h-3.5 w-3.5" /> AI Assistant
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
