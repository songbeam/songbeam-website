import type { NextConfig } from "next";

const isStaticExport = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  // Generate a portable static site in `out/` for Netlify, Cloudflare Pages,
  // GitHub Pages (custom domain/root), S3, or any standard static web server.
  output: isStaticExport ? "export" : undefined,
  trailingSlash: isStaticExport,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
