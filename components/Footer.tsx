import Link from 'next/link';
import { Mail, Phone, MapPin, Twitter, Linkedin, Github } from 'lucide-react';

const cols = [
  { heading: 'Company', links: [
    { name: 'About',         href: '/about' },
    { name: 'Services',      href: '/services' },
    { name: 'Case Studies',  href: '/case-studies' },
    { name: 'Blog',          href: '/blog' },
    { name: 'Contact',       href: '/contact' },
  ]},
  { heading: 'Solutions', links: [
    { name: 'IT Automation',       href: '/services' },
    { name: 'Finance AI',          href: '/services' },
    { name: 'Agriculture Tech',    href: '/services' },
    { name: 'Retail Intelligence', href: '/services' },
    { name: 'AI Assistant',        href: '/ai-assistant' },
  ]},
  { heading: 'Resources', links: [
    { name: 'Blog',          href: '/blog' },
    { name: 'AI Insights',   href: '/blog' },
    { name: 'Case Studies',  href: '/case-studies' },
    { name: 'Privacy Policy',href: '#' },
    { name: 'Terms',         href: '#' },
  ]},
];

// Modern node-network logo mark
function LogoMark() {
  return (
    <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-700 flex items-center justify-center flex-shrink-0 shadow-[0_2px_10px_rgba(109,40,217,0.35)]">
      <svg viewBox="0 0 20 20" fill="none" className="w-[15px] h-[15px]">
        <circle cx="10" cy="4" r="2.25" fill="white"/>
        <circle cx="3.5" cy="15" r="1.75" fill="white" opacity="0.9"/>
        <circle cx="16.5" cy="15" r="1.75" fill="white" opacity="0.9"/>
        <line x1="10" y1="4" x2="3.5" y2="15" stroke="white" strokeWidth="1.3" strokeLinecap="round" opacity="0.55"/>
        <line x1="10" y1="4" x2="16.5" y2="15" stroke="white" strokeWidth="1.3" strokeLinecap="round" opacity="0.55"/>
        <line x1="3.5" y1="15" x2="16.5" y2="15" stroke="white" strokeWidth="1.3" strokeLinecap="round" opacity="0.35"/>
      </svg>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#fafaf9] border-t border-black/[0.07]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-5">
              <LogoMark />
              <div className="flex flex-col leading-none">
                <span className="font-display text-[18px] font-bold gradient-text">Eigur</span>
                <span className="text-[9px] font-semibold tracking-[0.12em] uppercase text-[#b0aec8] mt-0.5">Intelligence at scale.</span>
              </div>
            </Link>
            <p className="text-sm text-[#7878a0] leading-relaxed max-w-xs mb-6">
              Building AI systems that drive measurable outcomes for the world&apos;s most ambitious companies. Enterprise-grade intelligence, startup speed.
            </p>
            <div className="flex gap-3">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <Link key={i} href="#"
                  className="w-8 h-8 rounded-lg border border-black/[0.07] flex items-center justify-center text-[#9896b0] hover:text-primary-600 hover:border-primary-200 hover:bg-primary-50 transition-all">
                  <Icon className="h-3.5 w-3.5" />
                </Link>
              ))}
            </div>
          </div>

          {cols.map(col => (
            <div key={col.heading}>
              <h4 className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#b0aec8] mb-5">{col.heading}</h4>
              <ul className="space-y-2.5">
                {col.links.map(l => (
                  <li key={l.name}>
                    <Link href={l.href} className="text-sm text-[#7878a0] hover:text-[#0f0f1a] transition-colors">
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact strip */}
        <div className="flex flex-wrap gap-6 pb-8 border-b border-black/[0.06] mb-6">
          {[
            { Icon: MapPin, text: '8, Birla Tower, 25 Barakhamba Road, New Delhi 110001, India' },
            { Icon: Phone,  text: '+91 80030 75046', href: 'tel:+918003075046' },
            { Icon: Mail,   text: 'support@eigur.in', href: 'mailto:support@eigur.in' },
          ].map(({ Icon, text, href }, i) => (
            <div key={i} className="flex items-center gap-2">
              <Icon className="h-3.5 w-3.5 text-[#b0aec8] flex-shrink-0" />
              {href
                ? <Link href={href} className="text-xs text-[#7878a0] hover:text-[#0f0f1a] transition-colors">{text}</Link>
                : <span className="text-xs text-[#7878a0]">{text}</span>
              }
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-[#b0aec8]">© {new Date().getFullYear()} Eigur AI Solutions Pvt. Ltd. All rights reserved.</p>
          <p className="text-xs text-[#b0aec8]">Intelligence at scale.</p>
        </div>
      </div>
    </footer>
  );
}
