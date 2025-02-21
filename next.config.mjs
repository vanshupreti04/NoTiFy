/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {}, // ✅ Correct format for enabling Turbo (not `false`)
  },
  images: {
    domains: ["images.unsplash.com"], // ✅ Allow external images from Unsplash
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glb|gltf)$/, // ✅ Match .glb and .gltf files
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]", // ✅ Prevent filename conflicts
            outputPath: "static/models/", // ✅ Saves files in `.next/static/models/`
            publicPath: "/_next/static/models/", // ✅ Correct public access path
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
