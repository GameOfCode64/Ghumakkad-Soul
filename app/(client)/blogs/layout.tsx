import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Ghumakkad Soul | Blogs",
  description: "Blogs Related to Trekking.",
  icons: {
    icon: "./favicon.ico",
  },
  openGraph: {
    title: `Ghumakkad Soul | Blogs`,
    description: `Blogs Related to Trekking.} `,
    type: "website",
    locale: "en_IN",
    url: `https://ghumakkadsoul.vercel.app/blogs`,
    siteName: "ghumakkadsoul.in",
  },
};

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="w-full">{children}</div>;
};

export default BlogLayout;
