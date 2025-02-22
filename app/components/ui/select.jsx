"use client";
import React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "./utils";

const Select = SelectPrimitive.Root;
const SelectGroup = SelectPrimitive.Group;
const SelectValue = SelectPrimitive.Value;

const SelectTrigger = ({ className, children, ...props }) => (
  <SelectPrimitive.Trigger
    aria-label="Select an option"
    className={cn(
      "flex h-10 w-full items-center justify-between rounded-md bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground",
      "focus:outline-none focus:ring-0 focus:ring-offset-0", // No white border
      "disabled:cursor-not-allowed disabled:opacity-50",
      "[&>span]:line-clamp-1 space-x-2", 
      className
    )}
    {...props}
  >
    <span>
      <SelectPrimitive.Value />
    </span>
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50 -ml-40 " />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
);

const SelectScrollUpButton = ({ className, ...props }) => (
  <SelectPrimitive.ScrollUpButton
    className={cn("flex cursor-default items-center justify-center py-1", className)}
    {...props}
  >
    <ChevronUp className="h-4 w-4" />
  </SelectPrimitive.ScrollUpButton>
);

const SelectScrollDownButton = ({ className, ...props }) => (
  <SelectPrimitive.ScrollDownButton
    className={cn("flex cursor-default items-center justify-center py-1", className)}
    {...props}
  >
    <ChevronDown className="h-4 w-4" />
  </SelectPrimitive.ScrollDownButton>
);

const SelectContent = ({ className, children, position = "popper", ...props }) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      className={cn(
        "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border border-white/40", // ✅ Light white border
        "bg-black text-white shadow-md", // ✅ Black bg, white text
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
        "data-[side=bottom]:translate-y-0", // ✅ Dropdown starts right at the border
        "mt-0", // ✅ No extra margin above dropdown
        className
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport className="p-1">
        <SelectItem value="normal">Normal</SelectItem>
        <SelectSeparator />
        <SelectItem value="h1">Heading 1</SelectItem>
        <SelectSeparator />
        <SelectItem value="h2">Heading 2</SelectItem>
        <SelectSeparator />
        <SelectItem value="h3">Heading 3</SelectItem>
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
);

const SelectLabel = ({ className, ...props }) => (
  <SelectPrimitive.Label
    className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)}
    {...props}
  />
);

const SelectItem = React.memo(({ className, children, ...props }) => (
  <SelectPrimitive.Item
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none",
      "focus:bg-purple-600 focus:text-white", // ✅ Background on selection
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = "SelectItem";

const SelectSeparator = React.memo(({ className, ...props }) => (
  <SelectPrimitive.Separator
    role="separator"
    className={cn("my-1 h-px bg-gray-500/40", className)} // ✅ Light grey partition line
    {...props}
  />
));
SelectSeparator.displayName = "SelectSeparator";

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
};
