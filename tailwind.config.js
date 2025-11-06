/** @type {import('tailwindcss').Config} */
export default {
  content: ["./public/**/*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#0B1E1D",
        secondary: "#F9FAFB",
        accent: "#73cb4e",
        dark: "#1E1E1E",
        light: "#F8F9FA",
        statsrating: "#FFD700",
      },
      fontFamily: {
        heading: ["Sarabun", "sans-serif"],
        body: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
