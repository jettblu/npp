/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        detourPrimaryBlue: "#41496A",
        detourPrimaryYellow: "#ECBE44",
        detourPrimaryLight: "#F0E5CD",
        detourPrimaryDark: "#171A26",
        detourPrimaryWhite: "#FFFFFF",
        detourSecondaryDark: "#272B3F",
        detourSecondaryBlue1: "#5D6898",
        detourSecondaryBlue2: "#747EAA",
        detourSecondaryBlue3: "#8797AF",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
