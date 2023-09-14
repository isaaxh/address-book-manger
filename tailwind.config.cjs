/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,tsx,jsx,ts}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        league: ["League Spartan", "sans-serif"],
      },
      colors: {
        primary: "#f5f7f9",
        secondary: "#001d3d",
        secondaryDark: "#000814",
        secondaryLight: "#003566",
        accent: "#ffc300",
        accentLight: "#ffd60a",
      },
    },
  },
  plugins: [],
};
