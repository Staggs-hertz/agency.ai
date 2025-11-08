import React, { useEffect } from "react";
import assets from "../assets/assets";

const ThemeToggleBtn = ({ theme, setTheme }) => {
  //When the component loads, useEffect is used to check if the user’s system prefers dark mode
  //That is, if your app doesn’t already have a theme set
  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setTheme(theme || (prefersDarkMode ? "dark" : "light"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //useEffect to keep track of the value of theme and add a class to the html tag.
  //Remember that Tailwind sees .dark on the <html> element and applies the dark version automatically.
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
    //This saves the current theme (either 'light' or 'dark') in the browser’s localStorage so that when the user refreshes the page or revisits the site, their preference persists.
  }, [theme]);

  return (
    <div>
      <button>
        {theme === "dark" ? (
          <img
            src={assets.sun_icon}
            className="size-8.5 p-1.5 border border-gray-500 rounded-full"
            alt="sun icon"
            onClick={() => setTheme("light")}
          />
        ) : (
          <img
            src={assets.moon_icon}
            className="size-8.5 p-1.5 border border-gray-500 rounded-full"
            alt="moon icon"
            onClick={() => setTheme("dark")}
          />
        )}
      </button>
    </div>
  );
};

export default ThemeToggleBtn;
