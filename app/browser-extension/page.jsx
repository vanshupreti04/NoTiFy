// src/app/browser-extension/page.js (for Next.js App Router)

"use client"; // This is necessary to make sure the component runs on the client-side with Framer Motion

import React from "react";
import { motion } from "framer-motion";

const BrowserExtension = () => {
  return (
    <div className="min-h-screen bg-black text-white px-8 py-16 flex flex-col items-center justify-center">
      <div className="max-w-3xl w-full text-center">
        {/* Title & Description */}
        <h1 className="text-5xl font-bold mb-6">Browser Extension</h1>
        <p className="text-gray-300 text-lg mb-10 leading-relaxed">
          Capture ideas and save web content directly into NoTiFy with our convenient browser extension. Enhance your productivity by clipping articles, images, and notes with just one click. Our extension is designed to offer a seamless experience across your favorite browsers.
        </p>

        {/* "Coming Soon" Message with Pop-Up Hover Effect */}
        <motion.div
          className="bg-gray-800 rounded-xl p-8 inline-block"
          initial={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <h2 className="text-5xl font-bold text-purple-500">
            Extension is Coming Soon!
          </h2>
        </motion.div>

        {/* Additional Info & "Stay Updated" CTA */}
        <div className="mt-10">
          <p className="text-gray-300 text-lg mb-6">
            Our development team is working hard to bring you a powerful browser extension that makes capturing web content easier than ever. Stay tuned for updates and be among the first to experience this game-changing feature!
          </p>
          <button className="bg-purple-600 hover:bg-purple-500 px-6 py-3 rounded font-semibold transition-transform transform hover:scale-105">
            Stay Updated
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrowserExtension;
