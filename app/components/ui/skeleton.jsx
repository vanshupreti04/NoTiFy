import { cn } from "../lib/utils";

const Skeleton = ({ className, width, height, shape = "rounded", ...props }) => (
  <div
    className={cn(
      "animate-pulse bg-muted",
      shape === "circle" ? "rounded-full" : shape === "square" ? "rounded-none" : "rounded-md",
      className
    )}
    style={{ width, height }}
    {...props}
  />
);

export { Skeleton };
