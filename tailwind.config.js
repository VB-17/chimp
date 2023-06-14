/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#282828",
          600: "#181818",
          700: "#0f0f0f",
        },
        secondary: {
          500: "#FFFDB4",
          700: "#FFFA59",
        },
      },
    },

    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      montserrat: ["Montserrat", "sans-serf"],
      grifter: ["Grifter", "sans-serf"],
    },
  },
  plugins: [],
};
