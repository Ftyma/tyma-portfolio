/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: " #315637",

        secondary: " #c3d1c6",
        pastelBlue: "#d7eef2",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        blue: "#0e2f44",
        lightBlue: "#7cb5d3",
        sage: "#89a384",
        brown: "#A9826E",
        pink: "#C46F98",
        lightPink: "#E5C0DD",
        lightBrown: "#DDD5AE",
      },
      fontFamily: {
        unbounded: ["Unbounded", "cursive"],
        comfortaa: ["Comfortaa", "cursive"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
});
