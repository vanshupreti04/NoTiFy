// src/app/enterprise/page.js (for Next.js App Router)

"use client"; // Necessary for framer-motion and client-side rendering

import React from "react";
import { motion } from "framer-motion";

const Enterprise = () => {
  return (
    <div className="min-h-screen bg-black text-white px-8 py-16">
      <div className="max-w-4xl mx-auto text-center">
        {/* Hero Section */}
        <h1 className="text-5xl font-bold mb-6">Enterprise Solutions</h1>
        <p className="text-gray-300 text-lg mb-10 leading-relaxed">
          Scale your organization with NoTiFy's robust, secure, and customizable platform. 
          Our Enterprise Solutions offer advanced features, dedicated support, and seamless 
          integrations tailored to your business needs.
        </p>

        {/* Key Features with Hover Effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            className="bg-gray-800 p-6 rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <h2 className="text-2xl font-semibold mb-2">Dedicated Support</h2>
            <p className="text-gray-400">
              Receive priority assistance from our expert team, ensuring minimal downtime and swift resolutions.
            </p>
          </motion.div>
          <motion.div
            className="bg-gray-800 p-6 rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <h2 className="text-2xl font-semibold mb-2">Advanced Security</h2>
            <p className="text-gray-400">
              Protect your data with enterprise-grade encryption, role-based access controls, and compliance certifications.
            </p>
          </motion.div>
          <motion.div
            className="bg-gray-800 p-6 rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <h2 className="text-2xl font-semibold mb-2">Custom Integrations</h2>
            <p className="text-gray-400">
              Connect NoTiFy to your existing workflow with APIs, custom plugins, and seamless third-party integrations.
            </p>
          </motion.div>
          <motion.div
            className="bg-gray-800 p-6 rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <h2 className="text-2xl font-semibold mb-2">Scalable Architecture</h2>
            <p className="text-gray-400">
              Expand effortlessly as your team grows, with flexible hosting options and robust infrastructure.
            </p>
          </motion.div>
        </div>

        {/* CTA */}
        <div className="bg-gray-800 p-8 rounded-lg">
          <h3 className="text-3xl font-bold mb-4">Empower Your Organization</h3>
          <p className="text-gray-400 mb-6">
            Discover how NoTiFy can streamline collaboration, drive innovation, and elevate productivity at scale.
          </p>
          <button className="bg-purple-600 hover:bg-purple-500 px-6 py-3 rounded font-semibold transition-transform transform hover:scale-105">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
};

export default Enterprise;
