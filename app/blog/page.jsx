// src/app/blog/page.js (for Next.js App Router)

"use client"; // Necessary for Framer Motion and client-side rendering

import React from "react";
import { motion } from "framer-motion";

// Dummy blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Maximizing Productivity with NoTiFy",
    excerpt:
      "Discover how our powerful note-taking app can boost your productivity and help you organize your life.",
  },
  {
    id: 2,
    title: "Team Collaboration Tips",
    excerpt:
      "Learn best practices for effective team collaboration using NoTiFy to stay in sync with your colleagues.",
  },
  {
    id: 3,
    title: "The Future of Digital Note-Taking",
    excerpt:
      "Explore the latest trends and innovations that are shaping the future of note-taking and digital organization.",
  },
  {
    id: 4,
    title: "How to Organize Your Life",
    excerpt:
      "Practical tips and strategies to keep your tasks and projects organized, so you can focus on what matters most.",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-black text-white px-8 py-16">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Blog</h1>
          <p className="text-gray-300 text-lg">
            Discover productivity tips, company updates, and inspiring stories from our users on the NoTiFy blog.
          </p>
        </div>

        {/* Latest Posts Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Latest Posts</h2>
          <motion.div
            className="grid md:grid-cols-2 gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {blogPosts.map((post) => (
              <motion.div
                key={post.id}
                className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <button className="bg-purple-600 hover:bg-purple-500 px-4 py-2 rounded transition">
                  Read More
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Newsletter Subscription Section */}
        <div className="bg-gray-800 p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-400 mb-6">
            Subscribe to our newsletter to receive the latest blog posts, updates, and exclusive offers.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded w-full sm:w-64 text-black"
            />
            <button className="bg-purple-600 hover:bg-purple-500 px-6 py-2 rounded font-semibold transition-transform transform hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
