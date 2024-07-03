import Image from "next/image";
import React from "react";
import submit from "@/public/submit.svg";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div className="w-full h-screen">
      <div className="flex items-center justify-center h-full">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl text-teal-600 font-bold">
            {" "}
            Message Sent Successfully
          </h1>
          <p className="mb-6 mt-2 text-lg text-teal-600 font-bold">
            Our Team Will Connect you Soon 😊
          </p>
          <div className="w-[350px]">
            <Image src={submit} alt="bookking" className="w-full h-full" />
          </div>
          <Link href="/treks">
            <Button className="bg-teal-700 hover:bg-teal-600 mt-6 rounded-3xl px-8">
              Back to Treks
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
