import { useState, useEffect, useContext } from "react";
import { DarkModeContext } from "../../utilities/context-wrapper";
import { BiSun } from "react-icons/bi";
import { FaMoon } from "react-icons/fa";
import { ButtonDiv, ButtonToggle, IconContainer } from "./styles";

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
          <IconContainer>
            <BiSun />
          </IconContainer>
        ) : (
          <IconContainer>
            <FaMoon />
          </IconContainer>
        )}
      </ButtonToggle>
    </ButtonDiv>
  );
}
