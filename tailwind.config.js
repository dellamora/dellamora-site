/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  mode: "jit",
  purge:[
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
  extend: {},
  fontFamily: {
    Frank: ["Frank Ruhl Libre", "sans-serif"],
    Inter: ["Inter", "sans-serif"],
    Jakarta: ["Plus Jakarta Sans", "sans-serif"],
    Orya: ['Noto Serif Oriya', 'serif']
  },
},

plugins: [],
}
