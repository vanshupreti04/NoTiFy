// src/app/calendar-sync/page.js (for Next.js App Router)

"use client"; // Necessary for framer-motion and client-side rendering

import React from "react";
import { motion } from "framer-motion";

const CalendarSync = () => {
  return (
    <div className="min-h-screen bg-black text-white px-8 py-16 flex flex-col items-center justify-center">
      <div className="max-w-3xl w-full text-center">
        {/* Title & Description */}
        <h1 className="text-5xl font-bold mb-6">Calendar Sync</h1>
        <p className="text-gray-300 text-lg mb-10 leading-relaxed">
          Sync your NoTiFy tasks and events with your favorite calendar apps. 
          Keep everything in one place for better organization and never miss 
          an important date or deadline.
        </p>

        {/* "Coming Soon" Message with Pop-Up Hover Effect */}
        <motion.div
          className="bg-gray-800 rounded-xl p-8 inline-block"
          initial={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <h2 className="text-5xl font-bold text-purple-500">
            Calendar Sync is Coming Soon!
          </h2>
        </motion.div>

        {/* Additional Info & "Stay Updated" CTA */}
        <div className="mt-10">
          <p className="text-gray-300 text-lg mb-6">
            Our team is working hard to bring seamless calendar integration 
            right into NoTiFy. Stay tuned for updates on our progress and 
            be the first to know when this feature goes live!
          </p>
          <button className="bg-purple-600 hover:bg-purple-500 px-6 py-3 rounded font-semibold transition-transform transform hover:scale-105">
            Stay Updated
          </button>
        </div>
      </div>
    </div>
  );
};

export default CalendarSync;
