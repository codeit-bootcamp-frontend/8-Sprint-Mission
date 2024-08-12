/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'd21x3meyyr2jva.cloudfront.net',
      'sprint-fe-project.s3.ap-northeast-2.amazonaws.com',
    ],
  },
};

module.exports = nextConfig;
