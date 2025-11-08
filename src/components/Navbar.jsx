import React, { useState } from "react";
import assets from "../assets/assets";
import ThemeToggleBtn from "./ThemeToggleBtn";

const Navbar = ({ theme, setTheme }) => {
  //useState to control the navigation of the menu-sidebar
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70">
      {/*This creates a responsive sticky navbar with flex layout and supports dark mode*/}

      {/*A responsive logo that changes with the theme*/}
      <img
        src={theme === "dark" ? assets.logo_dark : assets.logo}
        className="w-32 sm:w-40"
        alt=""
      />

      {/*Menu navbar that changes to a vertical sidebar when width is less than 640px*/}
      <div
        className={`text-gray-700 dark:text-white sm:text-sm ${
          sidebarOpen
            ? "max-sm:w-60 max-sm:pl-10"
            : "max-sm:w-0 overflow-hidden"
        } max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 max-sm:bg-primary transition-all`}
      >
        {/*Close icon with the function to close the sidebar*/}
        <img
          src={assets.close_icon}
          className="absolute right-4 top-4 w-5 sm:hidden"
          onClick={() => setSidebarOpen(false)}
          alt=""
        />

        {/*Menu items*/}
        <a
          href="#"
          onClick={() => setSidebarOpen(false)}
          className="sm:hover:border-b font-medium"
        >
          Home
        </a>
        <a
          href="#services"
          onClick={() => setSidebarOpen(false)}
          className="sm:hover:border-b"
        >
          Services
        </a>
        <a
          href="#our-work"
          onClick={() => setSidebarOpen(false)}
          className="sm:hover:border-b"
        >
          Our Work
        </a>
        <a
          href="#contact-us"
          onClick={() => setSidebarOpen(false)}
          className="sm:hover:border-b"
        >
          Contact Us
        </a>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <ThemeToggleBtn theme={theme} setTheme={setTheme} />
        <a
          href="#contact-us"
          className="text-sm max-sm:hidden bg-primary px-6 py-2 text-white rounded-full flex items-center cursor-pointer gap-2 hover:scale-105 transition-all"
        >
          Connect <img src={assets.arrow_icon} width={14} alt="" />
        </a>
      </div>

      {/*Menu icon with the function to display the sidebar*/}
      <img
        src={theme === "light" ? assets.menu_icon : assets.menu_icon_dark}
        className="sm:hidden w-8"
        onClick={() => setSidebarOpen(true)}
        alt=""
      />
    </div>
  );
};

export default Navbar;
