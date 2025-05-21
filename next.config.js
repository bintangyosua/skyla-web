/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      "images-ext-1.discordapp.net",
      "media.discordapp.net",
      "cdn.discordapp.com",
    ],
  },
};

module.exports = nextConfig;
