import Topbar from "@/components/topbar";
import { ReactNode } from "react";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <Topbar />
      <main>{children}</main>
    </>
  );
}
