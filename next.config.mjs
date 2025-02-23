/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {}, // ✅ Enables TurboPack with default options
  },
  images: {
    domains: ["images.unsplash.com","ltohrjagoqpdifhvbxda.supabase.co", "assets.aceternity.com"], // ✅ Allow Unsplash images
  },
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(glb|gltf)$/, // ✅ Supports .glb and .gltf 3D model files
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[contenthash].[ext]", // ✅ Ensures unique caching
            outputPath: isServer ? "../public/models/" : "static/models/", // ✅ Adjusts output path
            publicPath: "/models/", // ✅ Simplifies public path
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
