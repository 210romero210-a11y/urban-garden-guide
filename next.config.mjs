/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',           // Static HTML export
  trailingSlash: true,
  images: {
    unoptimized: true,        // Required for static export on Cloudflare
  },
  reactStrictMode: true,
};

export default nextConfig;
