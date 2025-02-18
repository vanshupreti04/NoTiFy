"use client";
import { AnimatedTestimonialsDemo } from "../blocks/AnimatedTestimonial/AnimatedTestimonialDemo"; // ✅ Updated import path
import { useTranslation } from "react-i18next"; // ✅ Import translation hook

const Testimonial = () => {
  const { t } = useTranslation(); // ✅ Get translation function

  return (
    <div className="text-white text-center -mt-14 px-8">
      {/* Main Heading - Now Translatable */}
      <h2 className="text-5xl md:text-8xl font-extrabold tracking-wide font-serif">
        {t("testimonials")} {/* ✅ Dynamically translated */}
      </h2>

      {/* Enlarged Purple Section with Adjusted Padding */}
      <div className="bg-purple-700 bg-opacity-20 rounded-3xl p-8 ml-28 pr-10 mt-12 max-w-[84%] h-auto flex flex-col justify-start border border-white">
        {/* Animated Testimonials Component - Placed at the Top */}
        <AnimatedTestimonialsDemo />
      </div>
    </div>
  );
};

export default Testimonial;
