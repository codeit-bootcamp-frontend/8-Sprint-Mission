/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sprint-fe-project.s3.ap-northeast-2.amazonaws.com',
        port: '',
        pathname: '/Sprint_Mission/**',
      },
      {
        protocol: 'https',
        hostname: 'flexible.img.hani.co.kr',
        port: '',
        pathname: '/flexible/**',
      },
    ],
  },
};

module.exports = nextConfig;
