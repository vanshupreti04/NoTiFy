"use client"; // Required for components that rely on client-side rendering like animations

import React from "react";
import { FaLock, FaShieldAlt, FaUserShield, FaExclamationTriangle } from "react-icons/fa";

const Security = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-10 flex flex-col items-center">
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="text-6xl font-extrabold text-purple-500">
          Security at NoTiFy
        </h1>
        <p className="text-gray-400 text-lg mt-5">
          Your data security is our top priority.
        </p>
      </div>

      {/* Security Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
        {/* Encryption */}
        <div className="p-8 w-100 h-100 bg-purple-900 rounded-xl shadow-lg flex flex-col justify-center items-center text-center">
          <FaLock className="text-white text-6xl mb-4" />
          <h2 className="text-3xl font-bold mb-2">Encryption</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            NoTiFy secures your data with end-to-end encryption: TLS 1.2+ for transit and AES-256 at rest.
          </p>
        </div>

        {/* Compliance */}
        <div className="p-8 w-100 h-100 bg-gray-900 rounded-xl shadow-lg flex flex-col justify-center items-center text-center">
          <FaShieldAlt className="text-purple-500 text-6xl mb-4" />
          <h2 className="text-3xl font-bold mb-2">Compliance</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            We comply with industry security standards and undergo regular audits to ensure best practices.
          </p>
        </div>

        {/* Data Access */}
        <div className="p-8 w-100 h-100 bg-gray-900 rounded-xl shadow-lg flex flex-col justify-center items-center text-center">
          <FaUserShield className="text-purple-500 text-6xl mb-4" />
          <h2 className="text-3xl font-bold mb-2">Data Access</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Only authorized personnel can access customer data, with strict monitoring and logging.
          </p>
        </div>

        {/* Incident Response */}
        <div className="p-8 w-100 h-100 bg-purple-900 rounded-xl shadow-lg flex flex-col justify-center items-center text-center">
          <FaExclamationTriangle className="text-white text-6xl mb-4" />
          <h2 className="text-3xl font-bold mb-2">Incident Response</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Our security team operates 24/7 to rapidly identify and resolve threats.
          </p>
        </div>
      </div>

      {/* Footer Message */}
      <div className="text-center mt-20 p-2 rounded-xl shadow-lg">
        <p className="text-gray-300 text-2xl">
          For more details, visit our{" "}
          <a href="/docs" className="text-purple-500">
            Docs
          </a>{" "}
          page.
        </p>
      </div>
    </div>
  );
};

export default Security;
