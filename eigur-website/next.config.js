/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'images.unsplash.com', 
      'via.placeholder.com',
      'localhost',
      'www.eigur.in',
      'eigur.in'
    ],
    formats: ['image/webp', 'image/avif'],
  },
  async redirects() {
    return [
      // Redirect from old blog URLs to new ones
      {
        source: '/blog/:slug*',
        destination: '/blog/:slug*',
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        // Apply security headers to all routes
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ]
  },
};

module.exports = nextConfig;