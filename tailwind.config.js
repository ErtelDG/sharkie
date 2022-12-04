/** @type {import('tailwindcss').Config} */
module.exports = {
   purge:[
      './public/*.html'
   ],
   content: ["./src/**/*.{html,js}"],
   theme: {
      extend: {
         fontFamily: {
            sans: ["MyWebFont", "Arial", "Helvetica", "sans - serif"],
         },
         backgroundImage: {
            sharkie: "url('img/bg_sharkie.jpg')",
            youWin: "url('img/6.Botones/TryAgain/YouWIn.png')",
         },
         colors: {
            sharkieBlue: "#3EBAD3",
         },
      },
   },
   plugins: [],
};
