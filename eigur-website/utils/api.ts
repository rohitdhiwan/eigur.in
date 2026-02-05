// API utility functions

export const sendAiMessage = async (message: string) => {
  try {
    const response = await fetch('/api/ai-assistant', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error sending message to AI:', error);
    throw error;
  }
};

// Supabase client initialization
export const initSupabase = () => {
  // This would be implemented with actual Supabase credentials in a real project
  // import { createClient } from '@supabase/supabase-js';
  // return createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);
};

// OpenAI client initialization
export const initOpenAI = () => {
  // This would be implemented with actual OpenAI credentials in a real project
  // import OpenAI from 'openai';
  // return new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
};