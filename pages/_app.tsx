import type { AppProps } from "next/app";
import "@/styles/globals.css";

import Nav from "@/components/Nav";
import Layout from "@/components/Layout";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default App;
