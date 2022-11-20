/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{html,js}"],
   theme: {
      extend: {
         fontFamily: {
            sans: ["MyWebFont", "Arial", "Helvetica", "sans - serif"],
         },
      },
   },
   plugins: [],
};
