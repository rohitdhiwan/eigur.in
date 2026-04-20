/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.unsplash.com',
      'via.placeholder.com',
      'localhost',
      'www.eigur.in',
      'eigur.in',
      'lh3.googleusercontent.com',        // Google profile images
      'avatars.githubusercontent.com',     // GitHub profile images
      'graph.microsoft.com',              // Microsoft profile images
    ],
    formats: ['image/webp', 'image/avif'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy',         value: 'strict-origin-when-cross-origin' },
          { key: 'X-XSS-Protection',        value: '1; mode=block' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
