// src/app/small-business/page.js (for Next.js App Router)

"use client"; // Necessary for framer-motion and client-side rendering

import React from "react";
import { motion } from "framer-motion";

const SmallBusiness = () => {
  return (
    <div className="min-h-screen bg-black text-white px-8 py-16 flex flex-col items-center justify-center">
      <div className="max-w-3xl w-full text-center">
        {/* Hero Section */}
        <h1 className="text-5xl font-bold mb-6">Small Business</h1>
        <p className="text-gray-300 text-lg mb-10 leading-relaxed">
          Discover how NoTiFy can streamline operations, improve team collaboration, and boost productivity for your small business.
          Our platform is designed with small businesses in mind – simple, powerful, and customizable to fit your unique needs.
        </p>
        
        {/* Benefits Section with Hover-Up Effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <motion.div 
            className="bg-gray-800 p-6 rounded-lg"
            whileHover={{ y: -10, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <h3 className="text-2xl font-semibold mb-2">Seamless Collaboration</h3>
            <p className="text-gray-400">
              Enhance team communication with real-time collaboration and easy sharing of ideas and projects.
            </p>
          </motion.div>
          <motion.div 
            className="bg-gray-800 p-6 rounded-lg"
            whileHover={{ y: -10, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <h3 className="text-2xl font-semibold mb-2">Efficient Workflow</h3>
            <p className="text-gray-400">
              Organize tasks, projects, and notes in one unified platform to improve your operational efficiency.
            </p>
          </motion.div>
          <motion.div 
            className="bg-gray-800 p-6 rounded-lg"
            whileHover={{ y: -10, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <h3 className="text-2xl font-semibold mb-2">Data-Driven Insights</h3>
            <p className="text-gray-400">
              Leverage analytics tools to gain insights into your business performance and make informed decisions.
            </p>
          </motion.div>
          <motion.div 
            className="bg-gray-800 p-6 rounded-lg"
            whileHover={{ y: -10, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <h3 className="text-2xl font-semibold mb-2">Cost Effective</h3>
            <p className="text-gray-400">
              Save time and resources with a scalable solution that grows alongside your business.
            </p>
          </motion.div>
        </div>
        
        {/* "Coming Soon" Animated Message */}
        <motion.div
          className="bg-gray-800 rounded-xl p-8 inline-block mb-10"
          initial={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <h2 className="text-4xl font-bold text-purple-500">
            New Features Coming Soon!
          </h2>
        </motion.div>
        
        {/* Call-to-Action Section */}
        <div>
          <p className="text-gray-300 text-lg mb-6">
            Ready to take your small business to the next level? Explore how NoTiFy can transform your operations and drive success.
          </p>
          <button className="bg-purple-600 hover:bg-purple-500 px-6 py-3 rounded font-semibold transition-transform transform hover:scale-105">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default SmallBusiness;
