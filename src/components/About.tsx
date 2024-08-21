"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `Websnap was founded on the belief that every business deserves a powerful digital presence. We are a team of passionate web developers, designers, and strategists who love turning ideas into impactful online experiences. Our mission is to empower businesses to thrive in the digital landscape through innovative and customized web solutions. Guided by our core values of creativity, integrity, and excellence, we are committed to exceeding our clients' expectations in every project.`;

const word = `This is the main factor that sets us apart from our competition and allows us to deliver a specialist business consultancy service. Our team applies its wide-ranging experience to determining. Through our years of experience, we’ve also learned that while each channel.
This is the main factor that sets us apart from our competition and allows us to deliver a specialist business consultancy service. Our team applies its wide-ranging experience to determining.
`;

export function About() {
  return (
    <div className="px-4 py-8 sm:px-6 md:px-8 lg:px-6 xl:px-24">
      <div>
        <div>
          <h1 className=" text-[rgb(196,193,255)] text-[25px] sm:text-3xl  md:text-4xl lg:text-4xl xl:text-6xl font-bold">
            About Us
          </h1>
          <h3 className="text-lg sm:text-[15px] md:text-2xl lg:text-xl xl:text-4xl mt-2 text-[rgb(232,231,255)]">
            Your trusted partner for business
          </h3>
        </div>
        <TextGenerateEffect
          duration={2}
          filter={false}
          words={words}
          className="mt-4 sm:mt-6 md:mt-8 lg:mt-4 xl:mt-12 text-base sm:text-sm md:text-lg lg:text-xl xl:text-2xl text-[rgb(193,194,211)] "
        />
      </div>
      <div className="py-4">
        <div>
          <h5 className="text-[10px] sm:text-[15px] md:text-2xl lg:text-sm xl:text-4xl mt-2 text-[rgb(142,140,149)]">
            Why Choose Us
          </h5>
          <h3 className="text-lg sm:text-[10px] md:text-2xl lg:text-xl xl:text-4xl mt-2 text-[rgb(232,231,255)]">
            Highly experienced people with us
          </h3>
        </div>
        <TextGenerateEffect
          duration={2}
          filter={false}
          words={word}
          className="mt-4 sm:mt-6 md:mt-8 lg:mt-4 xl:mt-12 textsm md:text-lg lg:text-xl xl:text-2xl text-[rgb(193,194,211)]"
        />
      </div>
    </div>
  );
}
