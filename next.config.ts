import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Node images are user-uploaded to Firebase Storage at deploy-specific
    // bucket URLs, so we skip the optimizer's domain allowlist instead of
    // hardcoding one project's bucket.
    unoptimized: true,
  },
};

export default nextConfig;
