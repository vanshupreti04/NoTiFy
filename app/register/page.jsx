"use client"; // ✅ Required for hooks in Next.js

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import { FaGithub, FaEye, FaEyeSlash } from "react-icons/fa";
import Image from "next/image";
import { Spotlight } from "../blocks/Spotlight/NewSpotlight";

const Register = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false); // ✅ Prevent multiple submissions
  const router = useRouter();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setMessage(null);
    setLoading(true); // ✅ Disable button during request

    try {
      // Log the request payload for debugging
      console.log("Signup request payload:", user);

      await axios.post("/api/auth/signup", user);
      setMessage("Account created! Please check your email to verify your account before logging in.");

      // ✅ Redirect after 3 seconds
      setTimeout(() => {
        router.push("/login");
      }, 3000);
    } catch (err) {
      console.error("Registration Error:", err);
      setError(err?.response?.data?.error || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleGitHubSignIn = () => {
    window.location.href = "/api/auth/github"; // ✅ Redirect to API route for GitHub OAuth
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-black overflow-hidden">
      {/* Spotlight Effect */}
      <Spotlight className="absolute top-0 left-0 w-full h-full z-0" />

      <div className="flex w-full max-w-4xl p-4 z-10">
        {/* Left Image */}
        <div className="w-1/2 h-120px">
          <Image
            src="/assets/LoginImage.png"
            alt="Register Illustration"
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-l-xl"
          />
        </div>

        {/* Right Section (Register Form) */}
        <div className="w-1/2 bg-[#2C1A47] text-white p-6 rounded-r-xl shadow-lg flex flex-col justify-center items-center h-full">
          {/* Heading & Tagline */}
          <h2 className="text-4xl font-bold mb-4">Register</h2>
          <p className="text-gray-300 text-sm mb-5">Welcome to Notify</p>

          {/* Error/Success Messages */}
          {error && <p className="text-red-500 mb-4">{error}</p>}
          {message && <p className="text-green-500 mb-4">{message}</p>}

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="w-full max-w-sm">
            {/* First Name & Last Name in Single Row */}
            <div className="flex gap-3 mb-6">
              <input
                type="text"
                name="firstName"
                value={user.firstName}
                onChange={handleChange}
                required
                className="w-1/2 text-black p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-3"
                placeholder="First Name"
              />
              <input
                type="text"
                name="lastName"
                value={user.lastName}
                onChange={handleChange}
                required
                className="w-1/2 text-black p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-3"
                placeholder="Last Name"
              />
            </div>

            {/* Email */}
            <div className="mb-6">
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                required
                className="w-full text-black p-2 border border-gray-300 rounded-md mt-1 focus:outline-none focus:ring-3"
                placeholder="Email"
              />
            </div>

            {/* Password with Toggle Button */}
            <div className="mb-6 relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={user.password}
                onChange={handleChange}
                required
                className="w-full text-black p-2 border border-gray-300 rounded-md mt-1 focus:outline-none focus:ring-3"
                placeholder="Password"
              />
              <button
                type="button"
                className="absolute right-3 top-4 text-black"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full p-2 rounded border transition-all ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-white text-black border-black hover:border-white hover:bg-black hover:text-white"
              }`}
            >
              {loading ? "Registering..." : "Register"}
            </button>

            {/* Already have an account? */}
            <p className="mt-4 text-center text-gray-300">
              Already have an account?{" "}
              <Link href="/login" className="text-blue-500">
                Login
              </Link>
            </p>
          </form>

          {/* Line separator */}
          <div className="w-full mt-6 border-t border-gray-400"></div>

          {/* Register with GitHub */}
          <button
            type="button"
            onClick={handleGitHubSignIn}
            className="w-full bg-gray-800 text-white p-2 rounded mt-6 flex items-center justify-center hover:bg-gray-700"
          >
            <FaGithub className="mr-2" />
            Register with GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
