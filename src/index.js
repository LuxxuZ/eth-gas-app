import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./screens/home";
import reportWebVitals from "./reportWebVitals";
import { DarkModeProvider } from "./utilities/context-wrapper";
import { ThemeProvider } from "styled-components";

require("dotenv").config();

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <DarkModeProvider>
        <Home />
      </DarkModeProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
