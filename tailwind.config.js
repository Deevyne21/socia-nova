/** @type {import('tailwindcss').Config} */
export default {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#0B1E1D",
        secondary: "#F9FAFB",
        accent: "#73cb4e",
        dark: "#1E1E1E",
        light: "#F8F9FA",
        // authenticity: "#E8F5E9",
        // creativity: "#E3F2FD",
        // proven: "#FFF3E0",
        // scalable: "#F3E5F5",
        // authenticityiconbg: "#73cb4e",
        // creativityiconbg: "#26A69A",
        // proveniconbg: "#651FFF",
        // scalableiconbg: "#FF4081",
        // resulticonbg: "#B3E5FC",
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
