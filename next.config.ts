import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["pluspng.com"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },

};

export default nextConfig;
