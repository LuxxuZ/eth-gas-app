import { createContext, useContext, useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { ThemeProvider } from "styled-components";
import { DarkModeContext } from "./utilities/context-wrapper";
const lightTheme = {
  body: {
    colors: {
      background: "#fff",
      text_color: "000",
    },
  },

  gas_card: {
    colors: {
      background: "#fff",
      border_color: "#D7D7D7",
      main_text: "#0F0F0F",
      secondary_text: "#3a3a3a",
      loading_bg: "#e5e7eb",
    },
    shadow: {
      card_shadow: "0 4px 15px 0 rgba(0, 0, 0, 0.18)",
    },
  },

  toggle_button: {
    colors: {
      icon_color: "#f59e0b",
    },
    sizes: {
      icon_size: "1rem",
    },
  },

  header: {
    colors: {
      logo_div: "#f3f4f6",
      logo_color: "#000",
    },
  },
};

const darkTheme = {
  body: {
    colors: {
      background: "#121212",
      text_color: "#F6F6F6",
    },
  },

  gas_card: {
    colors: {
      background: "#1D1D1D",
      border_color: "transparent",
      main_text: "#F6F6F6",
      secondary_text: "#E2E2E2",
      loading_bg: "#262626",
    },
    shadow: {
      card_shadow: "none",
    },
  },

  toggle_button: {
    colors: {
      icon_color: "#a78bfa",
    },
    sizes: {
      icon_size: "0.75rem",
    },
  },

  header: {
    colors: {
      logo_div: "#1D1D1D",
      logo_color: "#fff",
    },
  },
};

const themes = {
  light: lightTheme,
  dark: darkTheme,
};

const ThemeContext = createContext("light");

export default function ThemeWrapper({ children }) {
  const [currentTheme, setCurrentTheme] = useState("light");
  const { darkMode } = useContext(DarkModeContext);

  useEffect(() => {
    if (darkMode) {
      setCurrentTheme("dark");
      return;
    }

    setCurrentTheme("light");
  }, [darkMode]);

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}
