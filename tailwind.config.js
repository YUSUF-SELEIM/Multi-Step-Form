/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', "./node_modules/flowbite/**/*.js"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
  purge: ['*.html']

}

