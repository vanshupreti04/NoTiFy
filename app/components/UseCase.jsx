"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import CardSecondDemo from "../blocks/3D-Card/CardSecondDemo";

const UseCase = () => {
  const { t } = useTranslation();

  return (
    <div className=" dark mt-24 px-6 md:px-32 flex flex-col lg:flex-row justify-between items-center relative text-center lg:text-left">
      {/* Left-aligned content */}
      <div className="max-w-2xl z-10 mt-24">
        {/* ✅ Responsive heading with fluid scaling */}
        <h1 className="text-[clamp(32px,5vw,60px)] font-extrabold text-white leading-[1.2]">
          {t("built_for_everyone")}
        </h1>
        <h1 className="text-[clamp(32px,5vw,60px)] mt-3 font-extrabold text-white leading-[1.2]">
          {t("designed_for_you")}
        </h1>

        {/* ✅ Responsive tagline size & spacing */}
        <p className="text-[clamp(14px,2vw,20px)] text-gray-400 mt-4 md:mt-6">
          {t("usecase_tagline")}
        </p>

        {/* ✅ Responsive "Explore Docs" link */}
        <Link
          href="/docs"
          className="inline-flex items-center gap-2 mt-6 md:mt-8 text-[clamp(16px,2vw,24px)] font-semibold text-[#AC6AFF] hover:underline"
        >
          {t("explore_docs")} 
          <ArrowRight style={{ width: "clamp(16px, 2vw, 24px)" }} />
        </Link>
      </div>

      {/* ✅ Card positioning: 
          - Below "Explore Docs" for **450px** but moved even higher
          - Fixed to the right for **1300px and above** */}
      <div className="w-full flex justify-center lg:justify-start mt-10 lg:mt-0 lg:absolute lg:right-40 lg:-top-12 
                      sm:max-w-[28rem] sm:mt-10 sm:mb-10 
                      [@media(max-width:450px)]:mt-[-40] [@media(max-width:450px)]:flex [@media(max-width:450px)]:justify-center">
        <div className="w-[clamp(16rem,35vw,28rem)] sm:w-[clamp(14rem,40vw,24rem)]">
          <CardSecondDemo />
        </div>
      </div>
    </div>
  );
};

export default UseCase;
