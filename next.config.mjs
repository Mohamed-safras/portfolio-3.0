/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn.sanity.io",
      },
      {
        hostname: "assets.aceternity.com",
      },
    ],
  },
};

export default nextConfig;
