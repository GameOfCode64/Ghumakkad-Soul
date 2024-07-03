"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { SheetContent, Sheet, SheetTrigger } from "@/components/ui/sheet";
import {
  Calendar,
  Clock,
  Map,
  MapPin,
  SlidersHorizontal,
  Phone,
  Star,
} from "lucide-react";
import getTrekCardData from "@/sanity/lib/querys/getcard";
import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import getlocation from "@/sanity/lib/querys/getLoaction";
import NotFound from "@/components/not-found";

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

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [trekCards, setTrekCards] = useState<TrekCard[]>([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isLoading, setisLoading] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const fetchData = async () => {
      setisLoading(true);
      const data = await getlocation("Himachal-Pradesh");
      setTrekCards(data);
    };
    fetchData();
    setisLoading(false);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (trekCards.length === 0) {
    return <NotFound title="Trek" link="treks" />;
  }
  return (
    <div className="mt-4">
      <div className="flex  items-center justify-between">
        <div className="md:flex lg:block hidden">
          <p className="font-semibold">Filters By:</p>
        </div>

        <div className="w-full lg:w-auto md:w-auto px-4 flex items-center justify-center">
          <Tabs defaultValue="Himachal" className=" w-full bg-transparent">
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
      <div className="grid lg:grid-cols-3 lg:gap-12 gap-5 md:grid-cols-2 grid-cols-1 px-0 my-16">
        {trekCards.map((trek) => (
          <div
            className="lg:w-[360px] md:w-[360px] w-full h-[550px]"
            key={trek._id}
          >
            <div className="w-full h-[50%] bg-center">
              <Image
                src={trek.backgroundImageUrl}
                alt={`${trek.trekName} image`}
                className="w-full rounded-3xl h-full"
                width={350}
                height={200}
              />
            </div>
            <div className="flex flex-col mt-4">
              <div className="flex items-center justify-between px-2">
                <p className="font-semibold">{trek.trekName}</p>
                <p className="flex items-center justify-center gap-2 text-teal-700 font-semibold">
                  <Star size={18} />
                  {trek.rating}
                </p>
              </div>
              <div className="flex flex-col mt-4 px-2 space-y-2">
                <p className="flex items-center font-semibold justify-normal gap-4">
                  <MapPin size={22} className="text-teal-700" />
                  {trek.location}
                </p>
                <p className="flex items-center font-semibold justify-normal gap-4">
                  <Map size={22} className="text-teal-700" />
                  Distance:
                  <span className="text-teal-700 ">{trek.distance}Km</span>
                </p>
                <p className="flex items-center font-semibold justify-normal gap-4">
                  <Clock size={22} className="text-teal-700" />
                  Time:
                  <span className="text-teal-700 ">{trek.duration}Days</span>
                </p>
                <p className="flex items-center font-semibold justify-normal gap-4">
                  <Calendar size={22} className="text-teal-700 " />
                  Best Time:
                  <span className="text-teal-700 text-nowrap">
                    {trek.bestTime.join(" to ")}
                  </span>
                </p>
              </div>
              <div className="w-full flex items-center justify-center gap-3 mt-4">
                <Button className="py-6 bg-transparent border-[4px] text-emerald-700 rounded-md border-solid border-teal-700 hover:text-white hover:border-teal-600 hover:bg-teal-600">
                  <Phone />
                </Button>
                <Link
                  href={trek.slug === null ? "" : `/treks/${trek.slug.current}`}
                  className="w-full"
                >
                  <Button className="w-full py-6 border-[4px] border-solid border-teal-700 bg-teal-700 hover:bg-teal-600 hover:border-teal-600">
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
