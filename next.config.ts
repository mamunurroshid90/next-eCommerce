import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
      },
      // Add GitHub avatars domain
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      // Add Google user content domains
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
};

export default nextConfig;
