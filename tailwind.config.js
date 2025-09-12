/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        customGray: "rgba(54, 54, 54, 0.18)",
        darkCyan: "#28807D",
        darkGreen: "#22574D",
        teal: "#1A8482",
        green: "#3AB54B",
        lightGreen: "#8DC73F",
        pear: "#D6DF20",
        white: "#FFFFFF",
        black: "#000000",
      },
      backgroundImage: {
        "donate-gradient":
          "linear-gradient(180deg, rgba(255, 251, 239, 0.00) -5.42%, #FFFBEF 100%)",
      },
    },
    screens: {
      "3xl": "1920px",
      "2xl": "1536px",
      xlg: "1440px",
      xl: "1280px",
      "custom-laptop": "1275px",
      clg: "1100px",
      lg: "1024px",
      md: "786px",
      sm: "556px",
    },
  },
  plugins: [
    
    require("@tailwindcss/line-clamp"),
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".font-lato-thin": {
          fontFamily: '"Lato", sans-serif',
          fontWeight: "100",
        },
        ".font-lato-light": {
          fontFamily: '"Lato", sans-serif',
          fontWeight: "300",
        },
        ".font-lato-regular": {
          fontFamily: '"Lato", sans-serif',
          fontWeight: "400",
        },
        ".font-lato-bold": {
          fontFamily: '"Lato", sans-serif',
          fontWeight: "700",
        },
        ".font-lato-black": {
          fontFamily: '"Lato", sans-serif',
          fontWeight: "900",
        },
        ".font-lato-thin-italic": {
          fontFamily: '"Lato", sans-serif',
          fontWeight: "100",
          fontStyle: "italic",
        },
        ".font-lato-light-italic": {
          fontFamily: '"Lato", sans-serif',
          fontWeight: "300",
          fontStyle: "italic",
        },
        ".font-lato-regular-italic": {
          fontFamily: '"Lato", sans-serif',
          fontWeight: "400",
          fontStyle: "italic",
        },
        ".font-lato-bold-italic": {
          fontFamily: '"Lato", sans-serif',
          fontWeight: "700",
          fontStyle: "italic",
        },
        ".font-lato-black-italic": {
          fontFamily: '"Lato", sans-serif',
          fontWeight: "900",
          fontStyle: "italic",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
      
    }),
   
  ],
};
