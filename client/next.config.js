/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["cdn.discordapp.com", "i.imgur.com", "dr.savee-cdn.com"],
  },
};

module.exports = nextConfig;
