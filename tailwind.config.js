module.exports = {
  purge: [],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      margin: {
        "50p": "50%",
      },
      boxShadow: {
        hsw: "0 3px 40px 0 rgba(0, 0, 0, 0.1)",
        csw: "0 4px 15px 0 rgba(0, 0, 0, 0.18)",
        nsw: "0 2px 2px rgba(0, 0, 0, 0.25)",
      },
      colors: {
        cgreen: "#219F2D",
        csgreen: "#9DC64B",
        corange: "#FD9255",
        cblue: "#3F6CE1",
        bcwhite: "#FCFCFC",
        tcwhite: "#FFFFFF",
        //////////////////////DARK MODE////////////////////////
        ctwhite: "#F6F6F6",
        cstwhite: "#E2E2E2",
        cbodydark: "#121212",
        chgdark: "#1D1D1D",
        cnavdark: "#1D1D1D",
        cgreendark: "#00ec15",
        cpurpledark: "#9248F5",
        cbluedark: "#09bffc",
        csoftbluedark: "#abe3fe",
        csoftpurpledark: "#B39DDB",
        csoftgreendark: "#bafcc5",
        loadingdark: "#262626",
        ////////////////////CARD COLORS///////////////////////
        ctblack: "#0F0F0F",
        cstgray: "#3A3A3A",
        csoftgreen: "#AEF2B4",
        csoftblue: "#DAE3FA",
        csoftorange: "#FAD9C7",
        cbwhite: "#D7D7D7",
      },
      fontSize: {
        cxl: "56px",
      },
      animation: {
        "spin-fast": "spin 0.8s linear infinite",
      },
    },
  },
  variants: {
    boxShadow: [
      "responsive",
      "group-hover",
      "focus-within",
      "hover",
      "focus",
      "dark",
    ],
    extend: {},
  },
  plugins: [],
};
