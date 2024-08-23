import Header from "@/components/common/Header";
import "../styles/global.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Noto_Sans_KR } from "next/font/google";
import { useRouter } from "next/router";

const notoSansKR = Noto_Sans_KR({
  weight: ["400", "700"],
  subsets: [],
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${notoSansKR.style.fontFamily};
        }
      `}</style>
      <Head>
        <title>판다마켓</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={router.pathname === "/" ? "" : "container"}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
