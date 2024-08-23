/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      // 정상적이지 않은 방법으로 올라온 이미지에 대해 처리하기 위해 임시 사용
      {
        protocol: "http",
        hostname: "**",
      },
      {
        protocol: "https",
        hostname: "**",
      },
      // 이후에 컴포넌트 상에 띄울때 s3주소만 필터링 해서 띄우고 나머지는 버리는 훅 추가 후 아래 설정으로 사용하기
      // {
      //   protocol: "https",
      //   hostname: "sprint-fe-project.s3.ap-northeast-2.amazonaws.com",
      //   port: "",
      //   pathname: "/Sprint_Mission/user/**",
      // },
    ],
  },
};

export default nextConfig;
