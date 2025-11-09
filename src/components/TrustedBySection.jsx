import React from "react";
import { company_logos } from "../assets/assets";
import { motion } from "motion/react";

const TrustedBySection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center gap-10 px-4 sm:px-12 lg:px-24 xl:px-40 text-gray-500 dark:text-white/80"
    >
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="font-semibold"
      >
        Trusted by Leading Companies
      </motion.h3>

      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.1 }}
        viewport={{ once: true }}
        className="flex items-center justify-center gap-10 m-4 flex-wrap"
      >
        {company_logos.map((company, index) => (
          <motion.img
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4 }}
            key={index}
            src={company}
            alt=""
            className="max-h-5 sm:max-h-6 dark:drop-shadow-xl"
          />
        ))}
        {/*This maps through the elements of the company_logos array and creates an image element for each of them*/}
      </motion.div>
    </motion.div>
  );
};

export default TrustedBySection;
