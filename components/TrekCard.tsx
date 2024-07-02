"use client";
import React, { useEffect, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { Calendar, Clock, Map, MapPin, Phone, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import getTrekCardData from "@/sanity/lib/querys/getcard";
import Link from "next/link";

export interface TrekCard {
  trekName: string;
  backgroundImageUrl: string;
  slug: {
    current: string;
  };
  duration: string;
  location: string;
  distance: string;
  bestTime: string[];
  rating: number;
}

const TrekCard: React.FC = () => {
  const [trekCards, setTrekCards] = useState<TrekCard[]>([]);
  const [isLoading, setisLoading] = useState(false);
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

  return (
    <div className="w-full lg:mt-32 mt-8 h-auto">
      <div className="w-full relative lg:px-14 md:px-4  mb-8 h-auto">
        <div className="px-8">
          <h1 className="font-bold text-2xl md:text-3xl  relative heading">
            Recommended Tracks
          </h1>
        </div>
        <div className="w-full h-full mt-12">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={4}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1080: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            autoplay={{ delay: 5000 }}
            speed={700}
            className="w-full h-[550px] py-[20px] flex items-center"
          >
            {trekCards.map((trek, index) => (
              <SwiperSlide
                className="flex flex-col w-[350px] h-full rounded-md px-8 py-4 mb-4"
                key={index}
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
                      <span className="text-teal-700 ">
                        {trek.duration}Days
                      </span>
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
                      href={`/treks/${trek.slug.current}`}
                      className="w-full"
                    >
                      <Button className="w-full py-6 border-[4px] border-solid border-teal-700 bg-teal-700 hover:bg-teal-600 hover:border-teal-600">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TrekCard;
