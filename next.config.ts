import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    api: "modern-compiler",
    loadPaths: "@import",
  },
};

export default nextConfig;
