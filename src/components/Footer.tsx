import React from "react";
import { FloatingDock } from "@/components/ui/Floating-dock";
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";

export function Footer() {
  const links = [
    {
      title: "Instagram",
      icon: <IconBrandInstagram className="h-full w-full text-neutral-300" />,
      href: "#",
    },

    {
      title: "Facebook",
      icon: <IconBrandFacebook className="h-full w-full text-neutral-300" />,
      href: "#",
    },
    {
      title: "Linkedin",
      icon: <IconBrandLinkedin className="h-full w-full text-neutral-300" />,
      href: "#",
    },
    {
      title: "Twitter",
      icon: <IconBrandX className="h-full w-full text-neutral-300" />,
      href: "#",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-full w-full text-neutral-300" />,
      href: "#",
    },
  ];
  return (
    <div className="flex items-center justify-between m-3 ">
      <div className="text-[rgb(198,198,198)] pt-6">
        <h4 className="text-sm sm:text-lg">Copyright ©2024 Websnap</h4>
      </div>
      <div className="mb-[-1rem]">
        <FloatingDock items={links} />
      </div>
    </div>
  );
}
