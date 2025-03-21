"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useMemo } from "react";

function getDeterministicRotation(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return (hash % 21) - 10;
}

const AnimatedTestimonials = ({ testimonials, autoplay = false }) => {
  const [active, setActive] = useState(0);
  const rotations = useMemo(
    () => testimonials.map((t) => getDeterministicRotation(t.src)),
    [testimonials]
  );

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index) => index === active;

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  return (
    <div className="max-w-6xl mx-auto antialiased font-sans px-4 md:px-8 lg:px-12 py-20">
      <div
        className="relative grid grid-cols-1 md:grid-cols-2 gap-20 items-center 
        [@media(max-width:450px)]:flex 
        [@media(max-width:450px)]:flex-col 
        [@media(max-width:450px)]:items-center 
        [@media(max-width:450px)]:gap-6 
        [@media(max-width:450px)]:h-auto"
      >
        {/* Image Section */}
        <div
          className="relative h-96 w-full flex items-center 
          [@media(max-width:450px)]:h-32 
          [@media(max-width:450px)]:w-32 
          [@media(max-width:450px)]:flex-shrink-0"
        >
          <AnimatePresence>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.src}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  z: -100,
                  rotate: !isActive(index) ? rotations[index] : 0,
                }}
                animate={{
                  opacity: isActive(index) ? 1 : 0.7,
                  scale: isActive(index) ? 1 : 0.95,
                  z: isActive(index) ? 0 : -100,
                  rotate: isActive(index) ? 0 : rotations[index] * 0.3,
                  zIndex: isActive(index) ? 999 : testimonials.length + 2 - index,
                  y: isActive(index) ? [0, -80, 0] : 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  z: 100,
                  rotate: !isActive(index) ? rotations[index] : 0,
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 origin-bottom"
              >
                <img
                  src={testimonial.src}
                  alt={testimonial.name}
                  className="h-full w-full rounded-3xl object-cover object-center 
                  [@media(max-width:450px)]:rounded-lg"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Text Section */}
        <div
          className="flex flex-col justify-center text-left 
          [@media(max-width:450px)]:text-center 
          [@media(max-width:450px)]:w-full"
        >
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="[@media(max-width:450px)]:text-xs"
          >
            <h3 className="text-4xl font-extrabold dark:text-white text-black 
              [@media(max-width:450px)]:text-lg">
              {testimonials[active].name}
            </h3>
            <p className="text-lg text-gray-400 dark:text-neutral-400 mt-2 
              [@media(max-width:450px)]:text-sm">
              {testimonials[active].designation}
            </p>
            <motion.p
              className="text-2xl text-gray-500 mt-4 dark:text-neutral-300 leading-relaxed 
              [@media(max-width:450px)]:text-sm"
            >
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                  animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.015 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>

          {/* Navigation Buttons */}
          <div
            className="flex gap-4 
            [@media(min-width:1300px)]:justify-center 
            [@media(min-width:1300px)]:mt-8 
            [@media(max-width:450px)]:justify-center 
            [@media(max-width:450px)]:mt-4" 
          >
            <button
              onClick={handlePrev}
              className="h-10 w-10 rounded-full bg-gray-200 dark:bg-neutral-700 flex items-center justify-center group/button 
                [@media(max-width:450px)]:h-8 
                [@media(max-width:450px)]:w-8"
            >
              <IconArrowLeft className="h-6 w-6 text-black dark:text-neutral-400 group-hover/button:rotate-12 transition-transform duration-300 
                [@media(max-width:450px)]:h-5 
                [@media(max-width:450px)]:w-5" />
            </button>
            <button
              onClick={handleNext}
              className="h-10 w-10 rounded-full bg-gray-200 dark:bg-neutral-700 flex items-center justify-center group/button 
                [@media(max-width:450px)]:h-8 
                [@media(max-width:450px)]:w-8"
            >
              <IconArrowRight className="h-6 w-6 text-black dark:text-neutral-400 group-hover/button:-rotate-12 transition-transform duration-300 
                [@media(max-width:450px)]:h-5 
                [@media(max-width:450px)]:w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedTestimonials;
