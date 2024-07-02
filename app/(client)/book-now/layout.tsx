import ContactPop from "@/components/contact-pop";
import { Toaster } from "@/components/ui/toaster";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Ghumakkad Soul | Book Now",
  description: "Book Your Favorite ❤️ Trek",
  icons: {
    icon: "./favicon.ico",
  },
  openGraph: {
    title: "Ghumakkad Soul | Book Now",
    description: "Book Your Favorite ❤️ Trek",
    type: "website",
    locale: "en_IN",
    url: `https://ghumakkadsoul.vercel.app/book-now`,
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
