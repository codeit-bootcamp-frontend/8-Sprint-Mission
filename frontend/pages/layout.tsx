import React from "react";
import { usePathname } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";

const showHeaderFooter = (pathname: string) =>
  !["/login", "/register"].includes(pathname);

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isShowHeaderFooter = showHeaderFooter(pathname);
  return (
    <>
      {isShowHeaderFooter && <Header />}
      {children}
      {isShowHeaderFooter && <Footer />}
    </>
  );
}
