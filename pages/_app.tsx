import { AppProps } from "next/app";
import Header from "@/components/layout/Header";
import Container from "@/components/layout/Container";
import "@/styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  );
}
