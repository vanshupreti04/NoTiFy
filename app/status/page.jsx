"use client"; // Required for client-side rendering in Next.js

import React from "react";

const Status = () => {
  return (
    <div className="min-h-screen bg-black text-white px-8 py-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Page Title & Intro */}
        <h1 className="text-5xl font-bold text-purple-500">NoTiFy Status</h1>
        <p className="text-gray-400 text-sm mt-2 mb-10">
          Real-time updates on system availability, maintenance, and incidents.
        </p>

        {/* Status Boxes */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mt-10">
          {/* Current System Status */}
          <div className="bg-gray-900 p-6 rounded-lg w-full md:w-1/3">
            <h2 className="text-2xl font-bold text-white">Current System Status</h2>
            <p className="text-gray-400 mt-4">
              All systems are operational. NoTiFy’s core services—note-taking, collaboration, 
              and syncing—are running smoothly.
            </p>
          </div>

          {/* Scheduled Maintenance */}
          <div className="bg-gray-900 p-6 rounded-lg w-full md:w-1/3">
            <h2 className="text-2xl font-bold text-white">Scheduled Maintenance</h2>
            <p className="text-gray-400 mt-4">
              We occasionally perform maintenance to improve performance and reliability. 
              Currently, no maintenance is scheduled.
            </p>
          </div>

          {/* Incident History */}
          <div className="bg-gray-900 p-6 rounded-lg w-full md:w-1/3">
            <h2 className="text-2xl font-bold text-white">Incident History</h2>
            <p className="text-gray-400 mt-4">
              No recent incidents reported. If an issue occurs, details will be posted here.
            </p>
          </div>
        </div>

        {/* Contact Support */}
        <h2 className="text-xl font-bold text-white mt-16">Need to Report an Issue?</h2>
        <p className="text-gray-400 mt-4">
          If you’re experiencing a problem not listed here, contact our support team at:
        </p>
        <p className="text-purple-500 text-sm mt-2">support@notify.com</p>
      </div>
    </div>
  );
};

export default Status;
