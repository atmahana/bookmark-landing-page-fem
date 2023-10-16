/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Rubik", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        primary: "#5368df",
        secondary: "#9194a1",
        background: "#252b46",
        accent: "#fa5757",
      },
      fontSize: {
        "2xs": "0.8125rem", //13px
        "2sm": "0.9375rem", //15px
        "2.5xl": "1.625rem", //26px
        "3.5xl": "2rem", //32px
      },
      letterSpacing: {
        "0.5%": "-0.015rem",
        "1.5%": "0.01875rem",
        "2%": "0.015rem",
        "3%": "0.02625rem;",
        "10%": "0.08125rem",
        "25.5%": " 0.19125rem",
        "38.5%": "0.31281rem",
        "-1%": "-0.01125rem",
        "-1.5%": "-0.01406rem",
        "-3%": "-0.03rem",
        "-3.5%": "-0.03938rem",
      },
    },
  },
  plugins: [],
};
