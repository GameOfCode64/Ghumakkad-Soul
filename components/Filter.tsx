import React from "react";
import Link from "next/link";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
const Filter = () => {
  return (
    <div className="flex  items-center justify-between">
      <div className="md:flex lg:block hidden">
        <p className="font-semibold">Filters By:</p>
      </div>
      <div className="w-full lg:w-auto md:w-auto flex items-center justify-center">
        <Tabs defaultValue="all" className=" w-full bg-transparent">
          <TabsList className="flex w-full">
            <Link href="/treks">
              <TabsTrigger value="all">All Treks</TabsTrigger>
            </Link>
            <Link href="/treks/all-trek-uttarakhand">
              <TabsTrigger value="uttarakhand">Uttarakhand</TabsTrigger>
            </Link>
            <Link href="/treks/all-trek-himachal-pradesh">
              <TabsTrigger value="Himachal">Himachal Pradesh</TabsTrigger>
            </Link>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
};

export default Filter;
