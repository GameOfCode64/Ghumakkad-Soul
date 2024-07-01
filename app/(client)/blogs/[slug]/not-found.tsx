import React from "react";
import notFound from "@/public/blog-not-found.svg";
import Image from "next/image";
import Link from "next/link";
const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="flex flex-col items-center justify-center">
        <h1 className="mb-8 text-3xl font-bold text-teal-700">
          Blog Not Found
        </h1>
        <div className="w-[250px]">
          <Image
            src={notFound}
            alt="Blog Not Found"
            className="w-full h-full"
          />
        </div>
        <Link
          href="/blogs"
          className="mt-8 border-[3px] rounded-3xl px-6 text-teal-700 font-semibold py-3 border-teal-700"
        >
          Back to Blogs
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
