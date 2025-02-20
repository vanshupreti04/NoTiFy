// src/app/calendar-sync/page.js (for Next.js App Router)

"use client"; // Necessary for framer-motion and client-side rendering

import React from "react";
import { motion } from "framer-motion";

const CalendarSync = () => {
  return (
    <div className="min-h-screen bg-black text-white px-8 py-16 flex flex-col items-center justify-center">
      <div className="max-w-3xl w-full text-center">
        {/* Title */}
        <h1 className="text-6xl font-bold text-purple-500 mb-8">
          Calendar Sync
        </h1>

        {/* Tagline */}
        <p className="text-gray-400 text-lg mb-28 leading-relaxed">
          Sync your NoTiFy tasks and events with your favorite calendar apps. 
          Keep everything in one place for better organization and never miss 
          an important date or deadline.
        </p>

        {/* "Coming Soon" Card with Border */}
        <motion.div
          className="bg-gray-800 mb-28 border border-white rounded-xl p-8 inline-block"
          initial={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <h2 className="text-5xl font-bold text-purple-500">
            Calendar Sync Coming Soon!
          </h2>
        </motion.div>

        {/* Additional Info & "Stay Updated" CTA */}
        <div >
          <p className="text-gray-400 text-lg mb-8">
            Our team is working hard to bring seamless calendar integration 
            right into NoTiFy. Stay tuned for updates on our progress and 
            be the first to know when this feature goes live!
          </p>
          <button className="border border-white bg-purple-600 hover:bg-purple-500 px-6 py-3 rounded font-semibold transition-transform transform hover:scale-105">
            Stay Updated
          </button>
        </div>
      </div>
    </div>
  );
};

export default CalendarSync;
