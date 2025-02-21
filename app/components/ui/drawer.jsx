"use client";

import React, { useState, useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { cn } from "../lib/utils";

// The compound Drawer component manages its own open state.
export function Drawer({ children, defaultOpen = false, ...props }) {
  const [open, setOpen] = useState(defaultOpen);

  const enhanceChild = (child) => {
    if (!React.isValidElement(child)) return child;
    const displayName = child.type.displayName;

    const sharedProps = {};
    if (displayName === "DrawerTrigger") sharedProps.onClick = () => setOpen(true);
    if (displayName === "DrawerClose") sharedProps.onClick = () => setOpen(false);
    if (displayName === "DrawerContent") sharedProps.open = open, sharedProps.setOpen = setOpen;

    return React.cloneElement(child, sharedProps);
  };

  const enhanced = React.Children.map(children, enhanceChild);
  return <div {...props}>{enhanced}</div>;
}
Drawer.displayName = "Drawer";

export const DrawerTrigger = ({ children, className, onClick, ...props }) => (
  <button className={cn("p-2 rounded-md", className)} {...props} onClick={onClick}>
    {children}
  </button>
);
DrawerTrigger.displayName = "DrawerTrigger";

export const DrawerClose = ({ children = "Close", className, onClick, ...props }) => (
  <button className={cn("p-2 rounded-md", className)} {...props} onClick={onClick}>
    {children}
  </button>
);
DrawerClose.displayName = "DrawerClose";

export const DrawerPortal = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  const portalRef = useRef(null);

  useEffect(() => {
    portalRef.current = document.body;
    setMounted(true);
  }, []);

  return mounted && portalRef.current ? createPortal(children, portalRef.current) : null;
};
DrawerPortal.displayName = "DrawerPortal";

export const DrawerOverlay = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("fixed inset-0 z-50 bg-black/80 transition-opacity", className)}
    {...props}
  />
));
DrawerOverlay.displayName = "DrawerOverlay";

export const DrawerContent = React.forwardRef(({ open, setOpen, className, children, ...props }, ref) => {
  if (!open) return null;

  const closeOnEscape = useCallback((e) => {
    if (e.key === "Escape") setOpen(false);
  }, [setOpen]);

  useEffect(() => {
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [closeOnEscape]);

  return (
    <DrawerPortal>
      <DrawerOverlay onClick={() => setOpen(false)} />
      <div
        ref={ref}
        className={cn(
          "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-lg border bg-background transition-transform duration-200",
          className
        )}
        {...props}
      >
        <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
        {children}
      </div>
    </DrawerPortal>
  );
});
DrawerContent.displayName = "DrawerContent";

export const DrawerHeader = ({ className, ...props }) => (
  <div className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)} {...props} />
);
DrawerHeader.displayName = "DrawerHeader";

export const DrawerFooter = ({ className, ...props }) => (
  <div className={cn("mt-auto flex flex-col gap-2 p-4", className)} {...props} />
);
DrawerFooter.displayName = "DrawerFooter";

export const DrawerTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h2 ref={ref} className={cn("text-lg font-semibold leading-none tracking-tight", className)} {...props} />
));
DrawerTitle.displayName = "DrawerTitle";

export const DrawerDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
));
DrawerDescription.displayName = "DrawerDescription";
