'use client';

import { useState } from 'react';
import {
  Sparkles, TrendingUp, Target, BookOpen, Award,
  Code, Users, Zap, ChevronRight, Loader2, Brain,
} from 'lucide-react';

const marketTrends = [
  { skill: 'AI/ML Engineering', demand: 94, growth: '+38%', trend: 'up' },
  { skill: 'TypeScript', demand: 88, growth: '+22%', trend: 'up' },
  { skill: 'Cloud (AWS/GCP)', demand: 85, growth: '+18%', trend: 'up' },
  { skill: 'Go / Rust', demand: 72, growth: '+45%', trend: 'up' },
  { skill: 'React / Next.js', demand: 90, growth: '+12%', trend: 'up' },
  { skill: 'Kubernetes', demand: 78, growth: '+25%', trend: 'up' },
];

const skillGaps = [
  { skill: 'System Design at Scale', priority: 'High', impact: 'Could increase match score by 18%', resources: ['Grokking System Design', 'ByteByteGo'] },
  { skill: 'Leadership & Mentoring', priority: 'Medium', impact: 'Opens Senior+ roles', resources: ['Staff Engineer book', 'Engineering Manager newsletter'] },
  { skill: 'Data Structures (Advanced)', priority: 'Medium', impact: 'Required for FAANG interviews', resources: ['LeetCode Premium', 'Neetcode.io'] },
];

const aiInsights = [
  { icon: Target, title: 'Your profile matches 47 active roles', description: 'Companies like Razorpay, CRED and Meesho are actively hiring for your skill set. Update your salary expectations to ₹30–50L to appear in premium searches.' },
  { icon: TrendingUp, title: 'Go + TypeScript is your differentiator', description: '68% of senior engineers lack Go experience. Adding a Go project to your GitHub profile could boost recruiter outreach by 3x.' },
  { icon: Award, title: 'Interview success rate: 62% with prep', description: 'Candidates who practise 3+ mock interviews land offers 62% faster. Consider Pramp or Interviewing.io for structured practice.' },
  { icon: Zap, title: 'Best time to apply: Tuesday–Thursday', description: 'Applications submitted on Tue–Thu mornings (9–11am) get 34% more recruiter responses based on industry data.' },
];

const learningPaths = [
  { title: 'Staff Engineer Track', duration: '3–6 months', steps: ['System Design Mastery', 'Tech Lead skills', 'Cross-team collaboration', 'Engineering strategy'], difficulty: 'Advanced' },
  { title: 'AI/ML Integration', duration: '2–4 months', steps: ['Python for ML', 'LLM APIs & prompting', 'MLflow + model serving', 'AI product thinking'], difficulty: 'Intermediate' },
  { title: 'Cloud Architecture', duration: '2–3 months', steps: ['AWS Solutions Architect', 'Kubernetes (CKA)', 'Terraform IaC', 'Cost optimisation'], difficulty: 'Intermediate' },
];

export default function InsightsPage() {
  const [generatingReport, setGeneratingReport] = useState(false);
  const [reportGenerated, setReportGenerated] = useState(false);

  async function generateReport() {
    setGeneratingReport(true);
    await new Promise((r) => setTimeout(r, 2000));
    setGeneratingReport(false);
    setReportGenerated(true);
  }

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">

      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl font-bold text-slate-900">AI Career Insights</h1>
          <p className="text-sm text-slate-500 mt-0.5">Personalised intelligence to accelerate your career</p>
        </div>
        <button
          onClick={generateReport}
          disabled={generatingReport}
          className="btn-primary !py-2 !px-4 !text-sm disabled:opacity-50"
        >
          {generatingReport
            ? <><Loader2 className="w-3.5 h-3.5 animate-spin" /> Analysing…</>
            : <><Brain className="w-3.5 h-3.5" /> Generate Report</>
          }
        </button>
      </div>

      {/* AI Insights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {aiInsights.map((insight, i) => (
          <div key={i}
            className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm shadow-black/[0.02] hover:border-violet-200 hover:shadow-violet-500/5 transition-all">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-100 to-indigo-100 flex items-center justify-center flex-shrink-0">
                <insight.icon className="w-4.5 h-4.5 text-violet-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 text-sm">{insight.title}</h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">{insight.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Market Demand */}
        <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm shadow-black/[0.02]">
          <h2 className="font-display font-bold text-slate-900 mb-4 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-violet-600" />
            Skill Market Demand
          </h2>
          <div className="space-y-3">
            {marketTrends.map((t) => (
              <div key={t.skill} className="flex items-center gap-3">
                <span className="text-xs font-medium text-slate-600 w-36 flex-shrink-0">{t.skill}</span>
                <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-violet-500 to-indigo-600 rounded-full transition-all"
                    style={{ width: `${t.demand}%` }}
                  />
                </div>
                <span className="text-[10px] font-bold text-emerald-600 w-10 text-right">{t.growth}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Gaps */}
        <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm shadow-black/[0.02]">
          <h2 className="font-display font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Target className="w-4 h-4 text-amber-500" />
            Skill Gaps to Close
          </h2>
          <div className="space-y-3">
            {skillGaps.map((gap) => (
              <div key={gap.skill} className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-semibold text-slate-800">{gap.skill}</span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    gap.priority === 'High'
                      ? 'bg-red-50 text-red-600 border border-red-100'
                      : 'bg-amber-50 text-amber-600 border border-amber-100'
                  }`}>
                    {gap.priority}
                  </span>
                </div>
                <p className="text-xs text-slate-500 mb-1.5">{gap.impact}</p>
                <div className="flex flex-wrap gap-1">
                  {gap.resources.map((r) => (
                    <span key={r} className="text-[10px] px-2 py-0.5 rounded-md bg-violet-50 text-violet-700 border border-violet-100 font-medium">
                      {r}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Learning Paths */}
      <div>
        <h2 className="font-display font-bold text-slate-900 mb-4 flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-cyan-600" />
          Recommended Learning Paths
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {learningPaths.map((path) => (
            <div key={path.title}
              className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm shadow-black/[0.02] hover:border-violet-200 transition-all">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-display font-bold text-slate-900 text-sm">{path.title}</h3>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                  path.difficulty === 'Advanced'
                    ? 'bg-red-50 text-red-600 border-red-100'
                    : 'bg-amber-50 text-amber-600 border-amber-100'
                }`}>
                  {path.difficulty}
                </span>
              </div>
              <p className="text-xs text-slate-400 mb-3">{path.duration}</p>
              <div className="space-y-1.5">
                {path.steps.map((step, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-violet-100 flex items-center justify-center text-[9px] font-bold text-violet-700 flex-shrink-0">
                      {i + 1}
                    </div>
                    <span className="text-xs text-slate-600">{step}</span>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-violet-50 text-violet-700 text-xs font-semibold hover:bg-violet-100 transition-colors border border-violet-100">
                Start Path <ChevronRight className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* AI Report banner */}
      {reportGenerated && (
        <div className="bg-gradient-to-br from-violet-600 to-indigo-700 rounded-2xl p-6 text-white">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-5 h-5" />
            <h3 className="font-display font-bold">Your AI Career Report is Ready</h3>
          </div>
          <p className="text-sm text-white/80 mb-4">
            Based on your profile, our AI recommends focusing on <strong>Razorpay, CRED, and Freshworks</strong> for the next 30 days.
            Your technical skills are in the top 15% of candidates in your location.
            Adding system design experience could put you in the top 5% and unlock ₹40–60L+ roles.
          </p>
          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-2 rounded-xl bg-white text-violet-700 text-xs font-bold hover:bg-violet-50 transition-colors">
              Download PDF Report
            </button>
            <button className="px-4 py-2 rounded-xl bg-white/10 text-white text-xs font-semibold hover:bg-white/20 transition-colors border border-white/20">
              View Recommended Jobs
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
