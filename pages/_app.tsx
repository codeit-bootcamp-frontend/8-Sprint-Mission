import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/reset-css@4.0.1/reset.min.css"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
