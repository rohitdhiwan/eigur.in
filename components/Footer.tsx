import Link from 'next/link';
import { Mail, Phone, MapPin, Twitter, Linkedin, Github, Sparkles } from 'lucide-react';

const footerLinks = [
  {
    heading: 'Company',
    links: [
      { name: 'About',        href: '/about' },
      { name: 'Services',     href: '/services' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Blog',         href: '/blog' },
      { name: 'Contact',      href: '/contact' },
    ],
  },
  {
    heading: 'Solutions',
    links: [
      { name: 'IT Automation',      href: '/services' },
      { name: 'Finance AI',         href: '/services' },
      { name: 'Agriculture Tech',   href: '/services' },
      { name: 'Retail Intelligence',href: '/services' },
      { name: 'AI Assistant',       href: '/ai-assistant' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { name: 'Blog',           href: '/blog' },
      { name: 'AI Insights',    href: '/blog' },
      { name: 'Case Studies',   href: '/case-studies' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms',          href: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.055] bg-[#05050a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 group mb-5">
              <div className="w-7 h-7 rounded-lg bg-primary-600/20 border border-primary-500/30 flex items-center justify-center">
                <Sparkles className="h-3.5 w-3.5 text-primary-400" />
              </div>
              <span className="font-display text-xl font-bold gradient-text">Eigur</span>
            </Link>
            <p className="text-sm text-[#686890] leading-relaxed max-w-xs">
              Engineering AI solutions that transform Indian businesses.
              Built for enterprise complexity, delivered with startup speed.
            </p>
            <div className="flex items-center gap-4 mt-6">
              {[
                { href: '#', Icon: Twitter },
                { href: '#', Icon: Linkedin },
                { href: '#', Icon: Github },
              ].map(({ href, Icon }, i) => (
                <Link
                  key={i}
                  href={href}
                  className="w-8 h-8 rounded-lg border border-white/[0.07] flex items-center justify-center text-[#686890] hover:text-white hover:border-white/20 transition-all"
                >
                  <Icon className="h-3.5 w-3.5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {footerLinks.map((col) => (
            <div key={col.heading}>
              <h4 className="text-[10px] font-semibold tracking-[0.14em] uppercase text-[#454565] mb-5">
                {col.heading}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.name}>
                    <Link
                      href={l.href}
                      className="text-sm text-[#686890] hover:text-white transition-colors"
                    >
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact strip */}
        <div className="flex flex-wrap gap-6 pb-8 border-b border-white/[0.055]">
          {[
            { Icon: MapPin, text: 'New Delhi 110001, India' },
            { Icon: Phone, text: '+91 98765 43210' },
            { Icon: Mail,  text: 'support@eigur.in', href: 'mailto:support@eigur.in' },
          ].map(({ Icon, text, href }, i) => (
            <div key={i} className="flex items-center gap-2">
              <Icon className="h-3.5 w-3.5 text-[#454565]" />
              {href ? (
                <Link href={href} className="text-xs text-[#686890] hover:text-white transition-colors">
                  {text}
                </Link>
              ) : (
                <span className="text-xs text-[#686890]">{text}</span>
              )}
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-[#454565]">
            © {new Date().getFullYear()} Eigur AI Solutions Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-xs text-[#454565]">
            Built for India&apos;s next decade
          </p>
        </div>
      </div>
    </footer>
  );
}
