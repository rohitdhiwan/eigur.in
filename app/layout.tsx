import type { Metadata } from 'next';
import { Syne, Outfit } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingAIAssistant from '@/components/FloatingAIAssistant';
import './globals.css';

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Eigur — AI Consultancy for India',
  description:
    'Engineering AI solutions that transform Indian businesses. From strategy to production-scale deployment, we build the intelligence layer of modern enterprise.',
  metadataBase: new URL('https://eigur.in'),
  openGraph: {
    title: 'Eigur — AI Consultancy for India',
    description: 'Engineering AI solutions that transform Indian businesses.',
    url: 'https://eigur.in',
    siteName: 'Eigur',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${outfit.variable}`}>
      <body className="font-sans antialiased bg-[#05050a] text-white">
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <FloatingAIAssistant />
        </div>
      </body>
    </html>
  );
}
