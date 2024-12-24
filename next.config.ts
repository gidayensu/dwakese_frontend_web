import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images : {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.media.amplience.net',
        port: '',
        pathname: 'i/**',
        search: ''
      }
    ]
  }
};

export default nextConfig;
