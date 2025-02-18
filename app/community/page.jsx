// src/app/community/page.js (for Next.js App Router)

"use client"; // Necessary for Framer Motion and client-side rendering

import React from "react";
import { motion } from "framer-motion";

const Community = () => {
  return (
    <div className="min-h-screen bg-black text-white px-8 py-16">
      <div className="max-w-4xl mx-auto text-center">
        {/* Hero Section */}
        <h1 className="text-5xl font-bold mb-6">Community</h1>
        <p className="text-gray-300 text-lg mb-10 leading-relaxed">
          Connect with fellow NoTiFy users, share ideas, and get inspired by community-driven resources.
          Join our vibrant community where creativity, productivity, and collaboration come together.
          Whether you're a seasoned pro or just starting out, there's always something new to learn and share.
        </p>

        {/* Animated "Join the Conversation" Message with Pop-Up Hover Effect */}
        <motion.div
          className="bg-gray-800 rounded-xl p-8 inline-block mb-10"
          initial={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <h2 className="text-4xl font-bold text-purple-500">
            Join the Conversation!
          </h2>
        </motion.div>

        {/* Community Posts Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">User Spotlight: Jane Doe</h3>
            <p className="text-gray-400">
              "NoTiFy has revolutionized the way I manage my daily tasks and projects. 
              The community support and shared ideas have been invaluable!"
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">Tips & Tricks: Productivity Hacks</h3>
            <p className="text-gray-400">
              Discover top tips for staying organized and maximizing your workflow. 
              Our community members share their best productivity hacks to help you succeed.
            </p>
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="bg-gray-800 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Become a Part of Our Community</h2>
          <p className="text-gray-400 mb-6">
            Sign up today to join our community forum, receive exclusive updates, 
            and collaborate with users from around the world.
          </p>
          <button className="bg-purple-600 hover:bg-purple-500 px-6 py-3 rounded font-semibold transition-transform transform hover:scale-105">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Community;
