import type { NextConfig } from "next";

const isStaticExport = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  // Generate a portable static site in `out/` for AWS Amplify Hosting or any
  // standard static web server. Next.js creates `out/index.html` at build time.
  output: isStaticExport ? "export" : undefined,
  trailingSlash: isStaticExport,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
