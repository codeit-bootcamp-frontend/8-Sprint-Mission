import DeviceProvider from '@/contexts/DeviceContext';
import '@/styles/globals.css';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import localFont from 'next/font/local';
import { ReactElement, ReactNode } from 'react';

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
  return (
    <DeviceProvider>
      <div className={`${pretandard.variable}`}>
        {getLayout(<Component {...pageProps} />)}
      </div>
    </DeviceProvider>
  );
}

export default App;
