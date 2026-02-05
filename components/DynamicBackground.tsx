'use client';

import { useEffect } from 'react';

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

export default function DynamicBackground() {
  useEffect(() => {
    // Function to set a random background color
    const setRandomBackground = () => {
      // Get a random background color
      const randomIndex = Math.floor(Math.random() * backgroundColors.length);
      const randomColor = backgroundColors[randomIndex];
      
      // Apply to the main body or a specific element
      const body = document.querySelector('body');
      if (body) {
        // Remove any existing bg classes
        body.className = body.className.replace(/\bbg-\w+-\d+\b/g, '');
        body.classList.add(randomColor);
      }
      
      // Also apply to the main div if it exists
      const mainDiv = document.getElementById('dynamic-bg');
      if (mainDiv) {
        // Remove any existing bg classes
        mainDiv.className = mainDiv.className.replace(/\bbg-\w+-\d+\b/g, '');
        mainDiv.classList.add(randomColor);
      }
    };

    // Set background on initial load
    setRandomBackground();
    
    // Optionally set a new background on every page navigation
    // This ensures the background changes on route changes too
    const handleRouteChange = () => {
      setTimeout(setRandomBackground, 100); // Small delay to ensure DOM is ready
    };
    
    // Listen for custom events or use a different approach
    window.addEventListener('load', setRandomBackground);
    
    return () => {
      window.removeEventListener('load', setRandomBackground);
    };
  }, []);

  return null; // This component doesn't render anything
}