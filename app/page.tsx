'use client';

import Link from 'next/link';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import ParticleCanvas from '@/components/ParticleCanvas';
import {
  ArrowRight, ChevronRight, Sparkles, Zap, TrendingUp,
  Leaf, ShoppingBag, Brain, Globe, Eye, BarChart2, Bot,
  Shield, Target, Cpu, Award, CheckCircle2, Calculator,
  MessageSquare, Send, RotateCcw, Lightbulb,
  Wand2, FileText, Loader2, Map, Star,
} from 'lucide-react';

// ─── Animation helpers ────────────────────────────────────────────────────────
const up = {
  hidden:  { opacity: 0, y: 18 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.09, ease: [0.21,0.47,0.32,0.98] },
  }),
};
const stagger  = { visible: { transition: { staggerChildren: 0.08 } } };
const viewport = { once: true, margin: '-64px' } as const;

// ─── Typewriter hook ──────────────────────────────────────────────────────────
const WORDS = ['Finance', 'Agriculture', 'Healthcare', 'Retail', 'Manufacturing', 'IT Ops'];
function useTypewriter() {
  const [wordIdx, setWordIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = WORDS[wordIdx];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 90);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length - 1)), 50);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setWordIdx(i => (i + 1) % WORDS.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, wordIdx]);

  return displayed;
}

// ─── Animated counter ─────────────────────────────────────────────────────────
function Counter({ target, suffix = '', duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = Date.now();
    const tick = () => {
      const p = Math.min((Date.now() - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

// ─── ROI Calculator ───────────────────────────────────────────────────────────
const ROI_DATA: Record<string, Record<string, { savings: string; hours: number; roi: string; weeks: string }>> = {
  'IT Ops': {
    'Startup':    { savings: '20–28%', hours: 80,  roi: '2.4×', weeks: '4–6 weeks' },
    'SME':        { savings: '28–35%', hours: 160, roi: '3.1×', weeks: '6–10 weeks' },
    'Enterprise': { savings: '35–45%', hours: 420, roi: '4.3×', weeks: '10–16 weeks' },
  },
  'Finance': {
    'Startup':    { savings: '15–25%', hours: 60,  roi: '2.8×', weeks: '4–8 weeks' },
    'SME':        { savings: '25–35%', hours: 200, roi: '3.6×', weeks: '8–12 weeks' },
    'Enterprise': { savings: '30–42%', hours: 650, roi: '5.0×', weeks: '12–20 weeks' },
  },
  'Agriculture': {
    'Startup':    { savings: '12–20%', hours: 40,  roi: '2.0×', weeks: '6–8 weeks' },
    'SME':        { savings: '20–30%', hours: 90,  roi: '2.8×', weeks: '8–12 weeks' },
    'Enterprise': { savings: '25–36%', hours: 220, roi: '3.6×', weeks: '12–18 weeks' },
  },
  'Retail': {
    'Startup':    { savings: '18–26%', hours: 70,  roi: '2.6×', weeks: '4–8 weeks' },
    'SME':        { savings: '26–38%', hours: 190, roi: '3.8×', weeks: '8–12 weeks' },
    'Enterprise': { savings: '32–44%', hours: 520, roi: '5.4×', weeks: '10–18 weeks' },
  },
};

function ROICalculator() {
  const [industry, setIndustry] = useState('IT Ops');
  const [size, setSize] = useState('SME');
  const result = ROI_DATA[industry]?.[size];

  return (
    <div className="card p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center">
          <Calculator className="h-5 w-5 text-primary-600" />
        </div>
        <div>
          <h3 className="font-display font-bold text-[#0f0f1a]">AI ROI Estimator</h3>
          <p className="text-xs text-[#9896b0]">See your projected returns in 30 seconds</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="text-xs font-semibold text-[#4b5068] uppercase tracking-wide mb-2 block">Industry</label>
          <select
            value={industry} onChange={e => setIndustry(e.target.value)}
            className="w-full px-3 py-2.5 rounded-xl border border-[rgba(109,40,217,0.15)] bg-white text-sm text-[#0f0f1a] focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100">
            {Object.keys(ROI_DATA).map(k => <option key={k}>{k}</option>)}
          </select>
        </div>
        <div>
          <label className="text-xs font-semibold text-[#4b5068] uppercase tracking-wide mb-2 block">Company Size</label>
          <select
            value={size} onChange={e => setSize(e.target.value)}
            className="w-full px-3 py-2.5 rounded-xl border border-[rgba(109,40,217,0.15)] bg-white text-sm text-[#0f0f1a] focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100">
            <option>Startup</option>
            <option>SME</option>
            <option>Enterprise</option>
          </select>
        </div>
      </div>

      {result && (
        <motion.div
          key={`${industry}-${size}`}
          initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: 'Cost Savings', value: result.savings, color: '#10b981' },
            { label: 'Hours / Week', value: `${result.hours}h`, color: '#6d28d9' },
            { label: 'Projected ROI', value: result.roi, color: '#0891b2' },
            { label: 'Go-Live', value: result.weeks, color: '#f59e0b' },
          ].map(({ label, value, color }) => (
            <div key={label} className="text-center p-3 rounded-xl" style={{ background: `${color}0d`, border: `1px solid ${color}25` }}>
              <div className="font-display text-xl font-bold" style={{ color }}>{value}</div>
              <div className="text-xs text-[#9896b0] mt-0.5">{label}</div>
            </div>
          ))}
        </motion.div>
      )}

      <p className="text-xs text-[#b0aec8] mt-4 text-center">
        Estimates based on 100+ Eigur deployments across Indian enterprises.
        <Link href="/contact" className="text-primary-600 hover:underline ml-1">Get a precise quote →</Link>
      </p>
    </div>
  );
}

// ─── AI Demo Widget ───────────────────────────────────────────────────────────
const DEMO_PROMPTS = [
  { label: 'Reduce customer churn', sector: 'Retail / SaaS' },
  { label: 'Automate invoice processing', sector: 'Finance' },
  { label: 'Predict inventory demand', sector: 'Retail / Supply Chain' },
  { label: 'Monitor crop health via satellite', sector: 'Agriculture' },
];

const DEMO_RESPONSES: Record<string, string> = {
  'Reduce customer churn':
    `I've analysed your use case. Here's an Eigur-style approach:\n\n` +
    `1. **Churn Prediction Model**: Train on 18 months of behavioural data (login frequency, feature usage, support tickets) to score every user 0-100 on churn probability.\n\n` +
    `2. **Early Warning System**: Trigger automated outreach when score > 65: personalised in-app nudge, CSM alert, and discount eligibility flag.\n\n` +
    `3. **Root Cause Clustering**: NLP on exit surveys and support logs to categorise churn reasons, so product and CS can address systemic issues.\n\n` +
    `Expected impact: **22–34% churn reduction** within 2 quarters. Implementation: 6–8 weeks.`,

  'Automate invoice processing':
    `Here's our recommended architecture for your finance team:\n\n` +
    `1. **Document Intelligence Pipeline**: OCR and layout-aware extraction handles PDFs, scans, and emails. Accuracy: 97.4% on Indian invoice formats (GST, e-invoices, multi-currency).\n\n` +
    `2. **Validation Engine**: Cross-checks against PO data, vendor master, and GST portal in real-time. Flags anomalies for human review.\n\n` +
    `3. **ERP Integration**: Pushes approved invoices directly to SAP / Tally / Zoho with full audit trail.\n\n` +
    `Expected impact: **80% reduction in manual processing time**, 99.1% accuracy. ROI positive in 3 months.`,

  'Predict inventory demand':
    `Demand forecasting at scale. Here's how we'd approach this:\n\n` +
    `1. **Multi-signal Forecasting Model**: Combines historical sales, weather, regional festivals, competitor pricing, and social sentiment for 180-day demand curves per SKU.\n\n` +
    `2. **Dynamic Reorder Triggers**: Automatically generates purchase orders when projected stock falls below safety threshold, adjusting for supplier lead times.\n\n` +
    `3. **Markdown Optimiser**: Identifies slow-moving inventory early and recommends optimal discount timing to clear stock before expiry.\n\n` +
    `Expected impact: **15–22% reduction in stockouts**, 18% lower inventory carrying costs.`,

  'Monitor crop health via satellite':
    `Here's our precision agriculture stack for this use case:\n\n` +
    `1. **Satellite + Drone Fusion**: Weekly NDVI analysis from Sentinel-2 combined with drone RGB imagery for 5cm resolution anomaly detection.\n\n` +
    `2. **Disease and Stress Classification**: Vision model identifies 40+ crop diseases, water stress, and pest damage with 94% accuracy. Alerts farmers via WhatsApp in Hindi and regional languages.\n\n` +
    `3. **Yield Prediction**: ML model forecasts yield per acre 6 weeks before harvest (+/-8% accuracy), enabling better procurement planning.\n\n` +
    `Expected impact: **12–18% yield improvement**, 25% reduction in pesticide usage.`,
};

function AIDemoWidget() {
  const [selected, setSelected] = useState<string | null>(null);
  const [typing, setTyping] = useState(false);
  const [response, setResponse] = useState('');
  const [done, setDone] = useState(false);

  const handleSelect = (label: string) => {
    setSelected(label);
    setResponse('');
    setDone(false);
    setTyping(true);

    const full = DEMO_RESPONSES[label] ?? '';
    let i = 0;
    const interval = setInterval(() => {
      i += 3;
      setResponse(full.slice(0, i));
      if (i >= full.length) {
        setResponse(full);
        setDone(true);
        setTyping(false);
        clearInterval(interval);
      }
    }, 18);
  };

  const reset = () => { setSelected(null); setResponse(''); setDone(false); setTyping(false); };

  return (
    <div className="card p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent-500/10 flex items-center justify-center">
          <MessageSquare className="h-5 w-5 text-accent-600" />
        </div>
        <div>
          <h3 className="font-display font-bold text-[#0f0f1a]">Ask Eigur AI</h3>
          <p className="text-xs text-[#9896b0]">See how we&apos;d solve a real business challenge</p>
        </div>
        {selected && (
          <button onClick={reset} className="ml-auto text-xs text-[#9896b0] hover:text-primary-600 flex items-center gap-1 transition-colors">
            <RotateCcw className="h-3.5 w-3.5" /> Reset
          </button>
        )}
      </div>

      {!selected ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {DEMO_PROMPTS.map(({ label, sector }) => (
            <button key={label} onClick={() => handleSelect(label)}
              className="text-left p-4 rounded-xl border border-[rgba(109,40,217,0.12)] bg-primary-50/50 hover:bg-primary-100/60 hover:border-primary-300 transition-all group">
              <div className="flex items-start gap-2">
                <Lightbulb className="h-4 w-4 text-primary-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-[#0f0f1a] group-hover:text-primary-700 transition-colors">{label}</p>
                  <p className="text-xs text-[#9896b0] mt-0.5">{sector}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          <div className="flex items-center gap-2 p-3 rounded-xl bg-primary-50 border border-primary-100">
            <Send className="h-3.5 w-3.5 text-primary-500 shrink-0" />
            <span className="text-sm font-medium text-primary-700">{selected}</span>
          </div>

          <div className="demo-response min-h-[180px]">
            {response.split('\n\n').map((para, i) => (
              <p key={i} className={i > 0 ? 'mt-3' : ''}>
                {para.split(/(\*\*[^*]+\*\*)/).map((chunk, j) =>
                  chunk.startsWith('**') && chunk.endsWith('**')
                    ? <strong key={j} className="text-[#0f0f1a] font-semibold">{chunk.slice(2, -2)}</strong>
                    : chunk
                )}
              </p>
            ))}
            {typing && <span className="cursor ml-0.5 h-4 align-middle">&nbsp;</span>}
          </div>

          {done && (
            <motion.div initial={{ opacity:0, y:6 }} animate={{ opacity:1, y:0 }}
              className="flex gap-3 pt-2">
              <Link href="/contact" className="btn-primary !text-xs !py-2 !px-4">
                Get this built <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <button onClick={reset} className="btn-outline !text-xs !py-2 !px-4">
                Try another
              </button>
            </motion.div>
          )}
        </div>
      )}
    </div>
  );
}

// ─── Use-Case Generator ───────────────────────────────────────────────────────
const UC_INDUSTRIES = ['E-commerce', 'Finance / BFSI', 'Agriculture', 'Manufacturing', 'Healthcare', 'Logistics', 'Education', 'Retail', 'IT / SaaS'];

function UseCaseGenerator() {
  const [industry, setIndustry] = useState('E-commerce');
  const [description, setDescription] = useState('');
  const [useCases, setUseCases] = useState<Array<{ title: string; description: string; impact: string; timeline: string }>>([]);
  const [loading, setLoading] = useState(false);
  const [generated, setGenerated] = useState(false);

  const generate = async () => {
    setLoading(true);
    setGenerated(false);
    try {
      const res = await fetch('/api/use-cases', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ industry, description }),
      });
      const data = await res.json();
      setUseCases(Array.isArray(data.useCases) ? data.useCases : []);
      setGenerated(true);
    } catch {
      setUseCases([]);
    } finally {
      setLoading(false);
    }
  };

  const reset = () => { setGenerated(false); setUseCases([]); setDescription(''); };

  return (
    <div className="space-y-5">
      {!generated ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-[#4b5068] uppercase tracking-wide mb-2 block">Your Industry</label>
              <select value={industry} onChange={e => setIndustry(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-[rgba(109,40,217,0.15)] bg-white text-sm text-[#0f0f1a] focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100">
                {UC_INDUSTRIES.map(i => <option key={i}>{i}</option>)}
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-[#4b5068] uppercase tracking-wide mb-2 block">Brief Description <span className="text-[#c0becf] normal-case font-normal">(optional)</span></label>
              <input value={description} onChange={e => setDescription(e.target.value)}
                placeholder="e.g. D2C brand selling 500+ SKUs across 12 cities…"
                className="w-full px-3 py-2.5 rounded-xl border border-[rgba(109,40,217,0.15)] bg-white text-sm text-[#0f0f1a] focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100" />
            </div>
          </div>
          <button onClick={generate} disabled={loading}
            className="btn-primary w-full sm:w-auto !py-3 !px-8 justify-center disabled:opacity-60">
            {loading ? <><Loader2 className="h-4 w-4 animate-spin" /> Generating…</> : <><Wand2 className="h-4 w-4" /> Discover AI Opportunities</>}
          </button>
          {loading && (
            <div className="flex items-center gap-3 text-sm text-[#9896b0] animate-pulse">
              <Sparkles className="h-4 w-4 text-primary-400" />
              Analysing {industry} workflows with AI…
            </div>
          )}
        </>
      ) : (
        <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-3">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-semibold text-[#0f0f1a]">Top AI opportunities for <span className="text-primary-600">{industry}</span></p>
            <button onClick={reset} className="text-xs text-[#9896b0] hover:text-primary-600 flex items-center gap-1 transition-colors">
              <RotateCcw className="h-3 w-3" /> Start over
            </button>
          </div>
          {useCases.map((uc, i) => (
            <motion.div key={i} variants={up} custom={i}
              className="p-4 rounded-xl border border-[rgba(109,40,217,0.1)] bg-white hover:border-primary-300 hover:shadow-sm transition-all">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <p className="font-semibold text-[#0f0f1a] text-sm mb-1">{uc.title}</p>
                  <p className="text-xs text-[#7878a0] leading-relaxed">{uc.description}</p>
                </div>
                <div className="flex-shrink-0 text-right">
                  <div className="text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-lg px-2 py-1 mb-1 whitespace-nowrap">{uc.timeline}</div>
                </div>
              </div>
              <div className="mt-2 flex items-center gap-1.5">
                <Star className="h-3 w-3 text-amber-400 fill-amber-400" />
                <span className="text-xs text-amber-700 font-medium">{uc.impact}</span>
              </div>
            </motion.div>
          ))}
          <div className="pt-2">
            <Link href="/contact" className="btn-primary !text-sm !py-2.5 !px-6">
              Get a custom AI roadmap <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
}

// ─── Live AI Demo ─────────────────────────────────────────────────────────────
const AI_DEMO_TABS = [
  { key: 'marketing', label: 'Marketing Copy', icon: '✍️', desc: 'Hero section for Indian SME software' },
  { key: 'email',     label: 'Sales Email',    icon: '📧', desc: 'B2B cold outreach for manufacturing' },
  { key: 'support',   label: 'Support Reply',  icon: '💬', desc: 'Empathetic customer resolution' },
  { key: 'analysis',  label: 'Data Analysis',  icon: '📊', desc: 'Retail Q3 performance insights' },
];

function LiveAIDemo() {
  const [activeTab, setActiveTab] = useState('marketing');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(false);

  const generate = async () => {
    setLoading(true);
    setOutput('');
    setDisplayed('');
    setTyping(false);
    try {
      const res = await fetch('/api/ai-demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ demoType: activeTab }),
      });
      const data = await res.json();
      const full = data.output ?? '';
      setOutput(full);
      setTyping(true);
      let i = 0;
      const interval = setInterval(() => {
        i += 4;
        setDisplayed(full.slice(0, i));
        if (i >= full.length) { setDisplayed(full); setTyping(false); clearInterval(interval); }
      }, 16);
    } catch {
      setDisplayed('Error generating demo. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const reset = () => { setOutput(''); setDisplayed(''); setTyping(false); };

  const tab = AI_DEMO_TABS.find(t => t.key === activeTab)!;

  return (
    <div className="space-y-4">
      {/* Tab selector */}
      <div className="flex flex-wrap gap-2">
        {AI_DEMO_TABS.map(t => (
          <button key={t.key} onClick={() => { setActiveTab(t.key); reset(); }}
            className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-xl border transition-all ${
              activeTab === t.key
                ? 'bg-primary-600 text-white border-primary-600 shadow-sm'
                : 'bg-white text-[#5a5878] border-[rgba(109,40,217,0.15)] hover:border-primary-300 hover:bg-primary-50'
            }`}>
            <span>{t.icon}</span> {t.label}
          </button>
        ))}
      </div>

      {/* Context */}
      <div className="flex items-center gap-2 p-3 rounded-xl bg-primary-50 border border-primary-100">
        <FileText className="h-3.5 w-3.5 text-primary-400 shrink-0" />
        <span className="text-xs text-primary-700"><span className="font-semibold">Task: </span>{tab.desc}</span>
      </div>

      {/* Output */}
      {(displayed || loading) ? (
        <div className="demo-response min-h-[160px] relative">
          {loading && !displayed ? (
            <div className="flex items-center gap-2 text-[#9896b0] text-sm animate-pulse">
              <Loader2 className="h-4 w-4 animate-spin text-primary-400" /> Generating with AI…
            </div>
          ) : (
            <>
              {displayed.split('\n\n').map((para, i) => (
                <p key={i} className={i > 0 ? 'mt-3' : ''}>
                  {para.split(/(\*\*[^*]+\*\*)/).map((chunk, j) =>
                    chunk.startsWith('**') && chunk.endsWith('**')
                      ? <strong key={j} className="text-[#0f0f1a] font-semibold">{chunk.slice(2, -2)}</strong>
                      : chunk
                  )}
                </p>
              ))}
              {typing && <span className="cursor ml-0.5 h-4 align-middle">&nbsp;</span>}
              {!typing && displayed && (
                <div className="mt-4 flex gap-3">
                  <Link href="/contact" className="btn-primary !text-xs !py-2 !px-4">
                    Build this for me <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <button onClick={reset} className="btn-outline !text-xs !py-2 !px-4">Try another</button>
                </div>
              )}
            </>
          )}
        </div>
      ) : (
        <button onClick={generate}
          className="btn-primary w-full !py-3 justify-center">
          <Sparkles className="h-4 w-4" /> Generate with AI
        </button>
      )}
    </div>
  );
}

// ─── Project Recommender ──────────────────────────────────────────────────────
const ROADMAP_DATA: Record<string, Record<string, { phase1: string[]; phase2: string[]; phase3: string[] }>> = {
  'E-commerce / Retail': {
    'Quick wins (under ₹5L)': {
      phase1: ['AI product recommendation engine', 'Automated review response bot'],
      phase2: ['Demand forecasting + inventory alerts', 'Dynamic pricing engine'],
      phase3: ['Full customer 360° AI profile', 'Predictive churn intervention'],
    },
    'Growth (₹5–25L)': {
      phase1: ['Personalisation at scale + search AI', 'Returns prediction model'],
      phase2: ['Supply chain intelligence + vendor AI', 'Conversational shopping assistant'],
      phase3: ['Computer vision for catalogue automation', 'Cross-sell prediction engine'],
    },
  },
  'Finance / BFSI': {
    'Quick wins (under ₹5L)': {
      phase1: ['Automated GST reconciliation', 'Invoice data extraction (IDP)'],
      phase2: ['Anomaly detection on transactions', 'Collections priority scoring'],
      phase3: ['ML-based credit risk model', 'Regulatory reporting automation'],
    },
    'Growth (₹5–25L)': {
      phase1: ['Real-time fraud detection', 'KYC automation + AML screening'],
      phase2: ['Personalised financial advice engine', 'Portfolio risk analytics'],
      phase3: ['AI-powered loan underwriting', 'Regulatory NLP compliance system'],
    },
  },
  'Manufacturing / IT Ops': {
    'Quick wins (under ₹5L)': {
      phase1: ['IT helpdesk AI bot (L1 automation)', 'Automated incident classification'],
      phase2: ['Predictive maintenance alerts', 'Quality defect detection (vision)'],
      phase3: ['Full AIOps platform integration', 'Energy consumption optimiser'],
    },
    'Growth (₹5–25L)': {
      phase1: ['End-to-end RPA + AI workflow', 'Vendor invoice automation'],
      phase2: ['Production scheduling AI', 'Supply chain disruption predictor'],
      phase3: ['Digital twin + simulation AI', 'Smart factory analytics platform'],
    },
  },
};

function ProjectRecommender() {
  const [sector, setSector] = useState('E-commerce / Retail');
  const [budget, setBudget] = useState('Quick wins (under ₹5L)');
  const roadmap = ROADMAP_DATA[sector]?.[budget];

  const phases = roadmap ? [
    { label: 'Phase 1', sub: 'Weeks 1–6', color: '#10b981', bg: '#f0fdf8', border: '#d1fae5', items: roadmap.phase1 },
    { label: 'Phase 2', sub: 'Weeks 7–16', color: '#6d28d9', bg: '#f5f3ff', border: '#ddd6fe', items: roadmap.phase2 },
    { label: 'Phase 3', sub: 'Weeks 17–24', color: '#0891b2', bg: '#ecfeff', border: '#cffafe', items: roadmap.phase3 },
  ] : [];

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-semibold text-[#4b5068] uppercase tracking-wide mb-2 block">Sector</label>
          <select value={sector} onChange={e => setSector(e.target.value)}
            className="w-full px-3 py-2.5 rounded-xl border border-[rgba(109,40,217,0.15)] bg-white text-sm text-[#0f0f1a] focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100">
            {Object.keys(ROADMAP_DATA).map(k => <option key={k}>{k}</option>)}
          </select>
        </div>
        <div>
          <label className="text-xs font-semibold text-[#4b5068] uppercase tracking-wide mb-2 block">Budget Range</label>
          <select value={budget} onChange={e => setBudget(e.target.value)}
            className="w-full px-3 py-2.5 rounded-xl border border-[rgba(109,40,217,0.15)] bg-white text-sm text-[#0f0f1a] focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100">
            <option>Quick wins (under ₹5L)</option>
            <option>Growth (₹5–25L)</option>
          </select>
        </div>
      </div>

      {phases.length > 0 && (
        <motion.div key={`${sector}-${budget}`} initial="hidden" animate="visible" variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {phases.map((p, i) => (
            <motion.div key={p.label} variants={up} custom={i} className="rounded-xl border p-4"
              style={{ background: p.bg, borderColor: p.border }}>
              <div className="flex items-center justify-between mb-3">
                <span className="font-display font-bold text-sm" style={{ color: p.color }}>{p.label}</span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full" style={{ background: `${p.color}15`, color: p.color }}>{p.sub}</span>
              </div>
              <ul className="space-y-2">
                {p.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-xs text-[#4b5068]">
                    <CheckCircle2 className="h-3.5 w-3.5 mt-0.5 shrink-0" style={{ color: p.color }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      )}

      <div className="flex items-center gap-3 p-3 rounded-xl bg-amber-50 border border-amber-100">
        <Map className="h-4 w-4 text-amber-500 shrink-0" />
        <p className="text-xs text-amber-700">This is a starting framework. <Link href="/contact" className="font-semibold underline">Book a call</Link> for a tailored AI roadmap with exact timelines and costs.</p>
      </div>
    </div>
  );
}

// ─── Playground Tab Wrapper ───────────────────────────────────────────────────
const PLAYGROUND_TABS = [
  { key: 'usecases', label: 'Use-Case Generator', icon: Wand2, desc: 'Discover AI opportunities for your industry' },
  { key: 'demo',     label: 'Live AI Demo',        icon: Sparkles, desc: 'Watch AI write real business content' },
  { key: 'roadmap',  label: 'Project Roadmap',     icon: Map, desc: 'Get a phased AI implementation plan' },
];

function PlaygroundTabs() {
  const [active, setActive] = useState('usecases');
  const tab = PLAYGROUND_TABS.find(t => t.key === active)!;

  return (
    <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={stagger}>
      {/* Tab buttons */}
      <motion.div variants={up} className="flex flex-wrap justify-center gap-2 mb-8">
        {PLAYGROUND_TABS.map(t => (
          <button key={t.key} onClick={() => setActive(t.key)}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border transition-all ${
              active === t.key
                ? 'bg-primary-600 text-white border-primary-600 shadow-md shadow-primary-500/20'
                : 'bg-white text-[#5a5878] border-[rgba(109,40,217,0.15)] hover:border-primary-300 hover:bg-primary-50'
            }`}>
            <t.icon className="h-4 w-4" />
            {t.label}
          </button>
        ))}
      </motion.div>

      {/* Tab content */}
      <motion.div variants={up} key={active}
        className="max-w-4xl mx-auto bg-white rounded-2xl border border-[rgba(109,40,217,0.08)] shadow-lg shadow-violet-900/5 p-6 sm:p-8">
        <div className="flex items-start gap-3 mb-6 pb-5 border-b border-black/[0.05]">
          <div className="w-10 h-10 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center flex-shrink-0">
            <tab.icon className="h-5 w-5 text-primary-600" />
          </div>
          <div>
            <h3 className="font-display font-bold text-[#0f0f1a]">{tab.label}</h3>
            <p className="text-xs text-[#9896b0] mt-0.5">{tab.desc}</p>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={active}
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }}>
            {active === 'usecases' && <UseCaseGenerator />}
            {active === 'demo'     && <LiveAIDemo />}
            {active === 'roadmap'  && <ProjectRecommender />}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

// ─── Page data ────────────────────────────────────────────────────────────────
const stats = [
  { target: 50,  suffix: '+', label: 'Clients Served',      color: '#6d28d9' },
  { target: 100, suffix: '+', label: 'Projects Delivered',  color: '#0891b2' },
  { target: 98,  suffix: '%', label: 'Client Satisfaction', color: '#10b981' },
  { target: 25,  suffix: '+', label: 'Cities Reached',      color: '#f59e0b' },
];

const services = [
  { Icon: Zap,         accent: '#f59e0b', bg: '#fef9ee', title: 'IT Automation',      desc: 'Intelligent workflow automation from IT ticketing to full infrastructure orchestration.' },
  { Icon: TrendingUp,  accent: '#10b981', bg: '#f0fdf8', title: 'Finance AI',          desc: 'Risk assessment, fraud detection, and real-time financial forecasting at scale.' },
  { Icon: Leaf,        accent: '#22c55e', bg: '#f0fdf4', title: 'Agriculture Tech',    desc: 'Precision farming via computer vision: crop health monitoring, yield prediction, and resource optimisation.' },
  { Icon: ShoppingBag, accent: '#ec4899', bg: '#fdf2f8', title: 'Retail Intelligence', desc: 'Hyper-personalisation at scale. AI that learns your customers and drives revenue.' },
];

const technologies = [
  { Icon: Sparkles,  color: '#7c3aed', title: 'Generative AI',           desc: 'LLM applications, autonomous agents, and content systems for enterprise workflows.' },
  { Icon: Brain,     color: '#3b82f6', title: 'Machine Learning',         desc: 'Predictive models that continuously learn and improve from your production data.' },
  { Icon: Globe,     color: '#10b981', title: 'Natural Language Processing', desc: 'Multilingual AI fine-tuned for Indian languages, dialects, and business context.' },
  { Icon: Eye,       color: '#f97316', title: 'Computer Vision',          desc: 'Visual inspection, anomaly detection, and recognition for physical operations.' },
  { Icon: BarChart2, color: '#ec4899', title: 'Predictive Analytics',     desc: 'Forecast demand, identify risk, and surface opportunity before it appears.' },
  { Icon: Bot,       color: '#0891b2', title: 'Intelligent Automation',   desc: 'RPA enhanced with AI reasoning: from simple rule-based tasks to complex decision workflows.' },
];

const process = [
  { n:'01', title:'Discovery',    desc:'Deep requirements analysis and business process mapping.' },
  { n:'02', title:'Architecture', desc:'Solution design with scalability and ROI at the centre.' },
  { n:'03', title:'Development',  desc:'Iterative build cycles with regular client checkpoints.' },
  { n:'04', title:'Validation',   desc:'Rigorous testing against real-world edge cases.' },
  { n:'05', title:'Deployment',   desc:'Smooth rollout with training and knowledge transfer.' },
  { n:'06', title:'Optimisation', desc:'Continuous improvement as models learn from production.' },
];

const testimonials = [
  { quote:"Eigur's AI solution reduced our operational costs by 35% while improving customer satisfaction scores. Their team's expertise is unmatched.", name:'Rajesh Gupta', title:'CTO, TechMahindra Solutions' },
  { quote:"Their retail intelligence platform led to a 42% increase in conversion rates. The ROI was evident within the first quarter of deployment.", name:'Priya Sharma', title:'Head of Digital Strategy, Reliance Retail' },
  { quote:"We needed a partner who understood our constraints. Eigur delivered a scalable AI solution. We have seen 3x revenue growth since.", name:'Amit Patel', title:'CEO, AgriTech Innovations' },
];

const whyReasons = [
  { Icon: Target, title: 'India-First AI',    desc: 'Models trained on Indian data, optimised for local languages and market dynamics.' },
  { Icon: Shield, title: 'Ethical by Design', desc: 'Proprietary bias-mitigation framework ensures responsible AI at every layer.' },
  { Icon: Cpu,    title: 'Edge-Ready',         desc: 'Deploy on-premise or at the edge with full data sovereignty and no cloud lock-in.' },
  { Icon: Award,  title: 'Research-Backed',    desc: '50+ published papers, 12 patents. Peer-reviewed, battle-tested AI.' },
];

const partners = [
  'Microsoft AI Partner','Google Cloud AI','AWS Machine Learning',
  'NASSCOM Premium','ISO 27001','Startup India','Fortune 500',
];

const AIFeaturesBenefits = [
  { icon:'🔮', title:'Predict Before It Happens', desc:'Our forecasting models catch churn, stockouts, and equipment failures 30–60 days before they impact your business.' },
  { icon:'🗣️', title:'Speak Every Language', desc:'AI systems fluent in Hindi, Tamil, Bengali, Telugu, and 15+ regional languages with zero translation lag.' },
  { icon:'🔒', title:'On-Premise by Default', desc:'Deploy entirely within your infrastructure. Your data never leaves your servers.' },
  { icon:'⚡', title:'Production in Weeks', desc:'We deploy working AI in 4 to 8 weeks, not months. Agile methodology, no shelfware.' },
  { icon:'📊', title:'Measurable ROI Always', desc:'Every engagement includes a 90-day ROI review. We don\'t call it done until numbers move.' },
  { icon:'🤝', title:'Co-Innovation Partner', desc:'We embed with your team and deliver knowledge transfer, not just software. Every project includes team upskilling.' },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function HomePage() {
  const typeword = useTypewriter();

  return (
    <div className="min-h-screen bg-[#fafaf9]">

      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden dot-grid pt-16">
        {/* Particle canvas */}
        <div className="absolute inset-0 pointer-events-none">
          <ParticleCanvas className="w-full h-full opacity-60" />
        </div>

        {/* Soft color orbs */}
        <div className="orb-a absolute top-[20%] left-[12%] w-[420px] h-[420px] rounded-full bg-primary-200/30 blur-[120px] pointer-events-none" />
        <div className="orb-b absolute bottom-[15%] right-[10%] w-[360px] h-[360px] rounded-full bg-accent-300/25 blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <motion.div initial="hidden" animate="visible" variants={stagger}>

            <motion.div variants={up} custom={0} className="flex justify-center mb-7">
              <span className="pill"><Sparkles className="h-3 w-3" />India&apos;s Premier AI Consultancy</span>
            </motion.div>

            <motion.h1 variants={up} custom={1}
              className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-[80px] font-bold leading-[1.05] tracking-tight mb-7">
              <span className="gradient-text-dark">We Engineer AI</span>
              <br />
              <span className="text-[#0f0f1a]">for India&apos;s&nbsp;</span>
              <span className="gradient-text inline-flex items-center">
                {typeword || '\u00A0'}
                <span className="cursor ml-1 inline-block w-[3px] h-[0.85em] bg-primary-600 rounded-sm align-middle" />
              </span>
            </motion.h1>

            <motion.p variants={up} custom={2}
              className="max-w-2xl mx-auto text-lg sm:text-xl text-[#4b5068] leading-relaxed mb-11">
              From proof-of-concept to production-scale deployment, we build the AI
              infrastructure that powers India&apos;s most ambitious businesses.
            </motion.p>

            <motion.div variants={up} custom={3} className="flex flex-wrap justify-center gap-4 mb-20">
              <Link href="/contact" className="btn-primary !px-8 !py-3.5 !text-base">
                Start a Project <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/case-studies" className="btn-outline !px-8 !py-3.5 !text-base">
                View Case Studies <ChevronRight className="h-4 w-4" />
              </Link>
            </motion.div>

            {/* Stat counters */}
            <motion.div initial="hidden" animate="visible" variants={stagger}
              className="grid grid-cols-2 lg:grid-cols-4 max-w-3xl mx-auto">
              {stats.map((s, i) => (
                <motion.div key={s.label} variants={up} custom={i + 4}
                  className={`flex flex-col items-center py-5 ${i < 3 ? 'lg:border-r border-black/[0.06]' : ''} ${i < 2 ? 'border-b lg:border-b-0 border-black/[0.06]' : ''}`}>
                  <span className="font-display text-3xl sm:text-4xl font-bold" style={{ color: s.color }}>
                    <Counter target={s.target} suffix={s.suffix} />
                  </span>
                  <span className="mt-1.5 text-xs text-[#9896b0] tracking-wide">{s.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:2.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[10px] tracking-[0.18em] uppercase text-[#c0becf]">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-[#c0becf] to-transparent" />
        </motion.div>
      </section>

      {/* ══ PARTNERS MARQUEE ══════════════════════════════════════════════════ */}
      <div className="border-y border-black/[0.05] bg-white py-4 overflow-hidden">
        <div className="marquee-track">
          {[...partners, ...partners].map((p, i) => (
            <span key={i} className="mx-10 text-xs font-bold tracking-widest uppercase text-[#c0becf] whitespace-nowrap">
              {p}
            </span>
          ))}
        </div>
      </div>

      {/* ══ SERVICES ══════════════════════════════════════════════════════════ */}
      <section className="py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={stagger} className="text-center mb-14">
            <motion.div variants={up} className="flex justify-center mb-5">
              <span className="pill">What We Build</span>
            </motion.div>
            <motion.h2 variants={up} className="font-display text-4xl sm:text-5xl font-bold gradient-text-dark mb-4">
              AI Solutions by Industry
            </motion.h2>
            <motion.p variants={up} className="max-w-lg mx-auto text-[#7878a0] text-lg">
              Deep vertical expertise across the sectors driving India&apos;s economy.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map(svc => (
              <motion.div key={svc.title} variants={up} className="card p-6 flex flex-col group">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 shrink-0"
                  style={{ background: svc.bg }}>
                  <svc.Icon className="h-6 w-6" style={{ color: svc.accent }} />
                </div>
                <h3 className="font-display font-bold text-[#0f0f1a] text-lg mb-2">{svc.title}</h3>
                <p className="text-sm text-[#7878a0] leading-relaxed flex-1">{svc.desc}</p>
                <div className="mt-5 flex items-center gap-1.5 text-xs font-bold text-primary-600 group-hover:text-primary-700 transition-colors">
                  Learn more <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ INTERACTIVE DEMO + ROI ════════════════════════════════════════════ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 section-tint border-t border-black/[0.05]">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={stagger} className="text-center mb-12">
            <motion.div variants={up} className="flex justify-center mb-5">
              <span className="pill">Try It Live</span>
            </motion.div>
            <motion.h2 variants={up} className="font-display text-4xl sm:text-5xl font-bold gradient-text-dark mb-4">
              Experience AI, Right Now
            </motion.h2>
            <motion.p variants={up} className="max-w-lg mx-auto text-[#7878a0] text-lg">
              No sign-up. No sales call. Just AI answering your real business challenges.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={stagger}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.div variants={up}><AIDemoWidget /></motion.div>
            <motion.div variants={up}><ROICalculator /></motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══ AI TOOLS PLAYGROUND ═══════════════════════════════════════════════ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-black/[0.05]">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={stagger} className="text-center mb-12">
            <motion.div variants={up} className="flex justify-center mb-5">
              <span className="pill"><Wand2 className="h-3 w-3" />AI Tools Playground</span>
            </motion.div>
            <motion.h2 variants={up} className="font-display text-4xl sm:text-5xl font-bold gradient-text-dark mb-4">
              Your AI strategy starts here
            </motion.h2>
            <motion.p variants={up} className="max-w-xl mx-auto text-[#7878a0] text-lg">
              Explore real AI capabilities for your business. No login, no sales call required.
            </motion.p>
          </motion.div>

          {/* Tab nav */}
          <PlaygroundTabs />
        </div>
      </section>

      {/* ══ WHY EIGUR ═════════════════════════════════════════════════════════ */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 border-t border-black/[0.05]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={stagger}>
              <motion.div variants={up} className="mb-5"><span className="pill">Why Eigur</span></motion.div>
              <motion.h2 variants={up} className="font-display text-4xl sm:text-5xl font-bold leading-tight mb-6 gradient-text-dark">
                Built different,<br />for India.
              </motion.h2>
              <motion.p variants={up} className="text-[#7878a0] text-lg leading-relaxed mb-8">
                We&apos;re not a generic AI shop copy-pasting Western playbooks onto Indian problems.
                Every solution is informed by deep local expertise, production data, and a research team
                that publishes in top-tier AI conferences.
              </motion.p>
              <motion.div variants={up}>
                <Link href="/about" className="btn-outline !text-sm">Meet the team <ArrowRight className="h-4 w-4" /></Link>
              </motion.div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={stagger}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyReasons.map(r => (
                <motion.div key={r.title} variants={up} className="card p-5">
                  <div className="w-9 h-9 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center mb-4">
                    <r.Icon className="h-4 w-4 text-primary-600" />
                  </div>
                  <h4 className="font-display font-bold text-[#0f0f1a] mb-1.5 text-sm">{r.title}</h4>
                  <p className="text-xs text-[#7878a0] leading-relaxed">{r.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ AI FEATURES GRID ══════════════════════════════════════════════════ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 section-tint border-t border-black/[0.05]">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={stagger} className="text-center mb-14">
            <motion.div variants={up} className="flex justify-center mb-5">
              <span className="pill">What Sets Us Apart</span>
            </motion.div>
            <motion.h2 variants={up} className="font-display text-4xl sm:text-5xl font-bold gradient-text-dark">
              AI that actually works
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {AIFeaturesBenefits.map((f, i) => (
              <motion.div key={f.title} variants={up} custom={i} className="card p-6">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="font-display font-bold text-[#0f0f1a] mb-2">{f.title}</h3>
                <p className="text-sm text-[#7878a0] leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ TECHNOLOGIES ══════════════════════════════════════════════════════ */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 border-t border-black/[0.05]">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={stagger} className="text-center mb-14">
            <motion.div variants={up} className="flex justify-center mb-5"><span className="pill">Tech Stack</span></motion.div>
            <motion.h2 variants={up} className="font-display text-4xl sm:text-5xl font-bold gradient-text-dark mb-4">AI Capabilities</motion.h2>
            <motion.p variants={up} className="max-w-lg mx-auto text-[#7878a0] text-lg">
              The full spectrum of modern AI, engineered for production and not just demos.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {technologies.map(tech => (
              <motion.div key={tech.title} variants={up} className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl shrink-0 flex items-center justify-center"
                    style={{ background: `${tech.color}14` }}>
                    <tech.Icon className="h-5 w-5" style={{ color: tech.color }} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-[#0f0f1a] mb-1.5">{tech.title}</h3>
                    <p className="text-sm text-[#7878a0] leading-relaxed">{tech.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ PROCESS ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 section-tint border-t border-black/[0.05]">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={stagger} className="text-center mb-14">
            <motion.div variants={up} className="flex justify-center mb-5"><span className="pill">How We Work</span></motion.div>
            <motion.h2 variants={up} className="font-display text-4xl sm:text-5xl font-bold gradient-text-dark">Our Implementation Process</motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={stagger}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {process.map((item, i) => (
              <motion.div key={item.n} variants={up} custom={i} className="card p-5 text-center">
                <div className="font-display text-3xl font-bold gradient-text mb-3">{item.n}</div>
                <h4 className="font-display font-bold text-[#0f0f1a] text-sm mb-2">{item.title}</h4>
                <p className="text-xs text-[#7878a0] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══════════════════════════════════════════════════════ */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 border-t border-black/[0.05]">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={stagger} className="text-center mb-14">
            <motion.div variants={up} className="flex justify-center mb-5"><span className="pill">Client Stories</span></motion.div>
            <motion.h2 variants={up} className="font-display text-4xl sm:text-5xl font-bold gradient-text-dark">What Our Clients Say</motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(t => (
              <motion.div key={t.name} variants={up} className="card p-7 flex flex-col">
                <div className="font-display text-6xl leading-none text-primary-200 mb-4 select-none"
                  style={{ fontFamily:'Georgia,serif' }}>&ldquo;</div>
                <p className="text-[#4b5068] leading-relaxed flex-1 italic text-sm">{t.quote}</p>
                <div className="mt-6 pt-5 border-t border-black/[0.06] flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-bold text-sm font-display shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-[#0f0f1a] text-sm">{t.name}</p>
                    <p className="text-xs text-[#9896b0] mt-0.5">{t.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ CTA ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 section-tint border-t border-black/[0.05]">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={stagger}
            className="relative overflow-hidden rounded-3xl p-12 sm:p-16 text-center"
            style={{ background: 'linear-gradient(135deg, #4c1d95 0%, #1e3a8a 50%, #0c4a6e 100%)' }}>

            {/* Decorative circles */}
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/5 pointer-events-none" />
            <div className="absolute -bottom-20 -left-12 w-72 h-72 rounded-full bg-white/5 pointer-events-none" />

            <div className="relative z-10">
              <motion.div variants={up} className="flex justify-center mb-6">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-white/15 text-white/80 border border-white/20">
                  <Sparkles className="h-3 w-3" /> Let&apos;s Build Together
                </span>
              </motion.div>
              <motion.h2 variants={up} className="font-display text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
                Ready to transform your<br />business with AI?
              </motion.h2>
              <motion.p variants={up} className="max-w-lg mx-auto text-white/70 text-lg mb-10">
                Join 50+ Indian companies already leveraging Eigur&apos;s AI systems to grow faster,
                operate smarter, and scale with confidence.
              </motion.p>
              <motion.div variants={up} className="flex flex-wrap justify-center gap-4">
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-white text-primary-700 font-bold text-base hover:bg-white/95 transition-colors shadow-lg">
                  Schedule a Consultation <ArrowRight className="h-5 w-5" />
                </Link>
                <Link href="/services"
                  className="inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-white/10 text-white font-bold text-base border border-white/20 hover:bg-white/15 transition-colors">
                  Explore Services
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
