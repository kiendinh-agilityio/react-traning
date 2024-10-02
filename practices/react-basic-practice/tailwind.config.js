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
        gray: '#718096',
        active: '#48bb78',
        inactive: '#cbd5e0',
        danger: '#e53e3e',
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
        '.gradient-border': {
          'border-bottom': '1px',
          'border-style': 'solid',
          'border-image-source':
            'linear-gradient(90deg, rgba(224, 225, 226, 0) 0%, #E0E1E2 49.52%, rgba(224, 225, 226, 0.15625) 99.04%)',
          'border-image-slice': '1',
        },
      });
    }),
  ],
};
