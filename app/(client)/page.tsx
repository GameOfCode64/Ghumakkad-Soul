import Image from "next/image";
import { client } from "@/sanity/lib/client";
import ImageSlider from "@/components/ImageSlider";
import TrekCard from "@/components/TrekCard";
import Banner from "@/components/Banner";
export default function Home() {
  return (
    <div className="w-[100%]">
      <ImageSlider />
      <TrekCard />
      <Banner />
    </div>
  );
}
