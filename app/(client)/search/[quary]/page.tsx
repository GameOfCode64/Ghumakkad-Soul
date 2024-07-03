"use client";
import { Button } from "@/components/ui/button";
import getSearchTrek from "@/sanity/lib/querys/search";
import { Calendar, Clock, Map, MapPin, Phone, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import travel from "@/public/traveling.svg";
interface Params {
  params: {
    quary: string;
  };
}
export interface TrekCard {
  _id: string;
  slug: {
    current: string;
  };
  trekName: string;
  backgroundImageUrl: string;
  duration: string;
  location: string;
  distance: string;
  bestTime: string[];
  rating: number;
}

const page = ({ params }: Params) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [trekCards, setTreks] = useState<TrekCard | null>(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const getdata = async () => {
      const data = await getSearchTrek(params?.quary);
      setTreks(data);
    };
    getdata();
  }, [params.quary]);

  if (!trekCards) {
    return (
      <>
        <div className="px-8 py-8">
          <h1 className="text-lg font-semibold">
            Search:{" "}
            <span className="text-teal-700 font-medium">{params?.quary}</span>
          </h1>
        </div>
        <div className="flex items-center justify-center h-screen">
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-semibold text-2xl text-teal-600 mb-4">
              Trek Not Found
            </h1>
            <div className="w-[350px]">
              <Image
                src={travel}
                alt="Treak_Not_Found"
                className="w-full h-full"
              />
            </div>
            <Link href="/treks">
              <Button className="px-6 rounded-3xl bg-teal-700 hover:bg-teal-600 mt-4">
                Back to Treks
              </Button>
            </Link>
          </div>
        </div>
      </>
    );
  }
  return (
    <div className="w-full h-screen lg:px-20 md:px-12 px-4 py-8">
      <h1 className="text-lg font-semibold">
        Search:{" "}
        <span className="text-teal-700 font-medium">{params?.quary}</span>
      </h1>

      <div className="grid lg:grid-cols-3 lg:gap-12 gap-5 md:grid-cols-2 grid-cols-1 px-4 my-16">
        <div
          className="lg:w-[360px] md:w-[360px] w-full h-[550px]"
          key={trekCards._id}
        >
          <div className="w-full h-[50%] bg-center">
            <Image
              src={trekCards.backgroundImageUrl}
              alt={`${trekCards.trekName} image`}
              className="w-full rounded-3xl h-full"
              width={350}
              height={200}
            />
          </div>
          <div className="flex flex-col mt-4">
            <div className="flex items-center justify-between px-2">
              <p className="font-semibold">{trekCards.trekName}</p>
              <p className="flex items-center justify-center gap-2 text-teal-700 font-semibold">
                <Star size={18} />
                {trekCards.rating}
              </p>
            </div>
            <div className="flex flex-col mt-4 px-2 space-y-2">
              <p className="flex items-center font-semibold justify-normal gap-4">
                <MapPin size={22} className="text-teal-700" />
                {trekCards.location}
              </p>
              <p className="flex items-center font-semibold justify-normal gap-4">
                <Map size={22} className="text-teal-700" />
                Distance:
                <span className="text-teal-700 ">{trekCards.distance}Km</span>
              </p>
              <p className="flex items-center font-semibold justify-normal gap-4">
                <Clock size={22} className="text-teal-700" />
                Time:
                <span className="text-teal-700 ">{trekCards.duration}Days</span>
              </p>
              <p className="flex items-center font-semibold justify-normal gap-4">
                <Calendar size={22} className="text-teal-700 " />
                Best Time:
                <span className="text-teal-700 text-nowrap">
                  {trekCards.bestTime.join(" to ")}
                </span>
              </p>
            </div>
            <div className="w-full flex items-center justify-center gap-3 mt-4">
              <Button className="py-6 bg-transparent border-[4px] text-emerald-700 rounded-md border-solid border-teal-700 hover:text-white hover:border-teal-600 hover:bg-teal-600">
                <Phone />
              </Button>
              <Link
                href={
                  trekCards.slug === null
                    ? ""
                    : `/treks/${trekCards.slug.current}`
                }
                className="w-full"
              >
                <Button className="w-full py-6 border-[4px] border-solid border-teal-700 bg-teal-700 hover:bg-teal-600 hover:border-teal-600">
                  View Details
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
