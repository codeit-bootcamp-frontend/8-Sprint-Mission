import NavBar from "@/components/NavBar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const noNavBarPages = ["/login", "/register"];
  return (
    <>
      {!noNavBarPages.includes(router.pathname) && <NavBar />}
      <Component {...pageProps} />
    </>
  );
}
