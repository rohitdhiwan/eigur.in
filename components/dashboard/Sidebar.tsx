'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react';
import {
  LayoutDashboard, Search, FileText, Send, User, Lightbulb,
  LogOut, X, ChevronRight, Briefcase,
} from 'lucide-react';
import { cn, getInitials } from '@/lib/utils';

const navItems = [
  { href: '/dashboard',              label: 'Overview',     icon: LayoutDashboard, exact: true },
  { href: '/dashboard/jobs',         label: 'Find Jobs',    icon: Search },
  { href: '/dashboard/cv',           label: 'My CVs',       icon: FileText },
  { href: '/dashboard/applications', label: 'Applications', icon: Send },
  { href: '/dashboard/insights',     label: 'AI Insights',  icon: Lightbulb },
  { href: '/dashboard/profile',      label: 'Profile',      icon: User },
];

interface SidebarProps {
  user: { name?: string | null; email?: string | null; image?: string | null };
  open: boolean;
  onClose: () => void;
}

function LogoMark() {
  return (
    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-700 flex items-center justify-center shadow-[0_2px_8px_rgba(109,40,217,0.3)]">
      <svg viewBox="0 0 20 20" fill="none" className="w-[13px] h-[13px]">
        <circle cx="10" cy="4" r="2.25" fill="white" />
        <circle cx="3.5" cy="15" r="1.75" fill="white" opacity="0.9" />
        <circle cx="16.5" cy="15" r="1.75" fill="white" opacity="0.9" />
        <line x1="10" y1="4" x2="3.5" y2="15" stroke="white" strokeWidth="1.3" strokeLinecap="round" opacity="0.55" />
        <line x1="10" y1="4" x2="16.5" y2="15" stroke="white" strokeWidth="1.3" strokeLinecap="round" opacity="0.55" />
        <line x1="3.5" y1="15" x2="16.5" y2="15" stroke="white" strokeWidth="1.3" strokeLinecap="round" opacity="0.35" />
      </svg>
    </div>
  );
}

function NavItem({ href, label, icon: Icon, exact, onClick }: {
  href: string; label: string; icon: React.ComponentType<{ className?: string }>; exact?: boolean; onClick?: () => void;
}) {
  const pathname = usePathname();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        'flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all',
        isActive
          ? 'bg-violet-600 text-white shadow-sm shadow-violet-500/20'
          : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
      )}
    >
      <Icon className="w-4 h-4 flex-shrink-0" />
      {label}
      {isActive && <ChevronRight className="w-3.5 h-3.5 ml-auto opacity-60" />}
    </Link>
  );
}

function SidebarContent({ user, onClose }: { user: SidebarProps['user']; onClose?: () => void }) {
  return (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="flex items-center justify-between px-4 py-5 border-b border-slate-100">
        <Link href="/" className="flex items-center gap-2">
          <LogoMark />
          <div className="flex flex-col leading-none">
            <span className="font-display text-[15px] font-bold gradient-text">Eigur</span>
            <span className="text-[8px] font-bold tracking-[0.1em] uppercase text-slate-400 mt-0.5">Careers AI</span>
          </div>
        </Link>
        {onClose && (
          <button onClick={onClose} className="md:hidden p-1 text-slate-400 hover:text-slate-600 rounded-lg">
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
        {navItems.map((item) => (
          <NavItem key={item.href} {...item} onClick={onClose} />
        ))}
      </nav>

      {/* Divider + External Links */}
      <div className="px-3 py-2 border-t border-slate-100">
        <Link href="/dashboard/jobs"
          className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-violet-600 bg-violet-50 hover:bg-violet-100 transition-colors mb-2">
          <Briefcase className="w-3.5 h-3.5" />
          Browse 15+ Live Jobs
          <span className="ml-auto w-5 h-5 rounded-full bg-violet-600 text-white text-[10px] font-bold flex items-center justify-center">!</span>
        </Link>
      </div>

      {/* User */}
      <div className="px-3 py-3 border-t border-slate-100">
        <div className="flex items-center gap-2.5 px-2 py-2">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
            {user.image
              ? <img src={user.image} alt="" className="w-7 h-7 rounded-full object-cover" />
              : getInitials(user.name)
            }
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-slate-800 truncate">{user.name ?? 'User'}</p>
            <p className="text-xs text-slate-400 truncate">{user.email}</p>
          </div>
        </div>
        <button
          onClick={() => signOut({ callbackUrl: '/' })}
          className="flex items-center gap-2.5 w-full px-3 py-2 rounded-xl text-sm text-slate-500 hover:text-red-600 hover:bg-red-50 transition-colors mt-1"
        >
          <LogOut className="w-4 h-4" />
          Sign out
        </button>
      </div>
    </div>
  );
}

export default function Sidebar({ user, open, onClose }: SidebarProps) {
  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden md:flex flex-col w-56 flex-shrink-0 bg-white border-r border-slate-100 min-h-screen">
        <SidebarContent user={user} />
      </aside>

      {/* Mobile drawer */}
      {open && (
        <>
          <div className="fixed inset-0 bg-black/30 z-40 md:hidden" onClick={onClose} />
          <aside className="fixed left-0 top-0 bottom-0 w-64 bg-white z-50 md:hidden shadow-xl">
            <SidebarContent user={user} onClose={onClose} />
          </aside>
        </>
      )}
    </>
  );
}
