import { ReactNode } from "react";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
