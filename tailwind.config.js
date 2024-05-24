import { transform } from "framer-motion";

const flowbite = require("flowbite-react/tailwind");
const svgToDataUri = require("mini-svg-data-uri");
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  darkMode: "class",
  theme: {
    extend: {
      // animation: {
      //   scroll:
      //     "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      // },
    },
    // keyframes: {
    //   scroll: {
    //     to: {
    //       transform: "translate(calc(-50% -0.5rem))",
    //     },
    //   },
    // },
  },
  plugins: [
    flowbite.plugin(),
    addVariablesForColors,
    
  ],
};
