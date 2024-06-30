import "./globals.css";
import "@mantine/core/styles.css";
import type { Metadata } from "next";
import { createTheme, MantineProvider } from "@mantine/core";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Search from "@/components/Search";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ghumakkad Soul | Home",
  description:
    "Since the world is wide and life is short, the better it is to start exploring it sooner. ",
  icons: {
    icon: "./logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MantineProvider>
          <Navbar />
          <Search />
          {children}
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
