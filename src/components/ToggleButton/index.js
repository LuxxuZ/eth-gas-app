import { useState, useEffect } from "react";
import { BiSun } from "react-icons/bi";
import { FaMoon } from "react-icons/fa";

export default function ToggleButton() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("dark-mode") === "true"
  );

  const align = darkMode
    ? "justify-end border-purple-500"
    : "justifyn-start border-yellow-200";

  useEffect(() => {
    const rootCl = document.getElementById("root");
    localStorage.setItem("dark-mode", darkMode);

    darkMode ? rootCl.classList.add("dark") : rootCl.classList.remove("dark");
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    console.log("Dark Mode: On");
  };

  return (
    <div
      onClick={() => {
        toggleDarkMode();
      }}
      className={`${align} border-2 flex ml-auto rounded-full w-16 px-1 py-1 cursor-pointer`}
    >
      <div className="bg-gray-50 dark:bg-chgdark w-6 h-6 rounded-full shadow-lg dark:shadow-none flex justify-center items-center border border-gray-100 dark:border-opacity-0">
        {!darkMode ? (
          <BiSun className=" text-yellow-500 h-4 w-4" />
        ) : (
          <FaMoon className="text-purple-400 h-3 w-3" />
        )}
      </div>
    </div>
  );
}
