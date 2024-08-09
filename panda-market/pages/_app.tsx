import { GlobalStyle, ResetStyle } from '@/app/styles';
import { Nav } from '@/widget/nav';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ResetStyle />
      <GlobalStyle />
      <Nav />
      <Component {...pageProps} />
    </>
  );
}
