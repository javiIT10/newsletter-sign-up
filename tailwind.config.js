/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./assets/js/app.js", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        /* ### Primary */
        tomato: "hsl(4, 100%, 67%)",

        /* ### Neutral */
        "dark-slate-grey": "hsl(234, 29%, 20%)",
        "charcoal-grey": "hsl(235, 18%, 26%)",
        grey: "hsl(231, 7%, 60%)",
        white: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
