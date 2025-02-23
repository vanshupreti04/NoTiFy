"use client";
import React, { useState, useEffect } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../blocks/sidebar/sidebar";
import {
  IconArrowLeft,
  IconArrowRight,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
  IconPizza,
  IconMessageCircle,
  IconShare,
  IconChecklist,
} from "@tabler/icons-react";
import { AiOutlineFileText } from 'react-icons/ai';  // Icon for Notes
import { FaRegFileExcel } from 'react-icons/fa'; 

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "../blocks/sidebar/utils";
import Settings from "../components/settings"; // Import the settings component
import Home from "../components/Front"; // Import the Home component
import InviteCollaborator from "../components/Invite"; // Import Invite Collaborator component
import Notes from "../components/Notes";  
import Spreadsheet from "../components/Spreadsheet";
import Taskmanager from "../components/TaskManager";
import Mealplanner from "../components/Mealplanner";

export function Page() {
  const [open, setOpen] = useState(false);
  const [activePage, setActivePage] = useState("home"); // Track the active page (home, settings, invite)
  const [pageHistory, setPageHistory] = useState(["home"]); // History of pages visited
  const [historyIndex, setHistoryIndex] = useState(0); // Index of the current active page in the history
  
  useEffect(() => {
    console.log("Dashboard page loaded");
  }, []);

  // Links configuration with updated buttons
  const links = [
    {
      label: "Home",
      href: "#",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-7 w-7 flex-shrink-0 ml-1 mt-1" />
      ),
    },
    {
      label: "Invite Collaborator",
      href: "#",
      icon: (
        <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-7 w-7 flex-shrink-0 ml-1" />
      ),
    },
    {
      label: "Notes", // Updated button to "Notes"
      href: "#",
      icon: (
        <AiOutlineFileText className="text-neutral-700 dark:text-neutral-200 h-7 w-7 flex-shrink-0 ml-1" />
      ),
      onClick: () => handleClick("notes"), // Do nothing when "Notes" is clicked
    },
    {
      label: "Spreadsheet", // Added "Spreadsheet" button
      href: "#",
      icon: (
        <FaRegFileExcel  className="text-neutral-700 dark:text-neutral-200 h-7 w-7 flex-shrink-0 ml-1" />
      ),
      onClick: () => handleClick("spreadsheet"), // Do nothing when "Spreadsheet" is clicked
    },
    {
      label: "Task Manager", // Added "Task Manager" button
      href: "#",
      icon: (
        <IconChecklist className="text-neutral-700 dark:text-neutral-200 h-7 w-7 flex-shrink-0 ml-1" />
      ),
      onClick: () => handleClick("taskmanager"), // Do nothing when "Task Manager" is clicked
    },
    {
      label: "Meal Planner", // Added "Meal Planner" button
      href: "#",
      icon: (
        <IconPizza className="text-neutral-700 dark:text-neutral-200 h-7 w-7 flex-shrink-0 ml-1" />
      ),
      onClick: () => handleClick("mealplanner"), // Do nothing when "Meal Planner" is clicked
    },
    {
      label: "Settings",
      href: "#", // We will handle the click with a function instead of a Link
      icon: (
        <IconSettings className="text-neutral-700 dark:text-neutral-200 h-7 w-7 flex-shrink-0 ml-1" />
      ),
    },
  ];

  // Handle clicking the sidebar buttons
  const handleClick = (page) => {
    if (page !== "newpage") {
      const newHistory = pageHistory.slice(0, historyIndex + 1); // Remove forward history if we're adding a new page
      setPageHistory([...newHistory, page]); // Add new page to history
      setHistoryIndex(historyIndex + 1); // Set current page to the end of the history
      setActivePage(page); // Set the active page
    }
  };

  // Navigate to the previous page
  const handlePrevious = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1); // Move to previous page
      setActivePage(pageHistory[historyIndex - 1]); // Set active page
    }
  };

  // Navigate to the next page
  const handleNext = () => {
    if (historyIndex < pageHistory.length - 1) {
      setHistoryIndex(historyIndex + 1); // Move to next page
      setActivePage(pageHistory[historyIndex + 1]); // Set active page
    }
  };

  return (
    <div className={cn("flex h-screen")}>
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10 p-4">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-[#2C1A47]">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink
                  key={idx}
                  link={link}
                  onClick={() => handleClick(link.label.toLowerCase().replace(' ', ''))} // Handle click to set active page
                />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "Vansh Upreti",
                href: "#",
                icon: (
                  <Image
                    src="/TeamImages/vansh.png"
                    className="h-10 w-10 flex-shrink-0 rounded-full"
                    width={40}
                    height={40}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <Dashboard
        activePage={activePage}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
      />
    </div>
  );
}

export const Logo = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-white py-1 relative z-20"
    >
      <Image
        src="/assets/logo.png"
        alt="Logo"
        width={40}
        height={40}
        className="h-10 w-10 rounded-full"
      />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-white text-2xl whitespace-pre"
      >
        NoTiFy
      </motion.span>
    </Link>
  );
};

export const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-white py-1 relative z-20"
    >
      <Image
        src="/assets/logo.png"
        alt="Logo"
        width={40}
        height={40}
        className="h-10 w-10 rounded-full"
      />
    </Link>
  );
};

// Dummy dashboard component with content
const Dashboard = ({ activePage, handlePrevious, handleNext }) => {
  return (
    <div className="flex-1 p-2 md:p-10 border border-neutral-200 dark:border-neutral-700 bg-black dark:bg-black flex flex-col gap-2 w-full h-full relative">
      {/* Left Side Navigation (Next/Previous buttons) */}
      <div className="absolute opacity-60 left-10 flex gap-4 z-50">
        {/* Previous Button */}
        <button
          onClick={handlePrevious}
          className="flex items-center justify-center p-3 bg-[#6A3D9B] rounded-full text-white shadow-md hover:bg-[#573085]"
        >
          <IconArrowLeft className="h-6 w-6" />
        </button>
        {/* Next Button */}
        <button
          onClick={handleNext}
          className="flex items-center justify-center p-3 bg-[#6A3D9B] rounded-full text-white shadow-md hover:bg-[#573085]"
        >
          <IconArrowRight className="h-6 w-6" />
        </button>
      </div>

      {/* Top 4 Black Rectangular Boxes */}
      <div className="flex gap-2">
        {[...new Array(4)].map((_, i) => (
          <div
            key={"first-array" + i}
            className="h-16 w-full rounded-lg bg-black dark:bg-black"
          ></div>
        ))}
      </div>

      {/* Right Section with Comment and Share buttons */}
      <div className=" -mt-12 flex gap-4 justify-end">
        {/* Comment Button */}
        <button className="flex items-center gap-2 px-4 py-2 bg-[#6A3D9B] rounded-md text-white -mt-4">
          <IconMessageCircle className="h-5 w-5" />
          <span className="text-sm">Comment</span>
        </button>

        {/* Share Button */}
        <button className="flex items-center gap-2 px-4 py-2 bg-[#6A3D9B] rounded-md text-white -mt-4">
          <IconShare className="h-5 w-5" />
          <span className="text-sm">Share</span>
        </button>
      </div>

      {/* Combined Grey Box (Stretching across the available width) */}
      <div className="h-[700px] mt-4 w-full rounded-lg bg-gray-100 dark:bg-neutral-800 overflow-hidden">
        {/* Conditionally render based on the active page */}
        <div className="w-full h-full object-cover overflow-hidden">
          {activePage === "home" && <Home />}
          {activePage === "invitecollaborator" && <InviteCollaborator />}
          {activePage === "settings" && <Settings />}
          {activePage === "notes" && <Notes />}
          {activePage === "spreadsheet" && <Spreadsheet />}
          {activePage === "taskmanager" && <Taskmanager />}
          {activePage === "mealplanner" && <Mealplanner />}
        </div>
      </div>
    </div>
  );
};

export default Page;
