"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "../lib/utils";

const Progress = React.forwardRef(({ className, value, max = 100, ...props }, ref) => {
  const percentage = Math.min(Math.max(value ?? 0, 0), max); // Ensure valid percentage

  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn("relative h-4 w-full overflow-hidden rounded-full bg-secondary", className)}
      aria-valuenow={value ?? undefined} // Avoid setting if undefined (indeterminate)
      aria-valuemin={0}
      aria-valuemax={max}
      role="progressbar"
      {...props}
    >
      <ProgressPrimitive.Indicator
        className="h-full bg-primary transition-[width] duration-300 ease-in-out will-change-transform"
        style={{ width: `${(percentage / max) * 100}%` }}
      />
    </ProgressPrimitive.Root>
  );
});
Progress.displayName = "Progress";

export { Progress };
