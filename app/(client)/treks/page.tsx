import React from "react";
import Card from "@/components/Card";
import Filter from "@/components/Filter";

import { TrekCard } from "@/lib/types";
import { client } from "@/sanity/lib/client";

async function checkDataLength() {
  const query = `
count(*[_type == "trekCard"])
  `;
  const data = await client.fetch(query);
  return data;
}

const page = async () => {
  let length = await checkDataLength();
  return (
    <div className="w-full h-full lg:px-20 md:px-12 px-4">
      <div className="w-full h-auto">
        <div className="flex items-center justify-between">
          <h1 className="mb-12 relative text-[30px] font-bold  text-teal-700 trek">
            Treks
          </h1>
        </div>
        <Filter />
      </div>
      <Card count={length} />
    </div>
  );
};

export default page;
