import type { NextConfig } from "next";

// GitHub Pages serves project sites from a sub-path (e.g. /easter-blast),
// while Vercel serves from the domain root. Set NEXT_PUBLIC_BASE_PATH (and
// mirror it below) when building for a GitHub Pages *project* page, e.g.:
//   NEXT_PUBLIC_BASE_PATH=/easter-blast npm run build
// Leave it unset for Vercel or for a GitHub Pages *user/org* page served
// from the root.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: {
    // next/image's default loader needs a server; static export has none.
    unoptimized: true,
  },
};

export default nextConfig;
