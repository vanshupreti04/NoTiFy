// src/app/security/page.js (for Next.js App Router)

"use client"; // Required for components that rely on client-side rendering like animations

import React from "react";

const Security = () => {
  return (
    <div className="min-h-screen bg-black text-white px-8 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <h1 className="text-5xl font-bold mb-6">Security at NoTiFy</h1>
        <p className="text-gray-300 mb-10 leading-relaxed">
          Your data security is our top priority. Below you’ll find information 
          on how we protect your data through industry-leading practices and 
          protocols.
        </p>

        {/* Encryption */}
        <h2 className="text-2xl font-bold mb-4">Encryption</h2>
        <p className="text-gray-300 mb-6">
          All data in NoTiFy is encrypted both in transit (TLS 1.2+) and at rest 
          (AES-256). This means your notes, attachments, and personal 
          information are safeguarded from unauthorized access at every stage.
        </p>

        {/* Compliance & Certifications */}
        <h2 className="text-2xl font-bold mb-4">Compliance & Certifications</h2>
        <p className="text-gray-300 mb-6">
          We adhere to rigorous security standards and comply with relevant 
          regulations. Our data centers undergo regular third-party audits, 
          helping us maintain the highest level of trust and accountability.
        </p>

        {/* Data Access & Controls */}
        <h2 className="text-2xl font-bold mb-4">Data Access & Controls</h2>
        <p className="text-gray-300 mb-6">
          Access to customer data is strictly limited and monitored. Only 
          authorized personnel with a valid business need can view user data, 
          and all access is logged and regularly reviewed.
        </p>

        {/* Incident Response */}
        <h2 className="text-2xl font-bold mb-4">Incident Response</h2>
        <p className="text-gray-300 mb-6">
          In the unlikely event of a security incident, our dedicated response 
          team is on standby 24/7. We follow a clearly defined protocol to 
          contain, mitigate, and resolve issues swiftly while keeping our users 
          informed.
        </p>

        {/* Additional Info */}
        <div className="mt-8 bg-gray-800 p-6 rounded-md">
          <h3 className="text-xl font-semibold">Have more questions?</h3>
          <p className="text-gray-400 mt-2">
            Reach out to our security team at{" "}
            <a href="mailto:security@notify.com" className="text-purple-500">
              security@notify.com
            </a>{" "}
            for more information, or visit our{" "}
            <a href="/docs" className="text-purple-500">
              Docs
            </a>{" "}
            for detailed technical specs on how we keep your data safe.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Security;
