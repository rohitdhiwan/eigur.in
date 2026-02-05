// Type definitions for the Eigur website

export type Service = {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
  industries: string[];
  features: string[];
};

export type CaseStudy = {
  id: number;
  title: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  timeline: string;
  investment: string;
  roi: string;
};

export type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
};

export type Message = {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
};

export type NavItem = {
  name: string;
  href: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type TeamMember = {
  id: number;
  name: string;
  position: string;
  bio: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type ContactFormData = {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

export type AIResponse = {
  success: boolean;
  response: string;
  timestamp: string;
};