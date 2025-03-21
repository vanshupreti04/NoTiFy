import React from "react";
import { cn } from "./utils";
import { useEffect } from "react";

// Inject the animation styles into the document head
const addMeteorAnimation = () => {
  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes meteor {
      0% { transform: rotate(215deg) translateX(0); opacity: 1; }
      70% { opacity: 1; }
      100% { transform: rotate(215deg) translateX(-500px); opacity: 0; }
    }
    
    .meteor-effect {
      animation: meteor 5s linear infinite;
    }
  `;
  document.head.appendChild(style);
};

export const Meteors = ({ number, className }) => {
  useEffect(() => {
    addMeteorAnimation();
  }, []);

  const meteors = new Array(number || 20).fill(true);
  return (
    <>
      {meteors.map((_, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "meteor-effect absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent",
            className
          )}
          style={{
            top: 0,
            left: `${Math.floor(Math.random() * 800) - 400}px`,
            animationDelay: `${Math.random() * (0.8 - 0.2) + 0.2}s`,
            animationDuration: `${Math.floor(Math.random() * (10 - 2) + 2)}s`,
          }}
        ></span>
      ))}
    </>
  );
};

const CareersCard = ({ title, description }) => {
  return (
    <div className="relative p-6 bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden">
      {/* Meteor Animation */}
      <Meteors number={20} className="absolute inset-0" />

      {/* Card Content */}
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-2 text-gray-300">{description}</p>
    </div>
  );
};

export default CareersCard;
