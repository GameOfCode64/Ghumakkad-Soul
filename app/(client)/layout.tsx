import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Search from "@/components/Search";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ghumakkad Soul | Home",
  description:
    "Since the world is wide and life is short, the better it is to start exploring it sooner. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Search />
        {children}
      </body>
    </html>
  );
}
