'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Bot, X, Send, Mic, MicOff, Sparkles, Phone, Mail, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const QUICK_REPLIES = [
  ['What services do you offer?', 'Pricing & timelines', 'See case studies'],
  ['IT automation', 'Finance AI', 'ROI for my business'],
];

const LEAD_TRIGGER_COUNT = 3; // show lead capture after this many user messages

interface SpeechRecognitionEvent {
  results: { [i: number]: { [j: number]: { transcript: string } } };
}

interface SpeechRecognitionInstance {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  onresult: ((e: SpeechRecognitionEvent) => void) | null;
  onerror: (() => void) | null;
  onend: (() => void) | null;
  start: () => void;
  stop: () => void;
}

declare global {
  interface Window {
    SpeechRecognition: { new(): SpeechRecognitionInstance };
    webkitSpeechRecognition: { new(): SpeechRecognitionInstance };
  }
}

export default function FloatingAIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '0',
      role: 'assistant',
      content: "Hi! I'm Aria, Eigur's AI consultant 👋 I help businesses discover where AI can drive the most impact. What industry is your business in?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [userMessageCount, setUserMessageCount] = useState(0);
  const [showLeadCapture, setShowLeadCapture] = useState(false);
  const [leadName, setLeadName] = useState('');
  const [leadEmail, setLeadEmail] = useState('');
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [hasUnread, setHasUnread] = useState(false);
  const [quickRepliesRow, setQuickRepliesRow] = useState(0);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const recognitionRef = useRef<SpeechRecognitionInstance | null>(null);

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  // Show unread indicator when closed and new AI message arrives
  useEffect(() => {
    if (!isOpen && messages.length > 1) {
      setHasUnread(true);
    }
  }, [messages.length]);

  // Auto-open after 30s with a proactive message
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) {
        setHasUnread(true);
      }
    }, 30000);
    return () => clearTimeout(timer);
  }, []);

  const sendMessage = useCallback(async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: text.trim(),
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);
    const newCount = userMessageCount + 1;
    setUserMessageCount(newCount);

    // Rotate quick replies row
    setQuickRepliesRow(prev => (prev + 1) % QUICK_REPLIES.length);

    // Show lead capture after N messages
    if (newCount === LEAD_TRIGGER_COUNT && !leadSubmitted) {
      setShowLeadCapture(true);
    }

    try {
      const history = [...messages, userMsg].map(m => ({
        role: m.role,
        content: m.content,
      }));

      const res = await fetch('/api/ai-assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: history }),
      });

      const data = await res.json();
      const assistantMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.response ?? "I'm having a moment. Please try again.",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, assistantMsg]);
    } catch {
      setMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: 'Connection issue. Please try again or email us at support@eigur.in',
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading, messages, userMessageCount, leadSubmitted]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  const toggleVoice = () => {
    if (typeof window === 'undefined') return;
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) return;

    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
      return;
    }

    const recognition = new SR();
    recognition.lang = 'en-IN';
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.onresult = (e) => {
      const transcript = e.results[0][0].transcript;
      setInput(transcript);
      setIsListening(false);
    };
    recognition.onerror = () => setIsListening(false);
    recognition.onend = () => setIsListening(false);
    recognitionRef.current = recognition;
    recognition.start();
    setIsListening(true);
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadName.trim() || !leadEmail.trim()) return;
    // In production: POST to a CRM/email endpoint
    setLeadSubmitted(true);
    setShowLeadCapture(false);
    setMessages(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        role: 'assistant',
        content: `Thanks, ${leadName.split(' ')[0]}! I've noted your details. Our team will reach out within 4 business hours. Meanwhile, feel free to keep asking me anything!`,
        timestamp: new Date(),
      },
    ]);
  };

  const openChat = () => {
    setIsOpen(true);
    setIsMinimized(false);
    setHasUnread(false);
    setTimeout(() => inputRef.current?.focus(), 300);
  };

  return (
    <>
      {/* Floating button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <button
              onClick={openChat}
              className="relative w-14 h-14 rounded-full bg-gradient-to-br from-violet-600 to-indigo-700 shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 hover:scale-110 transition-all duration-200 flex items-center justify-center"
              aria-label="Chat with Aria, Eigur AI"
            >
              <Bot className="h-6 w-6 text-white" />
              {hasUnread && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse" />
              )}
            </button>
            {/* Tooltip on first load */}
            {hasUnread && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                className="absolute bottom-16 right-0 bg-white border border-violet-100 rounded-xl shadow-lg px-3 py-2 w-52 text-xs text-[#4b5068] pointer-events-none"
              >
                <span className="font-semibold text-violet-700">Aria</span> is here to help! Ask me anything about AI for your business.
                <div className="absolute -bottom-1.5 right-5 w-3 h-3 bg-white border-r border-b border-violet-100 rotate-45" />
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="fixed bottom-6 right-6 z-50 w-[360px] flex flex-col rounded-2xl overflow-hidden shadow-2xl shadow-violet-900/20 border border-violet-100"
            style={{ height: isMinimized ? 'auto' : '580px' }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-violet-700 to-indigo-700 px-4 py-3 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-semibold text-sm leading-tight">Aria</p>
                <p className="text-violet-200 text-xs">Eigur AI Consultant</p>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                  <ChevronDown className={`h-4 w-4 transition-transform ${isMinimized ? 'rotate-180' : ''}`} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Status bar */}
            {!isMinimized && (
              <div className="bg-violet-50 border-b border-violet-100 px-4 py-1.5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] text-violet-500 font-medium">AI-powered • Responds instantly</span>
                <span className="ml-auto flex items-center gap-1 text-[10px] text-violet-400">
                  <Phone className="h-2.5 w-2.5" /> Book a call
                </span>
              </div>
            )}

            {/* Messages */}
            {!isMinimized && (
              <>
                <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 bg-[#fafaf9]">
                  {messages.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      {msg.role === 'assistant' && (
                        <div className="w-6 h-6 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0 mr-2 mt-0.5">
                          <Sparkles className="h-3 w-3 text-violet-600" />
                        </div>
                      )}
                      <div
                        className={`max-w-[75%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                          msg.role === 'user'
                            ? 'bg-violet-600 text-white rounded-tr-sm'
                            : 'bg-white border border-violet-100 text-[#0f0f1a] rounded-tl-sm shadow-sm'
                        }`}
                      >
                        {msg.content}
                      </div>
                    </div>
                  ))}

                  {/* Typing indicator */}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="w-6 h-6 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0 mr-2 mt-0.5">
                        <Sparkles className="h-3 w-3 text-violet-600" />
                      </div>
                      <div className="bg-white border border-violet-100 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
                        <div className="flex gap-1 items-center">
                          {[0, 150, 300].map((delay) => (
                            <span
                              key={delay}
                              className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-bounce"
                              style={{ animationDelay: `${delay}ms` }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Lead capture form */}
                  {showLeadCapture && !leadSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-violet-50 border border-violet-200 rounded-xl p-3 text-sm"
                    >
                      <p className="font-semibold text-violet-800 mb-1 flex items-center gap-1.5">
                        <Mail className="h-3.5 w-3.5" /> Get a free AI roadmap
                      </p>
                      <p className="text-violet-600 text-xs mb-2">Leave your details and we'll send a custom AI plan for your business.</p>
                      <form onSubmit={handleLeadSubmit} className="space-y-2">
                        <input
                          value={leadName}
                          onChange={e => setLeadName(e.target.value)}
                          placeholder="Your name"
                          className="w-full text-xs px-3 py-2 rounded-lg border border-violet-200 bg-white focus:outline-none focus:ring-1 focus:ring-violet-400"
                        />
                        <input
                          value={leadEmail}
                          onChange={e => setLeadEmail(e.target.value)}
                          type="email"
                          placeholder="Work email"
                          className="w-full text-xs px-3 py-2 rounded-lg border border-violet-200 bg-white focus:outline-none focus:ring-1 focus:ring-violet-400"
                        />
                        <div className="flex gap-2">
                          <button type="submit" className="flex-1 bg-violet-600 text-white text-xs font-semibold py-2 rounded-lg hover:bg-violet-700 transition-colors">
                            Send my roadmap
                          </button>
                          <button type="button" onClick={() => setShowLeadCapture(false)} className="text-xs text-violet-400 hover:text-violet-600 px-2">
                            Skip
                          </button>
                        </div>
                      </form>
                    </motion.div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Quick replies */}
                <div className="px-4 py-2 bg-[#fafaf9] border-t border-violet-50 flex gap-1.5 overflow-x-auto scrollbar-none">
                  {QUICK_REPLIES[quickRepliesRow].map((reply) => (
                    <button
                      key={reply}
                      onClick={() => sendMessage(reply)}
                      disabled={isLoading}
                      className="flex-shrink-0 text-[11px] font-medium px-3 py-1.5 rounded-full border border-violet-200 text-violet-600 bg-white hover:bg-violet-50 hover:border-violet-400 transition-colors disabled:opacity-50"
                    >
                      {reply}
                    </button>
                  ))}
                </div>

                {/* Input area */}
                <div className="px-3 pb-3 pt-2 bg-white border-t border-gray-100">
                  <div className="flex items-center gap-2 bg-[#f5f3ff] rounded-xl px-3 py-2">
                    <input
                      ref={inputRef}
                      value={input}
                      onChange={e => setInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="Ask about AI for your business…"
                      disabled={isLoading}
                      className="flex-1 text-sm bg-transparent outline-none text-[#0f0f1a] placeholder:text-violet-300"
                    />
                    <button
                      onClick={toggleVoice}
                      className={`p-1.5 rounded-lg transition-colors ${
                        isListening
                          ? 'bg-red-100 text-red-500 animate-pulse'
                          : 'text-violet-300 hover:text-violet-500 hover:bg-violet-100'
                      }`}
                      title="Voice input"
                    >
                      {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                    </button>
                    <button
                      onClick={() => sendMessage(input)}
                      disabled={isLoading || !input.trim()}
                      className="w-8 h-8 rounded-lg bg-violet-600 text-white flex items-center justify-center hover:bg-violet-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex-shrink-0"
                    >
                      <Send className="h-3.5 w-3.5" />
                    </button>
                  </div>
                  <p className="text-center text-[10px] text-violet-300 mt-1.5">Powered by Eigur AI</p>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
