'use client';

import { useEffect } from 'react';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingAIAssistant from '@/components/FloatingAIAssistant';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

// Array of background colors with their hex values
const backgroundColors = [
  '#f9fafb', // bg-gray-50
  '#eff6ff', // bg-blue-50
  '#eef2ff', // bg-indigo-50
  '#f5f3ff', // bg-purple-50
  '#fdf2f8', // bg-pink-50
  '#fef2f2', // bg-red-50
  '#fff7ed', // bg-orange-50
  '#fefce8', // bg-yellow-50
  '#f0fdf4', // bg-green-50
  '#f0fdfa'  // bg-teal-50
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Only run on the client side
    if (typeof window !== 'undefined') {
      // Get a random background color on each page load
      const randomIndex = Math.floor(Math.random() * backgroundColors.length);
      const randomColor = backgroundColors[randomIndex];
      
      // Apply the background color directly to the body element
      document.body.style.backgroundColor = randomColor;
    }
  }, []); // Empty dependency array means this runs once after component mounts

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen" id="dynamic-bg">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <FloatingAIAssistant />
        </div>
      </body>
    </html>
  );
}