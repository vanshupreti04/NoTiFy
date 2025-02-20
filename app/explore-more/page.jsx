"use client"; // Necessary for framer-motion and client-side rendering

import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaKeyboard, FaPalette, FaPlug, FaWifi, FaUsers } from "react-icons/fa";
import { useRouter } from "next/navigation";

const ExploreMore = () => {
  const router = useRouter();

  const features = [
    { icon: <FaCode className="text-purple-500 text-2xl" />, title: "API & Webhooks", desc: "Automate your workflow by integrating with other apps." },
    { icon: <FaKeyboard className="text-purple-500 text-2xl" />, title: "Keyboard Shortcuts", desc: "Speed up your note-taking and organization." },
    { icon: <FaPalette className="text-purple-500 text-2xl" />, title: "Theme Customization", desc: "Personalize your workspace with custom colors & fonts." },
    { icon: <FaPlug className="text-purple-500 text-2xl" />, title: "Plugins & Add-ons", desc: "Extend functionality with community-developed plugins." },
    { icon: <FaWifi className="text-purple-500 text-2xl" />, title: "Offline Editing", desc: "Work seamlessly, even when you're disconnected." },
    { icon: <FaUsers className="text-purple-500 text-2xl" />, title: "Real-time Collab", desc: "Co-edit notes and tasks with your team in real time." },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-8 py-16">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-extrabold text-purple-500 mb-6">Explore More</h1>
          <p className="text-gray-400 text-lg">
            Dive deeper into NoTiFy's advanced features, hidden gems, and community-driven enhancements.
            Whether you're a power user or just getting started, there's always more to discover!
          </p>
        </div>

        {/* Advanced Features Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {features.map((item, i) => (
            <motion.div
              key={i}
              className="border border-white/40 bg-gray-800 p-6 rounded-lg"
              whileHover={{ scale: 1.05 }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <div className="flex items-center gap-3 mb-2">
                {item.icon}
                <h2 className="text-xl font-semibold">{item.title}</h2>
              </div>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Spacing before CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-4xl font-bold text-white mb-4">Ready to Explore?</h3>
          <p className="text-gray-400 mb-6">
            Unlock the full potential of NoTiFy with our advanced features. 
            Customize, integrate, and innovate to build your perfect productivity toolkit.
          </p>
          <button 
            onClick={() => router.push("/login")}
            className="bg-purple-600 hover:bg-purple-500 px-6 py-3 rounded font-semibold transition-transform transform hover:scale-105"
          >
            Start Exploring
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExploreMore;
