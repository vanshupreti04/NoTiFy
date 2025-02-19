"use client"; 
import React from "react";
import { FaUsers, FaChartLine, FaCode, FaLaptopHouse } from "react-icons/fa";
import CareersCardSecondDemo from "../blocks/careerscard/careerscardSecondDemo"; // Import the component

const Careers = () => {
  return (
    <div className="min-h-screen bg-black text-white px-8 py-12 flex flex-col items-center">
      <div className="max-w-6xl w-full text-center mt-10"> {/* Added margin-top */}
        {/* Hero Section */}
        <h1 className="text-7xl font-bold mb-8 text-purple-500">Careers at NoTiFy</h1> {/* Reduced bottom margin */}
        <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto"> {/* Reduced bottom margin */}
          Join our mission to revolutionize note-taking and collaboration. At NoTiFy, 
          we believe in fostering creativity, teamwork, and personal growth. We’re looking 
          for passionate individuals who thrive in a dynamic environment and want to shape 
          the future of productivity.
        </p>

        {/* Why Join NoTiFy? */}
        <h2 className="text-5xl font-bold mt-16 mb-16">Why Join NoTiFy?</h2> {/* Adjusted margins */}
        <div className="grid grid-cols-2 ml-28 gap-6 text-gray-300 mb-14 text-lg"> {/* Reduced gap */}
          <div className="flex items-center gap-3"> {/* Reduced gap */}
            <FaUsers className="text-purple-500 text-4xl" />
            <span>Collaborative and inclusive culture</span>
          </div>
          <div className="flex items-center gap-3"> {/* Reduced gap */}
            <FaChartLine className="text-purple-500 text-4xl" />
            <span>Opportunities for growth and development</span>
          </div>
          <div className="flex items-center gap-3"> {/* Reduced gap */}
            <FaCode className="text-purple-500 text-4xl" />
            <span>Work on cutting-edge technologies</span>
          </div>
          <div className="flex items-center gap-3"> {/* Reduced gap */}
            <FaLaptopHouse className="text-purple-500 text-4xl" />
            <span>Flexible and remote-friendly environment</span>
          </div>
        </div>

        {/* Open Positions */}
        <h2 className="text-5xl font-bold mt-28 mb-20">Open Positions</h2> {/* Adjusted margins */}
        
        {/* Careers Cards Section - Placed in a Single Row */}
        <div className="flex justify-center items-center mb-28 flex-wrap md:flex-nowrap"> {/* Reduced gap */}
          <CareersCardSecondDemo 
            title="Full-Stack Developer" 
            description="Help build and maintain core features of NoTiFy’s platform. Experience with React, Node.js, and databases preferred." 
          />
        </div>

        {/* General Inquiry */}
        <div className="mt-16 text-gray-400 text-center"> {/* Adjusted margin */}
          <p className="text-lg">
            Don’t see a role that fits? We’re always on the lookout for new talent.
          </p>
          <p className="mt-3 text-lg">
            Drop us a line at 
            <a href="mailto:careers@notify.com" className="text-purple-500 ml-1 font-semibold">
              careers@notify.com
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Careers;
