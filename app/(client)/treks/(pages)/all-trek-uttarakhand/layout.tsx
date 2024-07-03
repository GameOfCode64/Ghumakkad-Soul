import { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Ghumakkad Soul | View all Treks in Uttarakhand",
  description: "View all Treks in Uttarakhand",
  icons: {
    icon: "./favicon.ico",
  },
  openGraph: {
    title: "Ghumakkad Soul | View all Treks in Uttarakhand",
    description: "View all Treks in Uttarakhand",
    type: "website",
    locale: "en_IN",
    url: `https://ghumakkadsoul.vercel.app/treks/all-trek-uttarakhand`,
    siteName: "ghumakkadsoul.in",
  },
};
const layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="w-full">{children}</div>;
};

export default layout;
