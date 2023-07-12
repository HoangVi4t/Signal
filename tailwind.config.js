const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    },
    fontFamily:{
      inter:['Inter', 'sans-serif'],
    },
    // rotate:{
    //   '22.5':'22.5'
    // }
  },
  plugins: [
      require('@tailwindcss/forms'),
      require('autoprefixer'),
  ],

}