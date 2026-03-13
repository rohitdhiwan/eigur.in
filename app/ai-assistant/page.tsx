'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { Send, Sparkles, MessageCircle, Bot, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface Message {
  id: number;
  role: 'user' | 'assistant';
  text: string;
  timestamp: Date;
}

const AIAssistantPage = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: 'assistant',
      text: "Hi! I'm Aria, Eigur's AI consultant. I help businesses find where AI can drive the most impact. What industry is your business in?",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const sendMessage = useCallback(async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;

    const userMsg: Message = {
      id: Date.now(),
      role: 'user',
      text: trimmed,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Build history for the API (include all messages + new user msg)
      const history = [...messages, userMsg].map(m => ({
        role: m.role,
        content: m.text,
      }));

      const res = await fetch('/api/ai-assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: history }),
      });

      const data = await res.json();
      setMessages(prev => [
        ...prev,
        {
          id: Date.now() + 1,
          role: 'assistant',
          text: data.response ?? "I'm having a moment. Please try again.",
          timestamp: new Date(),
        },
      ]);
    } catch {
      setMessages(prev => [
        ...prev,
        {
          id: Date.now() + 1,
          role: 'assistant',
          text: 'Connection issue. Please try again or reach us at support@eigur.in',
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading, messages]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(inputValue);
    }
  };

  const quickReplies = ['What services do you offer?', 'Pricing and timelines', 'Finance AI solutions', 'IT automation ROI'];

  return (
    <div className="min-h-screen bg-[#fafaf9] py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-primary-50 text-primary-600 border border-primary-100 mb-5">
            AI Consultant
          </span>
          <h1 className="font-display text-4xl font-bold text-[#0f0f1a] sm:text-5xl mb-3">
            Talk to Aria
          </h1>
          <p className="text-lg text-[#7878a0] max-w-lg mx-auto">
            Get instant, specific answers about AI solutions for your business. Aria knows Eigur&apos;s full service portfolio.
          </p>
        </div>

        {/* Chat container */}
        <div className="bg-white rounded-2xl border border-black/[0.06] shadow-lg overflow-hidden">

          {/* Chat header */}
          <div className="bg-gradient-to-r from-violet-700 to-indigo-700 px-5 py-4 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Aria</p>
              <p className="text-violet-200 text-xs">Eigur AI Consultant</p>
            </div>
            <div className="ml-auto flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs text-violet-200">Online</span>
            </div>
          </div>

          {/* Messages */}
          <div className="h-[420px] overflow-y-auto p-5 space-y-4 bg-[#fafaf9]">
            {messages.map(msg => (
              <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.role === 'assistant' && (
                  <div className="w-7 h-7 rounded-full bg-violet-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                    <Sparkles className="h-3.5 w-3.5 text-violet-600" />
                  </div>
                )}
                <div className={`max-w-[78%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-violet-600 text-white rounded-tr-sm'
                    : 'bg-white border border-violet-100 text-[#0f0f1a] rounded-tl-sm shadow-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="w-7 h-7 rounded-full bg-violet-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                  <Sparkles className="h-3.5 w-3.5 text-violet-600" />
                </div>
                <div className="bg-white border border-violet-100 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
                  <div className="flex gap-1 items-center">
                    {[0, 150, 300].map(delay => (
                      <span key={delay} className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-bounce"
                        style={{ animationDelay: `${delay}ms` }} />
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick replies */}
          <div className="px-4 py-2.5 border-t border-violet-50 bg-[#fafaf9] flex gap-2 overflow-x-auto scrollbar-none">
            {quickReplies.map(reply => (
              <button key={reply} onClick={() => sendMessage(reply)} disabled={isLoading}
                className="flex-shrink-0 text-[11px] font-medium px-3 py-1.5 rounded-full border border-violet-200 text-violet-600 bg-white hover:bg-violet-50 hover:border-violet-400 transition-colors disabled:opacity-50">
                {reply}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="px-4 pb-4 pt-2 bg-white border-t border-gray-100">
            <div className="flex items-center gap-2 bg-[#f5f3ff] rounded-xl px-4 py-2.5">
              <input
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about AI for your business…"
                disabled={isLoading}
                className="flex-1 text-sm bg-transparent outline-none text-[#0f0f1a] placeholder:text-violet-300"
              />
              <button
                onClick={() => sendMessage(inputValue)}
                disabled={isLoading || !inputValue.trim()}
                className="w-8 h-8 rounded-lg bg-violet-600 text-white flex items-center justify-center hover:bg-violet-700 disabled:opacity-40 transition-colors flex-shrink-0"
              >
                <Send className="h-3.5 w-3.5" />
              </button>
            </div>
            <p className="text-center text-[10px] text-violet-300 mt-1.5">Powered by Eigur AI</p>
          </div>
        </div>

        {/* Features */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { Icon: MessageCircle, title: 'Instant answers', desc: 'Get specific information about our AI solutions, timelines, and what ROI to expect.' },
            { Icon: Sparkles, title: 'Smart recommendations', desc: 'Describe your challenge and Aria maps it to the right Eigur solution and team.' },
            { Icon: Bot, title: '24/7 availability', desc: 'Aria responds instantly any time — no waiting for business hours.' },
          ].map(({ Icon, title, desc }) => (
            <div key={title} className="bg-white rounded-2xl border border-black/[0.06] shadow-sm p-5">
              <div className="w-9 h-9 rounded-xl bg-primary-50 flex items-center justify-center mb-3">
                <Icon className="h-4.5 w-4.5 text-primary-600" />
              </div>
              <h3 className="font-display font-bold text-[#0f0f1a] mb-1.5">{title}</h3>
              <p className="text-sm text-[#7878a0] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <p className="text-sm text-[#7878a0] mb-4">Ready to see a custom AI roadmap for your business?</p>
          <Link href="/contact" className="btn-primary inline-flex">
            Book a free consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AIAssistantPage;
