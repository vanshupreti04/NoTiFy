"use client";

import React from "react";
import { BentoGrid, BentoGridItem } from "./BentoGrid"; // Ensure correct import path
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import Image from "next/image"; // ✅ Next.js optimized Image component

// ✅ Use public folder paths instead of importing
const imagePaths = {
  noteTaking: "/assets/note-taking.png",
  githubSync: "/assets/github-sync.png",
  taskManager: "/assets/task-manager.png",
  liveCollab: "/assets/live-collaboration.png",
};

export function BentoGridSecondDemo() {
  const { t } = useTranslation(); // ✅ Translation hook for Next.js

  return (
    <BentoGrid className="max-w-5xl mx-auto md:auto-rows-[22rem]">
      {items(t).map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={<ImageSection image={item.image} />}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}

const ImageSection = ({ image }) => (
  <div className="flex flex-1 w-full min-h-[10rem] h-full rounded-xl overflow-hidden border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-white">
    <Image
      src={image}
      alt="Feature Preview"
      className="w-full h-full object-cover"
      width={500} // ✅ Add width & height for optimization
      height={300}
      priority
    />
  </div>
);

// ✅ Translatable Items
const items = (t) => [
  {
    title: t("effortless_note_taking"),
    description: t("effortless_note_taking_desc"),
    image: imagePaths.noteTaking, // ✅ Fixed image path
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-6 w-6 text-neutral-500" />,
  },
  {
    title: t("github_sync"),
    description: t("github_sync_desc"),
    image: imagePaths.githubSync,
    className: "md:col-span-1",
    icon: <IconTableColumn className="h-6 w-6 text-neutral-500" />,
  },
  {
    title: t("task_management"),
    description: t("task_management_desc"),
    image: imagePaths.taskManager,
    className: "md:col-span-1",
    icon: <IconSignature className="h-6 w-6 text-neutral-500" />,
  },
  {
    title: t("live_collaboration"),
    description: t("live_collaboration_desc"),
    image: imagePaths.liveCollab,
    className: "md:col-span-2",
    icon: <IconFileBroken className="h-6 w-6 text-neutral-500" />,
  },
];

export default BentoGridSecondDemo;
