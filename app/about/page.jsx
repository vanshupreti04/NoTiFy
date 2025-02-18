"use client"; // ✅ Required for animations with Framer Motion

import React from 'react';
import Image from 'next/image'; // ✅ Optimized Image component
import { AnimatedTooltipPreview } from '../blocks/Team/TeamSecondDemo'; // ✅ Team Component

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white px-8 lg:px-48 py-16">
      
      {/* Header Section: Logo and Heading together */}
      <div className="flex items-center justify-center mb-16">
        <Image 
          src="/assets/logo.png" // ✅ Fixed path (from public/)
          alt="NoTiFy Logo"
          width={64} // ✅ Set explicit dimensions for optimization
          height={64}
          className="h-16 mr-4"
        />
        <h1 className="text-5xl font-bold text-center">About NoTiFy</h1>
      </div>

      {/* Separator Line */}
      <hr className="border-t border-gray-700 mb-12 w-7/4 mx-auto" />

      {/* Our Mission Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Side - "Our Mission" Heading */}
        <div className="lg:w-1/3 text-center">
          <h2 className="text-7xl font-bold leading-tight">Our Mission</h2>
        </div>

        {/* Right Side - Description */}
        <div className="lg:w-1/2 text-16px text-gray-400 leading-relaxed">
          <p>
            At NoTiFy, our mission is to simplify collaboration. We
            believe that powerful note-taking should be accessible to everyone. 
            Our goal is to make sure that anyone,
            anywhere can capture their thoughts seamlessly. We
            want NoTiFy to be the go-to tool for effective personal and team note-taking.
          </p>
        </div>
      </div>

      {/* Separator Line */}
      <hr className="border-t border-gray-700 my-12 w-5/4 mx-auto" />

      {/* Meet the Team Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Side - "Meet the Team" Heading */}
        <div className="lg:w-1/3 text-center">
          <h2 className="text-7xl font-bold">Meet the Team</h2>
          <p className="text-gray-400 text-16px text-sm mt-8">
            A team of four passionate developers working together to build NoTiFy
            as a free, open-source note-taking app that is simple, efficient, and
            accessible to everyone.
          </p>
        </div>

        {/* Right Side - Team Members */}
        <div className="lg:w-2/3">
          <AnimatedTooltipPreview />
        </div>
      </div>
    </div>
  );
};

export default About;
