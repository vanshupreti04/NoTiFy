"use client";

import React from "react";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { cn } from "@/app/components/lib/utils";

const Collapsible = CollapsiblePrimitive.Root;

const CollapsibleTrigger = React.memo(
  React.forwardRef(({ className, children, ...props }, ref) => (
    <CollapsiblePrimitive.CollapsibleTrigger
      ref={ref}
      className={cn("flex items-center gap-2 p-2 text-sm font-medium", className)}
      aria-expanded={props.open} // Accessibility improvement
      {...props}
    >
      {children}
    </CollapsiblePrimitive.CollapsibleTrigger>
  ))
);
CollapsibleTrigger.displayName = "CollapsibleTrigger";

const CollapsibleContent = React.memo(
  React.forwardRef(({ className, children, ...props }, ref) => (
    <CollapsiblePrimitive.CollapsibleContent
      ref={ref}
      className={cn("overflow-hidden transition-all duration-300 ease-in-out", className)}
      {...props}
    >
      {children}
    </CollapsiblePrimitive.CollapsibleContent>
  ))
);
CollapsibleContent.displayName = "CollapsibleContent";

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
