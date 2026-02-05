import Link from 'next/link';
import { ArrowRight, Zap, Globe, Award, Users, Sparkles, ChevronRight, Cpu, BarChart3 } from 'lucide-react';

const HomePage = () => {
  const services = [
    {
      title: 'IT Automation',
      description: 'Streamline your IT operations with intelligent automation solutions.',
      icon: <Zap className="h-8 w-8 text-primary-500" />,
    },
    {
      title: 'Finance AI',
      description: 'Transform financial processes with AI-driven insights and automation.',
      icon: <Globe className="h-8 w-8 text-primary-500" />,
    },
    {
      title: 'Agriculture Tech',
      description: 'Revolutionize farming with AI-powered crop and livestock management.',
      icon: <Award className="h-8 w-8 text-primary-500" />,
    },
    {
      title: 'Retail Intelligence',
      description: 'Optimize retail operations with predictive analytics and customer insights.',
      icon: <Users className="h-8 w-8 text-primary-500" />,
    },
  ];

  const stats = [
    { value: '50+', label: 'Clients Served' },
    { value: '100+', label: 'Projects Delivered' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '24/7', label: 'Support Available' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-secondary-50 pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-48 left-0 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-20 right-0 w-72 h-72 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800 mb-4">
              <Sparkles className="mr-2 h-4 w-4" />
              Powered by AI
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-7xl">
              Transform Your Business with{' '}
              <span className="text-primary-600">AI Solutions</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600 sm:mt-6 sm:max-w-3xl">
              Empowering Indian businesses with cutting-edge AI technology to drive growth, efficiency, and innovation.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Our Services
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-extrabold text-primary-600">{stat.value}</p>
                <p className="mt-2 text-lg text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our AI-Powered Services</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
              Tailored solutions for the Indian market across key industries
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 text-primary-600">
                    {service.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">{service.title}</h3>
                  <p className="mt-2 text-base text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Trusted by Industry Leaders
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
              Recognized for excellence in AI innovation and business transformation
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[
              { value: '100+', label: 'Projects Delivered' },
              { value: '50+', label: 'Expert Team' },
              { value: '25+', label: 'Cities Served' },
              { value: '98%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-extrabold text-primary-600">{stat.value}</p>
                <p className="mt-2 text-lg text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 grayscale hover:grayscale-0 transition-all">
            {[
              'Fortune 500',
              'NASSCOM',
              'Startup India',
              'Microsoft AI'
            ].map((partner, index) => (
              <div key={index} className="flex items-center justify-center">
                <div className="bg-white p-4 rounded-lg shadow text-center w-full">
                  <div className="text-lg font-semibold text-gray-800">{partner}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily AI Insights Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Daily AI Insights
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 lg:mx-0">
              Stay updated with the latest developments in AI and their impact on Indian businesses
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-primary-100 rounded-md p-3">
                    <Sparkles className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Latest AI Trends</h3>
                    <p className="mt-1 text-sm text-gray-600">Daily updates on AI developments in India</p>
                  </div>
                </div>
                <p className="mt-4 text-base text-gray-600">
                  Our AI research team curates the most important developments in artificial intelligence every day, focusing on applications relevant to Indian businesses.
                </p>
                <div className="mt-6">
                  <Link 
                    href="/blog" 
                    className="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium"
                  >
                    Read today's insights
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced AI Technologies Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Cutting-Edge AI Technologies
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
              Leveraging the latest in artificial intelligence to solve complex business challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Generative AI',
                description: 'Create content, designs, and solutions with advanced generative models',
                icon: <Sparkles className="h-8 w-8 text-primary-500" />
              },
              {
                title: 'Machine Learning',
                description: 'Predictive models that learn and improve from your business data',
                icon: <Zap className="h-8 w-8 text-primary-500" />
              },
              {
                title: 'Natural Language Processing',
                description: 'Understand and process human language for enhanced customer experiences',
                icon: <Globe className="h-8 w-8 text-primary-500" />
              },
              {
                title: 'Computer Vision',
                description: 'Visual recognition systems that interpret and analyze visual data',
                icon: <Award className="h-8 w-8 text-primary-500" />
              },
              {
                title: 'Predictive Analytics',
                description: 'Forecast trends and behaviors to make informed business decisions',
                icon: <Users className="h-8 w-8 text-primary-500" />
              },
              {
                title: 'Robotic Process Automation',
                description: 'Automate repetitive tasks with intelligent software robots',
                icon: <Zap className="h-8 w-8 text-primary-500" />
              }
            ].map((tech, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    {tech.icon}
                  </div>
                  <h3 className="ml-4 text-lg font-medium text-gray-900">{tech.title}</h3>
                </div>
                <p className="mt-4 text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Excellence Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Why Choose Our AI Solutions?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
              Proven expertise in delivering transformative AI solutions for Indian businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Proven Track Record',
                description: '100+ successful AI implementations across diverse Indian industries',
                icon: <Award className="h-8 w-8 text-primary-500" />
              },
              {
                title: 'Local Expertise',
                description: 'Deep understanding of Indian market dynamics and business challenges',
                icon: <Globe className="h-8 w-8 text-primary-500" />
              },
              {
                title: 'Cutting-Edge Tech',
                description: 'Access to the latest AI technologies and methodologies',
                icon: <Cpu className="h-8 w-8 text-primary-500" />
              },
              {
                title: 'Measurable ROI',
                description: 'Focus on delivering quantifiable business value and ROI',
                icon: <BarChart3 className="h-8 w-8 text-primary-500" />
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary-100 text-primary-600 mx-auto">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-primary-50 to-indigo-50 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Our AI Implementation Approach</h3>
                <p className="mt-4 text-gray-600">
                  We follow a systematic approach to ensure successful AI implementation that delivers real business value.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  'Discovery & Requirements Analysis',
                  'AI Solution Design & Architecture',
                  'Development & Training',
                  'Testing & Validation',
                  'Deployment & Monitoring',
                  'Continuous Optimization'
                ].map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-600 text-white flex items-center justify-center text-xs font-bold mt-0.5">
                      {index + 1}
                    </div>
                    <p className="ml-3 text-gray-700">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unique AI Features & Capabilities */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Advanced AI Capabilities
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
              Cutting-edge technologies that set us apart from the competition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h3 className="ml-4 text-lg font-medium text-gray-900">AI-Powered Predictive Intelligence</h3>
              </div>
              <p className="text-gray-600">
                Advanced algorithms that predict market trends, customer behavior, and business opportunities before they happen.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="ml-4 text-lg font-medium text-gray-900">Ethical AI Framework</h3>
              </div>
              <p className="text-gray-600">
                Our proprietary framework ensures responsible AI deployment with bias mitigation and transparent decision-making.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="ml-4 text-lg font-medium text-gray-900">Real-Time Decision Engine</h3>
              </div>
              <p className="text-gray-600">
                Instantaneous processing of data streams to enable split-second business decisions with maximum accuracy.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center">
                  <Globe className="h-6 w-6" />
                </div>
                <h3 className="ml-4 text-lg font-medium text-gray-900">Multilingual AI Models</h3>
              </div>
              <p className="text-gray-600">
                Custom AI models trained specifically for Indian languages and cultural contexts, ensuring optimal performance.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <h3 className="ml-4 text-lg font-medium text-gray-900">Autonomous Business Optimization</h3>
              </div>
              <p className="text-gray-600">
                Self-learning systems that continuously optimize business processes without human intervention.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center">
                  <Cpu className="h-6 w-6" />
                </div>
                <h3 className="ml-4 text-lg font-medium text-gray-900">Edge AI Deployment</h3>
              </div>
              <p className="text-gray-600">
                Bringing AI capabilities directly to your devices and systems for faster processing and reduced latency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Innovation Lab */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                AI Innovation Lab
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Our dedicated research facility where we develop breakthrough AI solutions tailored specifically for the Indian market. Our lab houses cutting-edge hardware and our top researchers working on next-generation AI applications.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center">
                    <ChevronRight className="h-4 w-4" />
                  </div>
                  <span className="ml-2 text-gray-700">Custom AI Model Development</span>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center">
                    <ChevronRight className="h-4 w-4" />
                  </div>
                  <span className="ml-2 text-gray-700">Proprietary Algorithms</span>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center">
                    <ChevronRight className="h-4 w-4" />
                  </div>
                  <span className="ml-2 text-gray-700">Ethical AI Research</span>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center">
                    <ChevronRight className="h-4 w-4" />
                  </div>
                  <span className="ml-2 text-gray-700">Industry-Specific Solutions</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-primary-500 to-indigo-600 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Our AI Research Achievements</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-4xl font-bold">50+</p>
                  <p>Papers Published in Top AI Conferences</p>
                </div>
                <div>
                  <p className="text-4xl font-bold">12</p>
                  <p>Patents Filed for AI Innovations</p>
                </div>
                <div>
                  <p className="text-4xl font-bold">99.2%</p>
                  <p>Avg. Accuracy in Custom AI Models</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
              Hear from businesses that have transformed with our AI solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Eigur's AI solution helped us reduce operational costs by 35% while improving customer satisfaction scores. Their team's expertise and commitment to our success is unmatched.",
                author: "Rajesh Gupta",
                position: "CTO, TechMahindra Solutions",
                company: "TechMahindra Solutions"
              },
              {
                quote: "Implementing Eigur's retail intelligence platform led to a 42% increase in sales conversion rates. The ROI was evident within the first quarter of deployment.",
                author: "Priya Sharma",
                position: "Head of Digital Strategy",
                company: "Reliance Retail"
              },
              {
                quote: "As a startup, we needed an AI partner who understood our constraints. Eigur delivered a scalable solution that grew with our business, resulting in 3x revenue growth.",
                author: "Amit Patel",
                position: "CEO",
                company: "AgriTech Innovations"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                <div>
                  <p className="font-medium text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.position}, {testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Accreditations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Recognized by Industry Leaders
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
              Our credentials and partnerships that demonstrate our expertise
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {[
              { name: 'Microsoft AI Partner', level: 'Gold Certified' },
              { name: 'Google Cloud AI', level: 'Specialist Partner' },
              { name: 'AWS Machine Learning', level: 'Competency Holder' },
              { name: 'NASSCOM Member', level: 'Premium Tier' },
              { name: 'ISO 27001', level: 'Certified' },
              { name: 'Startup India', level: 'Recognized' }
            ].map((cert, index) => (
              <div key={index} className="text-center">
                <div className="bg-white p-6 rounded-lg shadow text-center h-full">
                  <div className="text-lg font-semibold text-gray-800">{cert.name}</div>
                  <div className="text-sm text-primary-600 mt-2">{cert.level}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to Transform Your Business?
            </h2>
            <p className="mt-4 text-lg text-primary-100">
              Join hundreds of Indian businesses leveraging AI to drive growth and innovation.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-primary-600 bg-white hover:bg-gray-50"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;