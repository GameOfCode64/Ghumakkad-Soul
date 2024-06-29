import ImageSlider from "@/components/ImageSlider";
import TrekCard from "@/components/TrekCard";
import Banner from "@/components/Banner";
import AboutUs from "@/components/AboutUs";
export default function Home() {
  return (
    <div className="w-[100%]">
      <ImageSlider />
      <TrekCard />
      <Banner />
      <AboutUs />
    </div>
  );
}
