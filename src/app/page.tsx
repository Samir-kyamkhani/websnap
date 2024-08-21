import { Services } from "@/components/Services";
import { Testimonial } from "@/components/Testimonials-Client"
import {About} from '@/components/About'
import { Footer } from "@/components/Footer";
import { FQ } from "@/components/F&Q";

export default function Home() {
  return (
    <main className="relative bg-[rgb(3,0,20)] flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full overflow-clip">
        <Services />
        <Testimonial />
        <FQ />
        <About />
        <Footer />
      </div>
    </main>
  );
}
