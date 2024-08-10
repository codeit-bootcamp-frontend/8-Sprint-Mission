import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ClientProvider from "@/components/client-provider";
import "@/styles/globals.css";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? (page => page);
  return (
    <ClientProvider>
      <ReactQueryDevtools initialIsOpen={false} />
      {getLayout(<Component {...pageProps} />)}
    </ClientProvider>
  );
}
