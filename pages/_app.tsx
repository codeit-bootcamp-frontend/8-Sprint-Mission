import type { AppProps } from "next/app";
import GlobalStyle from "@/styles/globalstyle";
import Topbar from "@/components/topbar";
import Head from "next/head";
import { useRouter } from "next/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const isLoginPage =
    router.pathname === "/login" || router.pathname === "/signup";

  const isLandingPage = router.pathname === "/";

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>판다마켓</title>
      </Head>
      <GlobalStyle isLoginPage={isLoginPage} isLandingPage={isLandingPage} />
      {!isLoginPage && <Topbar />}
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
