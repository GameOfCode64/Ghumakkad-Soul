import ImageSlider from "@/components/ImageSlider";
import TrekCard from "@/components/TrekCard";
import Banner from "@/components/Banner";
import AboutUs from "@/components/AboutUs";
import Review from "@/components/Review";
import Blogs from "@/components/Blogs";
export default function Home() {
  return (
    <main className="w-[100%] bg-[#fff]">
      <ImageSlider />
      <TrekCard />
      <Banner />
      <AboutUs />
      <Blogs />
      <Review />
    </main>
  );
}
