"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import {
  FaInstagram,
  FaXTwitter,
  FaLinkedin,
  FaFacebook,
  FaYoutube,
  FaChevronDown,
} from "react-icons/fa6";
import Review from "../blocks/TestimonialSection/TestimonialSectionSecondDemo"


const Footer = () => {
  const { i18n, t } = useTranslation();
  const [language, setLanguage] = useState(t("🌍 English"));
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLanguageChange = (lang, langCode) => {
    setLanguage(lang);
    i18n.changeLanguage(langCode);
    setShowDropdown(false);
  };


  return (
    <footer className="text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          
          {/* Logo & Socials */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Image 
                src="/assets/logo.png"
                alt={t("notify_name")}
                width={50}
                height={50}
              />
              <span className="text-xl font-bold text-white mb-3">{t("notify")}</span>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-12">
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="w-5 h-5 text-gray-700 hover:text-white transition duration-300" />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <FaXTwitter className="w-5 h-5 text-gray-700 hover:text-white transition duration-300" />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="w-5 h-5 text-gray-700 hover:text-white transition duration-300" />
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="w-5 h-5 text-gray-700 hover:text-white transition duration-300" />
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="w-5 h-5 text-gray-700 hover:text-white transition duration-300" />
              </a>
            </div>

            {/* Language Selector */}
            <div className="relative inline-block">
              <button
                className="border border-gray-400 px-4 py-2 mt-4 text-sm rounded-md flex items-center justify-between space-x-2 hover:bg-gray-100 hover:text-black transition w-40"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <span>{language}</span>
                <FaChevronDown className="w-4 h-4" />
              </button>

              {showDropdown && (
                <div className="absolute left-0 mt-2 w-40 bg-white text-black rounded-md shadow-md">
                  <ul className="py-2 text-sm">
                    <li
                      className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                      onClick={() => handleLanguageChange("🌍 English", "en")}
                    >
                      English
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                      onClick={() => handleLanguageChange("🇯🇵 日本語", "ja")}
                    >
                      日本語 (Japanese)
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                      onClick={() => handleLanguageChange("🇮🇳 हिंदी", "hi")}
                    >
                      हिंदी (Hindi)
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Copyright */}
            <div className="mt-5">
              <p className="text-sm text-gray-500">
                <Link href="/do-not-sell">{t("do_not_sell")}</Link> | <Link href="/cookie-settings">{t("cookie_settings")}</Link>
              </p>
              <p className="text-xs text-gray-500 mt-2">© {new Date().getFullYear()} Notify Labs. {t("All Rights Reserved")}</p>
            </div>
          </div>

          {/* Footer Links */}
          <div>
            <h3 className="font-semibold mb-5">{t("company")}</h3>
            <ul className="space-y-2 text-gray-600">
              <li><Link href="/about">{t("about_us")}</Link></li>
              <li><Link href="/careers">{t("careers")}</Link></li>
              <li><Link href="/security">{t("security")}</Link></li>
              <li><Link href="/status">{t("status")}</Link></li>
              <li><Link href="/terms-privacy">{t("terms_privacy")}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-5">{t("download")}</h3>
            <ul className="space-y-2 text-gray-600">
              <li><Link href="/mobile-apps" className="hover:underline">{t("mobile_apps")}</Link></li>
              <li><Link href="/desktop-apps" className="hover:underline">{t("desktop_apps")}</Link></li>
              <li><Link href="/calendar-sync" className="hover:underline">{t("calendar_sync")}</Link></li>
              <li><Link href="/browser-extension" className="hover:underline">{t("browser_extension")}</Link></li>
            </ul>
          </div>

          {/* Other Sections (Download, Resources, Notify For) */}
          <div>
            <h3 className="font-semibold mb-5">{t("resources")}</h3>
            <ul className="space-y-2 text-gray-600">
              <li><Link href="/help-center">{t("help_center")}</Link></li>
              <li><Link href="/pricing">{t("pricing")}</Link></li>
              <li><Link href="/blog">{t("blog")}</Link></li>
              <li><Link href="/community">{t("community")}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-5">{t("notify_for")}</h3>
            <ul className="space-y-2 text-gray-600">
              <li><Link href="/enterprise" className="hover:underline">{t("enterprise")}</Link></li>
              <li><Link href="/small-business" className="hover:underline">{t("small_business")}</Link></li>
              <li><Link href="/personal" className="hover:underline">{t("personal")}</Link></li>
            </ul>
            {/* Updated route for Explore More */}
            <p className="mt-6 font-semibold hover:underline cursor-pointer">
              <Link href="/explore-more">{t("explore_more")} →</Link>
            </p>

            <div className="mt-2">
              <Review />   
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
