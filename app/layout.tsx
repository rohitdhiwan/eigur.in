import type { Metadata } from 'next';
import { Syne, Outfit } from 'next/font/google';
import Providers from './providers';
import ClientLayout from './client-layout';
import FloatingAIAssistant from '@/components/FloatingAIAssistant';
import './globals.css';

const syne = Syne({
  subsets: ['latin'], variable: '--font-syne', display: 'swap',
  weight: ['400','500','600','700','800'],
});
const outfit = Outfit({
  subsets: ['latin'], variable: '--font-outfit', display: 'swap',
  weight: ['300','400','500','600','700'],
});

export const metadata: Metadata = {
  title: 'Eigur | AI Consultancy & Careers Platform',
  description: 'Intelligence at scale. Eigur builds production-grade AI systems and powers AI-driven job search for India\'s most ambitious professionals.',
  metadataBase: new URL('https://eigur.in'),
  openGraph: {
    title: 'Eigur | AI Consultancy & Careers Platform',
    description: 'Production-grade AI systems and intelligent job matching for India.',
    url: 'https://eigur.in', siteName: 'Eigur', locale: 'en_IN', type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${outfit.variable}`}>
      <body className="font-sans antialiased bg-[#fafaf9] text-[#0f0f1a]">
        <Providers>
          <ClientLayout>
            {children}
          </ClientLayout>
          <FloatingAIAssistant />
        </Providers>
      </body>
    </html>
  );
}
