import { Shield, Wrench, BarChart3, Building, Leaf, ShoppingBag, CreditCard, Users, Smartphone, Factory } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      title: 'IT Process Automation',
      description: 'Automate repetitive IT tasks and processes to reduce costs and improve efficiency.',
      icon: <Wrench className="h-10 w-10 text-primary-500" />,
      industries: ['Tech', 'Finance', 'Healthcare'],
      features: ['Robotic Process Automation', 'Intelligent Document Processing', 'Automated Testing'],
    },
    {
      title: 'Financial AI Solutions',
      description: 'Transform financial processes with AI-driven insights, fraud detection, and automation.',
      icon: <CreditCard className="h-10 w-10 text-primary-500" />,
      industries: ['Banking', 'Insurance', 'Fintech'],
      features: ['Fraud Detection', 'Risk Assessment', 'Portfolio Management'],
    },
    {
      title: 'Agriculture Intelligence',
      description: 'Optimize farming operations with AI-powered crop monitoring and livestock management.',
      icon: <Leaf className="h-10 w-10 text-primary-500" />,
      industries: ['Agriculture', 'Food Processing', 'Agri-Fintech'],
      features: ['Crop Health Monitoring', 'Yield Prediction', 'Supply Chain Optimization'],
    },
    {
      title: 'Retail Intelligence',
      description: 'Drive sales and customer satisfaction with AI-powered retail solutions.',
      icon: <ShoppingBag className="h-10 w-10 text-primary-500" />,
      industries: ['E-commerce', 'FMCG', 'Fashion'],
      features: ['Demand Forecasting', 'Personalized Recommendations', 'Inventory Management'],
    },
    {
      title: 'Business Automation',
      description: 'Streamline operations across departments with AI-powered automation tools.',
      icon: <Factory className="h-10 w-10 text-primary-500" />,
      industries: ['Manufacturing', 'Logistics', 'Energy'],
      features: ['Workflow Automation', 'Predictive Maintenance', 'Resource Optimization'],
    },
    {
      title: 'Customer Experience AI',
      description: 'Enhance customer interactions with intelligent chatbots and sentiment analysis.',
      icon: <Users className="h-10 w-10 text-primary-500" />,
      industries: ['Hospitality', 'Telecom', 'Education'],
      features: ['Intelligent Chatbots', 'Sentiment Analysis', 'Personalization Engine'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center py-16">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            AI Solutions for Indian Businesses
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Comprehensive AI-powered services tailored to transform your business operations
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-center h-16 w-16 rounded-md bg-primary-100 text-primary-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="mt-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Industries:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.industries.map((industry, idx) => (
                      <span 
                        key={idx} 
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800"
                      >
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Key Features:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Industries Section */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Industries We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'Information Technology', icon: <Shield className="h-8 w-8 text-primary-500" /> },
              { name: 'Financial Services', icon: <BarChart3 className="h-8 w-8 text-primary-500" /> },
              { name: 'Agriculture', icon: <Leaf className="h-8 w-8 text-primary-500" /> },
              { name: 'Retail & E-commerce', icon: <ShoppingBag className="h-8 w-8 text-primary-500" /> },
              { name: 'Manufacturing', icon: <Factory className="h-8 w-8 text-primary-500" /> },
              { name: 'Healthcare', icon: <Shield className="h-8 w-8 text-primary-500" /> },
              { name: 'Telecommunications', icon: <Smartphone className="h-8 w-8 text-primary-500" /> },
              { name: 'Energy', icon: <Factory className="h-8 w-8 text-primary-500" /> },
            ].map((industry, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 text-primary-600 mx-auto">
                  {industry.icon}
                </div>
                <h3 className="mt-2 text-sm font-medium text-gray-900">{industry.name}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="py-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Service Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Discovery', desc: 'Understand your business challenges and opportunities' },
              { step: '2', title: 'Strategy', desc: 'Design a customized AI solution for your needs' },
              { step: '3', title: 'Development', desc: 'Build and test the AI solution with your team' },
              { step: '4', title: 'Deployment', desc: 'Launch and monitor for optimal performance' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary-100 text-primary-600 text-lg font-bold mx-auto">
                  {item.step}
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-gradient-to-r from-primary-600 to-indigo-700 rounded-xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="mt-4 text-lg text-primary-100">
              Schedule a consultation with our AI experts to discuss your business needs.
            </p>
            <div className="mt-8">
              <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-primary-600 bg-white hover:bg-gray-50">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;