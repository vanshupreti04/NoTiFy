"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn } from "../lib/utils";

export function Avatar({ className, children, ...props }) {
  return (
    <AvatarPrimitive.Root
      className={cn(
        "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border border-gray-200 dark:border-gray-700",
        className
      )}
      {...props}
    >
      {children}
    </AvatarPrimitive.Root>
  );
}

export function AvatarImage({ className, alt = "User avatar", ...props }) {
  return (
    <AvatarPrimitive.Image
      className={cn("aspect-square h-full w-full object-cover", className)}
      alt={alt}
      {...props}
    />
  );
}

export function AvatarFallback({ className, children, ...props }) {
  return (
    <AvatarPrimitive.Fallback
      className={cn(
        "flex h-full w-full items-center justify-center rounded-full bg-gray-300 text-gray-700 dark:bg-gray-700 dark:text-gray-300",
        className
      )}
      {...props}
    >
      {children || "?"}
    </AvatarPrimitive.Fallback>
  );
}
