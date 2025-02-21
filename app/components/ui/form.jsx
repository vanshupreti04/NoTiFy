"use client";

import React, { createContext, forwardRef, useContext, useId, useMemo } from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { Slot } from "@radix-ui/react-slot";
import { Controller, FormProvider, useFormContext } from "react-hook-form";

import { cn } from "../lib/utils";
import { Label } from "../components/ui/label";

const Form = FormProvider;

const FormFieldContext = createContext(null);

const FormField = ({ name, control, defaultValue, rules, children }) => {
  const { getFieldState, formState } = useFormContext();
  const fieldState = getFieldState(name, formState);

  const contextValue = useMemo(() => ({ name, ...fieldState }), [name, fieldState]);

  return (
    <FormFieldContext.Provider value={contextValue}>
      <Controller name={name} control={control} defaultValue={defaultValue} rules={rules} render={children} />
    </FormFieldContext.Provider>
  );
};

const FormItemContext = createContext(null);

const useFormField = () => {
  const fieldContext = useContext(FormFieldContext);
  const itemContext = useContext(FormItemContext);
  
  if (!fieldContext) {
    throw new Error("useFormField must be used within a <FormField>");
  }
  if (!itemContext) {
    throw new Error("useFormField must be used within a <FormItem>");
  }

  const { id } = itemContext;
  return {
    id,
    name: fieldContext.name,
    error: fieldContext.error,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
  };
};

const FormItem = forwardRef(({ className, ...props }, ref) => {
  const id = useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={cn("space-y-2", className)} {...props} />
    </FormItemContext.Provider>
  );
});
FormItem.displayName = "FormItem";

const FormLabel = forwardRef(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField();
  return (
    <Label ref={ref} className={cn(error && "text-destructive", className)} htmlFor={formItemId} {...props} />
  );
});
FormLabel.displayName = "FormLabel";

const FormControl = forwardRef(({ asChild, ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
  const Comp = asChild ? Slot : "input"; // Supports custom elements

  return (
    <Comp
      ref={ref}
      id={formItemId}
      aria-describedby={!error ? formDescriptionId : `${formDescriptionId} ${formMessageId}`}
      aria-invalid={!!error}
      className={cn("block w-full border rounded-md p-2", error && "border-destructive")}
      {...props}
    />
  );
});
FormControl.displayName = "FormControl";

const FormDescription = forwardRef(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField();
  return <p ref={ref} id={formDescriptionId} className={cn("text-sm text-muted-foreground", className)} {...props} />;
});
FormDescription.displayName = "FormDescription";

const FormMessage = forwardRef(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField();
  const message = error?.message ? String(error.message) : children;

  if (!message) return null;

  return (
    <p ref={ref} id={formMessageId} className={cn("text-sm font-medium text-destructive", className)} {...props}>
      {message}
    </p>
  );
});
FormMessage.displayName = "FormMessage";

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
};
