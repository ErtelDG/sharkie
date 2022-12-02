/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{html,js}"],
   theme: {
      extend: {
         fontFamily: {
            sans: ["MyWebFont", "Arial", "Helvetica", "sans - serif"],
         },
         backgroundImage: {
            "sharkie": "url('img/bg_sharkie.jpg')",
            
         },
      },
   },
   plugins: [],
};
