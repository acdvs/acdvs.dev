/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      darkBlue: '#030b16',
      mediumBlue: '#0a58ca',
      blue: '#354ffe',
      lightBlue: '#33b4f7',
      black: '#000000',
      white: '#ffffff',
      transparent: 'transparent',
      darkTrans: '#ffffff55',
      darkerTrans: '#ffffff11',
    },
    fontFamily: {
      montserrat: ['Montserrat', ...defaultTheme.fontFamily.sans],
      rubik: ['Rubik', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
