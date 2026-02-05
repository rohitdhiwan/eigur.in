import { notFound } from 'next/navigation';
import { Calendar, User, Tag } from 'lucide-react';

// This would normally come from a CMS or database
const blogPosts = [
  {
    id: 1,
    title: 'The Future of AI in Indian Agriculture',
    excerpt: 'Exploring how artificial intelligence is revolutionizing farming practices across rural India, increasing yields and reducing waste.',
    content: `
      <p>Artificial intelligence is transforming agriculture in India at an unprecedented pace. From precision farming to crop monitoring, AI technologies are helping farmers increase productivity while reducing costs.</p>
      
      <h2>Current Challenges in Indian Agriculture</h2>
      <p>Indian agriculture faces several challenges including climate variability, water scarcity, pest infestations, and market fluctuations. Traditional farming methods often fall short in addressing these complex issues effectively.</p>
      
      <h2>How AI is Making a Difference</h2>
      <p>AI-powered solutions are addressing these challenges through:</p>
      <ul>
        <li>Predictive analytics for weather and crop yields</li>
        <li>Disease and pest detection using computer vision</li>
        <li>Optimized irrigation and fertilizer recommendations</li>
        <li>Supply chain optimization for better market access</li>
      </ul>
      
      <h2>Success Stories</h2>
      <p>Several Indian startups and agtech companies have demonstrated significant improvements in farm productivity through AI interventions. Farmers using these technologies report yield increases of 15-30% along with reduced input costs.</p>
      
      <h2>Future Outlook</h2>
      <p>The adoption of AI in Indian agriculture is expected to accelerate with government initiatives, increased smartphone penetration, and improved internet connectivity in rural areas. This will democratize access to advanced farming techniques for smallholder farmers.</p>
    `,
    author: 'Dr. Priya Sharma',
    date: 'January 15, 2026',
    readTime: '6 min read',
    category: 'Agriculture',
    image: 'https://images.unsplash.com/photo-1464226183484-2ad46a67bbd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    tags: ['AI', 'Agriculture', 'India', 'Innovation']
  }
];

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.id.toString() === params.slug) || blogPosts[0];
  
  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
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
            {blogPosts.filter(p => p.id !== post.id).map((relatedPost) => (
              <div key={relatedPost.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2">{relatedPost.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{relatedPost.excerpt}</p>
                <div className="flex items-center text-xs text-gray-500">
                  <span>{relatedPost.date}</span>
                  <span className="mx-2">•</span>
                  <span>{relatedPost.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}