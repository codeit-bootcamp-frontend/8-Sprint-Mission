import { ReactElement, ReactNode } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import "@/styles/globals.css";

import Nav from "@/components/Nav";
import Layout from "@/components/Layout";

type NextPageWithLayout = AppProps["Component"] & {
  getLayout?: (page: ReactElement) => ReactNode;
};

function App({ Component, pageProps }: AppProps) {
  const getLayout =
    (Component as NextPageWithLayout).getLayout ??
    ((page) => (
      <>
        <Head>
          <title>판다마켓</title>
        </Head>
        <Nav />
        <Layout>{page}</Layout>
      </>
    ));

  return getLayout(<Component {...pageProps} />);
}

export default App;
