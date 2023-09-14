/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js,tsx,jsx,ts}"],
  theme: {
    extend: {
      fontFamily: {
        league: ["League Spartan", "sans-serif"],
      },
    },
  },
  plugins: [],
};
