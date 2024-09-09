const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    colors: {
      darkBlue: '#030b16',
      mediumBlue: '#0a58ca',
      blue: '#354ffe',
      lightBlue: '#33b4f7',
      black: '#000000',
      white: '#ffffff',
      transparent: 'transparent',
      darkTrans1: '#ffffff77',
      darkTrans2: '#ffffff11',
    },
    fontFamily: {
      montserrat: ['Montserrat', ...defaultTheme.fontFamily.sans],
      body: ['Open Sans', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      borderWidth: {
        1: '1px',
      },
      screens: {
        xs: '450px',
      },
    },
  },
  plugins: [],
};
