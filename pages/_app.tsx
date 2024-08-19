import type { AppProps } from "next/app";
import GlobalStyle from "@/styles/globalstyle";
import Topbar from "@/components/topbar";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>판다마켓</title>
      </Head>
      <GlobalStyle />
      <Topbar />
      <Component {...pageProps} />
    </>
  );
}
