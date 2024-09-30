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
      zIndex: {
        md: '1000',
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg) scale(0.8)' },
          '50%': { transform: 'rotate(360deg) scale(1.2)' },
          '100%': { transform: 'rotate(720deg) scale(0.8)' },
        },
        ball1: {
          '0%': { boxShadow: '30px 0 0 #4fd1c5' },
          '50%': {
            boxShadow: '0 0 0 #4fd1c5',
            marginBottom: '0',
            transform: 'translate(15px, 15px)',
          },
          '100%': { boxShadow: '30px 0 0 #4fd1c5', marginBottom: '10px' },
        },
        ball2: {
          '0%': { boxShadow: '30px 0 0 #fff' },
          '50%': {
            boxShadow: '0 0 0 #fff',
            marginTop: '-20px',
            transform: 'translate(15px, 15px)',
          },
          '100%': { boxShadow: '30px 0 0 #fff', marginTop: '0' },
        },
      },
      animation: {
        rotate: 'rotate 0.6s infinite',
        ball1: 'ball1 0.75s infinite',
        ball2: 'ball2 0.75s infinite',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, theme }) {
      addUtilities({
        '.loading-container': {
          display: 'block',
          position: 'fixed',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          zIndex: theme('zIndex.md'),
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        '.loading-indicator': {
          position: 'absolute',
          left: '50%',
          top: '50%',
          height: '50px',
          width: '50px',
          animation: theme('animation.rotate'),
        },
        '.loading-indicator:before': {
          content: "''",
          display: 'block',
          borderRadius: '50%',
          height: '20px',
          width: '20px',
          marginBottom: '10px',
          backgroundColor: '#fff',
          boxShadow: '30px 0 0 #4fd1c5',
          animation: theme('animation.ball1'),
        },
        '.loading-indicator:after': {
          content: "''",
          display: 'block',
          borderRadius: '50%',
          height: '20px',
          width: '20px',
          backgroundColor: '#4fd1c5',
          boxShadow: '30px 0 0 #fff',
          animation: theme('animation.ball2'),
        },
        '.gradient-border': {
          'border-width': '1px',
          'border-style': 'solid',
          'border-image-source':
            'linear-gradient(90deg, rgba(224, 225, 226, 0) 0%, #E0E1E2 49.52%, rgba(224, 225, 226, 0.15625) 99.04%)',
          'border-image-slice': '1',
        },
      });
    }),
  ],
};
