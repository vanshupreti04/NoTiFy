"use client"; // Ensure it's a client component

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import "./PixelTransition.css";

function PixelTransition({
  firstContent,
  secondContent,
  gridSize = 10,
  pixelColor = "currentColor",
  animationStepDuration = 0.3,
  className = "",
  style = {},
  aspectRatio = "100%", // Allows responsive aspect ratio
}) {
  const containerRef = useRef(null);
  const pixelGridRef = useRef(null);
  const activeRef = useRef(null);
  const delayedCallRef = useRef(null);

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const isTouchDevice =
      typeof window !== "undefined" &&
      ("ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia("(pointer: coarse)").matches);

    const pixelGridEl = pixelGridRef.current;
    if (!pixelGridEl) return;

    // Clear any previous grid to avoid duplicates on re-renders
    pixelGridEl.innerHTML = "";

    // Dynamically calculate grid size and pixel size based on gridSize
    const size = 100 / gridSize; // Percentage based on grid size

    // Create the pixel grid
    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        const pixel = document.createElement("div");
        pixel.classList.add("pixelated-image-card__pixel");
        pixel.style.backgroundColor = pixelColor;
        pixel.style.width = `${size}%`;
        pixel.style.height = `${size}%`;
        pixel.style.left = `${col * size}%`;
        pixel.style.top = `${row * size}%`;
        pixelGridEl.appendChild(pixel);
      }
    }
  }, [gridSize, pixelColor]);

  const animatePixels = (activate) => {
    setIsActive(activate);

    const pixelGridEl = pixelGridRef.current;
    const activeEl = activeRef.current;
    if (!pixelGridEl || !activeEl) return;

    const pixels = pixelGridEl.querySelectorAll(".pixelated-image-card__pixel");
    if (!pixels.length) return;

    gsap.killTweensOf(pixels);
    if (delayedCallRef.current) {
      delayedCallRef.current.kill();
    }

    gsap.set(pixels, { display: "none" });

    const totalPixels = pixels.length;
    const staggerDuration = animationStepDuration / totalPixels;

    gsap.to(pixels, {
      display: "block",
      duration: 0,
      stagger: {
        each: staggerDuration,
        from: "random",
      },
    });

    delayedCallRef.current = gsap.delayedCall(animationStepDuration, () => {
      activeEl.style.display = activate ? "block" : "none";
      activeEl.style.pointerEvents = activate ? "none" : "";
    });

    gsap.to(pixels, {
      display: "none",
      duration: 0,
      delay: animationStepDuration,
      stagger: {
        each: staggerDuration,
        from: "random",
      },
    });
  };

  return (
    <div
      ref={containerRef}
      className={`pixelated-image-card ${className}`}
      style={style}
      onMouseEnter={!isActive ? () => animatePixels(true) : undefined}
      onMouseLeave={isActive ? () => animatePixels(false) : undefined}
      onClick={() => animatePixels(!isActive)}
    >
      <div style={{ paddingTop: aspectRatio }} />
      <div className="pixelated-image-card__default">{firstContent}</div>
      <div className="pixelated-image-card__active" ref={activeRef}>
        {secondContent}
      </div>
      <div className="pixelated-image-card__pixels" ref={pixelGridRef} />
    </div>
  );
}

export default PixelTransition;
