/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "heroui-assets.nyc3.cdn.digitaloceanspaces.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
