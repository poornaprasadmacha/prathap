/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'images.indianexpress.com',
      },
      {
        protocol: 'https',
        hostname: 'exchange4media.gumlet.io',
      },
    ],
    unoptimized: true, // Ensured high compatibility across static hosts / Cloudflare Pages
  },
};

export default nextConfig;
