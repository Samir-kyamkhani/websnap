"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Textarea } from "./ui/textarea";

export function ContactUs() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <>
      <div className="mt-36 mb-14 px-4 md:px-8">
        <h2 className="text-center text-2xl md:text-4xl font-bold text-purple">
          Contact Us
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-16 justify-center items-start px-4 md:px-8">
        <div className="w-full  max-w-md bg-white dark:bg-black-100 rounded-lg p-4 md:p-8 shadow-md">
          <div>
            <h1 className="text-lg md:text-xl font-semibold">
              Getting in Touch
            </h1>
            <h2 className="text-md md:text-lg mt-3">
              Do you have a Project <br /> in your mind?
            </h2>
          </div>
          <div className="mt-6">
            <h3 className="text-md md:text-lg mb-2">
              Subscribe to our newsletter
            </h3>
            <LabelInputContainer>
              <Label htmlFor="email" className="sr-only">
                Email
              </Label>
              <Input
                id="email"
                placeholder="projectmayhem@fc.com"
                type="email"
              />
            </LabelInputContainer>
            <div className="mt-6">
              <button className="relative inline-flex h-10 md:h-12 overflow-hidden rounded-full p-[2px]">
                <span className="absolute inset-[-1000%] animate-spin bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-xs font-medium text-white backdrop-blur-3xl sm:px-8 sm:py-2 sm:text-sm md:px-8 md:py-3 md:text-base lg:px-8 lg:py-4 lg:text-lg xl:px-8 xl:py-5 xl:text-xl">
                  <div className="flex items-center gap-2">Subscribe</div>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full max-w-md bg-white dark:bg-black-100 rounded-lg p-4 md:p-8 shadow-md">
          <h2 className="font-bold text-lg md:text-xl text-neutral-400 dark:text-neutral-200">
            Welcome to Websnap
          </h2>
          <p className="text-neutral-600 text-sm md:text-base max-w-sm mt-2 dark:text-neutral-300">
            Ready to Boost Your Digital Presence? Let's Make it Happen!
          </p>

          <form className="my-8" onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 mb-4">
              <LabelInputContainer>
                <Label htmlFor="firstname">First name</Label>
                <Input id="firstname" placeholder="Tyler" type="text" />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="lastname">Last name</Label>
                <Input id="lastname" placeholder="Durden" type="text" />
              </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                placeholder="projectmayhem@fc.com"
                type="email"
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="phonenumber">Phone number</Label>
              <Input id="phonenumber" placeholder="Phone number" type="text" />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="projecttype">Project type</Label>
              <Input id="projecttype" placeholder="Project type" type="text" />
            </LabelInputContainer>
            <LabelInputContainer className="mb-8">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Message..." />
            </LabelInputContainer>

            <div className="flex justify-center">
            <button type="submit" className="relative inline-flex h-10 md:h-12 overflow-hidden rounded-full p-[2px]">
                <span className="absolute inset-[-1000%] animate-spin bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-xs font-medium text-white backdrop-blur-3xl sm:px-8 sm:py-2 sm:text-sm md:px-8 md:py-3 md:text-base lg:px-8 lg:py-4 lg:text-lg xl:px-8 xl:py-5 xl:text-xl">
                  <div className="flex items-center gap-2">Send</div>
                <BottomGradient />
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2", className)}>{children}</div>
  );
};
