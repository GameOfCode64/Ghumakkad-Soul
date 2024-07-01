"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MountainSnow, Smile, Star, WalletMinimal } from "lucide-react";
import getabout from "@/sanity/lib/querys/getabout";
interface AboutProps {
  heading: string;
  description1: string;
  description2: string;
  aboutImage: string;
  cardHeader1: string;
  cardHeader2: string;
  cardHeader3: string;
  cardHeader4: string;
  cardDesc1: string;
  cardDesc2: string;
  cardDesc3: string;
  cardDesc4: string;
}
const AboutUs = () => {
  const [about, setAbout] = useState<AboutProps | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getabout();
        setAbout(data);
      } catch (error) {
        console.error("Error fetching about data:", error);
        setAbout(null);
      }
    };

    fetchData();
  }, []);

  if (!about) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full h-auto md:px-12 lg:px-20 px-4 mt-12">
      <div className="flex items-start bg-teal-700/10 rounded-lg lg:flex-row flex-col justify-between gap-4 w-full">
        <div className="basis-[50%]">
          <div className="w-full flex flex-col h-auto  rounded-xl px-6 py-6">
            <span className="text-teal-700 font-semibold text-[17px] px-1 mt-8">
              About Ghumakkad Soul
            </span>
            <h1 className="font-bold md:text-[35px] text-[25px] lg:text-[45px]  mt-6 px-1">
              {about.heading}
            </h1>
            <p className="mt-14 text-[#333] text-wrap">{about.description1}</p>
            <p className="mt-14 text-[#333] text-wrap">{about.description2}</p>
          </div>
        </div>
        <div className="basis-[50%]">
          <div className="w-full flex flex-col h-auto rounded-xl px-6 py-6">
            <div className="w-full h-[40%] bg-center">
              <div className="w-full h-full">
                <Image
                  src={about.aboutImage}
                  alt="aboutimg"
                  width={500}
                  height={500}
                  className="h-full w-full rounded-3xl "
                />
              </div>
            </div>

            <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-4">
              <div className="flex flex-col bg-teal-700/20 rounded-xl px-4 py-6">
                <h1 className="flex items-center justify-start gap-3 text-[30px] font-extrabold">
                  <Star className=" text-teal-700" size={30} />
                  {about.cardHeader1}
                </h1>
                <p className="mt-4 font-semibold">{about.cardDesc1}</p>
              </div>
              <div className="flex flex-col bg-teal-700/20 rounded-xl px-4 py-6">
                <h1 className="flex items-center justify-start gap-3 text-[30px] font-extrabold">
                  <MountainSnow className=" text-teal-700" size={30} />
                  {about.cardHeader2}
                </h1>
                <p className="mt-4 font-semibold">{about.cardDesc2}</p>
              </div>
              <div className="flex flex-col bg-teal-700/20 rounded-xl px-4 py-6">
                <h1 className="flex items-center justify-start gap-3 text-[30px] font-extrabold">
                  <WalletMinimal className=" text-teal-700" size={30} />
                  {about.cardHeader3}
                </h1>
                <p className="mt-4 font-semibold">{about.cardDesc3}</p>
              </div>
              <div className="flex flex-col bg-teal-700/20 rounded-xl px-4 py-6">
                <h1 className="flex items-center justify-start gap-3 text-[30px] font-extrabold">
                  <Smile className=" text-teal-700" size={30} />
                  {about.cardHeader4}
                </h1>
                <p className="mt-4 font-semibold">{about.cardDesc4}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
