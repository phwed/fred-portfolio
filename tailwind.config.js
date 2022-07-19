/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Josefin Sans", "sans-serif"],
      serif: ["Josefin Sans", "serif"],
    },

    extend: {
      colors: {
        lighterGold: '#FFF8F2',
        lightGold: "#FFEED9",
        gold: "#FFE5CC",
        darkGold: "#FFDDBF",
        goldAlpha: "rgba(255, 225, 187, .5)",
        blue: "#1fb6ff",
        purple: "#7e5bef",
        pink: "#ff49db",
        orange: "#ff7849",
        green: "#13ce66",
        yellow: "#ffc82c",
        "gray-dark": "#273444",
        gray: "#8492a6",
        "gray-light": "#d3dce6",
      },
    },
  },
  plugins: [],
};
