import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, Copyright } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      heading: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Careers', href: '#' },
        { name: 'Contact', href: '/contact' },
      ],
    },
    {
      heading: 'Solutions',
      links: [
        { name: 'IT Automation', href: '/services' },
        { name: 'Finance AI', href: '/services' },
        { name: 'Agriculture Tech', href: '/services' },
        { name: 'Retail Intelligence', href: '/services' },
        { name: 'Business Automation', href: '/services' },
      ],
    },
    {
      heading: 'Resources',
      links: [
        { name: 'Blog', href: '/blog' },
        { name: 'AI Insights', href: '/blog' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Documentation', href: '#' },
        { name: 'Help Center', href: '#' },
      ],
    },
    {
      heading: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Cookie Policy', href: '#' },
        { name: 'GDPR Compliance', href: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand and Contact Info */}
          <div className="lg:col-span-2">
            <div className="flex flex-col">
              <Link href="/" className="text-2xl font-bold text-white mb-4">Eigur</Link>
              <p className="text-gray-400 mb-4">
                Transforming Indian businesses with cutting-edge AI solutions. 
                We help companies leverage artificial intelligence to drive growth and innovation.
              </p>
              
              <div className="flex space-x-4 mt-4">
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Instagram className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
                {section.heading}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <Link 
                      href={link.href} 
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                <span className="text-gray-400">New Delhi 110001, India</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                <span className="text-gray-400">+91 98765 43210</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                <span className="text-gray-400">support@eigur.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center">
            <Copyright className="h-4 w-4 mr-1" />
            <span className="text-gray-400 text-sm">
              {currentYear} Eigur AI Solutions. All rights reserved.
            </span>
          </div>
          
          <div className="mt-4 md:mt-0">
            <p className="text-gray-400 text-sm">
              Built with ❤️ for Indian businesses
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;