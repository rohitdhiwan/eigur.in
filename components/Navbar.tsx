'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { Menu, X, ArrowRight, Briefcase } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getInitials } from '@/lib/utils';

const navItems = [
  { name: 'About',        href: '/about' },
  { name: 'Services',     href: '/services' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog',         href: '/blog' },
  { name: 'Contact',      href: '/contact' },
];

function LogoMark() {
  return (
    <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-700 flex items-center justify-center flex-shrink-0 shadow-[0_2px_10px_rgba(109,40,217,0.35)]">
      <svg viewBox="0 0 20 20" fill="none" className="w-[15px] h-[15px]">
        <circle cx="10" cy="4" r="2.25" fill="white"/>
        <circle cx="3.5" cy="15" r="1.75" fill="white" opacity="0.9"/>
        <circle cx="16.5" cy="15" r="1.75" fill="white" opacity="0.9"/>
        <line x1="10" y1="4" x2="3.5" y2="15" stroke="white" strokeWidth="1.3" strokeLinecap="round" opacity="0.55"/>
        <line x1="10" y1="4" x2="16.5" y2="15" stroke="white" strokeWidth="1.3" strokeLinecap="round" opacity="0.55"/>
        <line x1="3.5" y1="15" x2="16.5" y2="15" stroke="white" strokeWidth="1.3" strokeLinecap="round" opacity="0.35"/>
      </svg>
    </div>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { data: session } = useSession();

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
              <span className="text-[9px] font-semibold tracking-[0.12em] uppercase text-[#b0aec8] mt-0.5">Intelligence at scale.</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">
            {navItems.map(item => (
              <Link key={item.name} href={item.href}
                className="text-sm text-[#5a5878] hover:text-[#0f0f1a] transition-colors font-medium">
                {item.name}
              </Link>
            ))}
            {/* Careers AI badge */}
            <Link href="/careers"
              className="flex items-center gap-1.5 text-xs font-bold text-violet-700 bg-violet-50 border border-violet-200 px-2.5 py-1 rounded-lg hover:bg-violet-100 transition-colors">
              <Briefcase className="w-3 h-3" />
              Careers AI
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            </Link>
          </div>

          <div className="flex items-center gap-3">
            {session ? (
              /* Authenticated: show avatar link to dashboard */
              <Link href="/dashboard"
                className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-violet-50 border border-violet-200 hover:bg-violet-100 transition-colors">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white text-[10px] font-bold">
                  {session.user?.image
                    ? <img src={session.user.image} alt="" className="w-6 h-6 rounded-full object-cover" />
                    : getInitials(session.user?.name)
                  }
                </div>
                <span className="text-xs font-semibold text-violet-700">Dashboard</span>
                <ArrowRight className="w-3 h-3 text-violet-500" />
              </Link>
            ) : (
              <>
                <Link href="/auth/login"
                  className="hidden md:flex text-sm font-semibold text-[#5a5878] hover:text-[#0f0f1a] transition-colors px-3 py-1.5">
                  Sign in
                </Link>
                <Link href="/auth/register" className="hidden md:flex btn-primary !py-2 !px-4 !text-sm">
                  Get started free <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </>
            )}
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
              <Link href="/careers" onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 px-3 py-2.5 text-sm font-semibold text-violet-700 hover:bg-violet-50 rounded-xl transition-all">
                <Briefcase className="w-4 h-4" />
                Careers AI Platform
              </Link>
              <div className="pt-2 space-y-2">
                {session ? (
                  <Link href="/dashboard" onClick={() => setIsOpen(false)}
                    className="btn-primary w-full justify-center !text-sm">
                    Go to Dashboard <ArrowRight className="h-4 w-4" />
                  </Link>
                ) : (
                  <>
                    <Link href="/auth/login" onClick={() => setIsOpen(false)}
                      className="block w-full text-center px-4 py-2.5 text-sm font-semibold text-violet-700 border border-violet-200 rounded-xl hover:bg-violet-50 transition-colors">
                      Sign in
                    </Link>
                    <Link href="/auth/register" onClick={() => setIsOpen(false)}
                      className="btn-primary w-full justify-center !text-sm">
                      Get started free <ArrowRight className="h-4 w-4" />
                    </Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
