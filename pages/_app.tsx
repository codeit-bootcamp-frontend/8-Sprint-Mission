import RootLayout from "@/router/rootlayout";
import type { AppProps } from "next/app";
import GlobalStyle from "@/styles/globalstyle";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </>
  );
}
