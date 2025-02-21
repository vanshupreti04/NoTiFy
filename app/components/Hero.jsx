"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import VariableProximity from "../blocks/text-animations/VariableProximity";
import PixelTransition from "../blocks/Pixel-Transition/PixelTransition";
import { useTranslation } from "react-i18next";
import Image from "next/image";

const Hero = () => {
  const containerRef = useRef(null);
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <section className="flex flex-col md:flex-row items-center justify-between h-screen mt-6 px-6 md:px-16 lg:pl-32 bg-[#000000] text-white">
      {/* Left side: Text and buttons */}
      <div ref={containerRef} className="max-w-2xl text-center md:text-left">
        {/* Animated Hero Title - Responsive Size */}
        <VariableProximity
          label={t("Visualize   Write \n Organize")}
          fromFontVariationSettings="'wght' 400, 'opsz' 9"
          toFontVariationSettings="'wght' 1000, 'opsz' 40"
          containerRef={containerRef}
          radius={100}
          falloff="linear"
          className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bolder font-['Futura'] leading-tight 
          mt-10 md:mt-0" // ✅ Adds margin-top for mobile
        />

        {/* ✅ Translated Tagline */}
        <p className="mt-6 text-lg md:text-2xl text-[#AAAAAA] font-normal leading-snug">
          {t("tagline")}
        </p>

        {/* Buttons */}
        <div className="mt-8 flex justify-center md:justify-start space-x-4 md:space-x-6">
          <button
            onClick={() => router.push("/login")}
            className="px-5 py-2 sm:px-6 sm:py-3 text-base sm:text-lg font-medium text-black bg-[#AC6AFF] rounded-md transition-all duration-300 hover:text-white"
          >
            {t("get_started")}
          </button>
          <button
            onClick={() => router.push("/docs")}
            className="px-5 py-2 sm:px-6 sm:py-3 text-base sm:text-lg font-medium text-white border border-white rounded-md transition-all duration-300 hover:border-white hover:text-[#AC6AFF]"
          >
            {t("learn_more")}
          </button>
        </div>
      </div>

      {/* Right side: PixelTransition effect */}
      <div
        className="flex-shrink-0 relative 
        mt-10 md:mt-0 md:mr-16  w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] 
        md:flex md:items-start md:ml-16 // ✅ Adds gap between text & image on desktop 
        flex items-center justify-center" // ✅ Moves image below text on mobile
      >
        <PixelTransition
          firstContent={
            <Image
              src="/assets/HeroImage.png"
              alt={t("hero_image_alt")}
              width={1300}
              height={1300}
              className="object-cover w-full h-auto"
              priority
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
              <p className="font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white">
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
