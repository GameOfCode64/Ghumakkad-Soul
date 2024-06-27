"use client";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import {
  getBackgroundSliders,
  BackgroundSlider,
} from "@/sanity/lib/querys/getBackgroundSliders";
import demo from "@/public/yosemite-922757_1280.jpg";
import { Button } from "@/components/ui/button";

const ImageSlider: React.FC = () => {
  const [sliders, setSliders] = useState<BackgroundSlider[]>([]);
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  useEffect(() => {
    const fetchSliders = async () => {
      try {
        const data = await getBackgroundSliders();
        setSliders(data);
      } catch (error) {
        console.error("Failed to fetch background sliders:", error);
      }
    };

    fetchSliders();
  }, []);

  console.log(sliders);
  return (
    <div className="w-full h-screen relative">
      <Carousel
        plugins={[plugin.current]}
        className="w-full h-full md:max-h-[600px]"
      >
        <CarouselContent>
          {sliders.map((slider, index) => (
            <CarouselItem className="w-full h-full relative" key={index}>
              <Image
                src={slider.backgroundImageUrl}
                alt="demo"
                width={0}
                height={0}
                className="lg:w-full w-full object-cover h-full absolute top-0 left-0 z-[-1] "
              />
              <div className="z-[1] text-white lg:px-20 lg:py-32 py-[100px] md:px-12 md:py-12 px-4 ">
                <h1 className="lg:text-[65px] md:text-[50px] text-[40px] text-nowrap font-bold">
                  {slider.headingText1}
                </h1>
                <h4 className="mt-8 lg:w-[70%] w-auto lg:text-[55px] text-[25px] md:text-[50px] font-semibold">
                  {slider.headingText2}
                </h4>
                <p className="mt-8 lg:w-[40%] md:w-[90%] w-auto  text-[17px]">
                  {slider.description}
                </p>
                <div className="flex items-center justify-normal gap-8 mt-8">
                  <Button className="bg-[#fff] px-6 py-5 rounded-3xl text-[#222] font-semibold border-[2px] hover:bg-transparent border-white hover:text-white  ease-in transition-[0.5s]">
                    View Details
                  </Button>
                  <Button className="hover:bg-[#fff] px-8 py-5 rounded-3xl text-[#fff] font-semibold border-[2px] bg-transparent border-white hover:text-[#222]  ease-in transition-[0.5s]">
                    Book Now
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default ImageSlider;

// {sliders.map((slider, index) => (
//     <CarouselItem key={index} className="relative w-full h-full">
//       <Image
//         src={slider.backgroundImageUrl}
//         alt={`Background for ${slider.headingText1}`}
//         layout="fill"
//         objectFit="cover"
//         className="absolute inset-0"
//       />
//       <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white p-4">
//         <h1 className="text-4xl font-bold">{slider.headingText1}</h1>
//         <h2 className="text-2xl">{slider.headingText2}</h2>
//         <p className="text-lg">{slider.description}</p>
//       </div>
//     </CarouselItem>
//   ))}
