"use client";
import { useTranslation } from "react-i18next"; // ✅ Import translation hook
import AppleCardsSecondDemo from "../blocks/Apple-Cards/AppleCardSecondDemo"; // ✅ Imported Apple Cards Carousel
import CardSecondDemo from "../blocks/3D-Card/CardSecondDemo";

const Productivity = () => {
  const { t } = useTranslation(); // ✅ Initialize translation

  return (
    <div className="mt-80 flex flex-col items-center text-center">
      {/* Heading */}
      <h1 className="text-8xl md:text-7xl font-extrabold text-white">
        {t("maximize_productivity")} {/* ✅ Uses translation */}
      </h1>

      {/* Tagline */}
      <p className="text-base md:text-lg text-gray-400 mt-8 max-w-2xl">
        {t("productivity_tagline")} {/* ✅ Uses translation */}
      </p>

      {/* ✅ Apple Cards Section (Added Below Tagline) */}
      <div className="mt-2 w-full">
        <AppleCardsSecondDemo />
      </div>
    </div>
  );
};

export default Productivity;
