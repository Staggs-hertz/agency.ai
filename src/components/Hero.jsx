import React from "react";
import assets from "../assets/assets";

const Hero = () => {
  return (
    <div
      id="hero"
      className="flex items-center flex-col gap-6 py-20 px-4 text-center text-gray-700 dark:text-white sm:px-12 lg:px-24 xl:px-40 overflow-hidden w-full"
    >
      <div className="inline-flex items-center gap-2 border border-gray-300 p-1.5 rounded-full">
        <img src={assets.group_profile} className="w-20" alt="" />
        <p className="text-xs font-medium">Trusted by 10k+ people</p>
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-6xl max-w-5xl xl:leading-[95px]">
        Turning Imagination into{" "}
        <span className="text-transparent bg-gradient-to-r from-[#5044e5] to-[#4d8cea] bg-clip-text">
          digital
        </span>{" "}
        impact.
      </h1>
      {/*This creates a large h1 text and the 'span' text practically invisible and its gradient background displayed inside its text shape*/}

      <p className="text-sm sm:text-lg text-gray-500 dark:text-white/75 pb-3 max-w-4/5 sm:max-w-lg">
        Creating meaningful connections and turning big ideas into interactive
        digital experiences.
      </p>

      <div className="relative">
        <img src={assets.hero_img} alt="" className="w-full max-w-6xl" />
        <img
          src={assets.bgImage1}
          alt=""
          className="absolute -z-1 -top-40 -right-40 sm:-top-100 sm:-right-70 dark:hidden"
        />
        {/*The puts the light-blue hue image behind the hero image*/}
      </div>
    </div>
  );
};

export default Hero;
