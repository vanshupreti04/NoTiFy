"use client";

import React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { cn } from "./utils";

const Checkbox = React.memo(
  React.forwardRef(({ className, size = 16, label, ...props }, ref) => (
    <label className="flex items-center gap-2 cursor-pointer">
      {/* Checkbox */}
      <CheckboxPrimitive.Root
        ref={ref}
        className={cn(
          `peer shrink-0 rounded-sm border border-primary ring-offset-background 
           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring 
           focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 
           data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground`,
          className
        )}
        style={{ width: size, height: size }} // ✅ Fix: Using inline styles for size
        {...props}
        aria-checked={props.checked || props.defaultChecked}
      >
        <CheckboxPrimitive.Indicator className="flex items-center justify-center text-current">
          <Check style={{ width: size * 0.6, height: size * 0.6 }} /> {/* ✅ Scaled Check icon */}
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>

      {/* Label (Text beside Checkbox) */}
      {label && <span className="text-sm">{label}</span>}
    </label>
  ))
);

Checkbox.displayName = "Checkbox";

export { Checkbox };
