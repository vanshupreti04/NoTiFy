"use client";

import React, { forwardRef } from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "../lib/utils";

const HoverCard = ({ defaultOpen, open, onOpenChange, children }) => (
  <HoverCardPrimitive.Root defaultOpen={defaultOpen} open={open} onOpenChange={onOpenChange}>
    {children}
  </HoverCardPrimitive.Root>
);

const HoverCardTrigger = HoverCardPrimitive.Trigger;

const HoverCardContent = forwardRef(({ className, align = "center", sideOffset = 4, asChild, ...props }, ref) => {
  const Comp = asChild ? Slot : "div"; // Allows wrapping custom components

  return (
    <HoverCardPrimitive.Portal>
      <HoverCardPrimitive.Content
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none",
          "data-[state=open]:animate-in data-[state=closed]:animate-out",
          "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
          "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
          "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          className
        )}
        {...props}
      >
        <Comp>{props.children}</Comp>
      </HoverCardPrimitive.Content>
    </HoverCardPrimitive.Portal>
  );
});
HoverCardContent.displayName = "HoverCardContent";

export { HoverCard, HoverCardTrigger, HoverCardContent };
