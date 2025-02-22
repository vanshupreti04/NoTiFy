"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "./utils";

const TooltipProvider = ({ children }) => (
  <TooltipPrimitive.Provider delayDuration={150}>{children}</TooltipPrimitive.Provider>
);

const Tooltip = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef(({ className = "", sideOffset = 6, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "z-50 rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm text-black shadow-lg transition-opacity duration-200",
      "data-[state=delayed-open]:opacity-100 data-[state=closed]:opacity-0",
      className
    )}
    {...props}
  />
));

TooltipContent.displayName = "TooltipContent"; // Debugging

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
