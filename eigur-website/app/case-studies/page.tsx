import { ArrowUpRight, Building2, DollarSign, TrendingUp, Users, Clock, CheckCircle } from 'lucide-react';

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'Retail Chain Transforms Inventory Management',
      company: 'Shoppers Stop Ltd.',
      industry: 'Retail',
      challenge: 'High inventory costs and frequent stockouts',
      solution: 'AI-powered demand forecasting and inventory optimization system',
      results: [
        'Reduced inventory costs by 28%',
        'Decreased stockouts by 45%',
        'Improved cash flow by 32%'
      ],
      timeline: '4 months',
      investment: '$75,000',
      roi: '340%'
    },
    {
      id: 2,
      title: 'Banking Sector Fraud Detection Enhancement',
      company: 'SecureBank India',
      industry: 'Finance',
      challenge: 'Rising fraudulent transactions',
      solution: 'Machine learning-based fraud detection system',
      results: [
        'Detected 98% of fraudulent transactions',
        'Reduced false positives by 60%',
        'Saved ₹15 crores annually'
      ],
      timeline: '6 months',
      investment: '$120,000',
      roi: '520%'
    },
    {
      id: 3,
      title: 'Agriculture Supply Chain Optimization',
      company: 'FarmFresh Agro',
      industry: 'Agriculture',
      challenge: 'Post-harvest losses and inefficient logistics',
      solution: 'AI-driven supply chain and logistics optimization',
      results: [
        'Reduced post-harvest losses by 35%',
        'Optimized delivery routes saving 22% fuel costs',
        'Increased farmer income by 18%'
      ],
      timeline: '5 months',
      investment: '$50,000',
      roi: '280%'
    },
    {
      id: 4,
      title: 'Manufacturing Predictive Maintenance',
      company: 'Precision Engineering Ltd.',
      industry: 'Manufacturing',
      challenge: 'Unexpected equipment failures and downtime',
      solution: 'IoT sensors with AI-powered predictive maintenance',
      results: [
        'Reduced unplanned downtime by 42%',
        'Decreased maintenance costs by 25%',
        'Extended equipment lifespan by 15%'
      ],
      timeline: '7 months',
      investment: '$95,000',
      roi: '380%'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center py-16">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Success Stories
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Real results from Indian businesses that transformed with our AI solutions
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-primary-600">50+</div>
            <div className="text-gray-600">Companies Transformed</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-primary-600">₹250 Cr+</div>
            <div className="text-gray-600">Value Generated</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-primary-600">4.8/5</div>
            <div className="text-gray-600">Client Rating</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-primary-600">24</div>
            <div className="text-gray-600">Indian Cities</div>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="space-y-12">
          {caseStudies.map((study) => (
            <div key={study.id} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:flex-shrink-0 md:w-1/3 bg-gray-100 flex items-center justify-center p-8">
                  <div className="text-center">
                    <Building2 className="h-16 w-16 text-primary-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900">{study.company}</h3>
                    <p className="text-gray-600">{study.industry}</p>
                  </div>
                </div>
                <div className="p-8 md:w-2/3">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-gray-900">{study.title}</h2>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                      {study.industry}
                    </span>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Challenge</h3>
                    <p className="text-gray-700">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Solution</h3>
                    <p className="text-gray-700">{study.solution}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-3">Results</h3>
                    <ul className="space-y-2">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-200">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-gray-500 mr-2" />
                      <span className="text-sm text-gray-600">Timeline: {study.timeline}</span>
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="h-5 w-5 text-gray-500 mr-2" />
                      <span className="text-sm text-gray-600">Investment: {study.investment}</span>
                    </div>
                    <div className="flex items-center">
                      <TrendingUp className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-sm font-medium text-green-600">ROI: {study.roi}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-24 bg-gradient-to-r from-primary-600 to-indigo-700 rounded-xl p-8 text-white">
          <h2 className="text-2xl font-bold text-center mb-8">Our Case Study Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: 'Discovery', desc: 'Identify key business challenges and opportunities' },
              { step: 'Analysis', desc: 'Analyze data and determine AI solution fit' },
              { step: 'Implementation', desc: 'Deploy and customize AI solution' },
              { step: 'Results', desc: 'Measure and report ROI and benefits' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-white text-primary-600 text-lg font-bold mx-auto">
                  {index + 1}
                </div>
                <h3 className="mt-4 text-lg font-medium">{item.step}</h3>
                <p className="mt-2 text-primary-100">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready for Your Success Story?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join hundreds of Indian businesses that have transformed with our AI solutions
          </p>
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700">
            Schedule a Consultation
            <ArrowUpRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesPage;