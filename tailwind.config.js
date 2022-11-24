/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  mode: "jit",
  purge: [
    "./src/pages/**/*.tsx",
    "./src/common/**/*.tsx",
    "./src/modules/**/*.tsx",
  ],
  content: [
    "./src/pages/**/*.tsx",
    "./src/common/**/*.tsx",
    "./src/modules/**/*.tsx",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        cards: "repeat(auto-fit, minmax(300px, 1fr))",
      },
      fontSize: {
        title: [
          "2rem",
          {
            lineHeight: "36px",
            fontWeight: "900",
          },
        ],

        subTitle: [
          "0.8rem",
          {
            letterSpacing: "7.5px",
            lineHeight: "24px",
            fontWeight: "500",
          },
        ],
      },
    },
    fontFamily: {
      Frank: ["Frank Ruhl Libre", "sans-serif"],
      Inter: ["Inter", "sans-serif"],
      Jakarta: ["Plus Jakarta Sans", "sans-serif"],
      Orya: ["Noto Serif Oriya", "serif"],
    },
  },

  plugins: [],
};
