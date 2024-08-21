"use client";

import { InfiniteMovingCards } from "@/components/ui/Infinite-moving-cards";
import { testimonials } from "@/data/index";

export function Testimonial() {
  return (
    <div className="h-[35rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden mt-[-50px] mb-16">
      <div className="text-lg my-32">
        <h2 className=" md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white">
          Kind words from{" "}
          <span className=" md:text-xl lg:text-2xl xl:text-3xl text-[rgb(203,172,249)]">
            satisfied clients
          </span>
        </h2>
      </div>
        <div className="mt-[-5rem]">
          
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
        </div>
    </div>
  );
}
