import { Briefcase, Target, Globe, Award, Users, TrendingUp } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      title: 'Innovation',
      description: 'We constantly push the boundaries of what\'s possible with AI technology.',
      icon: <TrendingUp className="h-8 w-8 text-primary-500" />,
    },
    {
      title: 'Excellence',
      description: 'We deliver the highest quality solutions tailored to your business needs.',
      icon: <Award className="h-8 w-8 text-primary-500" />,
    },
    {
      title: 'Integrity',
      description: 'We maintain transparency and honesty in all our business relationships.',
      icon: <Briefcase className="h-8 w-8 text-primary-500" />,
    },
  ];

  const stats = [
    { value: '50+', label: 'Industry Experts' },
    { value: '100+', label: 'Projects Delivered' },
    { value: '25+', label: 'Indian Cities Served' },
    { value: '98%', label: 'Client Retention Rate' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center py-16">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Transforming Indian Businesses with AI
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            We are a team of passionate AI engineers and business consultants dedicated to helping Indian companies leverage artificial intelligence for growth and innovation.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-4">
                At Eigur, we believe that AI should be accessible and beneficial to every business, regardless of size. Our mission is to democratize AI technology for the Indian market by providing affordable, scalable, and impactful solutions.
              </p>
              <p className="text-lg text-gray-700">
                We focus on creating AI solutions that solve real business problems and deliver measurable results. Our approach combines deep technical expertise with industry knowledge to create solutions that truly make a difference.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 flex items-center justify-center">
              <Globe className="h-48 w-48 text-primary-500" />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-extrabold text-primary-600">{stat.value}</p>
                <p className="mt-2 text-lg text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="py-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center justify-center h-16 w-16 rounded-md bg-primary-100 text-primary-600 mx-auto">
                  {value.icon}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900 text-center">{value.title}</h3>
                <p className="mt-2 text-gray-600 text-center">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="py-16 bg-white rounded-xl shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Meet Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Founder Profile */}
            <div className="text-center">
              <div className="mx-auto bg-gray-200 rounded-xl w-32 h-32 overflow-hidden flex items-center justify-center">
                <img 
                  src="https://profile-images.xing.com/images/7c72fc81f49f06a3e9b2d4de0adbacc6-2/rohit-dhiwan.1024x1024.jpg" 
                  alt="Rohit Dhiwan - Founder and CEO" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Rohit Dhiwan</h3>
              <p className="text-gray-600">Founder and CEO</p>
              <p className="mt-2 text-sm text-gray-500">
                Visionary leader with expertise in AI and business transformation. Dedicated to bringing innovative AI solutions to Indian businesses.
              </p>
            </div>
            
            {/* New Leadership Members */}
            <div className="text-center">
              <div className="mx-auto bg-gray-200 rounded-xl w-32 h-32 overflow-hidden">
                <img 
                  src="/media/file_1---012cc25f-4340-4588-98ff-8825f4277ca4.jpg" 
                  alt="Riya Oberoi - Chief Technology Officer" 
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center top' }}
                />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Riya Oberoi</h3>
              <p className="text-gray-600">Chief Technology Officer</p>
              <p className="mt-2 text-sm text-gray-500">
                Technology visionary with deep expertise in AI architectures and scalable systems for enterprise solutions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto bg-gray-200 rounded-xl w-32 h-32 overflow-hidden">
                <img 
                  src="/media/file_2---977356aa-1dec-4b2e-9f3b-b57d50df84c1.jpg" 
                  alt="Karan Joshi - Chief Product Officer" 
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center top' }}
                />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Karan Joshi</h3>
              <p className="text-gray-600">Chief Product Officer</p>
              <p className="mt-2 text-sm text-gray-500">
                Product strategist focused on creating AI solutions that deliver real business value for Indian enterprises.
              </p>
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-100 rounded-lg p-6 flex items-center justify-center">
              <Target className="h-48 w-48 text-primary-500" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-700 mb-4">
                We envision a future where every Indian business leverages AI to unlock unprecedented growth and innovation. Our vision is to become the leading AI solutions provider in India, recognized for our impact on the growth of thousands of businesses across diverse industries.
              </p>
              <p className="text-lg text-gray-700">
                We aim to bridge the gap between cutting-edge AI technology and practical business applications, making advanced solutions accessible to businesses of all sizes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;