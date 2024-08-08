import { GlobalStyle, ResetStyle } from '@/app/styles';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ResetStyle />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
