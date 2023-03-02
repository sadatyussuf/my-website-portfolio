/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        deepBlack: '#0B0C10',
        deepGrey: '#1F2833',
        lightGrey: '#C5C6C7',
        lightBlue: '#66FCF1',
        greyishBlue: '#45A29E'
      }
    },
  },
  plugins: [],
}
