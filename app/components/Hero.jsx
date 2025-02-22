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
    <section 
      className="flex flex-col md:flex-row items-center justify-center md:justify-between 
      min-h-screen px-6 md:px-16 lg:pl-32 bg-[#000000] text-white -mt-8"
    >
      {/* Left Side: Text and Buttons */}
      <div 
        ref={containerRef} 
        className="max-w-2xl text-center md:text-left flex flex-col items-center md:items-start"
      >
        {/* Hero Title */}
        <VariableProximity
          label={t("Visualize Write \n Organize")}
          fromFontVariationSettings="'wght' 400, 'opsz' 9"
          toFontVariationSettings="'wght' 1000, 'opsz' 40"
          containerRef={containerRef}
          radius={100}
          falloff="linear"
          className="text-[clamp(32px,7vw,90px)] md:text-[clamp(40px,6vw,100px)] 
          lg:text-[clamp(50px,7vw,110px)] font-bolder font-['Futura'] 
          leading-[0.95] mt-10 md:mt-0 text-center md:text-left whitespace-pre-line"
        />

        {/* Tagline with extra space */}
        <p 
          className="mt-6 text-[clamp(14px, 1.5vw, 20px)] md:text-[clamp(16px, 1.3vw, 22px)] 
          xl:text-[24px] 2xl:text-[26px] text-[#AAAAAA] font-normal leading-snug 
          text-center md:text-left"
        >
          {t("tagline")}
        </p>

        {/* Buttons with extra spacing and increased size */}
        <div className="mt-8 flex flex-row justify-center md:justify-start space-x-4">
          <button
            onClick={() => router.push("/login")}
            className="px-[clamp(16px,5vw,28px)] py-[clamp(10px,2vw,16px)] text-[clamp(16px,1.5vw,20px)] 
            font-medium text-black bg-[#AC6AFF] rounded-md transition-all duration-300 hover:text-white"
          >
            {t("get_started")}
          </button>
          <button
            onClick={() => router.push("/docs")}
            className="px-[clamp(16px,5vw,28px)] py-[clamp(10px,2vw,16px)] text-[clamp(16px,1.5vw,20px)] 
            font-medium text-white border border-white rounded-md transition-all duration-300 
            hover:border-white hover:text-[#AC6AFF]"
          >
            {t("learn_more")}
          </button>
        </div>
      </div>

      {/* Right Side: Pixel Image */}
      <div 
        className="flex-shrink-0 relative mt-10 md:mt-0 md:mr-16 
        w-[clamp(200px,40vw,500px)] h-[clamp(200px,40vw,500px)] 
        hidden lg:flex md:ml-16"
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
              <p className="font-extrabold text-[clamp(16px,3vw,32px)] text-white">
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
