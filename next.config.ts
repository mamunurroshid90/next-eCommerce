import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "dummyjson.com", // Add this for your product images
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: false, // Keep this false for proper type checking
  },
  eslint: {
    ignoreDuringBuilds: false, // Keep this false for proper linting
  },
};

export default nextConfig;
