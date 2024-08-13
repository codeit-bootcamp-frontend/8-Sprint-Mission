import 'normalize.css';
import '@/src/styles/reset.css';

import Header from '@/src/components/layout/Header/Header';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Head>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/reset-css@4.0.1/reset.min.css"
          />
        </Head>
        <Header />
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}
