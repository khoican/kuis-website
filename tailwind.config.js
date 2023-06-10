/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        'lapizBlue': "#33658A",
        'carolinaBlue': "#86BBD8",
        'mossGreen': "#758E4F",
        'hunyadiYellow': "#F6AE2D",
        'pentatonOrange': "#F26419"
      },
      fontFamily: {
        'Poppins': ["Poppins"]
      },
      dropShadow: {
        'btn': "5px 5px 0 rgba(0,0,0,0.5)",
        'hover': "5px 10px 0 rgba(0,0,0,0.5)"
      }
    },
  },
  plugins: [],
}

