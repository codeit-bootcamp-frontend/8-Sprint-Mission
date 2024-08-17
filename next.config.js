/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  images: {
    domains: ["sprint-fe-project.s3.ap-northeast-2.amazonaws.com"],
  },
};

module.exports = nextConfig;
