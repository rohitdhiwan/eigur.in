import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Eigur Careers – Sign In',
  description: 'Sign in to your Eigur Careers account to find AI-matched jobs, build your CV and track applications.',
};

function LogoMark() {
  return (
    <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-700 flex items-center justify-center shadow-[0_2px_10px_rgba(109,40,217,0.35)]">
      <svg viewBox="0 0 20 20" fill="none" className="w-[15px] h-[15px]">
        <circle cx="10" cy="4" r="2.25" fill="white" />
        <circle cx="3.5" cy="15" r="1.75" fill="white" opacity="0.9" />
        <circle cx="16.5" cy="15" r="1.75" fill="white" opacity="0.9" />
        <line x1="10" y1="4" x2="3.5" y2="15" stroke="white" strokeWidth="1.3" strokeLinecap="round" opacity="0.55" />
        <line x1="10" y1="4" x2="16.5" y2="15" stroke="white" strokeWidth="1.3" strokeLinecap="round" opacity="0.55" />
        <line x1="3.5" y1="15" x2="16.5" y2="15" stroke="white" strokeWidth="1.3" strokeLinecap="round" opacity="0.35" />
      </svg>
    </div>
  );
}

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-cyan-50 flex flex-col">
      {/* Header */}
      <header className="px-6 py-5">
        <Link href="/" className="inline-flex items-center gap-2.5 group">
          <LogoMark />
          <div className="flex flex-col leading-none">
            <span className="font-display text-[17px] font-bold gradient-text">Eigur</span>
            <span className="text-[9px] font-semibold tracking-[0.12em] uppercase text-[#b0aec8] mt-0.5">Careers AI</span>
          </div>
        </Link>
      </header>

      {/* Main */}
      <main className="flex-1 flex items-center justify-center px-4 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="px-6 py-4 text-center">
        <p className="text-xs text-[#b0aec8]">
          © {new Date().getFullYear()} Eigur AI Solutions Pvt. Ltd. &nbsp;·&nbsp;
          <Link href="/privacy" className="hover:text-primary-600 transition-colors">Privacy</Link>
          &nbsp;·&nbsp;
          <Link href="/terms" className="hover:text-primary-600 transition-colors">Terms</Link>
        </p>
      </footer>

      {/* Background decoration */}
      <div aria-hidden className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-violet-100/50 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-cyan-100/40 blur-3xl" />
      </div>
    </div>
  );
}
