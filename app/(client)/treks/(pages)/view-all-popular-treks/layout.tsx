import { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Ghumakkad Soul | View Most Popular Treks",
  description: "View Most Popular Treks",
  icons: {
    icon: "./favicon.ico",
  },
  openGraph: {
    title: "Ghumakkad Soul | View Most Popular Treks",
    description: "View Most Popular Treks",
    type: "website",
    locale: "en_IN",
    url: `https://ghumakkadsoul.vercel.app/treks/view-all-popular-treks`,
    siteName: "ghumakkadsoul.in",
  },
};
const layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="w-full">{children}</div>;
};

export default layout;
