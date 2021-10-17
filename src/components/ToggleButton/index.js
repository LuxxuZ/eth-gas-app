import { useState, useEffect } from "react";

export default function ToggleButton() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("dark-mode") === "true"
  );

  const align = darkMode
    ? "justify-end bg-purple-800"
    : "justifyn-start bg-yellow-300";

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
      className={`${align} flex ml-auto rounded-full w-14 px-1 py-1 cursor-pointer shadow-inner`}
    >
      <div className="bg-gray-50 dark:bg-chgdark w-5 h-5 rounded-full shadow-sm"></div>
    </div>
  );
}
