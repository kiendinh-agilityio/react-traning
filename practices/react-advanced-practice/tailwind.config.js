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
        base: '#a0aec0',
        gray: '#718096',
        active: '#48bb78',
        inactive: '#cbd5e0',
        danger: '#e53e3e',
        overlay: 'rgba(0, 0, 0, 0.5)',
      },
      fontFamily: {
        regular: ['Helvetica-Regular'],
        bold: ['Helvetica-Bold'],
      },
      fontSize: {
        xs: ['12px', { lineHeight: '18px' }],
        sm: ['14px', { lineHeight: '20px' }],
        lg: ['18px', { lineHeight: '25px' }],
        xl: ['22px', { lineHeight: '30px' }],
      },
      lineHeight: {
        base: '18px',
        md: '25px',
      },
      borderRadius: {
        base: '12px',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.primary': {
          backgroundColor: '#4fd1c5',
          border: '1px solid #4fd1c5',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#38b2ac',
          },
        },
        '.secondary': {
          backgroundColor: 'transparent',
          border: '1px solid #4fd1c5',
          color: '#4fd1c5',
          '&:hover': {
            backgroundColor: 'rgba(79, 209, 197, 0.1)',
            color: '#38b2ac',
          },
        },
        '.tertiary': {
          backgroundColor: 'transparent',
          color: '#a0aec0',
          border: '1px solid #a0aec0',
          '&:hover': {
            backgroundColor: 'rgba(160, 174, 192, 0.1)',
            borderColor: '#718096',
            color: '#718096',
          },
        },
        '.danger': {
          backgroundColor: '#e53e3e',
          color: '#fff',
          border: '1px solid #e53e3e',
          '&:hover': {
            backgroundColor: '#c53030',
            borderColor: '#c53030',
          },
        },
        '.link': {
          width: '185px',
          border: '1px solid #4fd1c5',
          backgroundColor: '#fff',
          color: '#2d3748',
          padding: '10px 48px',
          borderRadius: '12px',
          fontSize: '10px',
          '&:hover': {
            backgroundColor: '#f7fafc',
          },
        },
        '.transparent': {
          display: 'flex',
          'align-items': 'center',
          'border-style': 'none',
          backgroundColor: 'transparent',
          padding: '0',
          gap: '2px',
        },
        '.download': {
          width: '150px',
          border: '1px solid #313860',
          background: 'linear-gradient(90deg, #313860 0%, #151928 100%)',
          color: '#fff',
          padding: '10px 30px',
          borderRadius: '34px',
          fontSize: '10px',
          '&:hover': {
            background: 'linear-gradient(90deg, #151928 0%, #313860 100%)',
          },
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
