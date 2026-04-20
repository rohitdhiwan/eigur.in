import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatSalary(min?: number | null, max?: number | null): string {
  if (!min && !max) return 'Not disclosed';
  const fmt = (n: number) =>
    n >= 100000 ? `₹${(n / 100000).toFixed(1)}L` : `₹${(n / 1000).toFixed(0)}K`;
  if (min && max) return `${fmt(min)} – ${fmt(max)}`;
  if (min) return `${fmt(min)}+`;
  return `Up to ${fmt(max!)}`;
}

export function timeAgo(date: Date | string): string {
  const now = new Date();
  const d = new Date(date);
  const diff = Math.floor((now.getTime() - d.getTime()) / 1000);
  if (diff < 60) return 'Just now';
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  if (diff < 604800) return `${Math.floor(diff / 86400)}d ago`;
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
}

export function getInitials(name?: string | null): string {
  if (!name) return '?';
  return name
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

export function statusColor(status: string): { bg: string; text: string; dot: string } {
  const map: Record<string, { bg: string; text: string; dot: string }> = {
    SAVED:      { bg: 'bg-gray-100',    text: 'text-gray-600',   dot: 'bg-gray-400' },
    APPLIED:    { bg: 'bg-blue-50',     text: 'text-blue-700',   dot: 'bg-blue-500' },
    SCREENING:  { bg: 'bg-yellow-50',   text: 'text-yellow-700', dot: 'bg-yellow-500' },
    INTERVIEW:  { bg: 'bg-violet-50',   text: 'text-violet-700', dot: 'bg-violet-500' },
    OFFER:      { bg: 'bg-emerald-50',  text: 'text-emerald-700',dot: 'bg-emerald-500' },
    REJECTED:   { bg: 'bg-red-50',      text: 'text-red-700',    dot: 'bg-red-400' },
  };
  return map[status] ?? map['APPLIED'];
}
