import '@/styles/globals.css';
import Header from '@/components/Header/Header';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <main style={{ marginTop: '7rem' }}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
