import React from "react";
import { Meteors } from "./careerscard";
import { Code, Paintbrush } from "lucide-react"; // Importing specialized icons

const MeteorsDemo = () => {
  return (
    <div className="w-full flex flex-wrap justify-center items-center gap-48">
      {/* Full-Stack Developer Card */}
      <div className="relative max-w-xs w-full">
        {/* Background Glow */}
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500 transform scale-[0.90] rounded-full blur-3xl" />

        {/* Card */}
        <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-6 py-10 h-full overflow-hidden rounded-2xl flex flex-col justify-center items-center text-center">
          {/* Icon */}
          <div className="h-10 w-10 rounded-full border border-gray-500 flex items-center justify-center mb-4 text-gray-300">
            <Code className="h-6 w-6" /> {/* Code icon for Full-Stack Developer */}
          </div>

          {/* Title */}
          <h1 className="font-bold text-2xl text-white mb-4 relative z-50">
            Full-Stack Developer
          </h1>

          {/* Description */}
          <p className="font-normal text-base text-slate-400 mb-6 relative z-50">
            Build and maintain scalable features at NoTiFy using React, Node.js, and databases.
          </p>

          {/* Button */}
          <button className="border px-6 py-2 rounded-lg border-purple-400 text-white hover:bg-purple-500 transition duration-300">
            Apply Now
          </button>

          {/* Meteor Effect */}
          <Meteors number={25} />
        </div>
      </div>

      {/* UI Designer Card */}
      <div className="relative max-w-xs w-full">
        {/* Background Glow */}
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500 transform scale-[0.90] rounded-full blur-3xl" />

        {/* Card */}
        <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-6 py-10 h-full overflow-hidden rounded-2xl flex flex-col justify-center items-center text-center">
          {/* Icon */}
          <div className="h-10 w-10 rounded-full border border-gray-500 flex items-center justify-center mb-4 text-gray-300">
            <Paintbrush className="h-6 w-6" /> {/* Paintbrush icon for UI Designer */}
          </div>

          {/* Title */}
          <h1 className="font-bold text-2xl text-white mb-4 relative z-50">
            UI Designer
          </h1>

          {/* Description */}
          <p className="font-normal text-base text-slate-400 mb-6 relative z-50">
            Design stunning and user-friendly interfaces at NoTiFy using Figma and modern UI trends.
          </p>

          {/* Button */}
          <button className="border px-6 py-2 rounded-lg border-purple-400 text-white hover:bg-purple-500 transition duration-300">
            Apply Now
          </button>

          {/* Meteor Effect */}
          <Meteors number={25} />
        </div>
      </div>
    </div>
  );
};

export default MeteorsDemo;
