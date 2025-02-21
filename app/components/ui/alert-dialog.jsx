"use client";

import * as React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { cn } from "../lib/utils";
import { buttonVariants } from "../components/ui/button";

const AlertDialog = AlertDialogPrimitive.Root;
const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
const AlertDialogPortal = AlertDialogPrimitive.Portal;

// Overlay (Dimmed background)
const AlertDialogOverlay = React.forwardRef(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm",
      "data-[state=open]:animate-fadeIn data-[state=closed]:animate-fadeOut",
      className
    )}
    {...props}
  />
));
AlertDialogOverlay.displayName = "AlertDialogOverlay";

// Dialog Content (Modal Box)
const AlertDialogContent = React.forwardRef(({ className, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-1/2 top-1/2 z-50 w-full max-w-md transform -translate-x-1/2 -translate-y-1/2",
        "rounded-lg border bg-white dark:bg-gray-900 p-6 shadow-xl transition-all duration-300",
        "data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut",
        className
      )}
      {...props}
    />
  </AlertDialogPortal>
));
AlertDialogContent.displayName = "AlertDialogContent";

// Header (Title & Description)
const AlertDialogHeader = ({ className, ...props }) => (
  <div className={cn("text-center sm:text-left space-y-2", className)} {...props} />
);
AlertDialogHeader.displayName = "AlertDialogHeader";

// Footer (Buttons)
const AlertDialogFooter = ({ className, ...props }) => (
  <div className={cn("flex flex-col-reverse sm:flex-row sm:justify-end gap-2", className)} {...props} />
);
AlertDialogFooter.displayName = "AlertDialogFooter";

// Title
const AlertDialogTitle = React.forwardRef(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title ref={ref} className={cn("text-lg font-bold", className)} {...props} />
));
AlertDialogTitle.displayName = "AlertDialogTitle";

// Description
const AlertDialogDescription = React.forwardRef(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description ref={ref} className={cn("text-sm text-gray-600 dark:text-gray-300", className)} {...props} />
));
AlertDialogDescription.displayName = "AlertDialogDescription";

// Action Button
const AlertDialogAction = React.forwardRef(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action ref={ref} className={cn(buttonVariants(), "w-full sm:w-auto", className)} {...props} />
));
AlertDialogAction.displayName = "AlertDialogAction";

// Cancel Button
const AlertDialogCancel = React.forwardRef(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cn(buttonVariants({ variant: "outline" }), "w-full sm:w-auto", className)}
    {...props}
  />
));
AlertDialogCancel.displayName = "AlertDialogCancel";

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
};
