/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4fd1c5',
        dark: '#2d3748',
      },
      fontFamily: {
        helveticaRegular: ['Helvetica-Regular'],
        helveticaBold: ['Helvetica-Bold'],
      },
    },
  },
  plugins: [],
};
