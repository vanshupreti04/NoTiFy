"use client"; // Required for client-side rendering with framer-motion

import React from "react";
import { motion } from "framer-motion";
import Lanyard from "../blocks/lanyard/lanyard"; // Import Lanyard component

const MobileApps = () => {
  return (
    <div className="relative min-h-screen bg-black text-white px-8 flex flex-col items-center justify-start">
      
      {/* Lanyard Component (ID Card Animation) - Positioned at the Top */}
      <div className="absolute top-0 left-0 w-full flex justify-center">
        <Lanyard position={[0, 0, 20]} gravity={[0, -80, 0]} />
      </div>

      {/* Large Heading: "Mobile    App" with Bigger Font & More Gap */}
      <div className="absolute top-20 w-full flex justify-center text-[10rem] font-black text-purple-500">
        <h1>Mobile&nbsp;&nbsp;&nbsp;&nbsp;Version</h1>
      </div>

      {/* Tagline & Button Section */}
      <div className="mt-[650px] flex flex-col items-center">
        <p className="text-gray-400 text-md max-w-2xl text-center leading-relaxed">
          Download NoTiFy on iOS & Android for a seamless note-taking & task management experience.
        </p>

        <button className="mt-6 bg-purple-800 text-white border border-white px-6 py-3 rounded font-semibold transition-transform transform hover:scale-105 hover:bg-purple-700">
          Stay Tuned
        </button>
      </div>

    </div>
  );
};

export default MobileApps;

