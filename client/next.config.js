/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["cdn.discordapp.com", "i.imgur.com", "i.pravatar.cc"],
  },
};

module.exports = nextConfig;
