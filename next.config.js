/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Enable React Strict Mode
  reactStrictMode: true,
  // Enable webpack 5
  webpack5: true,
  // Enable SWC minification
  swcMinify: true,
}

module.exports = nextConfig
