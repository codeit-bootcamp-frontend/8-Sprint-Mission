/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "example.com",
      "image.hanatour.com",
      "sprint-fe-project.s3.ap-northeast-2.amazonaws.com",
      "cdnb.artstation.com",
      "cafe24.poxo.com",
      "via.placeholder.com",
    ],
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "example.com",
    //   },
    //   {
    //     protocol: "http",
    //     hostname: "**",
    //   },
    //   {
    //     protocol: "https",
    //     hostname: "**",
    //   },
    // ],
  },
};

module.exports = nextConfig;
