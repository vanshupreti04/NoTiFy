"use client"; // Necessary for framer-motion and client-side rendering

import React from "react";
import { FaUsers, FaTasks, FaChartLine, FaDollarSign } from "react-icons/fa";
import GradientText from "../blocks/Gradient-Text/GradientText";

const SmallBusiness = () => {
  return (
    <div className="min-h-screen bg-black text-white px-8 py-16 flex flex-col items-center justify-center">
      <div className="max-w-6xl w-full text-center">
        {/* Hero Section */}
        <h1 className="text-5xl font-bold text-purple-500 mb-6">Small Business</h1>
        <p className="text-gray-400 text-lg mb-12 leading-relaxed">
          Discover how NoTiFy can streamline operations, improve team collaboration, and boost productivity for your small business.
        </p>

        {/* Benefits Section - 4 Cards with Matching Headings */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          <div className="bg-gray-800 p-10 rounded-lg flex flex-col items-center text-center w-[280px]">
            <FaUsers className="text-purple-500 text-5xl mb-4" />
            <h3 className="text-2xl font-semibold mb-3 break-words text-center">
              Seamless <br /> Collaboration
            </h3>
            <p className="text-gray-400 text-lg max-w-[300px]">
              Enhance team communication with real-time collaboration and easy sharing of ideas and projects.
            </p>
          </div>

          <div className="bg-gray-800 p-10 rounded-lg flex flex-col items-center text-center w-[280px]">
            <FaTasks className="text-purple-500 text-5xl mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-center">
              Efficient <br /> Workflow
            </h3>
            <p className="text-gray-400 text-lg max-w-[300px]">
              Organize tasks, projects, and notes in one unified platform to improve your operational efficiency.
            </p>
          </div>

          <div className="bg-gray-800 p-10 rounded-lg flex flex-col items-center text-center w-[280px]">
            <FaChartLine className="text-purple-500 text-5xl mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-center">
              Data-Driven <br /> Insights
            </h3>
            <p className="text-gray-400 text-lg max-w-[300px]">
              Leverage analytics tools to gain insights into your business performance and make informed decisions.
            </p>
          </div>

          <div className="bg-gray-800 p-10 rounded-lg flex flex-col items-center text-center w-[280px]">
            <FaDollarSign className="text-purple-500 text-5xl mb-4" />
            <h3 className="text-2xl font-semibold mb-3 break-words text-center">
              Cost <br /> Effective
            </h3>
            <p className="text-gray-400 text-lg max-w-[300px]">
              Save time and resources with a scalable solution that grows alongside your business.
            </p>
          </div>
        </div>

        {/* "Coming Soon" Animated Message */}
        <div className="mb-12">
          <GradientText
            colors={["#8A2BE2", "#6A0DAD", "#B266FF", "#4B0082", "#8A2BE2"]}
            animationSpeed={3}
            showBorder={true}
            className="text-4xl font-bold"
          >
            New Features Coming Soon!
          </GradientText>
        </div>

        {/* Final Tagline */}
        <p className="text-gray-400 text-lg">
          Ready to take your small business to the next level? Explore how NoTiFy can transform your operations and drive success.
        </p>
      </div>
    </div>
  );
};

export default SmallBusiness;
