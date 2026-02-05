import { NextApiRequest, NextApiResponse } from 'next';

// Mock blog posts data
const blogPosts = [
  {
    id: 1,
    title: 'The Future of AI in Indian Agriculture',
    excerpt: 'Exploring how artificial intelligence is revolutionizing farming practices across rural India, increasing yields and reducing waste.',
    author: 'Dr. Priya Sharma',
    date: 'January 15, 2026',
    readTime: '6 min read',
    category: 'Agriculture',
    tags: ['AI', 'Agriculture', 'India', 'Innovation'],
    slug: 'future-of-ai-in-indian-agriculture',
    featured: true
  },
  {
    id: 2,
    title: 'Transforming Indian Banking with Machine Learning',
    excerpt: 'How ML algorithms are helping Indian banks detect fraud, assess credit risk, and personalize customer experiences.',
    author: 'Rajesh Kumar',
    date: 'January 10, 2026',
    readTime: '8 min read',
    category: 'Finance',
    tags: ['ML', 'Banking', 'Finance', 'Security'],
    slug: 'transforming-indian-banking-with-ml',
    featured: true
  },
  {
    id: 3,
    title: 'Retail Revolution: AI-Powered Customer Experiences',
    excerpt: 'Examining how AI is reshaping retail experiences in India, from personalized recommendations to inventory management.',
    author: 'Anita Desai',
    date: 'January 5, 2026',
    readTime: '5 min read',
    category: 'Retail',
    tags: ['AI', 'Retail', 'Customer Experience', 'E-commerce'],
    slug: 'retail-revolution-ai-powered-customer-experiences',
    featured: false
  }
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { category, limit, featured } = req.query;
    
    let filteredPosts = [...blogPosts];
    
    if (category) {
      filteredPosts = filteredPosts.filter(post => 
        post.category.toLowerCase().includes(category.toString().toLowerCase())
      );
    }
    
    if (featured === 'true') {
      filteredPosts = filteredPosts.filter(post => post.featured);
    }
    
    if (limit) {
      const limitNum = parseInt(limit as string);
      filteredPosts = filteredPosts.slice(0, limitNum);
    }
    
    res.status(200).json({
      success: true,
      posts: filteredPosts,
      total: filteredPosts.length
    });
  } else if (req.method === 'POST') {
    // In a real implementation, this would create a new blog post
    const { title, content, excerpt, author, category, tags } = req.body;
    
    if (!title || !content) {
      return res.status(400).json({
        success: false,
        message: 'Title and content are required'
      });
    }
    
    // Create new post (in a real app, this would save to a database)
    const newPost = {
      id: blogPosts.length + 1,
      title,
      content,
      excerpt,
      author,
      date: new Date().toISOString().split('T')[0],
      readTime: '5 min read', // This would be calculated in a real app
      category,
      tags: tags || [],
      slug: title.toLowerCase().replace(/\s+/g, '-'),
      featured: false
    };
    
    // Add to mock data
    blogPosts.push(newPost);
    
    res.status(201).json({
      success: true,
      post: newPost
    });
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).json({
      success: false,
      message: `Method ${req.method} not allowed`
    });
  }
}