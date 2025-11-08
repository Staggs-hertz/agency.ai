import React from "react";
import { company_logos } from "../assets/assets";

const TrustedBySection = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 px-4 sm:px-12 lg:px-24 xl:px-40 text-gray-500 dark:text-white/80">
      <h3 className="font-semibold">Trusted by Leading Companies</h3>

      <div className="flex items-center justify-center gap-10 m-4 flex-wrap">
        {company_logos.map((company, index) => (
          <img
            key={index}
            src={company}
            alt=""
            className="max-h-5 sm:max-h-6 dark:drop-shadow-xl"
          />
        ))}
        {/*This maps through the elements of the company_logos array and creates an image element for each of them*/}
      </div>
    </div>
  );
};

export default TrustedBySection;
