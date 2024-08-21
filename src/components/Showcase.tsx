"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";
import { products } from "@/data/Index";

export function Showcase() {
  return (
    <div className="mt-16 ">
        <HeroParallax products={products}  />
    </div>
  )
}