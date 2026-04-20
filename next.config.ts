import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for Cloudflare Pages
  output: 'export',
  
  // Disable image optimization for static export (use external service or local)
  images: {
    unoptimized: true,
  },
  
  // trailingSlash for better static hosting compatibility
  trailingSlash: true,
  
  // Enable React strict mode
  reactStrictMode: true,
  
  // Set base path if needed for subdirectory deployment
  // basePath: '',
  
  // Enable the experimental features for Next.js 15+
  experimental: {
    // Enable ppr for partial prerendering
    ppr: true,
  },
};

export default nextConfig;