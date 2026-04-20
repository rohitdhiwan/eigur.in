'use client';

import { useState } from 'react';
import {
  Plus, FileText, Sparkles, Download, Eye, Trash2, Star,
  User, Briefcase, GraduationCap, Code, ChevronDown, ChevronUp,
  Loader2, CheckCircle2, Edit3, X,
} from 'lucide-react';
import { cn } from '@/lib/utils';

type Section = 'personal' | 'summary' | 'experience' | 'education' | 'skills' | 'projects';

interface ExperienceEntry {
  [key: string]: string;
  id: string; company: string; title: string; location: string;
  startDate: string; endDate: string; description: string;
}
interface EducationEntry {
  [key: string]: string;
  id: string; institution: string; degree: string; field: string;
  startDate: string; endDate: string; gpa: string;
}
interface ProjectEntry {
  [key: string]: string;
  id: string; name: string; description: string; technologies: string; link: string;
}

const defaultCV = {
  personal: { fullName: '', email: '', phone: '', location: '', linkedIn: '', github: '' },
  summary: '',
  experience: [] as ExperienceEntry[],
  education: [] as EducationEntry[],
  skills: '',
  projects: [] as ProjectEntry[],
};

function SectionIcon({ id }: { id: Section }) {
  const icons = {
    personal: User, summary: FileText, experience: Briefcase,
    education: GraduationCap, skills: Code, projects: Star,
  };
  const Icon = icons[id];
  return <Icon className="w-4 h-4" />;
}

export default function CVPage() {
  const [cv, setCv] = useState(defaultCV);
  const [activeSection, setActiveSection] = useState<Section>('personal');
  const [enhancing, setEnhancing] = useState<string | null>(null);
  const [enhanced, setEnhanced] = useState<string | null>(null);
  const [showPreview, setShowPreview] = useState(false);
  const [cvScore] = useState(42);

  const sections: { id: Section; label: string }[] = [
    { id: 'personal',    label: 'Personal Info' },
    { id: 'summary',     label: 'Summary' },
    { id: 'experience',  label: 'Experience' },
    { id: 'education',   label: 'Education' },
    { id: 'skills',      label: 'Skills' },
    { id: 'projects',    label: 'Projects' },
  ];

  async function handleEnhance(section: string, content: string) {
    if (!content.trim()) return;
    setEnhancing(section);
    try {
      const res = await fetch('/api/cv/enhance', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ section, content, jobTitle: cv.personal.fullName }),
      });
      const data = await res.json();
      if (data.enhanced) {
        setEnhanced(data.enhanced);
        if (section === 'summary') setCv((p) => ({ ...p, summary: data.enhanced }));
        if (section === 'skills') setCv((p) => ({ ...p, skills: data.enhanced }));
      }
    } catch {
      // silent
    } finally {
      setEnhancing(null);
    }
  }

  function addExperience() {
    setCv((p) => ({
      ...p,
      experience: [...p.experience, {
        id: Date.now().toString(), company: '', title: '', location: '',
        startDate: '', endDate: '', description: '',
      }],
    }));
  }

  function addEducation() {
    setCv((p) => ({
      ...p,
      education: [...p.education, {
        id: Date.now().toString(), institution: '', degree: '', field: '',
        startDate: '', endDate: '', gpa: '',
      }],
    }));
  }

  function addProject() {
    setCv((p) => ({
      ...p,
      projects: [...p.projects, {
        id: Date.now().toString(), name: '', description: '', technologies: '', link: '',
      }],
    }));
  }

  const inputCls = 'w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-400 bg-white placeholder:text-slate-300';
  const labelCls = 'block text-xs font-semibold text-slate-500 mb-1 uppercase tracking-wide';

  return (
    <div className="h-full flex flex-col">

      {/* Header */}
      <div className="bg-white border-b border-slate-100 px-6 py-4 flex items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-lg font-bold text-slate-900">CV Builder</h1>
          <p className="text-xs text-slate-500 mt-0.5">Build a professional, ATS-optimised CV with AI assistance</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-100">
            <div className="w-20 h-1.5 rounded-full bg-amber-100 overflow-hidden">
              <div className="h-full bg-amber-500 rounded-full" style={{ width: `${cvScore}%` }} />
            </div>
            <span className="text-xs font-semibold text-amber-700">Score: {cvScore}%</span>
          </div>
          <button
            onClick={() => setShowPreview(!showPreview)}
            className={cn('flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors',
              showPreview ? 'bg-violet-50 border-violet-300 text-violet-700' : 'border-slate-200 text-slate-600 hover:border-slate-300')}
          >
            <Eye className="w-3.5 h-3.5" />
            {showPreview ? 'Editor' : 'Preview'}
          </button>
          <button
            onClick={() => window.print()}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors border border-slate-200"
          >
            <Download className="w-3.5 h-3.5" />
            Export PDF
          </button>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">

        {/* Section Nav */}
        <div className="w-48 flex-shrink-0 bg-white border-r border-slate-100 py-4 overflow-y-auto hidden md:block">
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 px-4 mb-3">Sections</p>
          <nav className="space-y-0.5 px-2">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveSection(s.id)}
                className={cn(
                  'flex items-center gap-2.5 w-full px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                  activeSection === s.id
                    ? 'bg-violet-600 text-white'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                )}
              >
                <SectionIcon id={s.id} />
                {s.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Mobile section tabs */}
        <div className="md:hidden border-b border-slate-100 bg-white px-4 overflow-x-auto flex gap-2 py-2">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveSection(s.id)}
              className={cn('flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors',
                activeSection === s.id ? 'bg-violet-600 text-white' : 'bg-slate-100 text-slate-600')}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Editor */}
        {!showPreview ? (
          <div className="flex-1 overflow-y-auto p-6">
            <div className="max-w-2xl">

              {activeSection === 'personal' && (
                <div className="space-y-4">
                  <h2 className="font-display font-bold text-slate-900">Personal Information</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { key: 'fullName', label: 'Full Name', placeholder: 'Priya Sharma' },
                      { key: 'email',    label: 'Email',     placeholder: 'priya@example.com' },
                      { key: 'phone',    label: 'Phone',     placeholder: '+91 98765 43210' },
                      { key: 'location', label: 'Location',  placeholder: 'Bangalore, India' },
                      { key: 'linkedIn', label: 'LinkedIn',  placeholder: 'linkedin.com/in/priya' },
                      { key: 'github',   label: 'GitHub',    placeholder: 'github.com/priya' },
                    ].map(({ key, label, placeholder }) => (
                      <div key={key}>
                        <label className={labelCls}>{label}</label>
                        <input
                          type="text"
                          placeholder={placeholder}
                          value={(cv.personal as Record<string, string>)[key]}
                          onChange={(e) => setCv((p) => ({ ...p, personal: { ...p.personal, [key]: e.target.value } }))}
                          className={inputCls}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeSection === 'summary' && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h2 className="font-display font-bold text-slate-900">Professional Summary</h2>
                    <button
                      onClick={() => handleEnhance('summary', cv.summary)}
                      disabled={!!enhancing}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-violet-50 text-violet-700 hover:bg-violet-100 transition-colors border border-violet-200 disabled:opacity-50"
                    >
                      {enhancing === 'summary' ? <Loader2 className="w-3 h-3 animate-spin" /> : <Sparkles className="w-3 h-3" />}
                      AI Enhance
                    </button>
                  </div>
                  <textarea
                    value={cv.summary}
                    onChange={(e) => setCv((p) => ({ ...p, summary: e.target.value }))}
                    placeholder="Write a compelling professional summary… or let AI write one for you."
                    rows={6}
                    className={`${inputCls} resize-none`}
                  />
                  <p className="text-xs text-slate-400">Pro tip: Click &quot;AI Enhance&quot; to generate an ATS-optimised summary.</p>
                </div>
              )}

              {activeSection === 'experience' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h2 className="font-display font-bold text-slate-900">Work Experience</h2>
                    <button onClick={addExperience}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-violet-50 text-violet-700 hover:bg-violet-100 border border-violet-200 transition-colors">
                      <Plus className="w-3 h-3" /> Add
                    </button>
                  </div>
                  {cv.experience.length === 0 && (
                    <div className="text-center py-8 border-2 border-dashed border-slate-200 rounded-xl">
                      <Briefcase className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                      <p className="text-sm text-slate-500">No experience added yet</p>
                      <button onClick={addExperience} className="text-xs text-violet-600 font-semibold mt-2 hover:text-violet-700">+ Add experience</button>
                    </div>
                  )}
                  {cv.experience.map((exp, idx) => (
                    <div key={exp.id} className="bg-slate-50 rounded-xl p-4 border border-slate-200 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">Experience {idx + 1}</span>
                        <button onClick={() => setCv((p) => ({ ...p, experience: p.experience.filter((e) => e.id !== exp.id) }))}
                          className="p-1 text-slate-400 hover:text-red-500 rounded transition-colors">
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                          { key: 'title',    label: 'Job Title',  placeholder: 'Senior Engineer' },
                          { key: 'company',  label: 'Company',    placeholder: 'Razorpay' },
                          { key: 'location', label: 'Location',   placeholder: 'Bangalore' },
                          { key: 'startDate',label: 'Start Date', placeholder: 'Mar 2021' },
                          { key: 'endDate',  label: 'End Date',   placeholder: 'Present' },
                        ].map(({ key, label, placeholder }) => (
                          <div key={key}>
                            <label className={labelCls}>{label}</label>
                            <input type="text" placeholder={placeholder}
                              value={(exp as Record<string, string>)[key]}
                              onChange={(e) => setCv((p) => ({ ...p, experience: p.experience.map((ex) => ex.id === exp.id ? { ...ex, [key]: e.target.value } : ex) }))}
                              className={inputCls} />
                          </div>
                        ))}
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <label className={labelCls}>Description & Achievements</label>
                          <button
                            onClick={() => handleEnhance('experience', exp.description)}
                            disabled={!!enhancing}
                            className="text-[10px] font-semibold text-violet-600 hover:text-violet-700 flex items-center gap-1"
                          >
                            {enhancing === `exp-${exp.id}` ? <Loader2 className="w-2.5 h-2.5 animate-spin" /> : <Sparkles className="w-2.5 h-2.5" />}
                            AI Enhance
                          </button>
                        </div>
                        <textarea
                          placeholder="• Led team of 5 engineers...&#10;• Improved performance by 30%..."
                          rows={4}
                          value={exp.description}
                          onChange={(e) => setCv((p) => ({ ...p, experience: p.experience.map((ex) => ex.id === exp.id ? { ...ex, description: e.target.value } : ex) }))}
                          className={`${inputCls} resize-none`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeSection === 'education' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h2 className="font-display font-bold text-slate-900">Education</h2>
                    <button onClick={addEducation}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-violet-50 text-violet-700 hover:bg-violet-100 border border-violet-200 transition-colors">
                      <Plus className="w-3 h-3" /> Add
                    </button>
                  </div>
                  {cv.education.length === 0 && (
                    <div className="text-center py-8 border-2 border-dashed border-slate-200 rounded-xl">
                      <GraduationCap className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                      <button onClick={addEducation} className="text-xs text-violet-600 font-semibold hover:text-violet-700">+ Add education</button>
                    </div>
                  )}
                  {cv.education.map((edu, idx) => (
                    <div key={edu.id} className="bg-slate-50 rounded-xl p-4 border border-slate-200 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">Education {idx + 1}</span>
                        <button onClick={() => setCv((p) => ({ ...p, education: p.education.filter((e) => e.id !== edu.id) }))}
                          className="p-1 text-slate-400 hover:text-red-500 rounded transition-colors">
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                          { key: 'institution', label: 'Institution', placeholder: 'IIT Bombay' },
                          { key: 'degree',      label: 'Degree',      placeholder: 'B.Tech' },
                          { key: 'field',       label: 'Field',       placeholder: 'Computer Science' },
                          { key: 'startDate',   label: 'Start Year',  placeholder: '2016' },
                          { key: 'endDate',     label: 'End Year',    placeholder: '2020' },
                          { key: 'gpa',         label: 'GPA / %',     placeholder: '8.5 / 10' },
                        ].map(({ key, label, placeholder }) => (
                          <div key={key}>
                            <label className={labelCls}>{label}</label>
                            <input type="text" placeholder={placeholder}
                              value={(edu as Record<string, string>)[key]}
                              onChange={(e) => setCv((p) => ({ ...p, education: p.education.map((ed) => ed.id === edu.id ? { ...ed, [key]: e.target.value } : ed) }))}
                              className={inputCls} />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeSection === 'skills' && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h2 className="font-display font-bold text-slate-900">Skills</h2>
                    <button
                      onClick={() => handleEnhance('skills', cv.skills)}
                      disabled={!!enhancing}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-violet-50 text-violet-700 hover:bg-violet-100 border border-violet-200 transition-colors disabled:opacity-50"
                    >
                      {enhancing === 'skills' ? <Loader2 className="w-3 h-3 animate-spin" /> : <Sparkles className="w-3 h-3" />}
                      AI Suggest
                    </button>
                  </div>
                  <textarea
                    value={cv.skills}
                    onChange={(e) => setCv((p) => ({ ...p, skills: e.target.value }))}
                    placeholder="React, TypeScript, Node.js, PostgreSQL, AWS, Python, Docker, Kubernetes…"
                    rows={5}
                    className={`${inputCls} resize-none`}
                  />
                  <p className="text-xs text-slate-400">Separate skills with commas. Click &quot;AI Suggest&quot; to get relevant skills based on your profile.</p>
                  {cv.skills && (
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {cv.skills.split(',').map((s) => s.trim()).filter(Boolean).map((skill) => (
                        <span key={skill} className="text-xs px-2.5 py-1 rounded-lg bg-violet-50 text-violet-700 border border-violet-100 font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {activeSection === 'projects' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h2 className="font-display font-bold text-slate-900">Projects</h2>
                    <button onClick={addProject}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-violet-50 text-violet-700 hover:bg-violet-100 border border-violet-200 transition-colors">
                      <Plus className="w-3 h-3" /> Add
                    </button>
                  </div>
                  {cv.projects.length === 0 && (
                    <div className="text-center py-8 border-2 border-dashed border-slate-200 rounded-xl">
                      <Star className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                      <button onClick={addProject} className="text-xs text-violet-600 font-semibold hover:text-violet-700">+ Add project</button>
                    </div>
                  )}
                  {cv.projects.map((proj, idx) => (
                    <div key={proj.id} className="bg-slate-50 rounded-xl p-4 border border-slate-200 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">Project {idx + 1}</span>
                        <button onClick={() => setCv((p) => ({ ...p, projects: p.projects.filter((pr) => pr.id !== proj.id) }))}
                          className="p-1 text-slate-400 hover:text-red-500 rounded">
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      {[
                        { key: 'name', label: 'Project Name', placeholder: 'Payment Dashboard' },
                        { key: 'technologies', label: 'Technologies', placeholder: 'React, Node.js, PostgreSQL' },
                        { key: 'link', label: 'Link (optional)', placeholder: 'github.com/you/project' },
                      ].map(({ key, label, placeholder }) => (
                        <div key={key}>
                          <label className={labelCls}>{label}</label>
                          <input type="text" placeholder={placeholder}
                            value={(proj as Record<string, string>)[key]}
                            onChange={(e) => setCv((p) => ({ ...p, projects: p.projects.map((pr) => pr.id === proj.id ? { ...pr, [key]: e.target.value } : pr) }))}
                            className={inputCls} />
                        </div>
                      ))}
                      <div>
                        <label className={labelCls}>Description</label>
                        <textarea
                          placeholder="Built a real-time analytics dashboard handling 1M+ events/day…"
                          rows={3}
                          value={proj.description}
                          onChange={(e) => setCv((p) => ({ ...p, projects: p.projects.map((pr) => pr.id === proj.id ? { ...pr, description: e.target.value } : pr) }))}
                          className={`${inputCls} resize-none`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ) : (

          /* Preview */
          <div className="flex-1 overflow-y-auto p-6 bg-slate-100">
            <div className="max-w-[700px] mx-auto bg-white shadow-lg rounded-xl p-8 cv-preview">
              <div className="border-b-2 border-violet-600 pb-4 mb-5">
                <h1 className="text-2xl font-bold text-slate-900">{cv.personal.fullName || 'Your Name'}</h1>
                <div className="flex flex-wrap gap-3 mt-2">
                  {cv.personal.email && <span className="text-sm text-slate-500">{cv.personal.email}</span>}
                  {cv.personal.phone && <span className="text-sm text-slate-500">{cv.personal.phone}</span>}
                  {cv.personal.location && <span className="text-sm text-slate-500">{cv.personal.location}</span>}
                </div>
                <div className="flex flex-wrap gap-3 mt-1">
                  {cv.personal.linkedIn && <span className="text-sm text-violet-600">{cv.personal.linkedIn}</span>}
                  {cv.personal.github && <span className="text-sm text-violet-600">{cv.personal.github}</span>}
                </div>
              </div>

              {cv.summary && (
                <div className="mb-5">
                  <h2 className="text-xs font-bold uppercase tracking-widest text-violet-700 mb-2">Summary</h2>
                  <p className="text-sm text-slate-700 leading-relaxed">{cv.summary}</p>
                </div>
              )}

              {cv.experience.length > 0 && (
                <div className="mb-5">
                  <h2 className="text-xs font-bold uppercase tracking-widest text-violet-700 mb-3">Experience</h2>
                  <div className="space-y-4">
                    {cv.experience.map((exp) => (
                      <div key={exp.id}>
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-sm font-bold text-slate-900">{exp.title || 'Job Title'}</h3>
                            <p className="text-sm text-slate-600">{exp.company}{exp.location && ` · ${exp.location}`}</p>
                          </div>
                          <p className="text-xs text-slate-400 whitespace-nowrap">{exp.startDate} – {exp.endDate}</p>
                        </div>
                        {exp.description && (
                          <p className="text-sm text-slate-600 mt-1 whitespace-pre-line leading-relaxed">{exp.description}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {cv.education.length > 0 && (
                <div className="mb-5">
                  <h2 className="text-xs font-bold uppercase tracking-widest text-violet-700 mb-3">Education</h2>
                  {cv.education.map((edu) => (
                    <div key={edu.id} className="flex items-start justify-between">
                      <div>
                        <h3 className="text-sm font-bold text-slate-900">{edu.degree} in {edu.field}</h3>
                        <p className="text-sm text-slate-600">{edu.institution}{edu.gpa && ` · GPA: ${edu.gpa}`}</p>
                      </div>
                      <p className="text-xs text-slate-400">{edu.startDate} – {edu.endDate}</p>
                    </div>
                  ))}
                </div>
              )}

              {cv.skills && (
                <div className="mb-5">
                  <h2 className="text-xs font-bold uppercase tracking-widest text-violet-700 mb-2">Skills</h2>
                  <div className="flex flex-wrap gap-1.5">
                    {cv.skills.split(',').map((s) => s.trim()).filter(Boolean).map((skill) => (
                      <span key={skill} className="text-xs px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">{skill}</span>
                    ))}
                  </div>
                </div>
              )}

              {cv.projects.length > 0 && (
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-widest text-violet-700 mb-3">Projects</h2>
                  {cv.projects.map((proj) => (
                    <div key={proj.id} className="mb-3">
                      <div className="flex items-center gap-2">
                        <h3 className="text-sm font-bold text-slate-900">{proj.name || 'Project'}</h3>
                        {proj.link && <span className="text-xs text-violet-600">{proj.link}</span>}
                      </div>
                      {proj.technologies && <p className="text-xs text-slate-500 mt-0.5">{proj.technologies}</p>}
                      {proj.description && <p className="text-sm text-slate-600 mt-1">{proj.description}</p>}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
