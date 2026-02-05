import { Calendar, User, Tag, ArrowRight, Search, Bookmark, Eye, ThumbsUp, Share2 } from 'lucide-react';
import Link from 'next/link';

// Static blog data
const blogPosts = [
  {
    id: 1,
    title: 'How Digital AI Marketing is Transforming Indian E-commerce',
    excerpt: 'Discover how AI-powered marketing strategies are revolutionizing the e-commerce landscape in India, driving unprecedented growth and customer engagement.',
    author: 'Riya Verma',
    date: '2026-02-05',
    readTime: '6 min read',
    category: 'Marketing',
    image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    tags: ['AI Marketing', 'E-commerce', 'Digital Transformation', 'India'],
    views: 1242,
    likes: 89
  },
  {
    id: 2,
    title: 'Machine Learning Trends Shaping 2026: An Indian Perspective',
    excerpt: 'Explore the latest ML trends impacting Indian businesses and how companies are leveraging these innovations for competitive advantage.',
    author: 'Karan Joshi',
    date: '2026-02-04',
    readTime: '8 min read',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    tags: ['Machine Learning', 'AI Trends', 'Business Innovation', 'India'],
    views: 2105,
    likes: 156
  },
  {
    id: 3,
    title: 'AI Ethics: Building Responsible AI Systems for Indian Markets',
    excerpt: 'Understanding the importance of ethical AI development and how Indian companies are leading the charge in responsible AI implementation.',
    author: 'Rohit Dhiwan',
    date: '2026-02-03',
    readTime: '7 min read',
    category: 'Ethics',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    tags: ['AI Ethics', 'Responsible AI', 'Governance', 'India'],
    views: 1876,
    likes: 134
  },
  {
    id: 4,
    title: 'Generative AI in Business: Real Use Cases from Indian Enterprises',
    excerpt: 'Real-world examples of how Indian companies are using generative AI to improve efficiency, creativity, and customer experience.',
    author: 'Riya Verma',
    date: '2026-02-02',
    readTime: '9 min read',
    category: 'Generative AI',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    tags: ['Generative AI', 'Case Study', 'Enterprise', 'Innovation'],
    views: 3210,
    likes: 245
  },
  {
    id: 5,
    title: 'The Future of AI-Powered Customer Experience in India',
    excerpt: 'How AI is transforming customer interactions and creating personalized experiences that drive loyalty and sales.',
    author: 'Karan Joshi',
    date: '2026-02-01',
    readTime: '5 min read',
    category: 'Customer Experience',
    image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    tags: ['Customer Experience', 'AI Chatbots', 'Personalization', 'Service'],
    views: 1567,
    likes: 98
  },
  {
    id: 6,
    title: 'AI in Agriculture: Revolutionizing Indian Farming Practices',
    excerpt: 'Exploring how AI technologies are helping Indian farmers increase yield, reduce costs, and make data-driven decisions.',
    author: 'Rohit Dhiwan',
    date: '2026-01-31',
    readTime: '10 min read',
    category: 'Agriculture',
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    tags: ['AI in Agriculture', 'Farming', 'IoT', 'Precision Agriculture'],
    views: 2890,
    likes: 187
  }
];

const categories = [
  'All', 'Technology', 'Business', 'AI Ethics', 'Startups', 'Government', 'Research', 'Industry', 'Marketing'
];

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center py-16">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            AI Insights & News Hub
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Expert analysis, industry trends, and actionable insights on AI transformation in Indian businesses
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div className="relative w-full md:w-1/3">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              placeholder="Search articles..."
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-3 py-1 text-sm rounded-full ${
                  index === 0
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Article */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-16">
          <div className="md:flex">
            <div className="md:flex-shrink-0 md:w-1/2">
              <img
                className="h-64 w-full object-cover md:h-full"
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
              />
            </div>
            <div className="p-8 md:w-1/2">
              <div className="flex items-center mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                  {blogPosts[0].category}
                </span>
                <span className="ml-3 text-sm text-gray-500">{blogPosts[0].date}</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">{blogPosts[0].title}</h2>
              <p className="text-gray-600 mb-4">{blogPosts[0].excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex items-center">
                    <User className="h-4 w-4 text-gray-500 mr-2" />
                    <span className="text-sm text-gray-600">{blogPosts[0].author}</span>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-sm text-gray-600">{blogPosts[0].readTime}</span>
                    <span className="mx-2 text-gray-300">•</span>
                    <Eye className="h-4 w-4 text-gray-500 mr-1" />
                    <span className="text-sm text-gray-600">{blogPosts[0].views.toLocaleString()}</span>
                  </div>
                </div>
                <button className="inline-flex items-center text-primary-600 hover:text-primary-800">
                  Read more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.slice(1).map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img
                className="h-48 w-full object-cover"
                src={post.image}
                alt={post.title}
              />
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                    {post.category}
                  </span>
                  <span className="ml-2 text-xs text-gray-500">{post.date}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <User className="h-4 w-4 text-gray-500 mr-1" />
                    <span className="text-xs text-gray-600">{post.author}</span>
                  </div>
                  <span className="text-xs text-gray-500">{post.readTime}</span>
                </div>
                
                <div className="flex items-center text-xs text-gray-500 mb-4">
                  <Eye className="h-4 w-4 mr-1" />
                  <span className="mr-3">{post.views.toLocaleString()}</span>
                  <ThumbsUp className="h-4 w-4 mr-1" />
                  <span>{post.likes}</span>
                </div>
                
                <div className="mt-4 flex flex-wrap gap-1 mb-4">
                  {post.tags.slice(0, 2).map((tag, index) => (
                    <span key={index} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="mt-4 flex items-center justify-between">
                  <button className="inline-flex items-center text-primary-600 hover:text-primary-800 text-sm font-medium">
                    Read article
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </button>
                  <button className="text-gray-400 hover:text-gray-500">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-primary-600 to-indigo-700 rounded-xl p-8 text-white mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Subscribe to AI Insights</h2>
            <p className="mb-6 text-primary-100">
              Get the latest articles, industry updates, and expert analysis delivered to your inbox weekly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="px-6 py-2 bg-white text-primary-600 font-medium rounded-md hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Popular Tags */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Topics</h2>
          <div className="flex flex-wrap gap-2">
            {['AI Marketing', 'Machine Learning', 'Business Automation', 'Retail AI', 'FinTech', 'Agriculture Tech', 'Predictive Analytics', 'RPA', 'Digital Transformation', 'AI Ethics', 'NLP', 'Computer Vision', 'AI Startups', 'AI Policy', 'Generative AI', 'Ethical AI'].map((tag, index) => (
              <button
                key={index}
                className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium hover:bg-gray-50 border border-gray-200"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;