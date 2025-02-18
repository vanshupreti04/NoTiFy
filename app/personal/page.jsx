// src/app/personal/page.js (for Next.js App Router)

"use client"; // Necessary for framer-motion and client-side rendering

import React from "react";
import { motion } from "framer-motion";

const Personal = () => {
  return (
    <div className="min-h-screen bg-black text-white px-8 py-16 flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full text-center">
        {/* Hero Section */}
        <h1 className="text-5xl font-bold mb-6">Personal Productivity</h1>
        <p className="text-gray-300 text-lg mb-10 leading-relaxed">
          Unleash your creativity and organize your life with NoTiFy's personal features,
          designed just for you. Whether you're planning your day, tracking your goals, or jotting down ideas,
          NoTiFy is your ultimate companion.
        </p>

        {/* Features Section with Pop-Up Hover Effect on Each Block */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            className="bg-gray-800 p-6 rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <h3 className="text-2xl font-semibold mb-2">Customizable Dashboards</h3>
            <p className="text-gray-400">
              Tailor your workspace to suit your personal style, with customizable themes, layouts, and widgets.
            </p>
          </motion.div>
          <motion.div
            className="bg-gray-800 p-6 rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <h3 className="text-2xl font-semibold mb-2">Goal Tracking</h3>
            <p className="text-gray-400">
              Set personal goals, track your progress, and celebrate your achievements with intuitive visualizations.
            </p>
          </motion.div>
          <motion.div
            className="bg-gray-800 p-6 rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <h3 className="text-2xl font-semibold mb-2">Inspiration & Journaling</h3>
            <p className="text-gray-400">
              Capture your thoughts, reflect on your journey, and find inspiration every day with our journaling tools.
            </p>
          </motion.div>
          <motion.div
            className="bg-gray-800 p-6 rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <h3 className="text-2xl font-semibold mb-2">Personal Reminders</h3>
            <p className="text-gray-400">
              Keep track of important tasks and appointments with smart, timely reminders designed for your busy schedule.
            </p>
          </motion.div>
        </div>

        {/* Additional Information Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Unlock Your Full Potential</h2>
          <p className="text-gray-300 text-lg mb-4">
            With NoTiFy's personal features, you can bring clarity and focus to your daily routine.
            From customizable dashboards to smart reminders, our tools help you stay organized and inspired.
          </p>
          <p className="text-gray-300 text-lg">
            Whether you're a creative professional, a student, or simply someone striving for personal growth,
            NoTiFy is designed to empower you to achieve your goals and transform your ideas into action.
          </p>
        </div>

        {/* Call-to-Action Section */}
        <div>
          <p className="text-gray-300 text-lg mb-6">
            Ready to transform your daily routine and unlock your full creative potential?
            Join our community for exclusive tips, early access, and personalized productivity insights.
          </p>
          <button className="bg-purple-600 hover:bg-purple-500 px-6 py-3 rounded font-semibold transition-transform transform hover:scale-105">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Personal;
