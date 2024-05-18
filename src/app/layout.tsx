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
        <div className="container mx-auto shadow-sm shadow-yellow-800 background p-2 flex flex-col gap-4 relative">
          <header className="flex justify-between items-center sticky top-0 z-50 background">
            <Logo />
            <MainNav />
          </header>
          <main className="flex flex-col">{children}</main>
        </div>
      </body>
    </html>
  );
}
