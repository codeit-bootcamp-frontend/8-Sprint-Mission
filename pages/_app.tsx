import type { AppProps } from "next/app";
import Head from "next/head";
import "@/styles/globals.css";

import Nav from "@/components/Nav";
import Layout from "@/components/Layout";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>판다마켓</title>
      </Head>
      <Nav />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default App;
