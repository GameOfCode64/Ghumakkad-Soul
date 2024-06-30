"use client";
import React, { useEffect, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import banner from "@/public/yosemite-922757_1280.jpg";
import { Star } from "lucide-react";
import { getreview } from "@/sanity/lib/querys/getreview";
interface reviewProp {
  _id: string;
  name: string;
  imageUrl: string;
  date: string;
  comment: string;
}
const Review = () => {
  const [review, setreview] = useState<reviewProp[]>([]);
  useEffect(() => {
    const getdata = async () => {
      try {
        const data = await getreview();
        setreview(data);
      } catch (error) {
        console.log("Data Error:", error);
      }
    };
    getdata();
  }, []);

  return (
    <div className="w-full h-[400px] mt-16">
      <div className="lg:px-20 md:px-12 px-4">
        <h1 className="review relative lg:text-[30px]  md:text-[30px]  font-bold my-8 text-[20px]">
          Customers Experiences
        </h1>
        <Swiper
          className="flex items-center justify-center w-full py-8 h-[340px]"
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
          autoplay={{ delay: 2500 }}
          speed={700}
        >
          {review.map((data) => (
            <SwiperSlide
              key={data._id}
              className="w-full h-full  bg-[#f5f7f7] mt-8 rounded-md"
            >
              <div className="flex flex-col px-4 py-6">
                <div className="flex items-center justify-normal gap-4">
                  <div className="w-[50px] h-[50px]">
                    <Image
                      src={data.imageUrl}
                      alt="user_img"
                      width={0}
                      height={0}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className=" text-[17px] font-semibold">{data.name}</p>
                    <span className="text-[12px] text-gray-600">
                      {data.date}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-start mt-6 px-4 gap-[2px]">
                  <Star className="text-[#f4cd00]" />
                  <Star className="text-[#f4cd00]" />
                  <Star className="text-[#f4cd00]" />
                  <Star className="text-[#f4cd00]" />
                  <Star className="text-[#f4cd00]" />
                </div>
                <div className="mt-4 text-wrap pl-4 font-[400]">
                  {data.comment}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
