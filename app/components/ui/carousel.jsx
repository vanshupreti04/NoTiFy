"use client";

import { useState, useEffect, useCallback, useContext, createContext, useMemo } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { cn } from "../lib/utils";
import { Button } from "../components/ui/button";

const CarouselContext = createContext(null);

function useCarousel() {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}

export function Carousel({
  orientation = "horizontal",
  opts = {},
  setApi,
  plugins,
  className,
  children,
  ...props
}) {
  const [carouselRef, api] = useEmblaCarousel(
    { ...opts, axis: orientation === "horizontal" ? "x" : "y" },
    plugins
  );

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const updateScrollState = useCallback((api) => {
    if (!api) return;
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  const scrollPrev = useCallback(() => api?.scrollPrev(), [api]);
  const scrollNext = useCallback(() => api?.scrollNext(), [api]);

  useEffect(() => {
    if (api) {
      updateScrollState(api);
      api.on("reInit", updateScrollState);
      api.on("select", updateScrollState);
      return () => {
        api.off("select", updateScrollState);
        api.off("reInit", updateScrollState);
      };
    }
  }, [api, updateScrollState]);

  useEffect(() => {
    if (api && setApi) setApi(api);
  }, [api, setApi]);

  const contextValue = useMemo(
    () => ({
      carouselRef,
      api,
      opts,
      orientation,
      scrollPrev,
      scrollNext,
      canScrollPrev,
      canScrollNext,
    }),
    [carouselRef, api, opts, orientation, scrollPrev, scrollNext, canScrollPrev, canScrollNext]
  );

  return (
    <CarouselContext.Provider value={contextValue}>
      <div
        className={cn("relative", className)}
        role="region"
        aria-roledescription="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
}

export function CarouselContent({ className, ...props }) {
  const { carouselRef, orientation } = useCarousel();
  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        className={cn("flex", orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", className)}
        {...props}
      />
    </div>
  );
}

export function CarouselItem({ className, ...props }) {
  const { orientation } = useCarousel();
  return (
    <div
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props}
    />
  );
}

export function CarouselPrevious({ className, variant = "outline", size = "icon", ...props }) {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();
  return (
    <Button
      variant={variant}
      size={size}
      className={cn(
        "absolute h-10 w-10 rounded-full transition-opacity duration-200",
        canScrollPrev ? "opacity-100" : "opacity-50",
        orientation === "horizontal"
          ? "-left-10 top-1/2 -translate-y-1/2"
          : "-top-10 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft className="h-5 w-5" />
      <span className="sr-only">Previous slide</span>
    </Button>
  );
}

export function CarouselNext({ className, variant = "outline", size = "icon", ...props }) {
  const { orientation, scrollNext, canScrollNext } = useCarousel();
  return (
    <Button
      variant={variant}
      size={size}
      className={cn(
        "absolute h-10 w-10 rounded-full transition-opacity duration-200",
        canScrollNext ? "opacity-100" : "opacity-50",
        orientation === "horizontal"
          ? "-right-10 top-1/2 -translate-y-1/2"
          : "-bottom-10 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight className="h-5 w-5" />
      <span className="sr-only">Next slide</span>
    </Button>
  );
}
