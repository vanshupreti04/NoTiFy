// src/app/features/page.js (for Next.js App Router)

"use client"; // ✅ Required for animations with Framer Motion

import React from "react";
import { motion } from "framer-motion";
import FeatureSectionSecondDemo from "../blocks/FeatureSection/FeatureSectionSecondDemo"; // ✅ Adjusted import for Next.js

const Features = () => {
  return (
    <div className="min-h-screen bg-black text-white px-8 py-12 lg:px-24">
      {/* Heading and Tagline with Fade-In Effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center"
      >
        <h1 className="text-6xl font-extrabold tracking-wide">Features</h1>
        <p className="text-gray-400 text-lg mt-4">
          Discover the tools that enhance your productivity and workflow.
        </p>
      </motion.div>

      {/* Features Section with Margin */}
      <div className="mt-10">
        <FeatureSectionSecondDemo />
      </div>
    </div>
  );
};

export default Features;
