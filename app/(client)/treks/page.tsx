"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
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
import ApplyFilter from "@/components/ApplyFilter";

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
      const data = await getTrekCardData();
      setTrekCards(data);
    };
    fetchData();
    setisLoading(false);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  const clearFilter = () => {};
  return (
    <div className="w-full h-full lg:px-20 md:px-12 px-4">
      <div className="w-full h-auto">
        <div className="flex items-center justify-between">
          <h1 className="mb-12 relative text-[30px] font-bold  text-teal-700 trek">
            Treks
          </h1>
          <div className="md:hidden lg:hidden block">
            <Sheet>
              <SheetTrigger>
                <p className="flex px-3 py-2 rounded-md text-white items-center justify-center gap-2 bg-teal-700 hover:bg-teal-600">
                  <SlidersHorizontal size={17} />
                  Filters
                </p>
              </SheetTrigger>
              <SheetContent>
                <ApplyFilter />
              </SheetContent>
            </Sheet>
          </div>
        </div>
        <div className="md:flex lg:flex hidden items-center justify-between bg-[#f5f7f7] shadow-md w-full py-8  rounded-md px-4 lg:px-12">
          <div className="flex items-center justify-normal gap-4 lg:gap-12">
            <Select>
              <SelectTrigger className="lg:w-[180px] text-teal-700 w-[125px]  focus-visible:ring-teal-700 font-semibold">
                <MapPin /> Location
              </SelectTrigger>
              <SelectContent className="text-teal-700 font-semibold">
                <SelectGroup>
                  <SelectItem value="uttarakhand">Uttarakhand</SelectItem>
                  <SelectItem value="himachal">Himachal Pradesh</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="lg:w-[180px] text-teal-700 w-[125px]  focus-visible:ring-teal-700 font-semibold">
                <Calendar /> Month
              </SelectTrigger>
              <SelectContent className="text-teal-700 font-semibold">
                <SelectGroup>
                  <SelectItem value="summer">In Summer</SelectItem>
                  <SelectItem value="winter">In Winter</SelectItem>
                  <SelectItem value="any">Any Time</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="lg:w-[180px] text-teal-700 w-[125px]  focus-visible:ring-teal-700 font-semibold">
                <Map /> Distance
              </SelectTrigger>
              <SelectContent className="text-teal-700 font-semibold">
                <SelectGroup>
                  <SelectItem value="less10">less then 10km</SelectItem>
                  <SelectItem value="more10">More 10 then km</SelectItem>
                  <SelectItem value="more15">More 15 then km</SelectItem>
                  <SelectItem value="more20">More 20 then km</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="lg:w-[180px] text-teal-700 w-[125px]  focus-visible:ring-teal-700 font-semibold">
                <Clock /> Duration
              </SelectTrigger>
              <SelectContent className="text-teal-700 font-semibold">
                <SelectGroup>
                  <SelectItem value="days2">2 Days</SelectItem>
                  <SelectItem value="more2">3 to 5 Days</SelectItem>
                  <SelectItem value="more5">5 to 8 Days</SelectItem>
                  <SelectItem value="more10">More 10 Days</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <Button
            className="flex items-center justify-center gap-2 bg-teal-700 hover:bg-teal-600"
            onClick={() => clearFilter()}
          >
            <SlidersHorizontal size={17} />
            Clear Filters
          </Button>
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
