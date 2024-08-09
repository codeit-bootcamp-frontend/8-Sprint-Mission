import type { Metadata } from "next";
import "@/styles/globals.css";
import StyledComponentsRegistry from "@/app/lib/registry";

export const metadata: Metadata = {
  title: "판다마켓",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
