import { About } from "@/components/About";
import { Approach } from "@/components/Approach";
import BrandLogoSlidAnimation from "@/components/BrandLogoSlidAnimation";
import { ContactUs } from "@/components/ContactUs";
import Cta from "@/components/Cta";
import { FQ } from "@/components/F&Q";
import { Footer } from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { Services } from "@/components/Services";
import { Showcase } from "@/components/Showcase";
import { Testimonial } from "@/components/Testimonials-Client";

export default function Home() {
  return (
    <main className=" relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <Navbar />
        <Hero />
        <BrandLogoSlidAnimation />
        <Showcase />
        <Testimonial />
        <Services />
        <Cta />
        <Approach />
        <About />
        <FQ />
        <ContactUs />
        <Footer />
      </div>
    </main>
  );
}
