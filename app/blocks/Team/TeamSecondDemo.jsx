"use client";
import React from "react";
import { AnimatedTooltip } from "./Team";
import Image from "next/image"; // ✅ Importing Next.js Image component

const people = [
  {
    id: 1,
    name: "Vansh Upreti",
    designation: "Full Stack Developer",
    image: "/TeamImages/vansh.png", // ✅ Ensure correct image path
  },
  {
    id: 2,
    name: "Yash Vardhan Ruia",
    designation: "Backend Developer",
    image: "/TeamImages/yash.png", // ✅ Using public folder for images
  },
  {
    id: 3,
    name: "Yuvraj Singh Parihar",
    designation: "Frontend Developer",
    image: "/TeamImages/yuvraj.png",
  },
  {
    id: 4,
    name: "Kushagra Srivastava",
    designation: "Bakchodi",
    image: "/TeamImages/kushagra.png",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
