import { createContext, useState, useEffect } from "react";

export const DarkModeContext = createContext({});

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("dark-mode") === "true"
  );

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
