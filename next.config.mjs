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
      {
        hostname: "53.fs1.hubspotusercontent-na1.net",
      },
    ],
  },
};

export default nextConfig;
