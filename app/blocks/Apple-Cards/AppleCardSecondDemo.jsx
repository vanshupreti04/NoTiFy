"use client";

import React from "react";
import Image from "next/image"; // Import Next.js Image component
import { Carousel, Card } from "./AppleCard";

// ✅ Corrected paths (remove "/assets/" prefix if images are in public/)
const imagePaths = {
  AiWorkspace: "/assets/Ai-workspace.png",
  workspaceImage: "/assets/workspace.png",
  offlineImage: "/assets/offline.png",
  collaborationImage: "/assets/collaboration.png",
  automationImage: "/assets/automation.png",
  cloudsyncImage: "/assets/cloudsync.png",
  realTimeCollaborationImage: "/assets/real-time-collaboration.png",
};

const AppleCardsSecondDemo = () => {
  const cards = data.map((card, index) => (
    <Card key={card.title} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-4 flex justify-center pr-12">
      <div className="max-w-7xl w-full">
        <Carousel items={cards} />
      </div>
    </div>
  );
};

const DummyContent = () => {
  return (
    <>
      {[...new Array(3)].map((_, index) => (
        <div
          key={"dummy-content" + index}
          className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
        >
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
              The first rule of Apple club is that you boast about Apple club.
            </span>{" "}
            Keep a journal, quickly jot down a grocery list, and take amazing
            class notes. Want to convert those notes to text? No problem.
            Langotiya jeetu ka mara hua yaar is ready to capture every thought.
          </p>
          <div className="w-full h-64 bg-gray-300 rounded-xl flex items-center justify-center">
            <span className="text-gray-500">Your Image Here</span>
          </div>
        </div>
      ))}
    </>
  );
};

const data = [
  {
    category: "AI-Powered Notes 🧠",
    title: (
      <>
        Smart notes, <br /> smarter you.
      </>
    ),
    src: imagePaths.AiWorkspace, // ✅ Corrected path usage
    content: <DummyContent />,
  },
  {
    category: "Custom Workspace 🏡",
    title: (
      <>
        Your space, <br /> your rules.
      </>
    ),
    src: imagePaths.workspaceImage,
    content: <DummyContent />,
  },
  {
    category: "Offline Mode 🚀",
    title: "Work anytime, anywhere.",
    src: imagePaths.offlineImage,
    content: <DummyContent />,
  },
  {
    category: "Real-time Collaboration 🤝",
    title: "Instant teamwork, seamless flow.",
    src: imagePaths.realTimeCollaborationImage,
    content: <DummyContent />,
  },
  {
    category: "Task Automation ⚡",
    title: (
      <>
        Let the system <br /> do it.
      </>
    ),
    src: imagePaths.automationImage,
    content: <DummyContent />,
  },
  {
    category: "Seamless Cloud Sync ☁️",
    title: (
      <>
        Your data, <br /> everywhere.
      </>
    ),
    src: imagePaths.cloudsyncImage,
    content: <DummyContent />,
  },
];

export default AppleCardsSecondDemo;
