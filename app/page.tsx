'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight, ChevronRight, Sparkles,
  Zap, TrendingUp, Leaf, ShoppingBag,
  Brain, Globe, Eye, BarChart2, Bot,
  Shield, Target, Cpu, Award,
} from 'lucide-react';

// ─── Animation helpers ────────────────────────────────────────────────────────
const fadeUp = {
  hidden:  { opacity: 0, y: 22 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: i * 0.09, ease: [0.21, 0.47, 0.32, 0.98] },
  }),
};
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };
const viewOpts = { once: true, margin: '-72px' } as const;

// ─── Data ─────────────────────────────────────────────────────────────────────
const stats = [
  { value: '50+',  label: 'Clients Served' },
  { value: '100+', label: 'Projects Delivered' },
  { value: '98%',  label: 'Client Satisfaction' },
  { value: '25+',  label: 'Cities Reached' },
];

const services = [
  {
    Icon: Zap,         accent: '#f59e0b', bg: 'rgba(245,158,11,0.12)',
    title: 'IT Automation',
    desc:  'Intelligent workflow automation — from IT ticketing to full infrastructure orchestration.',
  },
  {
    Icon: TrendingUp,  accent: '#10b981', bg: 'rgba(16,185,129,0.12)',
    title: 'Finance AI',
    desc:  'AI-driven risk assessment, fraud detection, and real-time financial forecasting at scale.',
  },
  {
    Icon: Leaf,        accent: '#22c55e', bg: 'rgba(34,197,94,0.12)',
    title: 'Agriculture Tech',
    desc:  'Precision farming powered by computer vision — crop health, yield prediction, resource optimization.',
  },
  {
    Icon: ShoppingBag, accent: '#ec4899', bg: 'rgba(236,72,153,0.12)',
    title: 'Retail Intelligence',
    desc:  'Hyper-personalisation at scale. AI that learns your customers and drives measurable revenue.',
  },
];

const technologies = [
  { Icon: Sparkles,  color: '#a78bfa', title: 'Generative AI',          desc: 'LLM applications, autonomous agents, and content systems built for enterprise workflows.' },
  { Icon: Brain,     color: '#60a5fa', title: 'Machine Learning',        desc: 'Predictive models that continuously learn and improve from your production data.' },
  { Icon: Globe,     color: '#34d399', title: 'Natural Language Processing', desc: 'Multilingual AI fine-tuned for Indian languages, dialects, and business context.' },
  { Icon: Eye,       color: '#fb923c', title: 'Computer Vision',         desc: 'Visual inspection, anomaly detection, and recognition for physical operations.' },
  { Icon: BarChart2, color: '#f472b6', title: 'Predictive Analytics',    desc: 'Forecast demand, identify risk, and surface opportunity before it appears.' },
  { Icon: Bot,       color: '#38bdf8', title: 'Intelligent Automation',  desc: 'RPA enhanced with AI reasoning — from rule-based tasks to complex decision workflows.' },
];

const process = [
  { n: '01', title: 'Discovery',     desc: 'Deep requirements analysis and business process mapping.' },
  { n: '02', title: 'Architecture',  desc: 'Solution design with scalability and ROI at the centre.' },
  { n: '03', title: 'Development',   desc: 'Iterative build cycles with regular client checkpoints.' },
  { n: '04', title: 'Validation',    desc: 'Rigorous testing against real-world conditions and edge cases.' },
  { n: '05', title: 'Deployment',    desc: 'Smooth rollout with training, monitoring, and knowledge transfer.' },
  { n: '06', title: 'Optimisation',  desc: 'Continuous improvement as models learn from production data.' },
];

const testimonials = [
  {
    quote: "Eigur's AI solution reduced our operational costs by 35% while improving customer satisfaction scores. Their team's expertise and commitment is unmatched.",
    name: 'Rajesh Gupta',    title: 'CTO, TechMahindra Solutions',
  },
  {
    quote: "Their retail intelligence platform led to a 42% increase in conversion rates. The ROI was evident within the first quarter of deployment.",
    name: 'Priya Sharma',    title: 'Head of Digital Strategy, Reliance Retail',
  },
  {
    quote: "As a startup, we needed a partner who understood our constraints. Eigur delivered a scalable AI solution — we've seen 3× revenue growth since.",
    name: 'Amit Patel',      title: 'CEO, AgriTech Innovations',
  },
];

const partners = [
  'Microsoft AI Partner', 'Google Cloud AI', 'AWS Machine Learning',
  'NASSCOM Premium', 'ISO 27001', 'Startup India', 'Fortune 500',
];

const whyReasons = [
  { Icon: Target,  title: 'India-First AI',     desc: 'Models trained on Indian data, optimised for local languages and market dynamics.' },
  { Icon: Shield,  title: 'Ethical by Design',  desc: 'Proprietary bias-mitigation framework — responsible AI at every layer.' },
  { Icon: Cpu,     title: 'Edge-Ready',          desc: 'Deploy on-premise or at the edge — no cloud dependency, full data sovereignty.' },
  { Icon: Award,   title: 'Research-Backed',     desc: '50+ published papers, 12 patents. Our innovations are peer-reviewed and battle-tested.' },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#05050a]">

      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
      <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden dot-grid pt-16">

        {/* Ambient orbs */}
        <div className="orb-1 absolute top-[22%] left-[18%]  w-[520px] h-[520px] rounded-full bg-primary-700/20  blur-[130px] pointer-events-none" />
        <div className="orb-2 absolute bottom-[18%] right-[14%] w-[420px] h-[420px] rounded-full bg-accent-500/14  blur-[110px] pointer-events-none" />
        <div className="orb-3 absolute top-[55%] left-[50%]  w-[280px] h-[280px] rounded-full bg-primary-600/10  blur-[80px]  -translate-x-1/2 pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>

            {/* Badge */}
            <motion.div variants={fadeUp} custom={0} className="flex justify-center mb-7">
              <span className="section-label">
                <Sparkles className="h-3.5 w-3.5" />
                India&apos;s Premier AI Consultancy
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp} custom={1}
              className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-[82px] font-bold leading-[1.04] tracking-tight mb-7"
            >
              <span className="gradient-text-white">We Engineer AI</span>
              <br />
              <span className="gradient-text">For India&apos;s Future</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={fadeUp} custom={2}
              className="max-w-2xl mx-auto text-lg sm:text-xl text-[#8888a8] leading-relaxed mb-11"
            >
              From proof-of-concept to production-scale deployment — we build the AI
              infrastructure that powers India&apos;s most ambitious businesses.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} custom={3} className="flex flex-wrap justify-center gap-4 mb-20">
              <Link href="/contact" className="btn-primary !px-8 !py-3.5">
                Start a Project <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/case-studies" className="btn-ghost !px-8 !py-3.5">
                View Case Studies <ChevronRight className="h-4 w-4" />
              </Link>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial="hidden" animate="visible" variants={stagger}
              className="grid grid-cols-2 lg:grid-cols-4 max-w-3xl mx-auto"
            >
              {stats.map((s, i) => (
                <motion.div
                  key={s.label} variants={fadeUp} custom={i + 4}
                  className={`flex flex-col items-center py-4 ${i < 3 ? 'lg:border-r border-white/[0.06]' : ''} ${i < 2 ? 'border-b lg:border-b-0 border-white/[0.06]' : ''}`}
                >
                  <span className="font-display text-3xl sm:text-4xl font-bold stat-number">{s.value}</span>
                  <span className="mt-1.5 text-xs text-[#686890] tracking-wide">{s.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.18em] uppercase text-[#353550]">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-[#353550] to-transparent" />
        </motion.div>
      </section>

      {/* ══ PARTNER MARQUEE ═══════════════════════════════════════════════════ */}
      <div className="border-y border-white/[0.04] bg-[#0d0d15]/50 py-4 overflow-hidden">
        <div className="marquee-track">
          {[...partners, ...partners].map((p, i) => (
            <span key={i} className="mx-10 text-xs font-semibold tracking-widest uppercase text-[#454565] whitespace-nowrap">
              {p}
            </span>
          ))}
        </div>
      </div>

      {/* ══ SERVICES ══════════════════════════════════════════════════════════ */}
      <section className="py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          <motion.div initial="hidden" whileInView="visible" viewport={viewOpts} variants={stagger} className="text-center mb-14">
            <motion.div variants={fadeUp} className="flex justify-center mb-5">
              <span className="section-label">What We Build</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-display text-4xl sm:text-5xl font-bold gradient-text-white mb-4">
              AI Solutions by Industry
            </motion.h2>
            <motion.p variants={fadeUp} className="max-w-lg mx-auto text-[#7878a0] text-lg">
              Deep vertical expertise across the sectors driving India&apos;s economy.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={viewOpts} variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {services.map((svc) => (
              <motion.div key={svc.title} variants={fadeUp} className="glass p-6 group flex flex-col">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 shrink-0"
                  style={{ background: svc.bg }}>
                  <svc.Icon className="h-5 w-5" style={{ color: svc.accent }} />
                </div>
                <h3 className="font-display font-semibold text-white text-lg mb-2">{svc.title}</h3>
                <p className="text-sm text-[#7878a0] leading-relaxed flex-1">{svc.desc}</p>
                <div className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-primary-400 group-hover:text-primary-300 transition-colors">
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ WHY EIGUR ═════════════════════════════════════════════════════════ */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left */}
            <motion.div initial="hidden" whileInView="visible" viewport={viewOpts} variants={stagger}>
              <motion.div variants={fadeUp} className="mb-5">
                <span className="section-label">Why Eigur</span>
              </motion.div>
              <motion.h2 variants={fadeUp}
                className="font-display text-4xl sm:text-5xl font-bold leading-tight mb-6"
              >
                <span className="gradient-text-white">Built different,</span>
                <br />
                <span className="gradient-text">for India.</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-[#7878a0] text-lg leading-relaxed mb-8">
                We&apos;re not a generic AI shop copy-pasting Western playbooks onto Indian problems.
                Every solution is informed by deep local expertise, real production data, and a
                research team that publishes in top-tier AI conferences.
              </motion.p>
              <motion.div variants={fadeUp}>
                <Link href="/about" className="btn-ghost !text-sm">
                  Meet the team <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Right */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={viewOpts} variants={stagger}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {whyReasons.map((r) => (
                <motion.div key={r.title} variants={fadeUp} className="glass p-5">
                  <div className="w-9 h-9 rounded-lg bg-primary-600/15 flex items-center justify-center mb-4">
                    <r.Icon className="h-4.5 w-4.5 text-primary-400" style={{ width: 18, height: 18 }} />
                  </div>
                  <h4 className="font-display font-semibold text-white mb-1.5 text-sm">{r.title}</h4>
                  <p className="text-xs text-[#7878a0] leading-relaxed">{r.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ PROCESS ═══════════════════════════════════════════════════════════ */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 border-t border-white/[0.04] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-900/[0.04] to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto relative">

          <motion.div initial="hidden" whileInView="visible" viewport={viewOpts} variants={stagger} className="text-center mb-14">
            <motion.div variants={fadeUp} className="flex justify-center mb-5">
              <span className="section-label">How We Work</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-display text-4xl sm:text-5xl font-bold gradient-text-white">
              Our Implementation Process
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={viewOpts} variants={stagger}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          >
            {process.map((item, i) => (
              <motion.div key={item.n} variants={fadeUp} custom={i} className="glass p-5 text-center">
                <div className="font-display text-3xl font-bold gradient-text mb-3">{item.n}</div>
                <h4 className="font-display font-semibold text-white text-sm mb-2">{item.title}</h4>
                <p className="text-xs text-[#686890] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ TECHNOLOGIES ══════════════════════════════════════════════════════ */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto">

          <motion.div initial="hidden" whileInView="visible" viewport={viewOpts} variants={stagger} className="text-center mb-14">
            <motion.div variants={fadeUp} className="flex justify-center mb-5">
              <span className="section-label">Tech Stack</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-display text-4xl sm:text-5xl font-bold gradient-text-white mb-4">
              AI Capabilities
            </motion.h2>
            <motion.p variants={fadeUp} className="max-w-lg mx-auto text-[#7878a0] text-lg">
              The full spectrum of modern AI — engineered for production, not just demos.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={viewOpts} variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {technologies.map((tech) => (
              <motion.div key={tech.title} variants={fadeUp} className="glass p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${tech.color}20` }}>
                    <tech.Icon className="h-5 w-5" style={{ color: tech.color }} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-white mb-1.5">{tech.title}</h3>
                    <p className="text-sm text-[#7878a0] leading-relaxed">{tech.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══════════════════════════════════════════════════════ */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto">

          <motion.div initial="hidden" whileInView="visible" viewport={viewOpts} variants={stagger} className="text-center mb-14">
            <motion.div variants={fadeUp} className="flex justify-center mb-5">
              <span className="section-label">Client Stories</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-display text-4xl sm:text-5xl font-bold gradient-text-white">
              What Our Clients Say
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={viewOpts} variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {testimonials.map((t) => (
              <motion.div key={t.name} variants={fadeUp} className="glass p-7 flex flex-col">
                <div
                  className="font-display text-7xl leading-none mb-3 select-none"
                  style={{ color: 'rgba(124,58,237,0.35)', fontFamily: 'Georgia, serif' }}
                >
                  &ldquo;
                </div>
                <p className="text-[#c0c0d8] text-sm leading-relaxed italic flex-1">{t.quote}</p>
                <div className="mt-6 pt-5 border-t border-white/[0.06]">
                  <p className="font-semibold text-white text-sm">{t.name}</p>
                  <p className="text-xs text-[#686890] mt-0.5">{t.title}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ CTA ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.04]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={viewOpts} variants={stagger}
            className="glass p-12 sm:p-16 text-center relative overflow-hidden"
          >
            {/* Inner glow */}
            <div className="absolute top-1/2 left-1/2 w-[500px] h-[300px] rounded-full bg-primary-700/18 blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute top-0 right-0 w-[200px] h-[200px] rounded-full bg-accent-500/10 blur-[80px] pointer-events-none" />

            <div className="relative z-10">
              <motion.div variants={fadeUp} className="flex justify-center mb-6">
                <span className="section-label">Let&apos;s Build Together</span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="font-display text-4xl sm:text-5xl font-bold mb-5 leading-tight">
                <span className="gradient-text-white">Ready to transform</span>
                <br />
                <span className="gradient-text">your business with AI?</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="max-w-lg mx-auto text-[#7878a0] text-lg mb-10">
                Join 50+ Indian companies already leveraging Eigur&apos;s AI systems to grow faster,
                operate smarter, and scale with confidence.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn-primary !px-10 !py-4 !text-base">
                  Schedule a Consultation <ArrowRight className="h-5 w-5" />
                </Link>
                <Link href="/services" className="btn-ghost !px-10 !py-4 !text-base">
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
