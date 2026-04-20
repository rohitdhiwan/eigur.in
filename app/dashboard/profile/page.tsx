'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2, CheckCircle2, User, Briefcase, MapPin, DollarSign, Code, Link } from 'lucide-react';
import { getInitials } from '@/lib/utils';

const schema = z.object({
  title: z.string().min(2, 'Enter your job title'),
  location: z.string().min(2, 'Enter your location'),
  bio: z.string().max(500).optional(),
  skills: z.string().optional(),
  experience: z.number().min(0).max(50),
  jobTypes: z.array(z.string()).optional(),
  salaryMin: z.number().optional(),
  salaryMax: z.number().optional(),
  linkedIn: z.string().url().optional().or(z.literal('')),
  github: z.string().url().optional().or(z.literal('')),
  portfolio: z.string().url().optional().or(z.literal('')),
});
type FormData = z.infer<typeof schema>;

const JOB_TYPE_OPTIONS = ['Full-time', 'Part-time', 'Contract', 'Remote', 'Hybrid'];

const STEPS = [
  { id: 1, label: 'About You',    icon: User },
  { id: 2, label: 'Preferences',  icon: Briefcase },
  { id: 3, label: 'Links',        icon: Link },
];

export default function ProfilePage() {
  const { data: session } = useSession();
  const [step, setStep] = useState(1);
  const [saved, setSaved] = useState(false);
  const [selectedJobTypes, setSelectedJobTypes] = useState<string[]>([]);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { experience: 0 },
  });

  async function onSubmit(data: FormData) {
    try {
      await fetch('/api/profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, jobTypes: selectedJobTypes }),
      });
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch {
      // silent
    }
  }

  const inputCls = 'w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-400 bg-white placeholder:text-slate-300 transition-all';
  const labelCls = 'block text-sm font-medium text-slate-700 mb-1.5';

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="mb-6">
        <h1 className="font-display text-2xl font-bold text-slate-900">Your Profile</h1>
        <p className="text-sm text-slate-500 mt-0.5">
          Complete your profile to unlock AI-powered job matching
        </p>
      </div>

      {/* Avatar */}
      <div className="bg-white rounded-2xl border border-slate-100 p-6 mb-6 flex items-center gap-5 shadow-sm shadow-black/[0.02]">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white text-xl font-bold shadow-md shadow-violet-500/20">
          {session?.user?.image
            ? <img src={session.user.image} alt="" className="w-16 h-16 rounded-2xl object-cover" />
            : getInitials(session?.user?.name)
          }
        </div>
        <div>
          <p className="font-display font-bold text-slate-900 text-lg">{session?.user?.name ?? '—'}</p>
          <p className="text-sm text-slate-500">{session?.user?.email ?? '—'}</p>
          <span className="inline-flex items-center gap-1 mt-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Active job seeker
          </span>
        </div>
      </div>

      {/* Steps nav */}
      <div className="flex gap-2 mb-6">
        {STEPS.map((s) => (
          <button
            key={s.id}
            onClick={() => setStep(s.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
              step === s.id
                ? 'bg-violet-600 text-white shadow-sm shadow-violet-500/20'
                : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-300'
            }`}
          >
            <s.icon className="w-3.5 h-3.5" />
            {s.label}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm shadow-black/[0.02]">

          {step === 1 && (
            <div className="space-y-5">
              <h2 className="font-display font-bold text-slate-900">About You</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelCls}>Current / Desired Job Title <span className="text-red-400">*</span></label>
                  <input {...register('title')} placeholder="Senior Software Engineer" className={inputCls} />
                  {errors.title && <p className="text-xs text-red-500 mt-1">{errors.title.message}</p>}
                </div>
                <div>
                  <label className={labelCls}>Location <span className="text-red-400">*</span></label>
                  <input {...register('location')} placeholder="Bangalore, India" className={inputCls} />
                  {errors.location && <p className="text-xs text-red-500 mt-1">{errors.location.message}</p>}
                </div>
                <div>
                  <label className={labelCls}>Years of Experience <span className="text-red-400">*</span></label>
                  <input {...register('experience', { valueAsNumber: true })} type="number" min={0} max={50}
                    placeholder="5" className={inputCls} />
                  {errors.experience && <p className="text-xs text-red-500 mt-1">{errors.experience.message}</p>}
                </div>
              </div>
              <div>
                <label className={labelCls}>Professional Bio</label>
                <textarea {...register('bio')} placeholder="Tell recruiters about yourself, your expertise, and what you're looking for…"
                  rows={4} className={`${inputCls} resize-none`} />
                {errors.bio && <p className="text-xs text-red-500 mt-1">{errors.bio.message}</p>}
              </div>
              <div>
                <label className={labelCls}>Skills (comma-separated)</label>
                <input {...register('skills')} placeholder="React, TypeScript, Node.js, PostgreSQL, AWS…" className={inputCls} />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-5">
              <h2 className="font-display font-bold text-slate-900">Job Preferences</h2>
              <div>
                <label className={labelCls}>Preferred Work Type</label>
                <div className="flex flex-wrap gap-2">
                  {JOB_TYPE_OPTIONS.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setSelectedJobTypes((prev) =>
                        prev.includes(opt) ? prev.filter((o) => o !== opt) : [...prev, opt]
                      )}
                      className={`px-3.5 py-1.5 rounded-xl text-sm font-medium border transition-colors ${
                        selectedJobTypes.includes(opt)
                          ? 'border-violet-500 bg-violet-50 text-violet-700'
                          : 'border-slate-200 text-slate-600 hover:border-slate-300 bg-white'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className={labelCls}>Minimum Salary (₹/year)</label>
                  <input {...register('salaryMin', { valueAsNumber: true })} type="number" placeholder="2000000"
                    className={inputCls} />
                  <p className="text-xs text-slate-400 mt-1">E.g. 2000000 = ₹20L</p>
                </div>
                <div>
                  <label className={labelCls}>Maximum Salary (₹/year)</label>
                  <input {...register('salaryMax', { valueAsNumber: true })} type="number" placeholder="5000000"
                    className={inputCls} />
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-5">
              <h2 className="font-display font-bold text-slate-900">Professional Links</h2>
              {[
                { key: 'linkedIn', label: 'LinkedIn URL', placeholder: 'https://linkedin.com/in/yourname' },
                { key: 'github',   label: 'GitHub URL',   placeholder: 'https://github.com/yourname' },
                { key: 'portfolio',label: 'Portfolio / Website', placeholder: 'https://yoursite.com' },
              ].map(({ key, label, placeholder }) => (
                <div key={key}>
                  <label className={labelCls}>{label}</label>
                  <input
                    {...register(key as keyof FormData)}
                    type="url"
                    placeholder={placeholder}
                    className={inputCls}
                  />
                  {errors[key as keyof FormData] && (
                    <p className="text-xs text-red-500 mt-1">
                      {(errors[key as keyof FormData] as { message?: string })?.message}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}

          <div className="flex items-center justify-between mt-6 pt-5 border-t border-slate-100">
            <div className="flex items-center gap-3">
              {step > 1 && (
                <button type="button" onClick={() => setStep(step - 1)}
                  className="px-4 py-2 rounded-xl border border-slate-200 text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors">
                  Back
                </button>
              )}
              {step < 3 && (
                <button type="button" onClick={() => setStep(step + 1)}
                  className="btn-primary !py-2 !px-5 !text-sm">
                  Continue
                </button>
              )}
              {step === 3 && (
                <button type="submit" disabled={isSubmitting}
                  className="btn-primary !py-2 !px-5 !text-sm disabled:opacity-50">
                  {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
                  Save Profile
                </button>
              )}
            </div>
            {saved && (
              <div className="flex items-center gap-2 text-emerald-600 text-sm font-medium">
                <CheckCircle2 className="w-4 h-4" />
                Profile saved!
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
