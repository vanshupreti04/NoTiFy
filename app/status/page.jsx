// src/app/status/page.js (for Next.js App Router)

"use client"; // Required for components that rely on client-side rendering like animations

import React from "react";

const Status = () => {
  return (
    <div className="min-h-screen bg-black text-white px-8 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Page Title & Intro */}
        <h1 className="text-5xl font-bold mb-6">NoTiFy Status</h1>
        <p className="text-gray-300 mb-10 leading-relaxed">
          Check real-time updates on NoTiFy’s system availability, scheduled 
          maintenance, and incident reports. We strive to keep everything 
          running smoothly, but if there are disruptions, you'll find details 
          here.
        </p>

        {/* Current System Status */}
        <h2 className="text-2xl font-bold mb-4">Current System Status</h2>
        <p className="text-gray-300 mb-6">
          All systems are operational. NoTiFy’s core services—note-taking, 
          collaboration, and syncing—are currently running without issues.
        </p>

        {/* Scheduled Maintenance */}
        <h2 className="text-2xl font-bold mb-4">Scheduled Maintenance</h2>
        <p className="text-gray-300 mb-6">
          We occasionally perform maintenance to improve performance and 
          reliability. Upcoming maintenance windows will be listed below:
        </p>
        <div className="bg-gray-800 p-4 rounded-md mb-8">
          <h3 className="text-xl font-semibold">No upcoming maintenance</h3>
          <p className="text-gray-400 mt-2">
            We’ll post scheduled downtime here at least 24 hours in advance.
          </p>
        </div>

        {/* Incident History */}
        <h2 className="text-2xl font-bold mb-4">Incident History</h2>
        <p className="text-gray-300 mb-6">
          Here’s a record of past incidents or outages, along with their 
          resolutions.
        </p>
        <div className="bg-gray-800 p-4 rounded-md mb-8">
          <h3 className="text-xl font-semibold">No recent incidents</h3>
          <p className="text-gray-400 mt-2">
            Any past incidents will be listed here, including a summary of 
            what happened and how it was resolved.
          </p>
        </div>

        {/* Need Help? */}
        <div className="bg-gray-800 p-6 rounded-md">
          <h3 className="text-xl font-semibold">Need to report an issue?</h3>
          <p className="text-gray-400 mt-2">
            If you’re experiencing a problem not reflected here, please contact 
            our support team at{" "}
            <a href="mailto:support@notify.com" className="text-purple-500">
              support@notify.com
            </a>{" "}
            or visit our{" "}
            <a href="/help-center" className="text-purple-500">
              Help Center
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Status;
