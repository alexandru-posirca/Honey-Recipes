/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "yellow": {
        100 : "#fff3ce",
        200: "#fce69e",
        400: "#e8b307"
      }
    },
    screens: {
      md: "768px",
      lg: "1024px",
      xl: "1440px"
    },
    extend: {
    },
  },
  plugins: [],
}
