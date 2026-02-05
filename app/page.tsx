import Link from 'next/link';
import { ArrowRight, Zap, Globe, Award, Users, Sparkles, ChevronRight } from 'lucide-react';

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