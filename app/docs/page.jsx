// src/app/docs/page.js (for Next.js App Router)

"use client"; // ✅ Required for animations with Framer Motion

import { motion } from "framer-motion";
import { FaHome, FaRocket, FaExchangeAlt, FaRobot, FaQuestionCircle, FaGithub } from "react-icons/fa";

const Docs = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-10 lg:px-32">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-20"
      >
        <h1 className="text-6xl font-extrabold tracking-wide text-purple-500">
          NoTiFy Docs
        </h1>
        <p className="text-gray-400 text-lg mt-4">
          Everything you need to know about NoTiFy.
        </p>
      </motion.div>

      <div className="space-y-32">
        {/* Introduction & Overview */}
        <section className="flex items-start justify-between w-full max-w-6xl mx-auto">
          <div className="flex items-start w-1/2">
            <FaHome className="text-purple-500 mr-4 text-6xl" />
            <h2 className="text-6xl font-bold">Introduction</h2>
          </div>
          <p className="text-gray-300 text-lg w-1/2 leading-relaxed">
            NoTiFy started as a hackathon project, built to be a fast, lightweight, and collaborative note-taking tool. It has evolved into a fully open-source application with powerful features for developers, students, and teams.
          </p>
        </section>
        <hr className="border-t border-gray-700 my-8" />

        {/* Quick Start Guide */}
        <section className="flex items-start justify-between w-full max-w-6xl mx-auto">
          <div className="flex items-start w-1/2">
            <FaRocket className="text-purple-500 mr-4 text-6xl" />
            <h2 className="text-6xl font-bold">Quick Start</h2>
          </div>
          <ul className="text-gray-300 text-lg w-1/2 leading-relaxed space-y-3 list-none">
            <li><strong>→ Installation:</strong> Download NoTiFy from GitHub and install it.</li>
            <li><strong>→ Create Your First Note:</strong> Start writing and use Markdown for formatting.</li>
            <li><strong>→ Sync with GitHub:</strong> Connect GitHub for auto-save and version control.</li>
          </ul>
        </section>
        <hr className="border-t border-gray-700 my-8" />

        {/* Alternatives to NoTiFy */}
        <section className="flex items-start justify-between w-full max-w-6xl mx-auto">
          <div className="flex items-start w-1/2">
            <FaExchangeAlt className="text-purple-500 mr-4 text-6xl" />
            <h2 className="text-6xl font-bold">Alternatives</h2>
          </div>
          <ul className="text-gray-300 text-lg w-1/2 leading-relaxed space-y-3 list-none">
            <li><strong>→ Notion:</strong> Great for structured note-taking but lacks offline support.</li>
            <li><strong>→ Google Docs:</strong> Ideal for collaboration but lacks Markdown support.</li>
            <li><strong>→ Evernote:</strong> Feature-rich but requires premium for full functionality.</li>
            <li><strong>→ Obsidian:</strong> Powerful Markdown tool but no built-in cloud sync.</li>
          </ul>
        </section>
        <hr className="border-t border-gray-700 my-8" />

        {/* AI Integration */}
        <section className="flex items-start justify-between w-full max-w-6xl mx-auto">
          <div className="flex items-start w-1/2">
            <FaRobot className="text-purple-500 mr-4 text-6xl" />
            <h2 className="text-6xl font-bold">AI Features</h2>
          </div>
          <p className="text-gray-300 text-lg w-1/2 leading-relaxed">
            NoTiFy is working on AI-powered features such as smart note summarization, intelligent suggestions, and automated organization.
          </p>
        </section>
        <hr className="border-t border-gray-700 my-8" />

        {/* FAQ & Troubleshooting */}
        <section className="flex items-start justify-between w-full max-w-6xl mx-auto">
          <div className="flex items-start w-1/2">
            <FaQuestionCircle className="text-purple-500 mr-4 text-6xl" />
            <h2 className="text-6xl font-bold">FAQ</h2>
          </div>
          <div className="text-gray-300 text-lg w-1/2 leading-relaxed space-y-6">
            <div>
              <strong>→ Why isn’t GitHub sync working?</strong>
              <p className="mt-1">Ensure proper permissions are given.</p>
            </div>

            <div>
              <strong>→ Can I use NoTiFy offline?</strong>
              <p className="mt-1">Yes! Work offline and sync later.</p>
            </div>

            <div>
              <strong>→ Is NoTiFy free?</strong>
              <p className="mt-1">100% open-source, with no subscriptions.</p>
            </div>
          </div>
        </section>
        <hr className="border-t border-gray-700 my-8" />

        {/* Open Source & Contribution */}
        <section className="flex items-start justify-between w-full max-w-6xl mx-auto">
          <div className="flex items-start w-1/2">
            <FaGithub className="text-purple-500 mr-4 text-6xl" />
            <h2 className="text-6xl font-bold">Contribute</h2>
          </div>
          <p className="text-gray-300 text-lg w-1/2 leading-relaxed">
            NoTiFy is fully open-source! Join our GitHub community and help improve the project.
          </p>
        </section>

        {/* GitHub Button Positioned Below the Text */}
        <div className="text-center mt-6 max-w-6xl mx-auto">
          <a
            href="https://github.com/vanshupreti04/NoTiFy.git"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-purple-500 hover:bg-purple-600 hover:text-white px-4 py-2 rounded-full text-lg font-semibold transition duration-300"
          >
            Visit GitHub Repository
          </a>
        </div>
      </div>
    </div>
  );
};

export default Docs;
