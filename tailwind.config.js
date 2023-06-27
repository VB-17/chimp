/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          400: "#acacac",
          500: "#282828",
          600: "#181818",
          700: "#0f0f0f",
          800: "#070707",
        },
        secondary: {
          500: "#FFFDB4",
          700: "#FFFA59",
        },
      },

      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        "marquee-infinite": "marquee 25s linear infinite",
      },
    },

    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      montserrat: ["Montserrat", "sans-serf"],
      grifter: ["Grifter", "sans-serf"],
      sourceSerif: ["Source serif", "serif"],
    },
  },
  plugins: [],
};
