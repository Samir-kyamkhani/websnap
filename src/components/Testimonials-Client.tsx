"use client";

import { InfiniteMovingCards } from "@/components/ui/Infinite-moving-cards";
import { testimonials } from "@/data/index";
import { CardStack } from "../components/ui/card-stack";
import { useEffect, useState } from "react";

export function Testimonial() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="h-[35rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden mt-2 mb-16">
      <div className="text-lg my-32">
        <h2 className=" md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white">
          Kind words from{" "}
          <span className=" md:text-xl lg:text-2xl xl:text-3xl text-[rgb(203,172,249)]">
            satisfied clients
          </span>
        </h2>
      </div>

      {!isMobile && (
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      )}
      {isMobile && (
        <div className=" flex items-center justify-center w-full p-4 sm:p-6 md:p-8">
          <CardStack
            items={testimonials.map((item) => ({
              id: item.id,
              title: item.title,
              name: item.name,
              img: item.img,
              content: item.quote,
            }))}
            offset={10}
          />
        </div>
      )}
    </div>
  );
}
