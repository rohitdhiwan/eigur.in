import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingAIAssistant from '@/components/FloatingAIAssistant';

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
        <div className="flex flex-col min-h-screen bg-gray-50" id="dynamic-bg">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <FloatingAIAssistant />
        </div>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const colors = ['bg-gray-50', 'bg-blue-50', 'bg-indigo-50', 'bg-purple-50', 'bg-pink-50', 'bg-red-50', 'bg-orange-50', 'bg-yellow-50', 'bg-green-50', 'bg-teal-50'];
                const randomColor = colors[Math.floor(Math.random() * colors.length)];
                
                const element = document.getElementById('dynamic-bg');
                if (element) {
                  // Remove existing bg classes
                  element.className = element.className.replace(/\\bbg-\\w+-\\d+\\b/g, '');
                  // Add new random color class
                  element.classList.add(randomColor);
                }
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}