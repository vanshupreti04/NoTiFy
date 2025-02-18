"use client";

import React from "react";
import { cn } from "./utils"; // Ensure correct import path
import {
  IconEdit,
  IconArrowsExchange,
  IconTable,
  IconColumns,
  IconTree,
  IconUsers,
  IconMarkdown,
  IconCalendarEvent,
} from "@tabler/icons-react";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Rich Text Editing",
      description: "Edit your notes with bold, italic, headings and more.",
      icon: <IconEdit className="text-purple-500 group-hover/feature:text-purple-700 transition duration-200" />,
    },
    {
      title: "Drag and Drop Blocks",
      description: "Easily rearrange notes and components using drag and drop.",
      icon: <IconArrowsExchange className="text-purple-500 group-hover/feature:text-purple-700 transition duration-200" />,
    },
    {
      title: "Database Tables",
      description: "Organize structured data with tables and filters.",
      icon: <IconTable className="text-purple-500 group-hover/feature:text-purple-700 transition duration-200" />,
    },
    {
      title: "Kanban Boards",
      description: "Manage tasks efficiently using a Kanban-style board.",
      icon: <IconColumns className="text-purple-500 group-hover/feature:text-purple-700 transition duration-200" />,
    },
    {
      title: "Page Nesting",
      description: "Create and manage sub-pages seamlessly.",
      icon: <IconTree className="text-purple-500 group-hover/feature:text-purple-700 transition duration-200" />,
    },
    {
      title: "Real-Time Collaboration",
      description: "Work together with team members in real-time.",
      icon: <IconUsers className="text-purple-500 group-hover/feature:text-purple-700 transition duration-200" />,
    },
    {
      title: "Markdown Support",
      description: "Write notes quickly using Markdown formatting.",
      icon: <IconMarkdown className="text-purple-500 group-hover/feature:text-purple-700 transition duration-200" />,
    },
    {
      title: "Task Scheduling",
      description: "Stay on track with NoTiFy's Task Scheduler - Plan, Prioritize, and Perfect Your Productivity!",
      icon: <IconCalendarEvent className="text-purple-500 group-hover/feature:text-purple-700 transition duration-200" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({ title, description, icon, index }) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-purple-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};

export default FeaturesSectionDemo;
