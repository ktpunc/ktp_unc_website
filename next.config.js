module.exports = {
  distDir: process.env.NEXT_DIST_DIR || ".next",
  turbopack: {},
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 85],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 192, 256],
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
