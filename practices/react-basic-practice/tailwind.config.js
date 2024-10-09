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
        overlay: 'rgba(0, 0, 0, 0.5)',
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
        '.primary:hover': {
          backgroundColor: '#38b2ac',
        },
        '.secondary': {
          backgroundColor: 'transparent',
          color: '#4fd1c5',
        },
        '.secondary:hover': {
          backgroundColor: 'rgba(79, 209, 197, 0.1)',
          color: '#38b2ac',
        },
        '.tertiary': {
          backgroundColor: 'transparent',
          color: '#a0aec0',
          border: '1px solid #a0aec0',
        },
        '.tertiary:hover': {
          backgroundColor: 'rgba(160, 174, 192, 0.1)',
          borderColor: '#718096',
          color: '#718096',
        },
        '.danger': {
          backgroundColor: '#e53e3e',
          color: '#fff',
          border: '1px solid #e53e3e',
        },
        '.danger:hover': {
          backgroundColor: '#c53030',
          borderColor: '#c53030',
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
