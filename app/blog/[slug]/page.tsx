import { notFound } from 'next/navigation';
import { Calendar, User, Tag, ArrowLeft } from 'lucide-react';

// Generate daily AI news content
const generateDailyAIBlogs = () => {
  const topics = [
    "Generative AI in Business",
    "Machine Learning Trends",
    "AI Ethics and Governance",
    "Natural Language Processing",
    "Computer Vision Applications",
    "AI in Healthcare",
    "AI in Finance",
    "AI in Agriculture",
    "AI in Retail",
    "AI in Manufacturing",
    "AI Startups in India",
    "AI Regulation Updates",
    "AI and Climate Change",
    "AI for Social Good",
    "Quantum Computing and AI"
  ];

  const sources = [
    "TechCrunch",
    "MIT Technology Review", 
    "AI Research Journal",
    "India AI News",
    "VentureBeat AI",
    "The Hindu Business Line",
    "Economic Times AI",
    "Times of India Tech",
    "YourStory AI",
    "Inc42 AI"
  ];

  const blogs = [];
  const today = new Date();
  
  for (let i = 0; i < 20; i++) {
    const blogDate = new Date(today);
    blogDate.setDate(today.getDate() - i);
    
    const topic = topics[Math.floor(Math.random() * topics.length)];
    const source = sources[Math.floor(Math.random() * sources.length)];
    
    blogs.push({
      id: i + 1,
      title: `${topic}: Latest Developments and Market Impact`,
      excerpt: `Recent advancements in ${topic.toLowerCase()} are reshaping industries across India and globally. Experts predict significant market growth in the coming years.`,
      content: `Artificial Intelligence continues to evolve at a rapid pace, with new developments emerging daily. In this article, we explore the latest trends in ${topic.toLowerCase()} and their implications for businesses and society.

The Indian AI market is experiencing unprecedented growth, with investments reaching record highs. Government initiatives and private sector innovations are driving adoption across sectors including healthcare, finance, agriculture, and retail.

${topic.toLowerCase()} technologies are proving particularly valuable for Indian businesses looking to optimize operations, reduce costs, and improve customer experiences. From chatbots to predictive analytics, AI solutions are transforming traditional business models.

Experts suggest that ${topic.toLowerCase()} will play a crucial role in India's digital transformation journey. The convergence of AI with other technologies like IoT, blockchain, and 5G is creating new opportunities for innovation.

However, challenges remain, including data privacy concerns, ethical considerations, and the need for skilled professionals. Organizations are increasingly focusing on responsible AI development and deployment practices.

Looking ahead, the ${topic.toLowerCase()} landscape in India appears promising, with continued investment in research and development. The government's focus on digital infrastructure and AI policy frameworks is expected to accelerate adoption further.

Indian startups and established companies alike are leveraging ${topic.toLowerCase()} to solve local challenges and compete globally. The ecosystem is maturing rapidly, with increased collaboration between academia, industry, and government agencies.

As we move forward, staying informed about ${topic.toLowerCase()} developments will be crucial for businesses seeking competitive advantages. The pace of change requires continuous learning and adaptation strategies.

This article is part of our daily coverage of AI developments in India and globally. Stay tuned for more insights and analysis on emerging trends and their business implications.

Additional considerations for organizations looking to adopt ${topic.toLowerCase()} include talent acquisition, infrastructure requirements, and change management. Companies that invest early in these areas are likely to gain significant competitive advantages.

The regulatory landscape for AI is also evolving, with new guidelines and frameworks being introduced regularly. Staying compliant while maintaining innovation momentum requires careful planning and expert guidance.

International collaborations and partnerships are playing an increasingly important role in advancing ${topic.toLowerCase()} research and applications. Indian organizations are well-positioned to benefit from these global connections.

Market projections indicate continued strong growth in the ${topic.toLowerCase()} sector, with particular strength in enterprise applications. The return on investment for well-implemented solutions often exceeds expectations, justifying the initial investment in technology and talent.

In conclusion, ${topic.toLowerCase()} represents both an opportunity and a challenge for Indian businesses. Those that approach it strategically and systematically are most likely to achieve sustainable success.`,
      author: `AI News Network via ${source}`,
      date: blogDate.toISOString().split('T')[0],
      readTime: `${Math.floor(Math.random() * 8) + 3} min read`,
      category: topic.split(' ')[0], // Extract main category
      image: `https://images.unsplash.com/photo-${Math.floor(Math.random() * 1000)}?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80`,
      tags: [topic, 'AI', 'Technology', 'Innovation'],
      slug: `${topic.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '')}-${i+1}`
    });
  }
  
  return blogs;
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const blogPosts = generateDailyAIBlogs();
  const post = blogPosts.find(p => p.slug === params.slug) || blogPosts[0];
  
  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <a href="/blog" className="inline-flex items-center text-primary-600 hover:text-primary-800">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </a>
        </div>
        
        <article className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="relative h-64 md:h-96">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-8">
            <div className="flex items-center mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                {post.category}
              </span>
              <div className="ml-4 flex items-center text-sm text-gray-500">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{post.date}</span>
              </div>
              <div className="ml-4 flex items-center text-sm text-gray-500">
                <User className="h-4 w-4 mr-1" />
                <span>{post.author}</span>
              </div>
              <span className="ml-4 text-sm text-gray-500">{post.readTime}</span>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>
            <p className="text-xl text-gray-600 mb-6">{post.excerpt}</p>
            
            <div className="prose prose-lg max-w-none mb-8">
              <div className="text-gray-700 whitespace-pre-line">
                {post.content}
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>
        
        <div className="mt-12 bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {generateDailyAIBlogs().filter(p => p.id !== post.id).slice(0, 2).map((relatedPost) => (
              <a key={relatedPost.id} href={`/blog/${relatedPost.slug}`} className="block border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2">{relatedPost.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{relatedPost.excerpt}</p>
                <div className="flex items-center text-xs text-gray-500">
                  <span>{relatedPost.date}</span>
                  <span className="mx-2">•</span>
                  <span>{relatedPost.readTime}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}