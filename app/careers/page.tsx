import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Sparkles, Target, FileText, TrendingUp, ArrowRight, CheckCircle2,
  Building2, MapPin, Search, Briefcase, Star, Zap, Shield,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Eigur Careers AI – Find Jobs, Build CV & Get Hired',
  description: 'AI-powered job search platform. Smart matching, CV builder, and application tracking to help you land your dream role faster.',
};

const features = [
  {
    icon: Target,
    title: 'AI Job Matching',
    description: 'Our AI analyses your profile, skills and career goals to surface the most relevant roles — ranked by fit, not recency.',
    highlight: '94% match accuracy',
  },
  {
    icon: FileText,
    title: 'Smart CV Builder',
    description: 'Build ATS-optimised CVs with AI assistance. Get AI-enhanced summaries, bullet points and skill suggestions in seconds.',
    highlight: '3× more interview calls',
  },
  {
    icon: TrendingUp,
    title: 'Career Intelligence',
    description: 'Track market salary trends, identify skill gaps, and get personalised guidance on your career trajectory.',
    highlight: 'Real-time market data',
  },
  {
    icon: Zap,
    title: 'Application Tracker',
    description: 'Track every application from submission to offer. Kanban board view with automated reminders and follow-up nudges.',
    highlight: 'Never miss a follow-up',
  },
  {
    icon: Sparkles,
    title: 'Interview Preparation',
    description: 'AI-generated prep questions tailored to the specific role and company. Practice answers with instant feedback.',
    highlight: '62% better pass rates',
  },
  {
    icon: Shield,
    title: 'Privacy-First',
    description: 'Your data never leaves our secure servers. Control who sees your profile and choose to apply anonymously.',
    highlight: '256-bit encryption',
  },
];

const stats = [
  { value: '15,000+', label: 'Active Job Listings' },
  { value: '94%',     label: 'Match Accuracy' },
  { value: '4.2×',    label: 'Faster Job Search' },
  { value: '₹0',      label: 'Free to Use' },
];

const testimonials = [
  { name: 'Arjun Menon', role: 'SDE-2 at Razorpay', text: 'Found my current role in 3 weeks. The AI matched me to Razorpay and the CV builder made my application stand out.', avatar: 'AM' },
  { name: 'Priya Iyer', role: 'ML Engineer at Zepto', text: 'The skill gap analysis was eye-opening. I spent 6 weeks on the recommended courses and landed a 40% salary hike.', avatar: 'PI' },
  { name: 'Rohit Sharma', role: 'Staff Engineer at Hasura', text: 'Eigur AI showed me roles I wouldn\'t have considered. The insight that I was top 15% in my city gave me confidence to negotiate better.', avatar: 'RS' },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-[#fafaf9]">

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 right-0 w-[700px] h-[700px] rounded-full bg-violet-100/60 blur-3xl opacity-60" />
          <div className="absolute top-40 left-0 w-[500px] h-[500px] rounded-full bg-cyan-100/50 blur-3xl opacity-50" />
          <div className="dot-grid absolute inset-0 opacity-40" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="pill mb-5 inline-flex">
            <Sparkles className="w-3 h-3" />
            AI-Powered Career Platform
          </div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#0f0f1a] tracking-tight leading-[1.08] max-w-4xl mx-auto mb-6">
            Land your dream job
            <span className="block gradient-text">10× faster with AI</span>
          </h1>
          <p className="text-lg text-[#4b5068] max-w-2xl mx-auto mb-10 leading-relaxed">
            Eigur Careers uses advanced AI to match you with the right roles, build standout CVs, and guide you from first application to final offer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/register" className="btn-primary !py-3 !px-7 !text-base">
              Start for Free <ArrowRight className="w-4.5 h-4.5" />
            </Link>
            <Link href="/auth/login" className="btn-outline !py-3 !px-7 !text-base">
              Sign In
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 mt-8">
            {['No credit card required', 'Free forever plan', '15,000+ live jobs'].map((p) => (
              <div key={p} className="flex items-center gap-1.5 text-sm text-[#7878a0]">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-black/[0.06] bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-display text-3xl sm:text-4xl font-extrabold stat-number">{s.value}</p>
                <p className="text-sm text-[#7878a0] mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="pill mb-4 inline-flex">Features</div>
            <h2 className="font-display text-4xl font-bold text-[#0f0f1a] mb-4">
              Everything you need to get hired
            </h2>
            <p className="text-[#4b5068] max-w-xl mx-auto">
              A complete AI-powered toolkit built specifically for the Indian job market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="recruit-card">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-violet-100 to-indigo-100 flex items-center justify-center mb-4">
                  <f.icon className="w-5 h-5 text-violet-600" />
                </div>
                <h3 className="font-display font-bold text-[#0f0f1a] mb-2">{f.title}</h3>
                <p className="text-sm text-[#4b5068] leading-relaxed mb-3">{f.description}</p>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-violet-700 bg-violet-50 border border-violet-100 px-3 py-1 rounded-full">
                  <Sparkles className="w-3 h-3" />
                  {f.highlight}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 section-tint">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="pill mb-4 inline-flex">How It Works</div>
            <h2 className="font-display text-4xl font-bold text-[#0f0f1a] mb-4">
              From signup to offer in 4 steps
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', icon: Star,      title: 'Create Account', desc: 'Sign up free in 30 seconds with Google, Microsoft or email.' },
              { step: '02', icon: User2,     title: 'Build Profile',  desc: 'Tell us your skills, experience and target role. Takes 5 minutes.' },
              { step: '03', icon: Search,    title: 'Get Matched',    desc: 'Our AI surfaces the best roles from 15,000+ active listings.' },
              { step: '04', icon: Briefcase, title: 'Get Hired',      desc: 'Apply with AI-enhanced CV and track every application to offer.' },
            ].map((s) => (
              <div key={s.step} className="bg-white rounded-2xl border border-black/[0.06] p-6 relative">
                <div className="text-4xl font-extrabold text-violet-100 font-display absolute top-4 right-4">{s.step}</div>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-700 flex items-center justify-center mb-4">
                  <s.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-display font-bold text-[#0f0f1a] mb-1.5">{s.title}</h3>
                <p className="text-sm text-[#4b5068] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="pill mb-4 inline-flex">Success Stories</div>
            <h2 className="font-display text-4xl font-bold text-[#0f0f1a] mb-4">
              Engineers who found their next role with Eigur
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white text-sm font-bold">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-[#0f0f1a]">{t.name}</p>
                    <p className="text-xs text-[#7878a0]">{t.role}</p>
                  </div>
                </div>
                <p className="text-sm text-[#4b5068] leading-relaxed italic">&ldquo;{t.text}&rdquo;</p>
                <div className="flex mt-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-violet-600 to-indigo-700 rounded-3xl p-12 shadow-2xl shadow-violet-500/20">
            <h2 className="font-display text-4xl font-bold text-white mb-4">
              Ready to find your next role?
            </h2>
            <p className="text-white/80 mb-8 text-lg">
              Join thousands of professionals who found their dream job with Eigur AI.
              Free forever. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/register"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white text-violet-700 font-bold hover:bg-violet-50 transition-colors text-sm shadow-lg">
                Create Free Account <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/dashboard/jobs"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white/10 text-white font-semibold hover:bg-white/20 transition-colors border border-white/20 text-sm">
                Browse Jobs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// We need the User and User2 imports in this file
function User2({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
