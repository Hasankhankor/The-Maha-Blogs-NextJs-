/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imagedelivery.net",
      },
    ],
  },
  redirects: async () => {
    return [];
  },
  env: {
    BLOG_ID: process.env.BLOG_ID, // Example of including an environment variable
  },
};

export default nextConfig;
