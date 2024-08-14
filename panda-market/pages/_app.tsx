import type { AppProps } from 'next/app';
import { useState } from 'react';
import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import { GlobalStyle, ResetStyle } from '@/app/styles';
import { Nav } from '@/c_widget/nav';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <>
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
