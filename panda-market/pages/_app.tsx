import type { AppProps } from 'next/app';
import { useState } from 'react';
import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import { GlobalStyle, ResetStyle, Nav } from '@/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>판다마켓</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <HydrationBoundary state={pageProps.dehydratedState}>
          <ResetStyle />
          <GlobalStyle />
          <Nav />
          <Component {...pageProps} />
        </HydrationBoundary>
      </QueryClientProvider>
    </>
  );
}
