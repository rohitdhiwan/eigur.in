import { Calendar, User, Tag, ArrowRight, Search, Filter, Bookmark } from 'lucide-react';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Indian Agriculture',
      excerpt: 'Exploring how artificial intelligence is revolutionizing farming practices across rural India, increasing yields and reducing waste.',
      author: 'Dr. Priya Sharma',
      date: 'January 15, 2026',
      readTime: '6 min read',
      category: 'Agriculture',
      image: 'https://images.unsplash.com/photo-1464226183484-2ad46a67bbd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      tags: ['AI', 'Agriculture', 'India', 'Innovation']
    },
    {
      id: 2,
      title: 'Transforming Indian Banking with Machine Learning',
      excerpt: 'How ML algorithms are helping Indian banks detect fraud, assess credit risk, and personalize customer experiences.',
      author: 'Rajesh Kumar',
      date: 'January 10, 2026',
      readTime: '8 min read',
      category: 'Finance',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      tags: ['ML', 'Banking', 'Finance', 'Security']
    },
    {
      id: 3,
      title: 'Retail Revolution: AI-Powered Customer Experiences',
      excerpt: 'Examining how AI is reshaping retail experiences in India, from personalized recommendations to inventory management.',
      author: 'Anita Desai',
      date: 'January 5, 2026',
      readTime: '5 min read',
      category: 'Retail',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      tags: ['AI', 'Retail', 'Customer Experience', 'E-commerce']
    },
    {
      id: 4,
      title: 'The Rise of Intelligent Automation in Indian IT',
      excerpt: 'Understanding how RPA and AI are transforming IT operations and business processes across Indian enterprises.',
      author: 'Vikram Patel',
      date: 'December 28, 2025',
      readTime: '7 min read',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      tags: ['Automation', 'IT', 'RPA', 'Business']
    },
    {
      id: 5,
      title: 'AI Ethics and Governance in Indian Context',
      excerpt: 'Exploring the ethical considerations and governance frameworks for implementing AI in India\'s diverse business landscape.',
      author: 'Dr. Suresh Nair',
      date: 'December 20, 2025',
      readTime: '10 min read',
      category: 'Ethics',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      tags: ['Ethics', 'Governance', 'AI Policy', 'Regulation']
    },
    {
      id: 6,
      title: 'Manufacturing Excellence Through Predictive Analytics',
      excerpt: 'How predictive analytics is enabling Indian manufacturers to optimize production and reduce downtime.',
      author: 'Meera Iyer',
      date: 'December 15, 2025',
      readTime: '6 min read',
      category: 'Manufacturing',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      tags: ['Analytics', 'Manufacturing', 'Predictive', 'Optimization']
    }
  ];

  const categories = [
    'All', 'Technology', 'Finance', 'Agriculture', 'Retail', 'Manufacturing', 'Ethics', 'Case Studies'
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center py-16">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            AI Insights & Perspectives
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Expert analysis, trends, and case studies on AI transformation in Indian businesses
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
                    : 'bg-white text-gray-700 hover:bg-gray-100'
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
            <h2 className="text-2xl font-bold mb-4">Subscribe to Our AI Insights</h2>
            <p className="mb-6 text-primary-100">
              Get the latest articles, case studies, and industry insights delivered to your inbox weekly.
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
            {['AI in India', 'Machine Learning', 'Business Automation', 'Retail AI', 'FinTech', 'Agriculture Tech', 'Predictive Analytics', 'RPA', 'Digital Transformation', 'AI Ethics'].map((tag, index) => (
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