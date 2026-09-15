import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
  experimental: {
    turbopackRustReactCompiler: true,
    appNewScrollHandler: true,
    useLightningcss: true,
  },
  compiler: {
    removeConsole: true,
  },
  logging: {
    browserToTerminal: false,
  },
  productionBrowserSourceMaps: false,
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  generateEtags: true,
};

export default nextConfig;
