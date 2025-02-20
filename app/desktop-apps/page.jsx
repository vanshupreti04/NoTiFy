"use client"; // Required for client-side rendering in Next.js

import React from "react";
import { motion } from "framer-motion";
import { MacbookScrollDemo } from "../blocks/Desktop/DesktopSecondDemo"; // Import the component

const DesktopApps = () => {
  return (
    <div className="min-h-screen bg-black text-white px-8 flex flex-col items-center justify-center">
      <div className="max-w-3xl w-full text-center">
        {/* ✅ Macbook Scroll Component with Extra Spacing Below */}
        <div className="">
          <MacbookScrollDemo />
        </div>
      </div>
    </div>
  );
};

export default DesktopApps;
