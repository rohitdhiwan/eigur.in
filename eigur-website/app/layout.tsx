import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Eigur - AI Solutions for Indian Businesses',
  description: 'Transform your business with cutting-edge AI solutions tailored for the Indian market',
  keywords: ['AI solutions', 'Indian businesses', 'artificial intelligence', 'business automation', 'machine learning'],
  authors: [{ name: 'Eigur AI' }],
  creator: 'Eigur AI',
  publisher: 'Eigur AI',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}