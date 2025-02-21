// src/app/browser-extension/page.js (for Next.js App Router)

"use client"; // This is necessary to make sure the component runs on the client-side with Framer Motion

import React from "react";
import { motion } from "framer-motion";

const BrowserExtension = () => {
  return (
    <div className="min-h-screen bg-black text-white px-8 py-16 flex flex-col items-center justify-center">
      <div className="max-w-3xl w-full text-center">

        {/* Title & Description */}
        <h1 className="text-7xl font-bold text-purple-500 mb-10">Browser Extension</h1>
        <p className="text-gray-400 text-base mb-12 leading-relaxed max-w-2xl mx-auto">
          Capture ideas and save web content directly into NoTiFy with our convenient browser extension. 
          Clip articles, images, and notes with just one click. 
        </p>

        {/* "Coming Soon" Message with Pop-Up Hover Effect */}
        <motion.div
          className="bg-gray-800 border border-white/30 rounded-xl p-8 inline-block"
          initial={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <h2 className="text-4xl font-bold text-purple-500">
            Extension is Coming Soon!
          </h2>
        </motion.div>

        {/* Additional Info & "Stay Tuned" CTA */}
        <div className="mt-12">
          <p className="text-gray-400 text-base mb-12 max-w-2xl mx-auto">
            Our team is building a powerful browser extension to simplify web content capturing. 
            Stay tuned for updates and be among the first to try it!
          </p>
          <button className="bg-purple-600 hover:bg-purple-500 px-6 py-3 rounded font-semibold transition-transform transform hover:scale-105 border border-white/30">
            Stay Tuned
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default BrowserExtension;
