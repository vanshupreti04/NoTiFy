"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation"; // ✅ FIXED: Correct import for App Router
import VariableProximity from "../blocks/text-animations/VariableProximity";
import PixelTransition from "../blocks/Pixel-Transition/PixelTransition";
import { useTranslation } from "react-i18next";
import Image from "next/image"; // ✅ Next.js optimized image

const Hero = () => {
  const containerRef = useRef(null);
  const router = useRouter(); // ✅ FIXED: Correct hook usage for Next.js 13+
  const { t } = useTranslation();

  return (
    <section className="flex items-center justify-between h-screen mt-6 pl-16 md:pl-32 bg-[#000000] text-white">
      {/* Left side: Text and buttons */}
      <div ref={containerRef} className="max-w-2xl">
        {/* Animated Hero Title */}
        <VariableProximity
          label={t("Visualize \n \n \n \n \n \n  Write \n Organize")} // ✅ Translation applied
          fromFontVariationSettings="'wght' 400, 'opsz' 9"
          toFontVariationSettings="'wght' 1000, 'opsz' 40"
          containerRef={containerRef}
          radius={100}
          falloff="linear"
          className="text-6xl md:text-8xl font-bold font-['Futura'] leading-tight"
        />

        {/* ✅ Translated Tagline */}
        <p className="mt-8 text-xl md:text-2xl text-[#AAAAAA] font-normal leading-snug">
          {t("tagline")}
        </p>

        {/* Buttons */}
        <div className="mt-10 flex space-x-6">
          <button
            onClick={() => router.push("/login")} // ✅ FIXED: Works properly in App Router
            className="px-6 py-3 text-lg font-medium text-black bg-[#AC6AFF] rounded-md transition-all duration-300 hover:text-white"
          >
            {t("get_started")}
          </button>
          <button
            onClick={() => router.push("/docs")} // ✅ FIXED: Works properly in App Router
            className="px-6 py-3 text-lg font-medium text-white border border-white rounded-md transition-all duration-300 hover:border-white hover:text-[#AC6AFF]"
          >
            {t("learn_more")}
          </button>
        </div>
      </div>

      {/* Right side: PixelTransition effect */}
      <div className="flex-shrink-0 mr-40 w-[480px] h-[480px] relative">
        <PixelTransition
          firstContent={
            <Image
              src="/assets/HeroImage.png"
              alt={t("hero_image_alt")}
              width={800} // ✅ Ensure proper size
              height={600}
              className="object-cover w-full h-auto"
              priority // ✅ Helps with loading performance
            />
          }
          secondContent={
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "grid",
                placeItems: "center",
                backgroundColor: "#111",
              }}
            >
              <p style={{ fontWeight: 900, fontSize: "3rem", color: "white" }}>
                {t("pixel_transition_text")}
              </p>
            </div>
          }
          gridSize={12}
          pixelColor="#ffffff"
          animationStepDuration={0.4}
          className="custom-pixel-card"
        />
      </div>
    </section>
  );
};

export default Hero;
