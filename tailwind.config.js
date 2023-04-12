/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
    },
    fontSize: {
      xs: "1.2rem", // 12px
      sm: "1.4rem", // 14px
      base: "1.6rem", // 16px
      lg: "1.8rem", // 18px
      xl: "2rem", // 20px
      "2xl": "2.4rem", // 24px
      "3xl": "3.2rem", // 32px
      "4xl": "3.6rem", // 36px
      "5xl": "4.2rem", // 42px
      "6xl": "6rem", // 60px
      "7xl": "6.4rem", // 64px
      "8xl": "9rem", // 96px
      "9xl": "10rem", // 100px
    },
    extend: {
      colors: {
        purple: "#6C63FF",
        pink: "#E44FFC",
      },
      spacing: {
        2: ".2rem",
        4: ".4rem",
        8: ".8rem",
        10: "1rem",
        12: "1.2rem",
        13: "1.3rem",
        14: "1.4rem",
        16: "1.6rem",
        18: "1.8rem",
        20: "2rem",
        24: "2.4rem",
        25: "2.5rem",
        28: "2.8rem",
        30: "3rem",
        32: "3.2rem",
        36: "3.6rem",
        38: "3.8rem",
        40: "4rem",
        42: "4.2rem",
        48: "4.8rem",
        60: "6rem",
        74: "7.4rem",
        90: "9rem",
        100: "10rem",
        120: "12rem",
        190: "19rem",
        200: "20rem",
        240: "24rem",
        250: "25rem",
        280: "28rem",
        288: "28.8rem",
        293: "29.3rem",
        300: "30rem",
        340: "30.4rem",
        350: "35rem",
        400: "40rem",
        408: "40.8rem",
        410: "41rem",
        413: "41.3rem",
        450: "45rem",
        500: "50rem",
        600: "60rem",
        620: "62rem",
        650: "65rem",
        623: "62.3rem",
        920: "92rem",
        1280: "128rem",
      },
    },
  },
  plugins: [],
};
