// src/app/help-center/page.js (for Next.js App Router)

"use client"; // Ensure client-side rendering for any dynamic elements

import React from "react";

const HelpCenter = () => {
  return (
    <div className="min-h-screen bg-black text-white px-8 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <h1 className="text-5xl font-bold mb-6">Help Center</h1>
        <p className="text-gray-300 text-lg mb-10 leading-relaxed">
          Need assistance? Browse our FAQs, guides, and tutorials, or reach out to our support team.
          We’re here to help you get the most out of NoTiFy.
        </p>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="bg-gray-800 p-4 rounded-md">
              <h3 className="text-xl font-semibold">How do I create a note?</h3>
              <p className="text-gray-400 mt-2">
                Click the "New Note" button on your dashboard to start creating a note. You can also organize your notes using tags and folders.
              </p>
            </div>
            <div className="bg-gray-800 p-4 rounded-md">
              <h3 className="text-xl font-semibold">Can I sync my data across devices?</h3>
              <p className="text-gray-400 mt-2">
                Yes! NoTiFy automatically syncs your notes across all your devices whenever you're connected to the internet.
              </p>
            </div>
            <div className="bg-gray-800 p-4 rounded-md">
              <h3 className="text-xl font-semibold">How do I reset my password?</h3>
              <p className="text-gray-400 mt-2">
                Use the "Forgot Password" link on the login page and follow the instructions to reset your password.
              </p>
            </div>
          </div>
        </div>

        {/* Guides & Tutorials Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Guides & Tutorials</h2>
          <p className="text-gray-300 text-lg mb-4">
            Explore our step-by-step guides and video tutorials to learn how to maximize your productivity with NoTiFy.
          </p>
          <button className="bg-purple-600 hover:bg-purple-500 px-6 py-3 rounded font-semibold transition-transform transform hover:scale-105">
            Explore Guides
          </button>
        </div>

        {/* Contact Support Section */}
        <div className="bg-gray-800 p-6 rounded-md">
          <h2 className="text-3xl font-bold mb-4">Need More Help?</h2>
          <p className="text-gray-400 mb-4">
            If you can't find the answer you're looking for, our support team is here to assist you. Please reach out and we'll be happy to help!
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
