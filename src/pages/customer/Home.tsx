import BookService from "../../components/homePage/BookService";
import HeroSection from "../../components/homePage/HeroSection";
import HowItWorks from "../../components/homePage/HowItWorks";
import Testimonials from "../../components/homePage/Testimonials";
import WhyChooseHomio from "../../components/homePage/WhyChooseHomio";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <WhyChooseHomio />
      <Testimonials />
      <BookService />
    </>
  );
}
