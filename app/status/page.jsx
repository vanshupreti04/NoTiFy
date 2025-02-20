"use client"; // Required for client-side rendering in Next.js

import React from "react";
import { FaCheckCircle, FaTools, FaExclamationTriangle, FaTachometerAlt, FaShieldAlt, FaCode } from "react-icons/fa";

const Status = () => {
  return (
    <div className="min-h-screen bg-black text-white px-8 py-14">
      <div className="max-w-6xl mx-auto text-center">
        {/* Page Title & Intro */}
        <h1 className="text-6xl font-extrabold text-purple-500">NoTiFy Status</h1>
        <p className="text-gray-400 text-lg mt-4 mb-14">
          Real-time updates on system availability, maintenance, and incidents.
        </p>

        {/* Status Boxes - Row 1 */}
        <div className="flex flex-col md:flex-row justify-center gap-8 mt-10">
          {/* Current System Status */}
          <div className="bg-gray-900 p-10 rounded-lg w-full md:w-1/3 min-h-[200px]">
            <FaCheckCircle className="text-green-400 text-4xl mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white">Current System Status</h2>
            <p className="text-gray-400 text-lg mt-4">
              All systems are operational. NoTiFy’s core services—note-taking, collaboration, 
              and syncing—are running smoothly.
            </p>
          </div>

          {/* Scheduled Maintenance */}
          <div className="bg-purple-900 p-10 rounded-lg w-full md:w-1/3 min-h-[200px]">
            <FaTools className="text-yellow-400 text-4xl mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white">Scheduled Maintenance</h2>
            <p className="text-gray-400 text-lg mt-4">
              We occasionally perform maintenance to improve performance and reliability. 
              Currently, no maintenance is scheduled.
            </p>
          </div>

          {/* Incident History */}
          <div className="bg-gray-900 p-10 rounded-lg w-full md:w-1/3 min-h-[200px]">
            <FaExclamationTriangle className="text-red-400 text-4xl mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white">Incident History</h2>
            <p className="text-gray-400 text-lg mt-4">
              No recent incidents reported. If an issue occurs, details will be posted here.
            </p>
          </div>
        </div>

        {/* Status Boxes - Row 2 */}
        <div className="flex flex-col md:flex-row justify-center gap-8 mt-10">
          {/* Performance Updates */}
          <div className="bg-purple-900 p-10 rounded-lg w-full md:w-1/3 min-h-[200px]">
            <FaTachometerAlt className="text-blue-400 text-4xl mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white">Performance Updates</h2>
            <p className="text-gray-400 text-lg mt-4">
              We continuously monitor performance and optimize system speed. No issues detected.
            </p>
          </div>

          {/* Security Updates */}
          <div className="bg-gray-900 p-10 rounded-lg w-full md:w-1/3 min-h-[200px]">
            <FaShieldAlt className="text-purple-400 text-4xl mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white">Security Updates</h2>
            <p className="text-gray-400 text-lg mt-4">
              Your data’s security is our priority. Latest patches and updates have been applied.
            </p>
          </div>

          {/* API Status */}
          <div className="bg-purple-900 p-10 rounded-lg w-full md:w-1/3 min-h-[200px]">
            <FaCode className="text-orange-400 text-4xl mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white">API Status</h2>
            <p className="text-gray-400 text-lg mt-4">
              NoTiFy’s API is fully functional. Developers can access endpoints without disruption.
            </p>
          </div>
        </div>

        {/* Contact Support */}
        <h2 className="text-2xl font-bold text-white mt-20">Need to Report an Issue?</h2>
        <p className="text-gray-400 text-lg mt-4">
          If you’re experiencing a problem not listed here, contact our support team at:
        </p>
        <p className="text-purple-500 text-lg mt-2">support@notify.com</p>
      </div>
    </div>
  );
};

export default Status;
