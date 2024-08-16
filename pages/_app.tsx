import UI from '@/UI';
import '../styles/global.scss';
import type { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  return (
    <UI>
      <Component {...pageProps} />
    </UI>
  );
}
export default App;
