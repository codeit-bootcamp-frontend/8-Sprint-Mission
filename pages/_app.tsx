import { ReactElement, ReactNode } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import "@/styles/globals.css";

import Nav from "@/components/Nav";
import Layout from "@/components/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

type NextPageWithLayout = AppProps["Component"] & {
  getLayout?: (page: ReactElement) => ReactNode;
};

const queryClient = new QueryClient();

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

  return getLayout(
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>,
  );
}

export default App;
