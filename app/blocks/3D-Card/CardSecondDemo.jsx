"use client";

import React from "react";
import Link from "next/link"; // ✅ Import Link from next/link
import { CardBody, CardContainer, CardItem } from "./Card";

export function CardSecondDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        {/* Floating Heading */}
        <CardItem translateZ={50} className="text-xl font-bold text-neutral-600 dark:text-white">
          Perfect for Students, Teams & Individuals
        </CardItem>

        {/* Floating Description */}
        <CardItem as="p" translateZ={60} className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Your productivity hub, built for all.
        </CardItem>

        {/* Floating Custom Image */}
        <CardItem translateZ={100} rotateX={20} rotateZ={-10} className="w-full mt-4">
        <img
          src="/assets/uses.png" // Correct way to reference public assets
          className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
          alt="Custom Image"
        />
        </CardItem>

        {/* Floating Buttons */}
        <div className="flex justify-between items-center mt-20">
          {/* ✅ Link "Try now" to /register */}
          <CardItem translateZ={20} translateX={-40} as={Link} href="/register" className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white cursor-pointer">
            Try now →
          </CardItem>

          {/* ✅ Link "Sign up" to /login */}
          <CardItem translateZ={20} translateX={40} as={Link} href="/login" className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold cursor-pointer">
            Sign up
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

export default CardSecondDemo;
