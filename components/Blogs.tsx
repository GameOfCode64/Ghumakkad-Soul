import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import banner from "@/public/yosemite-922757_1280.jpg";
import Image from "next/image";
import Link from "next/link";
const Blogs = () => {
  return (
    <div className="lg:mt-16 mt-8">
      <div className="lg:px-20 md:px-8 px-1">
        <div className="flex md:px-4 px-4 items-center justify-between">
          <h1 className="lg:text-[30px] text-[20px] md:text-[30px] font-bold blog relative">
            Our Latest Blogs
          </h1>
          <Select>
            <SelectTrigger className="lg:w-[180px] md:w-[180px] w-auto focus-visible:ring-teal-700 font-semibold">
              Filters
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="new">Newest One</SelectItem>
                <SelectItem value="old">Oldest One</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="mt-8 grid lg:grid-cols-2 md:grid-cols-2 w-full lg:gap-16 gap-auto">
          <div className="flex items-center justify-start flex-col h-[550px] px-3 py-4">
            <div className="w-full lg:h-[70%] h-[50%]">
              <Image
                src={banner}
                className="w-full h-full rounded-3xl object-center"
                alt="blog_image"
              />
            </div>
            <div className="flex flex-col mt-3 w-full text-wrap px-2">
              <Link href="">
                <h1 className="font-bold text-teal-700">
                  Way is Trekking is Important for Human Mental Health
                </h1>
              </Link>
              <p className="text-sm mt-2 text-gray-700">
                Trekking offers significant mental health benefits by reducing
                stress, enhancing creativity, and boosting self-esteem through
                physical activity and connection with nature.
              </p>
              <div className="flex items-center justify-normal mt-4 gap-4">
                <div className="w-[50px] h-[50px] ">
                  <Image
                    src={banner}
                    height={0}
                    width={0}
                    alt="auther_image"
                    className="w-full h-full rounded-full"
                  />
                </div>
                <div className="flex flex-col">
                  <h1 className="font-semibold text-teal-700">
                    Ghumakkad Soul
                  </h1>
                  <p className="font-semibold">
                    Reading Time:{" "}
                    <span className="font-semibold text-teal-700">9 min</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-start flex-col h-[550px] px-3 py-4">
            <div className="w-full lg:h-[70%] h-[50%]">
              <Image
                src={banner}
                className="w-full h-full rounded-3xl object-center"
                alt="blog_image"
              />
            </div>
            <div className="flex flex-col mt-3 w-full text-wrap px-2">
              <Link href="">
                <h1 className="font-bold text-teal-700">
                  Way is Trekking is Important for Human Mental Health
                </h1>
              </Link>
              <p className="text-sm mt-2 text-gray-700">
                Trekking offers significant mental health benefits by reducing
                stress, enhancing creativity, and boosting self-esteem through
                physical activity and connection with nature.
              </p>
              <div className="flex items-center justify-normal mt-4 gap-4">
                <div className="w-[50px] h-[50px] ">
                  <Image
                    src={banner}
                    height={0}
                    width={0}
                    alt="auther_image"
                    className="w-full h-full rounded-full"
                  />
                </div>
                <div className="flex flex-col">
                  <h1 className="font-semibold text-teal-700">
                    Ghumakkad Soul
                  </h1>
                  <p className="font-semibold">
                    Reading Time:{" "}
                    <span className="font-semibold text-teal-700">9 min</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
