// src/app/mobile-apps/page.js (for Next.js App Router)

"use client"; // Necessary for framer-motion and client-side rendering

import React from "react";
import { motion } from "framer-motion";

const MobileApps = () => {
  return (
    <div className="min-h-screen bg-black text-white px-8 py-16 flex flex-col items-center justify-center">
      <div className="max-w-3xl w-full text-center">
        {/* Title & Description */}
        <h1 className="text-5xl font-bold mb-6">Mobile Apps</h1>
        <p className="text-gray-300 text-lg mb-10 leading-relaxed">
          Download NoTiFy on iOS or Android to stay productive on the go.
          Experience seamless note-taking, task management, and more! Our mobile platform is designed to keep you organized wherever you are.
        </p>

        {/* "Coming Soon" Message with Pop-Up Hover Effect */}
        <motion.div
          className="bg-gray-800 rounded-xl p-8 inline-block"
          initial={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <h2 className="text-5xl font-bold text-purple-500">
            App is Coming Soon!
          </h2>
        </motion.div>

        {/* Additional Info & "Stay Updated" CTA */}
        <div className="mt-10">
          <p className="text-gray-300 text-lg mb-6">
            Our team is working hard to bring you an incredible mobile experience.
            Stay tuned for updates and be the first to know when our app goes live!
          </p>
          <button className="bg-purple-600 hover:bg-purple-500 px-6 py-3 rounded font-semibold transition-transform transform hover:scale-105">
            Stay Updated
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileApps;
