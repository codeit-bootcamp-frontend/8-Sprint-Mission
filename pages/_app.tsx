import '@/styles/globals.css';
import Header from '@/components/Header/Header';
import type { AppProps } from 'next/app';
import { AuthProvider } from '@/lib/store/authContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Header />
      <main style={{ marginTop: '7rem' }}>
        <Component {...pageProps} />
      </main>
    </AuthProvider>
  );
}
