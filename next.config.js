/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: { domains: ["https://dev.to/", "res.cloudinary.com"] },
};

module.exports = nextConfig;
