/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./**/*.html', "components/*.js"],
  darkMode: false, 
  theme: {
    extend: {
      colors: {
        primary: '#ff0000',
      },
      spacing: {
        massive: '100rem',
      },
    },
  },
  variants: {
    extend:{},
  },
  plugins: [],
}

