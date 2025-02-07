/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000'],
    },
  },
  reactStrictMode: false, // This will suppress hydration warnings
  suppressHydrationWarnings: true, // This will suppress hydration warnings
};

module.exports = nextConfig;
