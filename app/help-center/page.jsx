"use client"; // Ensure client-side rendering for any dynamic elements

import React from "react";
import {
  DocumentTextIcon,
  ArrowsRightLeftIcon,
  KeyIcon,
} from "@heroicons/react/24/outline"; // Import Heroicons

const HelpCenter = () => {
  return (
    <div className="min-h-screen bg-black text-white px-8 py-16 flex flex-col items-center">
      <div className="max-w-5xl w-full text-center">
        
        {/* Hero Section */}
        <h1 className="text-6xl font-bold text-purple-500 mb-6">Help Center</h1>
        <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
          Need assistance? Browse our FAQs, guides, and tutorials, or reach out to our support team.
          We’re here to help you get the most out of NoTiFy.
        </p>

        {/* FAQ Section */}
        <h2 className="text-4xl font-bold text-purple-500 mb-6">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: <DocumentTextIcon className="h-8 w-8 text-purple-500" />,
              title: "How do I create a note?",
              content: "Click the 'New Note' button on your dashboard to start creating a note.",
            },
            {
              icon: <ArrowsRightLeftIcon className="h-8 w-8 text-purple-500" />,
              title: "Can I sync my data?",
              content: "Yes! NoTiFy syncs your notes across all devices whenever online.",
            },
            {
              icon: <KeyIcon className="h-8 w-8 text-purple-500" />,
              title: "How do I reset my password?",
              content: "Use 'Forgot Password' on the login page to reset it.",
            },
          ].map((faq, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg border border-white/30 flex flex-col items-center text-center">
              {faq.icon}
              <h3 className="text-xl font-semibold mt-4">{faq.title}</h3>
              <p className="text-gray-400 mt-2">{faq.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Guides & Tutorials + Need Help Section (Inside Grey Box) */}
      <div className="max-w-5xl w-full flex flex-col md:flex-row justify-between items-start gap-12">
        
        {/* Guides & Tutorials */}
        <div className="w-full md:w-1/2 bg-gray-800 p-8 rounded-lg border border-white/30 text-center">
          <h2 className="text-4xl font-bold text-purple-500 mb-4">Guides & Tutorials</h2>
          <p className="text-gray-400 text-lg mb-6">
            Explore our guides and video tutorials to maximize your productivity with NoTiFy.
          </p>
          <button className="bg-purple-600 hover:bg-purple-500 px-6 py-3 rounded font-semibold transition-transform transform hover:scale-105">
            Explore Guides
          </button>
        </div>

        {/* Need More Help */}
        <div className="w-full md:w-1/2 bg-gray-800 p-8 rounded-lg border border-white/30 text-center">
          <h2 className="text-4xl font-bold text-purple-500 mb-4">Need More Help?</h2>
          <p className="text-gray-400 text-lg mb-6">
            If you can't find the answer you're looking for, our support team is here to help!
          </p>
          <button className="bg-purple-600 hover:bg-purple-500 px-6 py-3 rounded font-semibold transition-transform transform hover:scale-105">
            Contact Support
          </button>
        </div>

      </div>
    </div>
  );
};

export default HelpCenter;
