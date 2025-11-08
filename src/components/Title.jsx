import React from "react";

const Title = ({ title, desc }) => {
  return (
    //This is custom title component that is used for each section title.
    <>
      <h2 className="text-3xl font-medium sm:text-5xl">{title}</h2>
      <p className="text-gray-500 dark:text-white/75 max-w-lg mb-6 text-center">
        {desc}
      </p>
    </>
  );
};

export default Title;
