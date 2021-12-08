import { useState, useEffect, useContext } from "react";
import { DarkModeContext } from "../../utilities/context-wrapper";
import { BiSun } from "react-icons/bi";
import { FaMoon } from "react-icons/fa";
import { ButtonDiv, ButtonToggle } from "./styles";

export default function ToggleButton() {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  const buttonColor = darkMode ? "#8b5cf6" : "#fde68a";

  useEffect(() => {
    const rootCl = document.getElementById("root");
    localStorage.setItem("dark-mode", darkMode);

    darkMode ? rootCl.classList.add("dark") : rootCl.classList.remove("dark");
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <ButtonDiv
      onClick={toggleDarkMode}
      darkMode={darkMode}
      borderColor={buttonColor}
    >
      <ButtonToggle darkMode={darkMode}>
        {!darkMode ? (
          <BiSun className=" text-yellow-500 h-4 w-4" />
        ) : (
          <FaMoon className="text-purple-400 h-3 w-3" />
        )}
      </ButtonToggle>
    </ButtonDiv>
  );
}
