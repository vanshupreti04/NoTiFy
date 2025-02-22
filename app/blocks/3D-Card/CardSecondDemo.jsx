"use client";

import React from "react";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "./Card";

export function CardSecondDemo() {
  return (
    <CardContainer className="inter-var dark">
      <CardBody
        className="bg-gray-50 text-center relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] 
                  dark:bg-black dark:border-white/[0.3] border-black/[0.2] 
                  w-auto sm:w-[26rem] h-auto rounded-xl p-8 border
                  
                  /* ✅ Default (Above 450px) */
                  mx-0 

                  /* ✅ For Small Screens (≤450px) */
                  [@media(max-width:450px)]:w-[18rem] 
                  [@media(max-width:450px)]:h-[20rem] 
                  [@media(max-width:450px)]:p-6 
                  [@media(max-width:450px)]:flex 
                  [@media(max-width:450px)]:flex-col 
                  [@media(max-width:450px)]:items-center 
                  [@media(max-width:450px)]:justify-center 
                  [@media(max-width:450px)]:mx-auto">
        
        {/* Floating Heading */}
        <CardItem translateZ={40} className="text-base sm:text-lg font-semibold text-neutral-600 dark:text-white">
          Perfect for Everyone
        </CardItem>

        {/* Floating Description */}
        <CardItem as="p" translateZ={50} className="text-neutral-500 text-xs sm:text-sm max-w-xs mt-2 dark:text-neutral-300">
          Your productivity hub, designed for all users.
        </CardItem>

        {/* Floating Custom Image */}
        <CardItem translateZ={80} rotateX={15} rotateZ={-5} className="w-full mt-4">
          <img
            src="/assets/uses.png"
            className="h-36 sm:h-52 w-full object-cover rounded-lg group-hover/card:shadow-xl border border-gray-300 dark:border-white/[0.2]"
            alt="Custom Image"
          />
        </CardItem>

        {/* Floating Buttons */}
        <div className="flex gap-6 justify-between items-center mt-6 sm:mt-8">
          {/* ✅ "Try now" button */}
          <CardItem 
            translateZ={15} translateX={-30} 
            as={Link} href="/register" 
            className="px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-normal dark:text-white cursor-pointer border border-gray-400 dark:border-white/[0.5]">
            Try now →
          </CardItem>

          {/* ✅ "Sign up" button */}
          <CardItem 
            translateZ={15} translateX={30} 
            as={Link} href="/login" 
            className="px-3 sm:px-4 py-2 rounded-lg bg-black dark:bg-white dark:text-black text-white text-xs sm:text-sm font-bold cursor-pointer">
            Sign up
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

export default CardSecondDemo;
