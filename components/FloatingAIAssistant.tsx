'use client';

import { useState, useEffect } from 'react';
import { Bot, X, MessageCircle, Send } from 'lucide-react';

const FloatingAIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm your Eigur AI assistant. How can I help you learn more about our AI solutions?", sender: 'ai', timestamp: new Date() }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Simulate AI response after a delay
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        text: generateAIResponse(inputValue),
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1000);
  };

  const generateAIResponse = (input: string) => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('hey')) {
      return "Hello there! Welcome to Eigur. I'm here to help you learn more about our AI solutions. What would you like to know?";
    } else if (lowerInput.includes('service') || lowerInput.includes('solution')) {
      return "We offer a variety of AI solutions including IT Process Automation, Financial AI, Agriculture Intelligence, Retail Intelligence, Business Automation, and Customer Experience AI. Which one interests you most?";
    } else if (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('pricing') || lowerInput.includes('investment')) {
      return "Our pricing is customized based on your specific business needs and the complexity of the solution. We offer flexible packages starting from ₹80,000. Would you like to schedule a consultation to discuss pricing?";
    } else if (lowerInput.includes('contact') || lowerInput.includes('reach')) {
      return "You can reach us via email at support@eigur.in, call us at +91 98765 43210, or visit our contact page to send a message. We're available Monday-Friday, 9AM-6PM IST.";
    } else if (lowerInput.includes('thank')) {
      return "You're welcome! Is there anything else I can help you with today?";
    } else if (lowerInput.includes('help')) {
      return "I can help you with information about our services, pricing, case studies, or connect you with our team. What do you need assistance with?";
    } else if (lowerInput.includes('trust') || lowerInput.includes('reliable') || lowerInput.includes('experience')) {
      return "Eigur has successfully delivered over 100+ AI projects across India, serving clients in diverse industries. Our team of 50+ experts brings deep domain knowledge and technical expertise. We focus on delivering measurable ROI and long-term value to our clients.";
    } else if (lowerInput.includes('ai') || lowerInput.includes('technology')) {
      return "We leverage cutting-edge AI technologies including generative AI, machine learning, natural language processing, and computer vision to create solutions that drive real business outcomes. Our AI models are trained on domain-specific data to deliver superior results.";
    } else {
      return "Thank you for your message. Our AI solutions can help transform your business operations. Could you tell me more about your specific requirements so I can provide more targeted information?";
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="fixed bottom-6 right-6 bg-primary-600 text-white p-4 rounded-full shadow-lg hover:bg-primary-700 transition-all duration-300 z-50"
          aria-label="Open AI Assistant"
        >
          <Bot className="h-6 w-6" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 h-[500px] bg-white rounded-xl shadow-xl border border-gray-200 flex flex-col z-50">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary-600 to-indigo-700 p-4 rounded-t-xl flex items-center justify-between">
            <div className="flex items-center">
              <Bot className="h-5 w-5 text-white mr-2" />
              <h3 className="text-white font-medium">AI Assistant</h3>
            </div>
            <button
              onClick={toggleChat}
              className="text-white hover:text-primary-200"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex mb-4 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs rounded-lg px-3 py-2 ${
                    message.sender === 'user'
                      ? 'bg-primary-600 text-white rounded-tr-none'
                      : 'bg-gray-200 text-gray-800 rounded-tl-none'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex mb-4 justify-start">
                <div className="bg-gray-200 text-gray-800 rounded-lg rounded-tl-none px-3 py-2">
                  <div className="flex space-x-1">
                    <div className="h-2 w-2 bg-gray-500 rounded-full animate-bounce"></div>
                    <div className="h-2 w-2 bg-gray-500 rounded-full animate-bounce delay-100"></div>
                    <div className="h-2 w-2 bg-gray-500 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="border-t border-gray-200 p-3">
            <div className="flex items-end">
              <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about our AI solutions..."
                className="flex-1 border border-gray-300 rounded-l-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-transparent"
                disabled={isLoading}
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading || !inputValue.trim()}
                className={`h-10 px-3 rounded-r-lg flex items-center justify-center ${
                  isLoading || !inputValue.trim()
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-primary-600 text-white hover:bg-primary-700'
                }`}
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingAIAssistant;