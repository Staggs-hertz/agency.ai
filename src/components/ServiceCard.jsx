import React, { useRef, useState } from "react";
import { motion } from "motion/react";

const ServiceCard = ({ index, service }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  //These are created to create the nice moving hover effect on the service cards.
  const divRef = useRef(null);
  const handleMouseMove = (e) => {
    const bounds = divRef.current.getBoundingClientRect();
    //getBoundingClientRect() is a built-in DOM method that returns the size and position of an element relative to the viewport.

    setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
    //bounds.left and bounds.top are the coordinates of the top-left corner of your div on the screen.
    //e.clientX and e.clientY are the mouse’s absolute position on the screen (relative to the viewport).
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="relative m-2 sm:m-4 rounded-xl max-w-lg border border-gray-200 dark:border-gray-700 shadow-2xl shadow-gray-200 dark:shadow-white/10 overflow-hidden"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      ref={divRef}
      onMouseMove={handleMouseMove}
    >
      <div
        className={`absolute pointer-events-none blur-2xl rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 w-[300px] h-[300px] z-0 transition-opacity duration-500 mix-blend-lighten ${
          visible ? "opacity-70" : "opacity-0"
        }`}
        style={{ top: position.y - 150, left: position.x - 150 }}
      />
      {/* The above div creates the glowing effect behind the cards*/}

      <div className="relative flex items-center gap-10 p-8 hover:p-7.5 hover:m-0.5 transition-all rounded-[10px] bg-white dark:bg-gray-900 z-10">
        <div className="bg-gray-100 dark:bg-gray-700 rounded-full">
          <img
            src={service.icon}
            className="max-w-24 bg-white dark:bg-gray-900 rounded-full m-2"
            alt=""
          />
        </div>
        <div className="flex-1">
          {/* flex-1 makes the title and desc area take the remaining part of the container
          starting from the gap-10 */}

          <h3 className="font-bold">{service.title}</h3>
          <p className="text-sm mt-2">{service.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
