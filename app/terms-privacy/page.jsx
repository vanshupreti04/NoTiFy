"use client"; // Required for components that rely on client-side rendering like animations

import React from "react";
import { FaFileContract, FaShieldAlt, FaUserShield } from "react-icons/fa";

const TermsPrivacy = () => {
  return (
    <div className="min-h-screen bg-black text-white px-8 py-14">
      <div className="max-w-5xl mx-auto text-center">
        {/* Page Title & Tagline */}
        <h1 className="text-6xl font-extrabold text-purple-500">Terms & Privacy</h1>
        <p className="text-gray-400 text-lg mt-4 mb-32">
          Your trust matters. Understand our policies and your rights.
        </p>
      </div>

      <div className="max-w-6xl mx-auto space-y-16">
        {/* Terms of Service */}
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* Left Side - Heading & Icon */}
          <div className="md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex flex-col items-center">
              <FaFileContract className="text-purple-500 text-6xl mb-4" />
              <h2 className="text-5xl font-bold text-white">Terms of Service</h2>
            </div>
          </div>
          {/* Right Side - Content */}
          <div className="md:w-2/3 bg-gray-900 p-10 -mt-8 rounded-lg flex items-center">
            <ul className="list-disc list-inside  text-gray-400 space-y-3 text-lg">
              <li>You must be at least 13 years old to use NoTiFy.</li>
              <li>Respect intellectual property rights when sharing or uploading content.</li>
              <li>Unauthorized commercial use of the service is prohibited.</li>
              <li>Violating these terms may result in suspension or termination of your account.</li>
            </ul>
          </div>
        </div>

        {/* Privacy Policy */}
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* Left Side - Heading & Icon */}
          <div className="md:w-1/3 flex mt-10 flex-col items-center md:items-start text-center md:text-left">
            <div className="flex flex-col items-center">
              <FaShieldAlt className="text-purple-500 text-6xl mb-4" />
              <h2 className="text-5xl font-bold text-white">Privacy Policy</h2>
            </div>
          </div>
          {/* Right Side - Content */}
          <div className="md:w-2/3 bg-gray-900 p-10 rounded-lg flex items-center">
            <ul className="list-disc list-inside text-gray-400 space-y-3 text-lg">
              <li>We collect minimal data to provide and improve our service.</li>
              <li>Your data is encrypted in transit and at rest.</li>
              <li>We never sell your personal information to third parties.</li>
              <li>You can request data deletion or export at any time.</li>
            </ul>
          </div>
        </div>

        {/* Data Protection & Security */}
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* Left Side - Heading & Icon */}
          <div className="md:w-1/3 mt-10 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex flex-col items-center">
              <FaUserShield className="text-purple-500 text-6xl mb-4" />
              <h2 className="text-5xl font-bold text-white">Data Protection </h2>
            </div>
          </div>
          {/* Right Side - Content */}
          <div className="md:w-2/3 bg-gray-900 p-10 rounded-lg flex items-center">
            <ul className="list-disc list-inside text-gray-400 space-y-3 text-lg">
              <li>We prioritize user security with industry-standard protections.</li>
              <li>Multi-layer encryption is applied to all stored data.</li>
              <li>Regular security audits ensure platform integrity.</li>
              <li>Users have full control over their personal data and privacy settings.</li>
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className=" p-2 rounded-lg text-center">
          <h3 className="text-3xl font-bold mb-4 text-white">Need More Information?</h3>
          <p className="text-gray-400 text-lg mb-4">
            If you have any questions regarding our terms or privacy practices, contact us at
            <a href="mailto:legal@notify.com" className="text-purple-500 ml-1">legal@notify.com</a>.
          </p>
          <p className="text-gray-400 text-lg">
            Last updated: <span className="text-white">September 25, 2025</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsPrivacy;
