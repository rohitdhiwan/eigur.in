import { ArrowRight, BarChart3, TrendingUp, Target, Award, Users, DollarSign } from 'lucide-react';
import Link from 'next/link';

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered E-commerce Transformation',
      company: 'ShoppersStop Ltd.',
      industry: 'Retail',
      location: 'Mumbai, India',
      challenge: 'High cart abandonment rate and poor personalization',
      solution: 'Implemented AI recommendation engine and dynamic pricing model',
      results: [
        '45% increase in conversion rate',
        '32% reduction in cart abandonment',
        '60% improvement in average order value'
      ],
      impact: '₹2.5 Cr additional annual revenue',
      timeline: '6 months',
      technologies: ['Recommendation AI', 'Predictive Analytics', 'NLP']
    },
    {
      id: 2,
      title: 'Automated Financial Compliance',
      company: 'SecureBank Pvt. Ltd.',
      industry: 'Banking',
      location: 'Bangalore, India',
      challenge: 'Manual compliance checking consuming 400+ hours/month',
      solution: 'Deployed AI document processing and anomaly detection system',
      results: [
        '95% reduction in manual processing time',
        '99.2% accuracy in compliance detection',
        'Zero compliance violations in 12 months'
      ],
      impact: '₹1.8 Cr annual cost savings',
      timeline: '8 months',
      technologies: ['Document AI', 'Anomaly Detection', 'NLP']
    },
    {
      id: 3,
      title: 'AI-Driven Supply Chain Optimization',
      company: 'AgriFresh Exports',
      industry: 'Agriculture',
      location: 'Pune, India',
      challenge: 'Post-harvest losses of 25-30% due to inefficient logistics',
      solution: 'Built predictive analytics for demand forecasting and route optimization',
      results: [
        '40% reduction in post-harvest losses',
        '28% improvement in delivery efficiency',
        '15% increase in export volumes'
      ],
      impact: '₹3.2 Cr additional annual revenue',
      timeline: '10 months',
      technologies: ['Predictive Analytics', 'IoT Integration', 'Computer Vision']
    },
    {
      id: 4,
      title: 'Intelligent Customer Support System',
      company: 'Connect Telecom',
      industry: 'Telecommunications',
      location: 'Delhi, India',
      challenge: 'High call volume overwhelming customer service team',
      solution: 'Deployed multilingual AI chatbot and sentiment analysis',
      results: [
        '65% of queries handled automatically',
        '40% reduction in average resolution time',
        '85% customer satisfaction rate'
      ],
      impact: '₹1.2 Cr annual cost savings',
      timeline: '4 months',
      technologies: ['NLP', 'Sentiment Analysis', 'Speech Recognition']
    },
    {
      id: 5,
      title: 'AI-Powered Fraud Detection',
      company: 'QuickPay Fintech',
      industry: 'Fintech',
      location: 'Hyderabad, India',
      challenge: 'Rising transaction fraud costing ₹50L+ annually',
      solution: 'Implemented real-time ML-based fraud detection system',
      results: [
        '85% reduction in fraudulent transactions',
        '99.5% accuracy in fraud detection',
        '25% reduction in false positives'
      ],
      impact: '₹4.2 Cr fraud prevention annually',
      timeline: '5 months',
      technologies: ['Machine Learning', 'Real-time Analytics', 'Pattern Recognition']
    },
    {
      id: 6,
      title: 'Predictive Maintenance for Manufacturing',
      company: 'SteelTech Industries',
      industry: 'Manufacturing',
      location: 'Jamshedpur, India',
      challenge: 'Unplanned downtime costing ₹80L+ monthly',
      solution: 'Deployed IoT sensors with ML-based predictive maintenance',
      results: [
        '60% reduction in unplanned downtime',
        '35% decrease in maintenance costs',
        '25% increase in equipment lifespan'
      ],
      impact: '₹2.1 Cr annual savings',
      timeline: '7 months',
      technologies: ['IoT Sensors', 'Machine Learning', 'Predictive Analytics']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center py-16">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            AI Success Stories
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Real results from real businesses leveraging our AI solutions
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="flex items-center justify-center">
              <Target className="h-8 w-8 text-primary-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900 mt-2">100+</p>
            <p className="text-gray-600">Projects Delivered</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="flex items-center justify-center">
              <Users className="h-8 w-8 text-primary-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900 mt-2">50+</p>
            <p className="text-gray-600">Happy Clients</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="flex items-center justify-center">
              <Award className="h-8 w-8 text-primary-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900 mt-2">25+</p>
            <p className="text-gray-600">Indian Cities</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="flex items-center justify-center">
              <DollarSign className="h-8 w-8 text-primary-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900 mt-2">₹150 Cr+</p>
            <p className="text-gray-600">Value Generated</p>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((study) => (
            <div key={study.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                    {study.industry}
                  </span>
                  <span className="text-xs text-gray-500">{study.location}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{study.title}</h3>
                <p className="text-gray-600 mb-2 font-medium">{study.company}</p>
                
                <div className="mt-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-1">Challenge:</h4>
                  <p className="text-sm text-gray-600">{study.challenge}</p>
                </div>
                
                <div className="mt-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-1">Solution:</h4>
                  <p className="text-sm text-gray-600">{study.solution}</p>
                </div>
                
                <div className="mt-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Key Results:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                    {study.results.map((result, idx) => (
                      <li key={idx}>{result}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Impact:</span>
                    <span className="font-medium text-primary-600">{study.impact}</span>
                  </div>
                  <div className="flex justify-between text-sm mt-1">
                    <span className="text-gray-600">Timeline:</span>
                    <span className="text-gray-600">{study.timeline}</span>
                  </div>
                </div>
                
                <div className="mt-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-1">
                    {study.technologies.map((tech, idx) => (
                      <span key={idx} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-6">
                  <button className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700">
                    View Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-gradient-to-r from-primary-600 to-indigo-700 rounded-xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="mt-4 text-lg text-primary-100">
              Join hundreds of Indian businesses that have achieved remarkable results with our AI solutions.
            </p>
            <div className="mt-8">
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
      </div>
    </div>
  );
};

export default CaseStudiesPage;