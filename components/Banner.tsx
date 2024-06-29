"use client";
import { getbanner } from "@/sanity/lib/querys/getbanner";
import { Award, MountainSnow, WalletMinimal } from "lucide-react";
import React, { useEffect, useState } from "react";

interface Banner {
  heading1: string;
  heading2: string;
  heading3: string;
}
const Banner = () => {
  const [banner, setBanner] = useState<Banner[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getbanner();
      setBanner(data);
    };
    fetchData();
  }, []);

  return (
    <div className="mt-8 lg:mt-14 w-full md:h-[300px] lg:h-[300px] h-auto py-12 md:py-0 lg:p-0 bg-[#b3d9d9]">
      {banner.map((ban, index) => (
        <div
          className="flex items-center justify-center md:flex-row lg:flow-row flex-col h-full lg:gap-[200px] gap-16 md:gap-32"
          key={index}
        >
          <div className="flex items-center justify-center flex-col">
            <div className="flex items-center justify-center w-[150px] h-[150px] rounded-full bg-teal-700">
              <MountainSnow size={50} className="text-white" />
            </div>
            <p className="text-center mt-4 font-bold w-[150px] ">
              {ban.heading1}
            </p>
          </div>
          <div className="flex items-center justify-center flex-col">
            <div className="flex items-center justify-center w-[150px] h-[150px] rounded-full bg-teal-700">
              <Award size={50} className="text-white" />
            </div>
            <p className="text-center mt-4 w-[150px]  font-bold">
              {ban.heading2}
            </p>
          </div>
          <div className="flex items-center justify-center flex-col">
            <div className="flex items-center justify-center w-[150px] h-[150px] rounded-full bg-teal-700">
              <WalletMinimal size={50} className="text-white" />
            </div>
            <p className="text-center mt-4 w-[150px] font-bold mb-4">
              {ban.heading3}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;
