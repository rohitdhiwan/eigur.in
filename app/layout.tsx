'use client';

import { useState, useEffect } from 'react';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingAIAssistant from '@/components/FloatingAIAssistant';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

// Array of background colors
const backgroundColors = [
  'bg-gray-50',
  'bg-blue-50', 
  'bg-indigo-50',
  'bg-purple-50',
  'bg-pink-50',
  'bg-red-50',
  'bg-orange-50',
  'bg-yellow-50',
  'bg-green-50',
  'bg-teal-50'
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [bgClass, setBgClass] = useState('bg-gray-50');

  useEffect(() => {
    // Only run on the client side
    if (typeof window !== 'undefined') {
      // Get a random background color on each page load
      const randomIndex = Math.floor(Math.random() * backgroundColors.length);
      const randomColor = backgroundColors[randomIndex];
      
      // Apply the background color to the div
      setBgClass(randomColor);
    }
  }, []); // Empty dependency array means this runs once after component mounts

  return (
    <html lang="en">
      <body className={`${inter.className} ${bgClass}`}>
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