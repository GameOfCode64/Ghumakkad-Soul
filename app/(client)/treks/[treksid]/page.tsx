import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import {
  Calendar,
  Clock,
  Map,
  MapPin,
  MountainSnow,
  Users,
} from "lucide-react";
import travel from "@/public/traveling.svg";
import getfullTrek from "@/sanity/lib/querys/getfullTrek";
import { PortableText } from "next-sanity";
import { urlForImage } from "@/sanity/lib/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import NotFound from "@/components/not-found";
import Link from "next/link";
import BookBtn from "@/components/Buttons/button";
import Btn2 from "@/components/Buttons/button2";
import Comments from "@/components/Comments";
import ShowComment from "@/components/ShowComment";

interface Params {
  params: {
    treksid: string;
  };
}

interface FAQ {
  _key: string;
  question: string;
  answer: string;
}

interface Gallery {
  asset: {
    url: string;
  };
}

interface CardProps {
  _id: string;
  trekName: string;
  backgroundImageUrl: string;
  duration: string;
  prize: string;
  trekAltitude: string;
  location: string;
  distance: string;
  bestTime: string[];
  trekDescription: any;
  imageGalleryUrls: string[];
  faqSection: FAQ[];
  rating: string;
}

export async function generateMetadata({
  params,
}: Params): Promise<Metadata | undefined> {
  return {
    title: `Trek | ${params?.treksid}`,
    description: `Trek | ${params?.treksid}`,
    icons: {
      icon: "./favicon.ico",
    },
    openGraph: {
      title: `${params?.treksid}`,
      description: `Trek | ${params?.treksid}`,
      type: "website",
      locale: "en_IN",
      url: `https://ghumakkadsoul.vercel.app/blogs/${params?.treksid}`,
      siteName: "Ghumakkadsoul",
    },
  };
}

const TrekPage = async ({ params }: Params) => {
  const data: CardProps = await getfullTrek(params?.treksid);

  if (!data) {
    return <NotFound title="Trek" link="treks" />;
  }

  const hasImageGallery =
    data.imageGalleryUrls && data.imageGalleryUrls.length > 0;

  return (
    <div className="w-full h-full">
      <div className="px-4 lg:px-0">
        <div className="w-full md:h-[60dvh] lg:px-20 md:px-12 relative lg:h-[80dvh] h-[50vh] object-center">
          <Image
            src={data.backgroundImageUrl || "/fallback-image.jpg"}
            alt="TrekImage"
            width={700}
            height={700}
            className="w-full h-full z-[-1] absolute top-0 left-0 rounded-xl"
          />
          <div className="z-[1] relative flex items-center h-full px-6">
            <div className="flex flex-col">
              <h1 className="text-white lg:text-3xl text-2xl md:text-3xl font-extrabold">
                {data.trekName}
              </h1>
              <p className="text-white font-semibold mt-2">
                One of the Beautiful Treks in {data.location}
              </p>
              <Btn2 />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-4 py-8 mt-1 bg-[#f5f7f7] flex items-center justify-center">
        <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 lg:ml-12">
          <p className="flex items-center justify-normal gap-2 text-[14px] font-semibold">
            <Clock size={17} className="text-teal-700" />
            Duration:{" "}
            <span className="text-[12px] text-teal-700">
              {data.duration} Days
            </span>
          </p>
          <p className="flex items-center justify-normal gap-2 text-[14px] font-semibold">
            <MountainSnow size={17} className="text-teal-700" />
            Trek Altitude:{" "}
            <span className="text-[12px] text-teal-700">
              {data.trekAltitude}ft
            </span>
          </p>
          <p className="flex items-center justify-normal gap-2 text-[14px] font-semibold">
            <MapPin size={17} className="text-teal-700" />
            Destination:{" "}
            <span className="text-[12px] text-teal-700">{data.location}</span>
          </p>
          <p className="flex items-center justify-normal gap-2 text-[14px] font-semibold">
            <Map size={17} className="text-teal-700" />
            Trek Distance:{" "}
            <span className="text-[12px] text-teal-700">
              {data.distance} km
            </span>
          </p>
          <p className="flex items-center justify-normal gap-2 text-[14px] font-semibold">
            <Users size={17} className="text-teal-700" />
            Group Size: <span className="text-[12px] text-teal-700">8-12</span>
          </p>
          <p className="flex items-center justify-normal gap-2 text-[14px] font-semibold">
            <Calendar size={17} className="text-teal-700" />
            Best Time:{" "}
            <span className="text-[12px] text-teal-700">
              {data.bestTime.join(", ")}
            </span>
          </p>
        </div>
      </div>
      <div className="w-full mt-4 flex lg:gap-14">
        <div className="lg:basis-[70%] w-full md:px-12 px-4 lg:px-1">
          <h1 className="font-bold text-[30px] text-teal-600">
            {data.trekName} Overview
          </h1>
          <div className={BlogStyle}>
            <PortableText
              value={data?.trekDescription}
              components={myPortableTextComponents}
            />
          </div>

          {hasImageGallery && (
            <div className="mt-14">
              <h1 className="mb-16 text-3xl font-bold relative gallery text-teal-700">
                Image Gallery
              </h1>
              <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
                {data.imageGalleryUrls.map((imageUrl, index) => (
                  <div
                    key={index}
                    className="lg:w-[350px] md:w-[350px] h-[250px]"
                  >
                    <Image
                      src={imageUrl}
                      alt={`Gallery Image ${index + 1}`}
                      width={900}
                      height={500}
                      className="w-full h-full rounded-md"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className="mt-16 lg:mr-24">
            <Accordion type="single" collapsible className="w-full">
              {data.faqSection.map((faq) => (
                <AccordionItem value={faq._key} key={faq._key}>
                  <AccordionTrigger className="text-left text-wrap">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          {/* Review Section */}
          <Comments postId={data._id} />
          {/* <ShowComment comments={data?.comments || []} slug={params?.treksid} /> */}
          {/* Review Section */}
        </div>

        {/* Pricing */}
        <div className="lg:hidden fixed w-full h-[70px] bg-[#00000015] backdrop-blur-3xl bottom-0">
          <div className="flex items-center justify-between px-4 h-full">
            <p className="font-bold">
              {" "}
              Price: <span className="text-teal-600">₹{data.prize}</span>
            </p>
            <Btn2 />
          </div>
        </div>
        <div className="bg-[#f5f7f7] w-full basis-[25%] lg:block h-[300px] rounded-md hidden">
          <div className="flex flex-col px-4 py-4">
            <h1 className="font-bold text-emerald-600 text-lg">
              Cost Per Person
            </h1>
            <div className="flex items-center justify-normal gap-2 mt-4">
              <p className="font-semibold text-teal-600 text-lg ml-1">
                ₹{data.prize}
              </p>
              <span className="text-[10px] font-semibold">+5% GST</span>
            </div>
          </div>
          <div className="w-full h-[120px] px-4">
            <Image src={travel} alt="Book_now" className="w-full h-full" />
          </div>
          <div className="w-full px-4 mt-4">
            <BookBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

const BlogStyle = `prose prose-teal mt-8 text-justify lg:max-w-[90%] md:max-w-[90%] max-w-full prose-headings:text-left prose-p:text-left prose-p:w-full prose-headings:text-2xl prose-headings:text-teal-600 prose-p:mb-5 prose-img:my-5 prose-a:text-teal-700 prose-blockquote:italic prose-blockquote:pl-4 prose-blockquote:border-l-4 prose-blockquote:border-teal-700`;

const myPortableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <Image
        src={urlForImage(value)}
        alt="Post"
        width={900}
        height={500}
        className="w-full lg:h-[70dvh] h-[50vh] rounded-md"
      />
    ),
  },
};

export default TrekPage;
