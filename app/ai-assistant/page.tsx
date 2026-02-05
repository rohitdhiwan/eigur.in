'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles, MessageCircle } from 'lucide-react';

const AIAssistantPage = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm your Eigur AI assistant. How can I help you today?", sender: 'ai', timestamp: new Date() }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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
      return "Hello there! Welcome to Eigur. How can I assist you with our AI solutions today?";
    } else if (lowerInput.includes('service') || lowerInput.includes('solution')) {
      return "We offer a variety of AI solutions including IT Process Automation, Financial AI, Agriculture Intelligence, Retail Intelligence, Business Automation, and Customer Experience AI. Which one interests you most?";
    } else if (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('pricing')) {
      return "Our pricing is customized based on your specific business needs and the complexity of the solution. We offer flexible packages to suit different budgets. Would you like to schedule a consultation to discuss pricing?";
    } else if (lowerInput.includes('contact') || lowerInput.includes('reach')) {
      return "You can reach us via email at hello@eigur.in, call us at +91 98765 43210, or visit our contact page to send a message. We're available Monday-Friday, 9AM-6PM IST.";
    } else if (lowerInput.includes('thank')) {
      return "You're welcome! Is there anything else I can help you with today?";
    } else if (lowerInput.includes('help')) {
      return "I can help you with information about our services, pricing, case studies, or connect you with our team. What do you need assistance with?";
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
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-gradient-to-r from-primary-600 to-indigo-700 p-3 rounded-full">
              <Bot className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Eigur AI Assistant</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get instant answers about our AI solutions, services, and how we can transform your business operations.
          </p>
        </div>

        {/* Chat Container */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-primary-600 to-indigo-700 p-6">
            <div className="flex items-center">
              <div className="bg-white p-2 rounded-full mr-4">
                <Bot className="h-6 w-6 text-primary-600" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-white">Eigur AI Assistant</h2>
                <p className="text-primary-200 text-sm">Online • Ready to help</p>
              </div>
              <div className="ml-auto flex items-center">
                <div className="flex h-3 w-3">
                  <span className="animate-ping absolute h-3 w-3 rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative h-3 w-3 rounded-full bg-green-500"></span>
                </div>
                <span className="ml-2 text-xs text-primary-200">Online</span>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="h-96 overflow-y-auto p-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex mb-4 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs md:max-w-md lg:max-w-lg rounded-lg px-4 py-2 ${
                    message.sender === 'user'
                      ? 'bg-primary-600 text-white rounded-tr-none'
                      : 'bg-gray-200 text-gray-800 rounded-tl-none'
                  }`}
                >
                  <div className="flex items-start">
                    {message.sender === 'ai' && (
                      <Bot className="h-4 w-4 mt-0.5 mr-2 flex-shrink-0" />
                    )}
                    <p className="text-sm">{message.text}</p>
                    {message.sender === 'user' && (
                      <User className="h-4 w-4 mt-0.5 ml-2 flex-shrink-0" />
                    )}
                  </div>
                  <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-primary-200' : 'text-gray-500'}`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex mb-4 justify-start">
                <div className="bg-gray-200 text-gray-800 rounded-lg rounded-tl-none px-4 py-2">
                  <div className="flex items-center">
                    <Bot className="h-4 w-4 mt-0.5 mr-2" />
                    <div className="flex space-x-1">
                      <div className="h-2 w-2 bg-gray-500 rounded-full animate-bounce"></div>
                      <div className="h-2 w-2 bg-gray-500 rounded-full animate-bounce delay-100"></div>
                      <div className="h-2 w-2 bg-gray-500 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-200 p-4">
            <div className="flex items-end">
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Type your message here..."
                className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                rows={2}
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading || !inputValue.trim()}
                className={`h-12 px-4 rounded-r-lg flex items-center justify-center ${
                  isLoading || !inputValue.trim()
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-primary-600 text-white hover:bg-primary-700'
                }`}
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-2 text-xs text-gray-500 flex items-center">
              <Sparkles className="h-4 w-4 mr-1 text-yellow-500" />
              <span>Powered by advanced AI models trained on Eigur's knowledge base</span>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-primary-100 p-3 rounded-full">
                <MessageCircle className="h-6 w-6 text-primary-600" />
              </div>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Instant Responses</h3>
            <p className="text-gray-600">
              Get immediate answers to your questions about our AI solutions and services.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-primary-100 p-3 rounded-full">
                <Sparkles className="h-6 w-6 text-primary-600" />
              </div>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Smart Recommendations</h3>
            <p className="text-gray-600">
              Receive personalized recommendations based on your business needs.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-primary-100 p-3 rounded-full">
                <Bot className="h-6 w-6 text-primary-600" />
              </div>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">24/7 Availability</h3>
            <p className="text-gray-600">
              Our AI assistant is always available to help you, day or night.
            </p>
          </div>
        </div>

        {/* How It Helps Section */}
        <div className="mt-16 bg-gradient-to-r from-primary-50 to-indigo-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">How Our AI Assistant Helps You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Quick Information</h3>
              <p className="text-gray-600">
                Get instant access to information about our services, pricing, and implementation process.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Service Matching</h3>
              <p className="text-gray-600">
                Describe your business challenges and get recommendations for the most suitable AI solutions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Lead Qualification</h3>
              <p className="text-gray-600">
                Our AI assistant can qualify your inquiry and connect you with the right specialist.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Get assistance anytime, even outside business hours, to ensure your queries are addressed promptly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAssistantPage;