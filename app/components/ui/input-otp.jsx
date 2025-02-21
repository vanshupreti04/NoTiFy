"use client";

import React, { forwardRef, useContext } from "react";
import { OTPInput, OTPInputContext } from "input-otp";
import { Dot } from "lucide-react";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "../lib/utils";

const InputOTP = forwardRef(({ className, containerClassName, asChild, ...props }, ref) => {
  const Comp = asChild ? Slot : OTPInput;

  return (
    <Comp
      ref={ref}
      containerClassName={cn("flex items-center gap-2 has-[:disabled]:opacity-50", containerClassName)}
      className={cn("disabled:cursor-not-allowed", className)}
      {...props}
    />
  );
});
InputOTP.displayName = "InputOTP";

const InputOTPGroup = forwardRef(({ className, asChild, ...props }, ref) => {
  const Comp = asChild ? Slot : "div";

  return <Comp ref={ref} className={cn("flex items-center", className)} {...props} />;
});
InputOTPGroup.displayName = "InputOTPGroup";

const InputOTPSlot = forwardRef(({ index, className, asChild, ...props }, ref) => {
  const inputOTPContext = useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];

  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      ref={ref}
      className={cn(
        "relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all",
        "first:rounded-l-md first:border-l last:rounded-r-md",
        isActive && "z-10 ring-2 ring-ring ring-offset-background",
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
        </div>
      )}
    </Comp>
  );
});
InputOTPSlot.displayName = "InputOTPSlot";

const InputOTPSeparator = forwardRef(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp ref={ref} role="separator" className={cn("flex items-center justify-center", className)} {...props}>
      <Dot />
    </Comp>
  );
});
InputOTPSeparator.displayName = "InputOTPSeparator";

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
