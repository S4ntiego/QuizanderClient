/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["lh3.googleusercontent.com", "d16toh0t29dtt4.cloudfront.net"],
  },
};

module.exports = nextConfig;
