"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";
import { useEffect, useState, useMemo } from "react";

const Toaster = (props) => {
  const { theme, systemTheme } = useTheme();
  const [resolvedTheme, setResolvedTheme] = useState(null);

  useEffect(() => {
    if (theme === "system") {
      setResolvedTheme(systemTheme || "light");
    } else {
      setResolvedTheme(theme);
    }
  }, [theme, systemTheme]);

  const toastOptions = useMemo(() => ({
    classNames: {
      toast:
        "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
      description: "group-[.toast]:text-muted-foreground",
      actionButton:
        "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
      cancelButton:
        "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
    },
  }), []);

  if (!resolvedTheme) return null; // Prevents SSR hydration issues

  return (
    <Sonner
      theme={resolvedTheme}
      className="toaster group"
      toastOptions={toastOptions}
      {...props}
    />
  );
};

export { Toaster };
