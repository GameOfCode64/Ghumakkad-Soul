import { Toaster } from "@/components/ui/toaster";

import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Ghumakkad Soul | View all Treks",
  description:
    "Ghumakkad Soul view all Treks in Uttarakhand & Himachal Pradesh",
  icons: {
    icon: "./favicon.ico",
  },
  openGraph: {
    title: "Ghumakkad Soul | View all Treks",
    description:
      "Ghumakkad Soul view all Treks in Uttarakhand & Himachal Pradesh",
    type: "website",
    locale: "en_IN",
    url: `https://ghumakkadsoul.vercel.app/treks`,
    siteName: "ghumakkadsoul.in",
  },
};

const Treklayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full lg:px-20  py-16">
      <Toaster />
      {children}
    </div>
  );
};

export default Treklayout;
