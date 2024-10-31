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
      fontSize: {
        xs: ['14px', '16px'],
        sm: ['16px', '18px'],
        base: ['20px', '28px'],
        md: ['22px', '34px'],
        lg: ['50px', '60px'],
        xl: ['90px', '95px'],
      },
    },
  },
  plugins: [],
};
