import { Approach } from "@/components/Approach";
import BrandLogoSlidAnimation from "@/components/BrandLogoSlidAnimation";
import { ContactUs } from "@/components/ContactUs";
import Cta from "@/components/Cta";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { Showcase } from "@/components/Showcase";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <Navbar />
        <Hero />
        <BrandLogoSlidAnimation />
        <Showcase />
        <Cta />
        <Approach />
        <ContactUs />
        {/* <Grid />
      <Projects />
      <Clients />
      <Experience />
      <Approach />
      <Footer /> */}
      </div>
    </main>
  );
}
