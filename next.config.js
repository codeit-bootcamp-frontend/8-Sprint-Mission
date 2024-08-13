/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async function redirects() {
    return [
      {
        source: "/articles",
        destination: "/boards",
        permanent: true,
      },
    ];
  },
  images: {
    domains: ["localhost", "sprint-fe-project.s3.ap-northeast-2.amazonaws.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sprint-fe-project.s3.ap-northeast-2.amazonaws.com",
        port: "",
        pathname: "/Sprint_Mission/**",
      },
    ],
  },
};

module.exports = nextConfig;
