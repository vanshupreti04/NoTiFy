"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "../lib/utils";

const Accordion = AccordionPrimitive.Root;

// Accordion Item (Each collapsible section)
const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      "border-b border-gray-200 dark:border-gray-700",
      "transition-all duration-300 ease-in-out",
      className
    )}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

// Accordion Trigger (Clickable title with improved UI)
const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex w-full items-center justify-between py-4 px-2 text-lg font-medium",
        "transition-all duration-300 ease-in-out",
        "hover:bg-gray-100 dark:hover:bg-gray-800",
        "focus:outline-none focus-visible:ring focus-visible:ring-primary/50",
        "rounded-md",
        "[&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-5 w-5 shrink-0 transition-transform duration-300 ease-in-out" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = "AccordionTrigger";

// Accordion Content (Smoother animations & padding)
const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      "overflow-hidden text-sm transition-all duration-300 ease-in-out",
      "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      "bg-gray-50 dark:bg-gray-900 px-4 py-3 rounded-md",
      className
    )}
    {...props}
  >
    {children}
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
