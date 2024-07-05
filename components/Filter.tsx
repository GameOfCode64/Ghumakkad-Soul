"use client";
import React from "react";
import Link from "next/link";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { usePathname } from "next/navigation";
const Filter = () => {
  const path = usePathname();
  let value;
  if (path === `/treks`) {
    value = "all";
  }
  if (path === `/treks/all-trek-uttarakhand`) {
    value = "uttarakhand";
  }
  if (path === `/treks/view-all-popular-treks`) {
    value = "pop";
  }
  return (
    <div className="flex  items-center justify-between">
      <div className="md:flex lg:block hidden">
        <p className="font-semibold">Filters By:</p>
      </div>
      <div className="w-full lg:w-auto md:w-auto flex items-center justify-center">
        <Tabs defaultValue={value} className=" w-full bg-transparent">
          <TabsList className="flex w-full">
            <Link href="/treks">
              <TabsTrigger value="all">All Treks</TabsTrigger>
            </Link>
            <Link href="/treks/all-trek-uttarakhand">
              <TabsTrigger value="uttarakhand">Uttarakhand</TabsTrigger>
            </Link>
            <Link href="/treks/view-all-popular-treks">
              <TabsTrigger value="pop">Popular Treks</TabsTrigger>
            </Link>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
};

export default Filter;
