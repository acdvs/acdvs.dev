const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    fontFamily: {
      montserrat: ['Montserrat', ...defaultTheme.fontFamily.sans],
      body: ['Open Sans', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      screens: {
        xs: '450px',
      },
    },
  },
  plugins: [],
};
