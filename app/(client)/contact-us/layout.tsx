import ContactPop from "@/components/contact-pop";
import { Toaster } from "@/components/ui/toaster";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Ghumakkad Soul | Contact Us",
  description: "Contact to Ghumakkad Soul Team",
  icons: {
    icon: "./favicon.ico",
  },
  openGraph: {
    title: "Ghumakkad Soul | Contact Us",
    description: "Contact to Ghumakkad Soul Team",
    type: "website",
    locale: "en_IN",
    url: `https://ghumakkadsoul.vercel.app/contact-us`,
    siteName: "ghumakkadsoul.in",
  },
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full">
      <Toaster />
      <ContactPop />
      {children}
    </div>
  );
};

export default layout;
