import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import GlobalStyle from "@/styles/GlobalStyle";
import ThumbnailImage from "../../public/images/thumbnail.png";
import "@/styles/global.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>판다마켓</title>
        <meta name="description" content="일상의 모든 물건을 거래해 보세요." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="판다마켓" />
        <meta
          property="og:description"
          content="일상의 모든 물건을 거래해 보세요."
        />
        <meta property="og:image" content={ThumbnailImage.src} />
        <meta property="og:url" content="" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <Header />
      <GlobalStyle />
			<QueryClientProvider client={queryClient}>
				<Component {...pageProps} />
			</QueryClientProvider>
      <Footer />
    </>
  );
}
