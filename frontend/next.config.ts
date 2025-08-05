import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Performance optimizations for Core Web Vitals
  experimental: {
    optimizePackageImports: ['@mui/material', '@mui/icons-material', 'framer-motion'],
  },
  
  // ESLint configuration - ignore errors for now
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // TypeScript configuration - ignore errors for now
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Output configuration for Vercel
  output: 'standalone',
  
  // Enhanced Image optimization for Core Web Vitals
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    // Enable lazy loading
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Optimize for Core Web Vitals
    unoptimized: false,
    loader: 'default',
  },

  // Bundle analyzer
  ...(process.env.ANALYZE === 'true' && {
    webpack: (config, { isServer }) => {
      if (!isServer) {
        const { BundleAnalyzerPlugin } = require('@next/bundle-analyzer');
        config.plugins.push(
          new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: false,
            reportFilename: './bundle-analysis.html',
          })
        );
      }
      return config;
    },
  }),

  // Compression
  compress: true,

  // Powered by header
  poweredByHeader: false,
};

export default nextConfig;
