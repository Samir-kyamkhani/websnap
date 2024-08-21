"use client";
import React from "react";
import { motion } from "framer-motion";
import { LinkPreview } from "@/components/ui/Link-preview";
import { div } from "three/webgpu";

export function Projects() {
  return (
    <div className="flex justify-center items-center h-[20rem] flex-col px-4">
      <div>
      <h4 className="text-[rgb(142,140,149)] text-xs sm:text-sm md:text-base text-center">
      Our Portfolio
        </h4>
        <h1 className="text-[rgb(196,193,255)] mb-4 text-lg sm:text-xl md:text-2xl lg:text-4xl">
        Some recent work
        </h1>
      </div>
      <div className="text-start ">
      <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-7xl mx-auto mb-4 lg:mb-10">
        <LinkPreview url="https://tailwindcss.com" className="font-bold">
          Tailwind CSS
        </LinkPreview>{" "}
        and{" "}
        <LinkPreview url="https://framer.com/motion" className="font-bold">
          Framer Motion
        </LinkPreview>{" "}
        are a great way to build modern websites.
      </p>
      <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-7xl mx-auto">
        Visit{" "}
        <LinkPreview
          url="https://ui.aceternity.com"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
        >
          Aceternity UI
        </LinkPreview>{" "}
        for amazing Tailwind and Framer Motion components.
      </p>
      </div>
    </div>
  );
}
