"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Map, MapPin, Phone, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import getTrek from "@/sanity/lib/querys/getTreks";
import { TrekCard } from "@/lib/types";
let offset = 0;
let limit = 10;
const Card = ({ count }: { count: number }) => {
  const [trekCards, setTrekCards] = useState<TrekCard[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await getTrek(0, 10);
      setTrekCards(data);
      offset = 10;
      limit = 20;
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const fetchMore = async () => {
    setIsLoading(true);
    console.log(offset, limit);
    const data = await getTrek(offset, limit);
    console.log(data);
    setTrekCards((prevTrekCards) => [...prevTrekCards, ...data]);
    length = count++ - offset;
    console.log("length", length);
    if (length < 10) {
      limit = limit + length;
      limit++;
    } else {
      limit = limit + 10;
    }
    offset = offset + 10;
    console.log(offset);
    console.log("Next Limit: ", limit);
    console.log("Next offset: ", offset);
    setIsLoading(false);
  };

  return (
    <>
      <div>
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
                    <span className="text-teal-700 ">{trek.duration} Days</span>
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
                    href={
                      trek.slug === null ? "" : `/treks/${trek.slug.current}`
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
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center">
        {count === trekCards.length ? (
          <></>
        ) : (
          <>
            <Button
              className=" bg-teal-700 hover:bg-teal-600"
              onClick={fetchMore}
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "View More Treks"}
            </Button>
          </>
        )}
      </div>
    </>
  );
};

export default Card;
