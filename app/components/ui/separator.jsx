"use client";

import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { cn } from "../lib/utils";
import React from "react";

const Separator = React.memo(({ className, orientation = "horizontal", decorative = true, ...props }) => (
  <SeparatorPrimitive.Root
    decorative={decorative}
    orientation={orientation}
    aria-orientation={decorative ? undefined : orientation} // Improve accessibility
    className={cn(
      "shrink-0 bg-border",
      orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
      className
    )}
    {...props}
  />
));

Separator.displayName = "Separator"; // Set display name for debugging

export { Separator };
