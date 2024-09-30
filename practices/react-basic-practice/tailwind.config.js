/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4fd1c5',
        dark: '#2d3748',
        input: '#e2e8f0',
        sidebar: '#a0aec0',
      },
      fontFamily: {
        helveticaRegular: ['Helvetica-Regular'],
        helveticaBold: ['Helvetica-Bold'],
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.primary': {
          backgroundColor: '#4fd1c5',
          color: '#fff',
        },

        '.secondary': {
          backgroundColor: 'transparent',
          color: '#4fd1c5',
        },
      });
    }),
  ],
};
