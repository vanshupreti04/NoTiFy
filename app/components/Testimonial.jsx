"use client";
import { AnimatedTestimonialsDemo } from "../blocks/AnimatedTestimonial/AnimatedTestimonialDemo"; // ✅ Updated import path
import { useTranslation } from "react-i18next"; // ✅ Import translation hook

const Testimonial = () => {
  const { t } = useTranslation(); // ✅ Get translation function

  return (
    <div className="text-white text-center -mt-14 sm:-mt-10 [@media(max-width:450px)]:-mt-6 px-8">
      {/* Main Heading - Now Translatable */}
      <h2 className="text-5xl md:text-8xl font-extrabold tracking-wide font-serif">
        {t("testimonials")} {/* ✅ Dynamically translated */}
      </h2>

      {/* Adjusted Purple Section - Rounded Corners & Reduced Vertical Space */}
      <div className="
        bg-purple-700 bg-opacity-20 border border-white rounded-2xl /
        p-8 ml-28 pr-10 mt-12 mb-12 max-w-[84%] h-auto flex flex-col justify-start
        [@media(min-width:1300px)]:max-w-[80%] 
        [@media(min-width:1300px)]:p-10 
        [@media(max-width:450px)]:w-full 
        [@media(max-width:450px)]:p-0  /* ✅ Reduced inner padding */
        [@media(max-width:450px)]:ml-0 
        [@media(max-width:450px)]:max-w-full
        [@media(max-width:450px)]:mt-6  /* ✅ Reduced top margin */
        [@media(max-width:450px)]:mb-6  /* ✅ Reduced bottom margin */
      ">
        {/* Animated Testimonials Component - Placed at the Top */}
        <AnimatedTestimonialsDemo />
      </div>
    </div>
  );
};

export default Testimonial;
