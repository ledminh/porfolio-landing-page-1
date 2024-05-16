import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Logo from "@/components/layout/Logo";
import MainNav from "@/components/layout/MainNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Porfolio Landing Page 1",
  description: "A simple portfolio landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="flex justify-between items-center">
          <Logo />
          <MainNav />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
