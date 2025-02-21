"use client";
import { useTranslation } from "react-i18next"; // ✅ Import translation hook
import AppleCardsSecondDemo from "../blocks/Apple-Cards/AppleCardSecondDemo"; // ✅ Imported Apple Cards Carousel

const Productivity = () => {
  const { t } = useTranslation(); // ✅ Initialize translation

  return (
    <div className="mt-80 flex flex-col items-center text-center 
                    [@media(max-width:450px)]:mt-40">
      {/* Heading (Responsive for Small Screens) */}
      <h1 className="text-8xl md:text-7xl font-extrabold text-white 
                     [@media(max-width:450px)]:text-4xl 
                     [@media(max-width:450px)]:leading-tight">
        {t("maximize_productivity")}
      </h1>

      {/* Tagline (Smaller for Small Screens) */}
      <p className="text-base md:text-lg text-gray-400 mt-8 max-w-2xl 
                   [@media(max-width:450px)]:text-sm 
                   [@media(max-width:450px)]:mt-4">
        {t("productivity_tagline")}
      </p>

      {/* ✅ Apple Cards Section (Moved Up for Mobile) */}
      <div className="mt-2 w-full 
                      [@media(max-width:450px)]:-mt-6"> {/* 🔼 Moves Up on Mobile */}
        <AppleCardsSecondDemo />
      </div>
    </div>
  );
};

export default Productivity;
