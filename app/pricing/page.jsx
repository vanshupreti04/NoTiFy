// src/app/pricing/page.js (for Next.js App Router)

"use client"; // Ensures client-side rendering for dynamic elements like animations

import React from "react";
import { motion } from "framer-motion";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-black text-white px-8 py-16">
      <div className="max-w-4xl mx-auto text-center">
        {/* Hero Section */}
        <h1 className="text-5xl font-bold mb-6">Pricing & Open Source</h1>
        <p className="text-gray-300 text-lg mb-10 leading-relaxed">
          At NoTiFy, we believe in community, collaboration, and transparency. Our platform is completely open source and built on the FOSS philosophy, meaning it's free for everyone to use and improve. Whether you're an individual or a business, you can leverage NoTiFy's powerful features at no cost.
        </p>

        {/* Pricing Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div 
            className="bg-gray-800 p-6 rounded-lg" 
            whileHover={{ scale: 1.05 }} 
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <h2 className="text-2xl font-bold mb-4">Community Edition</h2>
            <p className="text-gray-400 mb-4">
              Free forever. Get access to all core features and join our ever-growing community of users and contributors.
            </p>
            <button className="bg-purple-600 hover:bg-purple-500 px-4 py-2 rounded transition-transform transform hover:scale-105">
              Get Started for Free
            </button>
          </motion.div>

          <motion.div 
            className="bg-gray-800 p-6 rounded-lg" 
            whileHover={{ scale: 1.05 }} 
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <h2 className="text-2xl font-bold mb-4">Enterprise Support</h2>
            <p className="text-gray-400 mb-4">
              For organizations that need priority support, custom integrations, and dedicated features. Tailored solutions to scale with your business.
            </p>
            <button className="bg-purple-600 hover:bg-purple-500 px-4 py-2 rounded transition-transform transform hover:scale-105">
              Contact Sales
            </button>
          </motion.div>
        </div>

        {/* Open Source Philosophy Section */}
        <div className="bg-gray-800 p-8 rounded-lg mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Open Source Philosophy</h2>
          <p className="text-gray-400 mb-4">
            NoTiFy is built on the principles of open collaboration. Our source code is available for everyone to inspect, contribute to, and customize. We believe that transparency and community involvement drive innovation.
          </p>
          <a
            href="https://github.com/YourRepo/NoTiFy" // Replace with your repository URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-500 font-semibold underline"
          >
            Explore Our GitHub Repository
          </a>
        </div>

        {/* Support / Donation Section */}
        <div className="bg-gray-800 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Support Our Mission</h2>
          <p className="text-gray-400 mb-4">
            While NoTiFy is free and open source, maintaining and improving our platform requires resources. If you appreciate what we do, consider supporting our mission through donations or by contributing code.
          </p>
          <button className="bg-purple-600 hover:bg-purple-500 px-6 py-3 rounded font-semibold transition-transform transform hover:scale-105">
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
