'use client';

import { useState } from 'react';
import { Menu, Bell, Search } from 'lucide-react';
import { getInitials } from '@/lib/utils';

interface TopBarProps {
  user: { name?: string | null; email?: string | null; image?: string | null };
  onMenuClick: () => void;
}

export default function TopBar({ user, onMenuClick }: TopBarProps) {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="h-14 flex items-center px-4 gap-3 border-b border-slate-100 bg-white flex-shrink-0">
      <button
        onClick={onMenuClick}
        className="md:hidden p-1.5 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Search */}
      <div className="flex-1 max-w-md">
        {searchOpen ? (
          <input
            autoFocus
            onBlur={() => setSearchOpen(false)}
            placeholder="Search jobs, companies, skills…"
            className="w-full px-3.5 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-400"
          />
        ) : (
          <button
            onClick={() => setSearchOpen(true)}
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg border border-slate-200 text-sm text-slate-400 hover:border-slate-300 hover:text-slate-500 transition-colors w-full text-left"
          >
            <Search className="w-4 h-4" />
            <span>Search jobs, companies, skills…</span>
            <kbd className="ml-auto text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-400 font-mono">⌘K</kbd>
          </button>
        )}
      </div>

      <div className="flex items-center gap-2 ml-auto">
        <button className="relative p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors">
          <Bell className="w-4.5 h-4.5" />
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-violet-600" />
        </button>

        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold cursor-pointer">
          {user.image
            ? <img src={user.image} alt="" className="w-7 h-7 rounded-full object-cover" />
            : getInitials(user.name)
          }
        </div>
      </div>
    </header>
  );
}
