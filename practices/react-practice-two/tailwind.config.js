/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#42454a',
        secondary: '#fafafa',
        light: '#fff',
      },
      fontFamily: {
        light: ['Ubuntu-light'],
        regular: ['Ubuntu-Regular'],
        medium: ['Ubuntu-Medium'],
        bold: ['Ubuntu-Bold'],
      },
    },
  },
  plugins: [],
};
