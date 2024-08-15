import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Container from "@/components/Container";

const pretendard = localFont({
  src: "../fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <style>{`
    html {
      font-family: ${pretendard.style.fontFamily}, sans-serif;
    }
  `}</style>
      </Head>
      <Navbar />
      <Container page>
        <Component {...pageProps} />
      </Container>
    </>
  );
}
