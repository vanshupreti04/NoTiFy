// src/app/terms-privacy/page.js (for Next.js App Router)

"use client"; // Required for components that rely on client-side rendering like animations

import React from "react";

const TermsPrivacy = () => {
  return (
    <div className="min-h-screen bg-black text-white px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">Terms &amp; Privacy</h1>

        <p className="text-gray-300 text-lg mb-10 leading-relaxed">
          Welcome to NoTiFy! By using our platform, you agree to comply with our Terms of Service. 
          We are committed to safeguarding your privacy and maintaining a transparent relationship 
          with our users.
        </p>

        {/* Terms of Service Section */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold mb-4">Terms of Service</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>You must be at least 13 years old to use NoTiFy.</li>
            <li>Respect intellectual property rights when sharing or uploading content.</li>
            <li>Unauthorized commercial use of the service is prohibited.</li>
            <li>Violating these terms may result in suspension or termination of your account.</li>
          </ul>
        </div>

        {/* Privacy Policy Section */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold mb-4">Privacy Policy</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>We collect minimal data to provide and improve our service.</li>
            <li>Your data is encrypted in transit and at rest.</li>
            <li>We never sell your personal information to third parties.</li>
            <li>You can request data deletion or export at any time.</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-2xl font-bold mb-2">Need More Information?</h3>
          <p className="text-gray-400 mb-4">
            If you have any questions regarding our terms or privacy practices, feel free to contact us at
            <a href="mailto:legal@notify.com" className="text-purple-500 ml-1">
              legal@notify.com
            </a>
            .
          </p>
          <p className="text-gray-400">
            Last updated: <span className="text-white">September 25, 2025</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsPrivacy;
