import type { AppProps } from "next/app";
import GlobalStyle from "@/styles/globalstyle";
import Topbar from "@/components/topbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Topbar />
      <Component {...pageProps} />
    </>
  );
}
