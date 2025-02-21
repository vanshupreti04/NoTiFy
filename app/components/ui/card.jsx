"use client";

import { cn } from "../lib/utils";

export function Card({ className, as: Component = "div", ...props }) {
  return (
    <Component
      className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)}
      {...props}
    />
  );
}

export function CardHeader({ className, as: Component = "header", ...props }) {
  return <Component className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />;
}

export function CardTitle({ className, as: Component = "h2", ...props }) {
  return (
    <Component className={cn("text-2xl font-semibold leading-none tracking-tight", className)} {...props} />
  );
}

export function CardDescription({ className, as: Component = "p", ...props }) {
  return <Component className={cn("text-sm text-muted-foreground", className)} {...props} />;
}

export function CardContent({ className, as: Component = "div", ...props }) {
  return <Component className={cn("p-6 pt-0", className)} {...props} />;
}

export function CardFooter({ className, as: Component = "footer", ...props }) {
  return <Component className={cn("flex items-center p-6 pt-0", className)} {...props} />;
}
