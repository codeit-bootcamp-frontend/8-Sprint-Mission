import { Html, Head, Main, NextScript } from "next/document";

function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>판다마켓</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="판다마켓 홈페이지" />

        <meta property="og:title" content="판다 마켓" />
        <meta
          property="og:url"
          content="https://8-sprint-mission-jeongminoh.netlify.app"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="../assets/images/Img_home_top.png" />
        <meta property="og:image:alt" content="판다 마켓 배너 이미지" />
        <meta
          property="og:description"
          content="일상의 모든 물건을 거래해보세요"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
