import React, { useState } from "react";
import FuzzyText from "../blocks/comingsoon/comingsoon"; // ✅ Import FuzzyText

const Spreadsheet = () => {
  const [hoverIntensity, setHoverIntensity] = useState(0.5);
  const [enableHover, setEnableHover] = useState(true);

  return (
    <div className="flex flex-col items-center justify-center -mt-20 min-h-screen bg-[#2C1A47]">
      {/* "Coming Soon" Text with Fuzzy Effect */}
      <FuzzyText baseIntensity={0.2} hoverIntensity={hoverIntensity} enableHover={enableHover}>
        Coming Soon
      </FuzzyText>
    </div>
  );
};

export default Spreadsheet;
