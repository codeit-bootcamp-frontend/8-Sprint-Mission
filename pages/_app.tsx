import type { AppProps } from "next/app";
import GlobalStyle from "@/styles/globalstyle";
import Topbar from "@/components/topbar";
import Head from "next/head";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const isLoginPage =
    router.pathname === "/login" || router.pathname === "/signup";

  const isLandingPage = router.pathname === "/";
  return (
    <>
      <Head>
        <title>판다마켓</title>
      </Head>
      <GlobalStyle isLoginPage={isLoginPage} isLandingPage={isLandingPage} />
      {!isLoginPage && <Topbar />}
      <Component {...pageProps} />
    </>
  );
}
