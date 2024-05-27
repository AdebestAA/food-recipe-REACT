/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        "bgColor":"#ffffff",
        "cardColor":"#dfdfdf",
        "textColor":"#1a1a1a",
        "anotherColor":"#666666"
      }
    },
    screens:{
      xxl:"1100px",
      xl:"900px",
      lg:"750px",
      md:"600px",
      sm:"480px",
      xsm:"320px"
    }
  },
  plugins: [],
};
