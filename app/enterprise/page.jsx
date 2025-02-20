"use client"; // Necessary for framer-motion and client-side rendering

import React from "react";
import { motion } from "framer-motion";
import { FaHeadset, FaShieldAlt, FaPlug, FaChartLine } from "react-icons/fa"; // Importing Icons

const Enterprise = () => {
  return (
    <div className="min-h-screen bg-black text-white px-8 py-16">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Hero Section */}
        <h1 className="text-5xl font-bold text-purple-500 mb-6">Enterprise Solutions</h1>
        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
          Scale your business with NoTiFy's secure and customizable platform.
        </p>

        {/* Key Features with Hover Effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            className="bg-gray-900 p-6 rounded-lg flex items-center space-x-4 shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <FaHeadset className="text-purple-500 text-4xl" />
            <div>
              <h2 className="text-2xl font-semibold mb-2">Dedicated Support</h2>
              <p className="text-gray-400">
                Get priority assistance with minimal downtime & quick resolutions.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="bg-gray-900 p-6 rounded-lg flex items-center space-x-4 shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <FaShieldAlt className="text-purple-500 text-4xl" />
            <div>
              <h2 className="text-2xl font-semibold mb-2">Advanced Security</h2>
              <p className="text-gray-400">
                Protect data with encryption, role-based access & compliance.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="bg-gray-900 p-6 rounded-lg flex items-center space-x-4 shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <FaPlug className="text-purple-500 text-4xl" />
            <div>
              <h2 className="text-2xl font-semibold mb-2">Custom Integrations</h2>
              <p className="text-gray-400">
                Connect NoTiFy with APIs, plugins & third-party apps.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="bg-gray-900 p-6 rounded-lg flex items-center space-x-4 shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <FaChartLine className="text-purple-500 text-4xl" />
            <div>
              <h2 className="text-2xl font-semibold mb-2">Scalable Architecture</h2>
              <p className="text-gray-400">
                Expand as your team grows with robust infrastructure.
              </p>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-4xl font-bold text-purple-500 mb-4">Empowering Your Solution</h3>
          <p className="text-gray-400 mb-6">
            Discover how NoTiFy streamlines collaboration and boosts productivity.
          </p>
          <button className="bg-purple-600 hover:bg-purple-500 px-6 py-3 rounded font-semibold transition-transform transform hover:scale-105">
            Contact Us
          </button>
        </div>

      </div>
    </div>
  );
};

export default Enterprise;
