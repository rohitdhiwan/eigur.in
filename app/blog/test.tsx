import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const SimpleBlogPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-16">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Simple Blog Page
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            This is a simple blog page without any complex routing
          </p>
        </div>
        
        <div className="text-center">
          <Link 
            href="/" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
          >
            Back to Home
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SimpleBlogPage;