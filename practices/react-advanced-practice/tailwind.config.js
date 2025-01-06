/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4fd1c5",
        dark: "#2d3748",
        input: "#e2e8f0",
        base: "#a0aec0",
        gray: "#718096",
        active: "#48bb78",
        inactive: "#cbd5e0",
        danger: "#e53e3e",
        overlay: "rgba(0, 0, 0, 0.5)",
      },
      fontFamily: {
        regular: ["Helvetica-Regular"],
        bold: ["Helvetica-Bold"],
      },
      fontSize: {
        xs: ["12px", { lineHeight: "18px" }],
        sm: ["14px", { lineHeight: "20px" }],
        lg: ["18px", { lineHeight: "25px" }],
        xl: ["22px", { lineHeight: "30px" }],
      },
      lineHeight: {
        base: "18px",
        md: "25px",
      },
      borderRadius: {
        base: "12px",
      },
    },
  },
  plugins: [],
};
