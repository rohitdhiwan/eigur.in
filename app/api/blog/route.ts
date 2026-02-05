import { NextRequest, NextResponse } from 'next/server';

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
  
  // Generate 30 days of blog posts
  for (let i = 0; i < 30; i++) {
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
      slug: `${topic.toLowerCase().replace(/\s+/g, '-')}-${i+1}`,
      featured: i < 5 // Mark first 5 as featured
    });
  }
  
  return blogs;
};

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const limit = searchParams.get('limit');
  const featured = searchParams.get('featured');
  const search = searchParams.get('search');
  
  let blogs = generateDailyAIBlogs();
  
  if (category) {
    blogs = blogs.filter(post => 
      post.category.toLowerCase().includes(category.toLowerCase())
    );
  }
  
  if (featured === 'true') {
    blogs = blogs.filter(post => post.featured);
  }
  
  if (search) {
    blogs = blogs.filter(post => 
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase()) ||
      post.content.toLowerCase().includes(search.toLowerCase())
    );
  }
  
  if (limit) {
    const limitNum = parseInt(limit);
    if (!isNaN(limitNum)) {
      blogs = blogs.slice(0, limitNum);
    }
  }
  
  return NextResponse.json({
    success: true,
    posts: blogs,
    total: blogs.length
  });
}

export async function POST(request: NextRequest) {
  // In a real implementation, this would create a new blog post
  const newPostData = await request.json();
  
  if (!newPostData.title || !newPostData.content) {
    return NextResponse.json(
      {
        success: false,
        message: 'Title and content are required'
      },
      { status: 400 }
    );
  }
  
  // Create new post (in a real app, this would save to a database)
  const newPost = {
    id: Date.now(), // Use timestamp as ID
    ...newPostData,
    date: new Date().toISOString().split('T')[0],
    readTime: '5 min read', // This would be calculated in a real app
    slug: newPostData.title.toLowerCase().replace(/\s+/g, '-'),
    featured: false
  };
  
  return NextResponse.json(
    {
      success: true,
      post: newPost
    },
    { status: 201 }
  );
}