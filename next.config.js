/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    domains: [
      "example.com",
      "sprint-fe-project.s3.ap-northeast-2.amazonaws.com",
    ],
  },
  webpack: (config, { isServer }) => {
    return config;
  },
};
