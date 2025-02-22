"use client"; // ✅ Required to use useTranslation in Next.js

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "./components/Hero";
import BentoGridSecondDemo from "./blocks/BentoGrid/BentoGridSecondDemo";
import MovingText from "./blocks/Moving-Text/MovingText";
import UseCase from "./components/UseCase";
import Productivity from "./components/Productivity";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import StarBorder from "./blocks/StarBorder/StarBorder";

const Home = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  // ✅ Handle scrolling when menu is open
  useEffect(() => {
    document.documentElement.classList.add("overflow-x-hidden"); // Always disable horizontal scrolling
    document.body.classList.add("overflow-x-hidden");

    if (menuOpen) {
      document.documentElement.classList.add("overflow-hidden"); // Disable scrolling completely
      document.body.classList.add("overflow-hidden");
    } else {
      document.documentElement.classList.remove("overflow-hidden");
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.documentElement.classList.remove("overflow-hidden");
      document.body.classList.remove("overflow-hidden");
    };
  }, [menuOpen]);

  return (
    <div className="relative min-h-screen bg-[#000000] text-white overflow-x-hidden">
      {/* ✅ Navbar Section */}
      <nav className="relative flex items-center justify-between w-full px-[3vw] lg:px-[6vw] mt-10 ">
        {/* ✅ Left Side: Logo & Project Name */}
      <div className="flex items-center space-x-[1vw] flex-shrink-0">
        <Image
          src="/assets/logo.png"
          alt="Uninote Logo"
          width={80}
          height={80}
          className="max-w-[50px] max-h-[50px]"
        />
        <h1 className="text-[5vw] lg:text-[2vw] font-bold text-white">
          {t("logo_heading")}
        </h1>
      </div>

      {/* ✅ Centered Navbar Links */}
      <div className="hidden lg:flex flex-grow justify-center gap-[2vw] min-w-0">

        {[  
          { name: t("home"), path: "/" },
          { name: t("features"), path: "/features" },
          { name: t("docs"), path: "/docs" },
          { name: t("about"), path: "/about" },
        ].map((item, index) => (
          <div key={index} className="relative group overflow-hidden rounded-2xl">
            <span className="absolute inset-0 w-full h-full bg-white transform scale-y-0 transition-all duration-300 ease-in-out group-hover:scale-y-100 rounded-2xl"></span>
            <Link
              key={index}
              href={item.path}
              className="relative z-10 block px-6 py-2 text-[#AAAAAA] font-medium text-lg rounded-2xl transition-all duration-300 ease-in-out group-hover:text-black"
            >
              {item.name}
            </Link>
          </div>    
        ))}
      </div>

      {/* ✅ Separate Login Button, Shift Left */}
      <div className="hidden lg:block"> 
        <StarBorder
          as={Link}
          href="/login"
          className=" w-[clamp(80px, 8vw, 150px)] "
        >
          {t("login")}
        </StarBorder>
      </div>

       {/* ✅ Mobile Menu Button (Hamburger Icon) */}
        <button
          className="lg:hidden absolute right-[4vw] text-white focus:outline-none"
          onClick={() => setMenuOpen(true)}
        >
          <svg
            width="6vw"
            height="6vh"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>


        {/* ✅ Mobile Full-Screen Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center z-50 overflow-y-auto overflow-x-hidden"
            >
              {/* ✅ Logo & Project Name inside Mobile Menu */}
              <div className="absolute top-[4vh] left-[4vw] flex items-center space-x-2">
                <Image
                  src="/assets/logo.png"
                  alt="Notify Logo"
                  width={50}
                  height={50}
                  className="max-w-[40px] max-h-[40px]"
                />
                <h1 className="text-[5vw] font-bold text-white">Notify</h1>
              </div>

              {/* ✅ Close Button */}
              <button
                className="absolute top-[6vh] right-[4vw] text-white"
                onClick={() => setMenuOpen(false)}
              >
                <svg
                  width="5vw"
                  height="5vh"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              {/* ✅ Mobile Navigation Links */}
              <div className="flex flex-col items-center space-y-[5vh] text-[3vw] font-medium mt-[12vh]">
                {[
                  { name: t("home"), path: "/" },
                  { name: t("features"), path: "/features" },
                  { name: t("docs"), path: "/docs" },
                  { name: t("about"), path: "/about" },
                ].map((item, index) => (
                  <div key={index} className="relative group overflow-hidden rounded-2xl">
                    <span className="absolute inset-0 w-full h-full bg-white transform scale-y-0 transition-all duration-300 ease-in-out group-hover:scale-y-100 rounded-2xl"></span>
                    <Link
                      href={item.path}
                      className="relative z-10 block px-6 py-2 text-[#AAAAAA] font-medium text-lg rounded-2xl transition-all duration-300 ease-in-out group-hover:text-black"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </div>
                ))}

                {/* ✅ Login Button (Remains the same) */}
                <StarBorder
                  as={Link}
                  href="/login"
                  className="w-[clamp(80px, 10vw, 200px)] text-center py-[2vh]"
                >
                  {t("login")}
                </StarBorder>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </nav>

      {/* ✅ Sections */}
      <div className="-mt-[35vh] sm:-mt-5 md:mt-0">
        <Hero />
      </div>

      <div className="-mt-[30vh] sm:-mt-5 md:-mt-6">
        <BentoGridSecondDemo />
      </div>

      <div className="mt-[6vh]">
        <MovingText />
      </div>

      <div className="-mt-[12vh] sm:-mt-5 md:-mt-6">
        <UseCase />
      </div>

      <div className="-mt-[19vh] sm:-mt-5 md:-mt-20 pb-[10vh]">
        <Productivity />
      </div>

      <div className="[@media(max-width:450px)]:mt-[-8vh] mt-[5vh] pb-[10vh]">
        <Testimonial />
      </div>


      <div className="[@media(max-width:450px)]:mt-[-6vh] mt-[5vh] pb-[2vh]">
        <hr className="border-t-[0.5px] border-gray-100 opacity-20 w-full" />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
