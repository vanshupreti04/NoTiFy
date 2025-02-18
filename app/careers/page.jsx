// src/app/careers/page.js (for Next.js App Router)

import React from "react";

const Careers = () => {
  return (
    <div className="min-h-screen bg-black text-white px-8 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <h1 className="text-5xl font-bold mb-6">Careers at NoTiFy</h1>
        <p className="text-gray-300 mb-10 leading-relaxed">
          Join our mission to revolutionize note-taking and collaboration. At
          NoTiFy, we believe in fostering creativity, teamwork, and personal
          growth. We’re looking for passionate individuals who thrive in a
          dynamic environment and want to shape the future of productivity.
        </p>

        {/* Why Join NoTiFy? */}
        <h2 className="text-2xl font-bold mb-4">Why Join NoTiFy?</h2>
        <ul className="list-disc list-inside text-gray-300 mb-10 space-y-2">
          <li>Collaborative and inclusive culture</li>
          <li>Opportunities for growth and professional development</li>
          <li>Work on cutting-edge features and technologies</li>
          <li>Flexible work environment with remote-friendly policies</li>
        </ul>

        {/* Open Positions */}
        <h2 className="text-2xl font-bold mb-4">Open Positions</h2>
        <div className="space-y-6">
          {/* Example Position 1 */}
          <div className="bg-gray-800 p-6 rounded-md">
            <h3 className="text-xl font-semibold">Full-Stack Developer</h3>
            <p className="text-gray-400 mt-2">
              Help build and maintain core features of NoTiFy’s platform. 
              Experience with React, Node.js, and databases preferred.
            </p>
            <button className="mt-4 bg-purple-600 px-4 py-2 rounded hover:bg-purple-500 transition">
              Apply Now
            </button>
          </div>

          {/* Example Position 2 */}
          <div className="bg-gray-800 p-6 rounded-md">
            <h3 className="text-xl font-semibold">Product Designer</h3>
            <p className="text-gray-400 mt-2">
              Craft intuitive user experiences and beautiful interfaces that 
              resonate with our brand. Experience with Figma or Sketch is a plus.
            </p>
            <button className="mt-4 bg-purple-600 px-4 py-2 rounded hover:bg-purple-500 transition">
              Apply Now
            </button>
          </div>
        </div>

        {/* General Inquiry */}
        <div className="mt-12">
          <p className="text-gray-300">
            Don’t see a role that fits? We’re always on the lookout for new 
            talent. Drop us a line at
            <a
              href="mailto:careers@notify.com"
              className="text-purple-500 ml-1"
            >
              careers@notify.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Careers;
