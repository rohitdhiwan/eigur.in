'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import {
  Briefcase, Send, FileText, TrendingUp, Sparkles, ArrowRight,
  Building2, MapPin, Clock, Star,
} from 'lucide-react';
import { JOBS } from '@/lib/jobs-data';
import { formatSalary, timeAgo } from '@/lib/utils';

const featuredJobs = JOBS.filter((j) => j.featured).slice(0, 3);

const mockStats = [
  { label: 'Matched Jobs',   value: '47',  change: '+12 today',  icon: Briefcase, color: 'violet' },
  { label: 'Applications',  value: '5',   change: '2 in review',icon: Send,      color: 'blue'   },
  { label: 'CV Score',      value: '76%', change: 'Good',        icon: FileText,  color: 'emerald'},
  { label: 'Profile Views', value: '23',  change: '+8 this week',icon: TrendingUp,color: 'amber'  },
];

const colorMap: Record<string, { bg: string; text: string; iconBg: string }> = {
  violet: { bg: 'bg-violet-50', text: 'text-violet-700', iconBg: 'bg-violet-600' },
  blue:   { bg: 'bg-blue-50',   text: 'text-blue-700',   iconBg: 'bg-blue-600'   },
  emerald:{ bg: 'bg-emerald-50',text: 'text-emerald-700',iconBg: 'bg-emerald-600'},
  amber:  { bg: 'bg-amber-50',  text: 'text-amber-700',  iconBg: 'bg-amber-500'  },
};

const aiTips = [
  'Add quantified achievements to your experience section to boost your CV score by ~15%.',
  'Roles at Razorpay and CRED are actively recruiting – your skills match 4 open positions.',
  'Complete your profile to unlock personalised job recommendations.',
];

export default function DashboardPage() {
  const { data: session } = useSession();
  const firstName = session?.user?.name?.split(' ')[0] ?? 'there';

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">

      {/* Welcome */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl font-bold text-slate-900">
            Good morning, {firstName} 👋
          </h1>
          <p className="text-sm text-slate-500 mt-0.5">Here&apos;s what&apos;s happening with your job search today.</p>
        </div>
        <Link href="/dashboard/jobs" className="btn-primary !py-2 !px-4 !text-sm hidden sm:flex">
          Find Jobs <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {mockStats.map((s) => {
          const c = colorMap[s.color];
          return (
            <div key={s.label} className="bg-white rounded-2xl border border-slate-100 p-4 shadow-sm shadow-black/[0.02]">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-slate-500 font-medium">{s.label}</span>
                <div className={`w-8 h-8 rounded-xl ${c.iconBg} flex items-center justify-center`}>
                  <s.icon className="w-4 h-4 text-white" />
                </div>
              </div>
              <p className="text-2xl font-bold text-slate-900 font-display">{s.value}</p>
              <p className={`text-xs mt-1 font-medium ${c.text}`}>{s.change}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Top Job Matches */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display font-bold text-slate-900">Top Job Matches</h2>
            <Link href="/dashboard/jobs" className="text-xs font-semibold text-violet-600 hover:text-violet-700 flex items-center gap-1">
              View all <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="space-y-3">
            {featuredJobs.map((job, i) => (
              <div key={job.id}
                className="bg-white rounded-2xl border border-slate-100 p-4 shadow-sm shadow-black/[0.02] hover:border-violet-200 hover:shadow-violet-500/10 transition-all group">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-50 to-indigo-50 border border-violet-100 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-5 h-5 text-violet-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-semibold text-sm text-slate-900 group-hover:text-violet-700 transition-colors">{job.title}</h3>
                        <p className="text-xs text-slate-500 mt-0.5">{job.company}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                          {88 - i * 6}% match
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 mt-2">
                      <span className="flex items-center gap-1 text-xs text-slate-400">
                        <MapPin className="w-3 h-3" /> {job.location}
                      </span>
                      <span className="text-xs text-slate-400">{formatSalary(job.salaryMin, job.salaryMax)}</span>
                      <span className="flex items-center gap-1 text-xs text-slate-400">
                        <Clock className="w-3 h-3" /> {timeAgo(job.postedAt)}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {job.skills.slice(0, 4).map((s) => (
                    <span key={s} className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-4">

          {/* AI Tips */}
          <div className="bg-gradient-to-br from-violet-600 to-indigo-700 rounded-2xl p-4 text-white">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4" />
              <h3 className="font-display font-bold text-sm">AI Career Coach</h3>
            </div>
            <div className="space-y-3">
              {aiTips.map((tip, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <p className="text-xs text-white/90 leading-relaxed">{tip}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-2xl border border-slate-100 p-4 shadow-sm shadow-black/[0.02]">
            <h3 className="font-display font-bold text-slate-900 text-sm mb-3">Quick Actions</h3>
            <div className="space-y-2">
              {[
                { href: '/dashboard/cv', label: 'Build / update CV', icon: FileText },
                { href: '/dashboard/jobs', label: 'Search new jobs', icon: Briefcase },
                { href: '/dashboard/profile', label: 'Complete profile', icon: Star },
              ].map((a) => (
                <Link key={a.href} href={a.href}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-slate-50 text-sm text-slate-700 hover:text-violet-700 transition-colors group">
                  <a.icon className="w-4 h-4 text-slate-400 group-hover:text-violet-500" />
                  {a.label}
                  <ArrowRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
