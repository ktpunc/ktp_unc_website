module.exports = {
  distDir: process.env.NEXT_DIST_DIR || ".next",
  turbopack: {},
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 90],
  },
  experimental: {
    // Tree-shake barrel imports (smaller bundles, faster dev cold compile)
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "@radix-ui/react-tooltip",
    ],
  },
};
