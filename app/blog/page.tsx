import { Calendar, User, Tag, ArrowRight, Search, Bookmark } from 'lucide-react';
import Link from 'next/link';

// Simplified mock data for daily AI news and insights
const blogPosts = [
  {
    id: 1,
    title: 'Generative AI in Business: Latest Developments and Market Impact',
    excerpt: 'Recent advancements in generative AI are reshaping industries across India and globally. Experts predict significant market growth in the coming years.',
    author: 'AI News Network via TechCrunch',
    date: '2026-02-05',
    readTime: '5 min read',
    category: 'Generative',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    tags: ['Generative AI', 'AI', 'Technology', 'Innovation'],
  },
  {
    id: 2,
    title: 'Machine Learning Trends: Latest Developments and Market Impact',
    excerpt: 'Recent advancements in machine learning are reshaping industries across India and globally. Experts predict significant market growth in the coming years.',
    author: 'AI News Network via MIT Technology Review',
    date: '2026-02-04',
    readTime: '7 min read',
    category: 'Machine',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    tags: ['Machine Learning', 'AI', 'Technology', 'Innovation'],
  },
  {
    id: 3,
    title: 'AI Ethics and Governance: Latest Developments and Market Impact',
    excerpt: 'Recent advancements in AI ethics and governance are reshaping industries across India and globally. Experts predict significant market growth in the coming years.',
    author: 'AI News Network via India AI News',
    date: '2026-02-03',
    readTime: '6 min read',
    category: 'AI',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    tags: ['AI Ethics', 'AI', 'Technology', 'Innovation'],
  }
];

const categories = [
  'All', 'Technology', 'Business', 'AI Ethics', 'Startups', 'Government', 'Research', 'Industry'
];

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center py-16">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Daily AI Insights & News
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Fresh perspectives, industry updates, and expert analysis on AI transformation in Indian businesses
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
                  <User className="h-4 w-4 text-gray-500 mr-2" />
                  <span className="text-sm text-gray-600">{blogPosts[0].author}</span>
                  <span className="mx-2 text-gray-300">•</span>
                  <span className="text-sm text-gray-600">{blogPosts[0].readTime}</span>
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
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <User className="h-4 w-4 text-gray-500 mr-1" />
                    <span className="text-xs text-gray-600">{post.author}</span>
                  </div>
                  <span className="text-xs text-gray-500">{post.readTime}</span>
                </div>
                
                <div className="mt-4 flex flex-wrap gap-1">
                  {post.tags.map((tag, index) => (
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
                    <Bookmark className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-primary-600 to-indigo-700 rounded-xl p-8 text-white mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Subscribe to Daily AI Insights</h2>
            <p className="mb-6 text-primary-100">
              Get the latest articles, industry updates, and expert analysis delivered to your inbox daily.
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
            {['AI in India', 'Machine Learning', 'Business Automation', 'Retail AI', 'FinTech', 'Agriculture Tech', 'Predictive Analytics', 'RPA', 'Digital Transformation', 'AI Ethics', 'NLP', 'Computer Vision', 'AI Startups', 'AI Policy'].map((tag, index) => (
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