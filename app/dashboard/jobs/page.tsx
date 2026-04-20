'use client';

import { useState, useMemo } from 'react';
import {
  Search, Filter, MapPin, Clock, Building2, Bookmark, BookmarkCheck,
  Briefcase, ChevronDown, X, Sparkles, ExternalLink, Send,
} from 'lucide-react';
import { JOBS, INDUSTRIES, JOB_TYPES, type Job } from '@/lib/jobs-data';
import { formatSalary, timeAgo, cn } from '@/lib/utils';

const SALARY_OPTIONS = [
  { label: 'Any', value: 0 },
  { label: '10L+', value: 1000000 },
  { label: '20L+', value: 2000000 },
  { label: '30L+', value: 3000000 },
  { label: '50L+', value: 5000000 },
];

export default function JobsPage() {
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [minSalary, setMinSalary] = useState(0);
  const [remoteOnly, setRemoteOnly] = useState(false);
  const [savedJobs, setSavedJobs] = useState<Set<string>>(new Set());
  const [selectedJob, setSelectedJob] = useState<Job | null>(JOBS[0]);
  const [appliedJobs, setAppliedJobs] = useState<Set<string>>(new Set());
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    return JOBS.filter((j) => {
      if (query && !j.title.toLowerCase().includes(query.toLowerCase()) &&
          !j.company.toLowerCase().includes(query.toLowerCase()) &&
          !j.skills.some((s) => s.toLowerCase().includes(query.toLowerCase()))) return false;
      if (location && !j.location.toLowerCase().includes(location.toLowerCase())) return false;
      if (selectedType && j.type !== selectedType) return false;
      if (selectedIndustry && j.industry !== selectedIndustry) return false;
      if (minSalary && j.salaryMax < minSalary) return false;
      if (remoteOnly && !j.remote) return false;
      return true;
    });
  }, [query, location, selectedType, selectedIndustry, minSalary, remoteOnly]);

  function toggleSave(id: string) {
    setSavedJobs((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  function handleApply(job: Job) {
    setAppliedJobs((prev) => new Set(prev).add(job.id));
  }

  const matchScore = (job: Job) => {
    const base = 65;
    const bonus = job.featured ? 20 : 0;
    const skillBonus = Math.min(job.skills.length * 2, 15);
    return Math.min(base + bonus + skillBonus, 98);
  };

  return (
    <div className="h-full flex flex-col">

      {/* Search Header */}
      <div className="bg-white border-b border-slate-100 px-6 py-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by title, company, or skill…"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-400 bg-slate-50"
              />
            </div>
            <div className="relative hidden sm:block">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Location"
                className="w-40 pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-400 bg-slate-50"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={cn('flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium transition-colors',
                showFilters ? 'border-violet-500 text-violet-600 bg-violet-50' : 'border-slate-200 text-slate-600 hover:border-slate-300 bg-slate-50')}
            >
              <Filter className="w-3.5 h-3.5" />
              Filters
            </button>
          </div>

          {/* Filter row */}
          {showFilters && (
            <div className="flex flex-wrap items-center gap-3 mt-3 pt-3 border-t border-slate-100">
              <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}
                className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs text-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-500/30 bg-white">
                <option value="">All types</option>
                {JOB_TYPES.map((t) => <option key={t}>{t}</option>)}
              </select>
              <select value={selectedIndustry} onChange={(e) => setSelectedIndustry(e.target.value)}
                className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs text-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-500/30 bg-white">
                <option value="">All industries</option>
                {INDUSTRIES.map((i) => <option key={i}>{i}</option>)}
              </select>
              <select value={minSalary} onChange={(e) => setMinSalary(Number(e.target.value))}
                className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs text-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-500/30 bg-white">
                {SALARY_OPTIONS.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
              </select>
              <label className="flex items-center gap-1.5 cursor-pointer">
                <input type="checkbox" checked={remoteOnly} onChange={(e) => setRemoteOnly(e.target.checked)}
                  className="w-3.5 h-3.5 rounded border-slate-300 text-violet-600 focus:ring-violet-500" />
                <span className="text-xs text-slate-600 font-medium">Remote only</span>
              </label>
              {(selectedType || selectedIndustry || minSalary > 0 || remoteOnly) && (
                <button onClick={() => { setSelectedType(''); setSelectedIndustry(''); setMinSalary(0); setRemoteOnly(false); }}
                  className="flex items-center gap-1 text-xs text-red-500 hover:text-red-600 font-medium">
                  <X className="w-3 h-3" /> Clear
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden flex">

        {/* Job List */}
        <div className="w-full lg:w-[380px] flex-shrink-0 overflow-y-auto border-r border-slate-100 bg-white">
          <div className="px-4 py-3 border-b border-slate-50">
            <p className="text-xs text-slate-500 font-medium">
              <span className="font-bold text-slate-800">{filtered.length}</span> jobs found
              {query && <> for &quot;<span className="text-violet-600">{query}</span>&quot;</>}
            </p>
          </div>
          <div className="divide-y divide-slate-50">
            {filtered.length === 0 ? (
              <div className="p-8 text-center">
                <Briefcase className="w-8 h-8 text-slate-300 mx-auto mb-3" />
                <p className="text-sm font-medium text-slate-500">No jobs found</p>
                <p className="text-xs text-slate-400 mt-1">Try different search terms</p>
              </div>
            ) : (
              filtered.map((job) => (
                <button
                  key={job.id}
                  onClick={() => setSelectedJob(job)}
                  className={cn('w-full text-left p-4 hover:bg-slate-50 transition-colors',
                    selectedJob?.id === job.id && 'bg-violet-50 border-l-2 border-violet-600')}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-violet-50 to-indigo-100 border border-violet-100 flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-4 h-4 text-violet-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="text-sm font-semibold text-slate-900 line-clamp-1">{job.title}</h3>
                          <p className="text-xs text-slate-500 mt-0.5">{job.company}</p>
                        </div>
                        <button
                          onClick={(e) => { e.stopPropagation(); toggleSave(job.id); }}
                          className={cn('p-1 rounded-lg transition-colors',
                            savedJobs.has(job.id)
                              ? 'text-violet-600 hover:text-violet-700'
                              : 'text-slate-300 hover:text-slate-500')}
                        >
                          {savedJobs.has(job.id) ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
                        </button>
                      </div>
                      <div className="flex items-center gap-2 mt-1.5">
                        <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700">
                          {matchScore(job)}% match
                        </span>
                        <span className="text-[10px] text-slate-400">{formatSalary(job.salaryMin, job.salaryMax)}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[10px] text-slate-400 flex items-center gap-0.5">
                          <MapPin className="w-2.5 h-2.5" />{job.location.split(',')[0]}
                        </span>
                        <span className={cn('text-[10px] px-1.5 py-0.5 rounded-full',
                          job.remote ? 'bg-cyan-50 text-cyan-700' : 'bg-slate-100 text-slate-600')}>
                          {job.type}
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              ))
            )}
          </div>
        </div>

        {/* Job Detail */}
        {selectedJob && (
          <div className="flex-1 overflow-y-auto p-6 hidden lg:block">
            <div className="max-w-2xl">
              <div className="bg-white rounded-2xl border border-slate-100 p-6 mb-4">
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-50 to-indigo-100 border border-violet-100 flex items-center justify-center">
                      <Building2 className="w-7 h-7 text-violet-500" />
                    </div>
                    <div>
                      <h1 className="font-display text-xl font-bold text-slate-900">{selectedJob.title}</h1>
                      <p className="text-slate-600 font-medium mt-0.5">{selectedJob.company}</p>
                      <div className="flex flex-wrap items-center gap-3 mt-2">
                        <span className="flex items-center gap-1 text-sm text-slate-500">
                          <MapPin className="w-3.5 h-3.5" />{selectedJob.location}
                        </span>
                        <span className="text-sm text-slate-500">{selectedJob.type}</span>
                        <span className="flex items-center gap-1 text-sm text-slate-500">
                          <Clock className="w-3.5 h-3.5" />{timeAgo(selectedJob.postedAt)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="text-sm font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                      {matchScore(selectedJob)}% match
                    </span>
                    <div className="flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-violet-500" />
                      <span className="text-xs text-violet-600 font-medium">AI Recommended</span>
                    </div>
                  </div>
                </div>

                {/* Salary & Details */}
                <div className="grid grid-cols-3 gap-3 mb-5">
                  {[
                    { label: 'Salary', value: formatSalary(selectedJob.salaryMin, selectedJob.salaryMax) },
                    { label: 'Experience', value: selectedJob.experience },
                    { label: 'Industry', value: selectedJob.industry },
                  ].map((d) => (
                    <div key={d.label} className="bg-slate-50 rounded-xl p-3">
                      <p className="text-xs text-slate-400 mb-0.5">{d.label}</p>
                      <p className="text-sm font-semibold text-slate-800">{d.value}</p>
                    </div>
                  ))}
                </div>

                {/* Skills */}
                <div className="mb-5">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Required Skills</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedJob.skills.map((s) => (
                      <span key={s} className="text-xs font-medium px-2.5 py-1 rounded-lg bg-violet-50 text-violet-700 border border-violet-100">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex gap-3">
                  {appliedJobs.has(selectedJob.id) ? (
                    <div className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-semibold">
                      <Send className="w-4 h-4" /> Application Sent!
                    </div>
                  ) : (
                    <button
                      onClick={() => handleApply(selectedJob)}
                      className="btn-primary flex-1 justify-center !py-2.5">
                      <Send className="w-4 h-4" /> Apply Now
                    </button>
                  )}
                  <button
                    onClick={() => toggleSave(selectedJob.id)}
                    className={cn('px-4 py-2.5 rounded-xl border text-sm font-medium transition-colors',
                      savedJobs.has(selectedJob.id)
                        ? 'border-violet-500 text-violet-600 bg-violet-50'
                        : 'border-slate-200 text-slate-600 hover:border-violet-300')}
                  >
                    {savedJobs.has(selectedJob.id) ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Description */}
              <div className="bg-white rounded-2xl border border-slate-100 p-6">
                <h2 className="font-display font-bold text-slate-900 mb-3">About the role</h2>
                <p className="text-sm text-slate-600 leading-relaxed mb-5">{selectedJob.description}</p>

                <h3 className="font-semibold text-slate-800 text-sm mb-2">Responsibilities</h3>
                <ul className="space-y-1.5 mb-5">
                  {selectedJob.responsibilities.map((r, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-2 flex-shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>

                <h3 className="font-semibold text-slate-800 text-sm mb-2">Requirements</h3>
                <ul className="space-y-1.5">
                  {selectedJob.requirements.map((r, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 flex-shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
