/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "sprint-fe-project.s3.ap-northeast-2.amazonaws.com",
      "images.samsung.com",
      "example.com",
      "flexible.img.hani.co.kr",
      "via.placeholder.com",
    ],
  },
};

module.exports = nextConfig;
