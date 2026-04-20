'use client';

import { useState } from 'react';
import {
  Plus, Building2, MapPin, Clock, MoreHorizontal, ArrowRight,
  Send, Search, TrendingUp, Award, Briefcase,
} from 'lucide-react';
import { cn, statusColor, timeAgo, formatSalary } from '@/lib/utils';

type Status = 'APPLIED' | 'SCREENING' | 'INTERVIEW' | 'OFFER' | 'REJECTED';

interface Application {
  id: string;
  jobTitle: string;
  company: string;
  location: string;
  status: Status;
  appliedAt: string;
  salaryMin?: number;
  salaryMax?: number;
  notes?: string;
}

const COLUMNS: { id: Status; label: string; description: string }[] = [
  { id: 'APPLIED',   label: 'Applied',   description: 'Applications submitted' },
  { id: 'SCREENING', label: 'Screening', description: 'HR / initial review' },
  { id: 'INTERVIEW', label: 'Interview', description: 'Active interviews' },
  { id: 'OFFER',     label: 'Offer',     description: 'Offers received 🎉' },
  { id: 'REJECTED',  label: 'Rejected',  description: 'Not selected' },
];

const MOCK_APPS: Application[] = [
  { id: '1', jobTitle: 'Senior Software Engineer', company: 'Razorpay', location: 'Bangalore', status: 'INTERVIEW', appliedAt: '2026-04-14', salaryMin: 3000000, salaryMax: 5500000 },
  { id: '2', jobTitle: 'ML Engineer', company: 'Zepto', location: 'Mumbai', status: 'APPLIED', appliedAt: '2026-04-17', salaryMin: 2500000, salaryMax: 4500000 },
  { id: '3', jobTitle: 'Full Stack Engineer', company: 'CRED', location: 'Bangalore', status: 'SCREENING', appliedAt: '2026-04-15', salaryMin: 2800000, salaryMax: 5000000 },
  { id: '4', jobTitle: 'Frontend Engineer', company: 'Meesho', location: 'Remote', status: 'APPLIED', appliedAt: '2026-04-13', salaryMin: 1800000, salaryMax: 3200000 },
  { id: '5', jobTitle: 'DevOps Engineer', company: 'PhonePe', location: 'Pune', status: 'REJECTED', appliedAt: '2026-04-10', salaryMin: 2200000, salaryMax: 4000000 },
];

export default function ApplicationsPage() {
  const [applications, setApplications] = useState<Application[]>(MOCK_APPS);
  const [activeView, setActiveView] = useState<'kanban' | 'list'>('kanban');
  const [showAddModal, setShowAddModal] = useState(false);
  const [newApp, setNewApp] = useState({ jobTitle: '', company: '', location: '', status: 'APPLIED' as Status });

  function updateStatus(id: string, status: Status) {
    setApplications((prev) => prev.map((a) => a.id === id ? { ...a, status } : a));
  }

  function addApplication() {
    if (!newApp.jobTitle || !newApp.company) return;
    setApplications((prev) => [
      ...prev,
      { ...newApp, id: Date.now().toString(), appliedAt: new Date().toISOString() },
    ]);
    setNewApp({ jobTitle: '', company: '', location: '', status: 'APPLIED' });
    setShowAddModal(false);
  }

  const stats = {
    total: applications.length,
    active: applications.filter((a) => !['REJECTED'].includes(a.status)).length,
    interviews: applications.filter((a) => a.status === 'INTERVIEW').length,
    offers: applications.filter((a) => a.status === 'OFFER').length,
  };

  const inputCls = 'w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-400 bg-white';

  return (
    <div className="h-full flex flex-col">

      {/* Header */}
      <div className="bg-white border-b border-slate-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div>
            <h1 className="font-display text-lg font-bold text-slate-900">Application Tracker</h1>
            <p className="text-xs text-slate-500 mt-0.5">Track every application from submission to offer</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex rounded-lg border border-slate-200 overflow-hidden bg-white">
              {(['kanban', 'list'] as const).map((v) => (
                <button key={v} onClick={() => setActiveView(v)}
                  className={cn('px-3 py-1.5 text-xs font-semibold capitalize transition-colors',
                    activeView === v ? 'bg-violet-600 text-white' : 'text-slate-600 hover:bg-slate-50')}>
                  {v}
                </button>
              ))}
            </div>
            <button
              onClick={() => setShowAddModal(true)}
              className="btn-primary !py-2 !px-4 !text-xs">
              <Plus className="w-3.5 h-3.5" /> Add
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white border-b border-slate-100 px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-6">
          {[
            { icon: Send, label: 'Total', value: stats.total, color: 'text-slate-700' },
            { icon: Briefcase, label: 'Active', value: stats.active, color: 'text-blue-700' },
            { icon: Search, label: 'Interviews', value: stats.interviews, color: 'text-violet-700' },
            { icon: Award, label: 'Offers', value: stats.offers, color: 'text-emerald-700' },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-2">
              <s.icon className={`w-3.5 h-3.5 ${s.color}`} />
              <span className="text-xs text-slate-500">{s.label}:</span>
              <span className={`text-sm font-bold ${s.color}`}>{s.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Kanban */}
      {activeView === 'kanban' && (
        <div className="flex-1 overflow-x-auto p-6">
          <div className="flex gap-4 h-full min-w-max">
            {COLUMNS.map((col) => {
              const colApps = applications.filter((a) => a.status === col.id);
              const colors = statusColor(col.id);
              return (
                <div key={col.id} className="w-64 flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <div className={`w-2 h-2 rounded-full ${colors.dot}`} />
                    <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">{col.label}</span>
                    <span className="ml-auto text-xs font-semibold text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded-full">
                      {colApps.length}
                    </span>
                  </div>

                  <div className="flex-1 space-y-2.5 overflow-y-auto">
                    {colApps.map((app) => (
                      <div key={app.id}
                        className="bg-white rounded-xl border border-slate-100 p-3 shadow-sm shadow-black/[0.02] hover:shadow-md hover:border-slate-200 transition-all group">
                        <div className="flex items-start gap-2 mb-2">
                          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-50 to-indigo-100 flex items-center justify-center flex-shrink-0">
                            <Building2 className="w-3.5 h-3.5 text-violet-500" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-xs font-bold text-slate-900 line-clamp-1">{app.jobTitle}</h3>
                            <p className="text-[10px] text-slate-500 mt-0.5">{app.company}</p>
                          </div>
                        </div>
                        {app.location && (
                          <div className="flex items-center gap-1 mb-2">
                            <MapPin className="w-2.5 h-2.5 text-slate-400" />
                            <span className="text-[10px] text-slate-400">{app.location}</span>
                          </div>
                        )}
                        {(app.salaryMin || app.salaryMax) && (
                          <p className="text-[10px] text-slate-500 mb-2 font-medium">
                            {formatSalary(app.salaryMin, app.salaryMax)}
                          </p>
                        )}
                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-1 text-[10px] text-slate-400">
                            <Clock className="w-2.5 h-2.5" />
                            {timeAgo(app.appliedAt)}
                          </span>
                          {/* Move to next stage */}
                          {col.id !== 'OFFER' && col.id !== 'REJECTED' && (
                            <button
                              onClick={() => {
                                const stages: Status[] = ['APPLIED', 'SCREENING', 'INTERVIEW', 'OFFER'];
                                const next = stages[stages.indexOf(col.id) + 1];
                                if (next) updateStatus(app.id, next);
                              }}
                              className="opacity-0 group-hover:opacity-100 text-[10px] text-violet-600 font-semibold flex items-center gap-0.5 hover:text-violet-800 transition-all"
                            >
                              Move <ArrowRight className="w-2.5 h-2.5" />
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                    {colApps.length === 0 && (
                      <div className="border-2 border-dashed border-slate-100 rounded-xl p-4 text-center">
                        <p className="text-[10px] text-slate-400">{col.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* List View */}
      {activeView === 'list' && (
        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm shadow-black/[0.02]">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50">
                  {['Role', 'Company', 'Location', 'Status', 'Applied', 'Salary'].map((h) => (
                    <th key={h} className="text-left px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wide">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {applications.map((app) => {
                  const c = statusColor(app.status);
                  return (
                    <tr key={app.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-4 py-3 text-sm font-semibold text-slate-900">{app.jobTitle}</td>
                      <td className="px-4 py-3 text-sm text-slate-600">{app.company}</td>
                      <td className="px-4 py-3 text-sm text-slate-500">{app.location}</td>
                      <td className="px-4 py-3">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${c.bg} ${c.text}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
                          {app.status.charAt(0) + app.status.slice(1).toLowerCase()}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-xs text-slate-400">{timeAgo(app.appliedAt)}</td>
                      <td className="px-4 py-3 text-xs text-slate-500">{formatSalary(app.salaryMin, app.salaryMax)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Add Application Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border border-slate-100 shadow-2xl p-6 w-full max-w-sm">
            <h3 className="font-display font-bold text-slate-900 mb-4">Add Application</h3>
            <div className="space-y-3">
              <div>
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1 block">Job Title</label>
                <input type="text" placeholder="Senior Engineer" value={newApp.jobTitle}
                  onChange={(e) => setNewApp((p) => ({ ...p, jobTitle: e.target.value }))}
                  className={inputCls} />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1 block">Company</label>
                <input type="text" placeholder="Razorpay" value={newApp.company}
                  onChange={(e) => setNewApp((p) => ({ ...p, company: e.target.value }))}
                  className={inputCls} />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1 block">Location</label>
                <input type="text" placeholder="Bangalore" value={newApp.location}
                  onChange={(e) => setNewApp((p) => ({ ...p, location: e.target.value }))}
                  className={inputCls} />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1 block">Status</label>
                <select value={newApp.status} onChange={(e) => setNewApp((p) => ({ ...p, status: e.target.value as Status }))}
                  className={inputCls}>
                  {COLUMNS.map((c) => <option key={c.id} value={c.id}>{c.label}</option>)}
                </select>
              </div>
            </div>
            <div className="flex gap-3 mt-5">
              <button onClick={() => setShowAddModal(false)}
                className="flex-1 px-4 py-2 rounded-xl border border-slate-200 text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors">
                Cancel
              </button>
              <button onClick={addApplication}
                className="btn-primary flex-1 justify-center !py-2 !text-sm">
                Add Application
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
