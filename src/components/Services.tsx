"use client";

import { Tabs } from "../components/ui/Tabs";
import { servicesData } from "@/data/index";

export function Services() {
  return (
    <div className="h-[29rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-center justify-center py-5 sm:my-40">
      <div className="flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8">
        <h4 className="text-[rgb(142,140,149)] text-xs sm:text-sm md:text-base">
          What Can We Do
        </h4>
        <h1 className="text-[rgb(196,193,255)] my-5 text-lg sm:text-xl md:text-2xl lg:text-3xl">
          End-to-End Software, Web App, & Web Development
        </h1>
        <p className="text-[rgb(198,198,198)] text-xs sm:text-sm md:text-base lg:text-lg pb-5">
          Don’t let the technical aspect of your business hold you back. Websnap
          gives you the freedom to transform your business by managing every
          step of the process. From project management, UX & design to custom
          software solutions and technical support.
        </p>
      </div>

      <Tabs
        tabs={servicesData.map((service, index) => ({
          title: service.title,
          value: service.value || `service-${index}`,
          content: (
            <div className="w-full overflow-hidden relative h-full rounded-2xl p-6 sm:p-10 text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-white bg-[rgb(47,5,107)]">
              <h2 className="text-white">{service.title}</h2>
              <p className="text-[rgb(198,198,198)] text-[10px] leading-3 sm:text-sm md:text-base lg:text-lg pt-2 pb-2 px-2">
                {service.description}
              </p>
            </div>
          ),
        }))}
      />
    </div>
  );
}
