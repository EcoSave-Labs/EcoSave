import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "./globals.css";

import { Header } from "@/components/app/header";
import { Providers } from "./providers";

const font = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "EcoSave",
  description: "The best way to save the planet",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
