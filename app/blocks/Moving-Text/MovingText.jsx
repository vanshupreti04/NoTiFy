"use client"; // Ensure it's a client component

import React from "react";
import "./MovingText.css"; // Import CSS file
import { useTranslation } from "react-i18next"; // Import translation hook

const MovingText = () => {
  const { t } = useTranslation(); // Initialize translation function

  return (
    <div id="moving-text">
      <div className="moving-wrapper">
        <div className="moving-container">
          <h1>{t("create")}</h1>
          <div className="circle"></div>
          <h1>{t("organize")}</h1>
          <div className="circle"></div>
          <h1>{t("productive")}</h1>
          <div className="circle"></div>
          <h1>{t("create")}</h1>
          <div className="circle"></div>
          <h1>{t("organize")}</h1>
          <div className="circle"></div>
          <h1>{t("productive")}</h1>
          <div className="circle"></div>
        </div>

        {/* Duplicate for seamless looping */}
        <div className="moving-container">
          <h1>{t("create")}</h1>
          <div className="circle"></div>
          <h1>{t("organize")}</h1>
          <div className="circle"></div>
          <h1>{t("productive")}</h1>
          <div className="circle"></div>
          <h1>{t("create")}</h1>
          <div className="circle"></div>
          <h1>{t("organize")}</h1>
          <div className="circle"></div>
          <h1>{t("productive")}</h1>
          <div className="circle"></div>
        </div>
      </div>
    </div>
  );
};

export default MovingText;
