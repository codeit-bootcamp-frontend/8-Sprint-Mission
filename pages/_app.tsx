import DeviceProvider from '@/contexts/DeviceContext';
import instance from '@/lib/api';
import postSignIn from '@/lib/api/postSignIn';
import '@/styles/globals.css';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import localFont from 'next/font/local';
import { useRouter } from 'next/router';
import { ReactElement, ReactNode, useEffect } from 'react';

const pretandard = localFont({
  src: '../statics/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? (page => page);

  const router = useRouter();

  useEffect(() => {
    const handleSignIn = async () => {
      if (instance.defaults.headers.common.Authorization) return;
      const accessToken = await postSignIn({
        email: 'hvrain3222@naver.com',
        password: 'hvrain3222',
      });
      instance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    };
    handleSignIn();
  }, [router]);

  return (
    <DeviceProvider>
      <div className={`${pretandard.variable}`}>
        {getLayout(<Component {...pageProps} />)}
      </div>
    </DeviceProvider>
  );
}

export default App;
