import Image from "next/image";
import Hero from "./home-components/Hero";
import Nav from "../components/Nav";
import Features from "./home-components/Features";
import PopularCategories from "./home-components/PopularCategories";
import PopularProucts from "./home-components/PopularProducts";
import Promo from "./home-components/Promo";
import HotDeals from "./home-components/HotDeals";
import FeaturedProducts from "./home-components/FeaturedProducts";
import SummerSale from "./home-components/sections";
import News from "./home-components/News";
import Testimonials from "./home-components/Testimonials";
import Gallery from "./home-components/Gallery";
import NewsLetter from "./home-components/NewsLetter";
import Footer from "./home-components/Footer";

export default function Home() {
  return (
    <div className="bg-[#ffffff] min-h-screen">
      <Hero />
      <Features />
      <PopularCategories />
      <PopularProucts />
      <Promo />
      <HotDeals />
      <SummerSale />
      <FeaturedProducts />
      <News />
      <Testimonials />
      <Gallery />
    </div>
  );
}
