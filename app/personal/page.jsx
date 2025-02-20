"use client"; // Necessary for framer-motion and client-side rendering

import React from "react";
import { motion } from "framer-motion";
import { FaTachometerAlt, FaBullseye, FaLightbulb, FaBell } from "react-icons/fa";

const Personal = () => {
  return (
    <div className="min-h-screen bg-black text-white px-8 py-16 flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full text-center">
        {/* Hero Section */}
        <h1 className="text-6xl font-extrabold text-purple-500 mb-6">Personal Productivity</h1>
        <p className="text-gray-400 text-lg mb-14 leading-relaxed">
          Unleash your creativity and organize your life with NoTiFy's personal features, 
          designed just for you.
        </p>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            className="bg-gray-800 p-6 rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <div className="flex items-center gap-3 mb-2">
              <FaTachometerAlt className="text-purple-500 text-2xl" />
              <h3 className="text-2xl font-semibold">Customizable Dashboards</h3>
            </div>
            <p className="text-gray-400">
              Tailor your workspace to suit your personal style, with customizable themes, layouts, and widgets.
            </p>
          </motion.div>

          <motion.div
            className="bg-purple-900 p-6 rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <div className="flex items-center gap-3 mb-2">
              <FaBullseye className="text-white text-2xl" />
              <h3 className="text-2xl font-semibold">Goal Tracking</h3>
            </div>
            <p className="text-gray-400">
              Set personal goals, track your progress, and celebrate your achievements with intuitive visualizations.
            </p>
          </motion.div>

          <motion.div
            className="bg-purple-900 p-6 rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <div className="flex items-center gap-3 mb-2">
              <FaLightbulb className="text-white text-2xl" />
              <h3 className="text-2xl font-semibold">Inspiration & Journaling</h3>
            </div>
            <p className="text-gray-400">
              Capture your thoughts, reflect on your journey, and find inspiration every day with our journaling tools.
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-800 p-6 rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <div className="flex items-center gap-3 mb-2">
              <FaBell className="text-purple-500 text-2xl" />
              <h3 className="text-2xl font-semibold">Personal Reminders</h3>
            </div>
            <p className="text-gray-400">
              Keep track of important tasks and appointments with smart, timely reminders designed for your busy schedule.
            </p>
          </motion.div>
        </div>

        {/* Separator Line */}
        <hr className="border-gray-700 my-10" />

        {/* Unlock Full Potential Section */}
        <div className="mb-18">
          <h2 className="text-5xl font-extrabold text-purple-500 mb-10">Unlock Your Full Potential</h2>
          <p className="text-gray-400 text-lg mb-4">
            With NoTiFy's personal features, you can bring clarity and focus to your daily routine.
          </p>
          <p className="text-gray-400 text-lg mb-4">
            From customizable dashboards to smart reminders, our tools help you stay organized and inspired.
          </p>
          <p className="text-gray-400 text-lg">
            Whether you're a creative professional, a student, or simply someone striving for personal growth, 
            NoTiFy is designed to empower you to achieve your goals and transform your ideas into action.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Personal;
