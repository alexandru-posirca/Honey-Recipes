/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "yellow": {
        200 : "#fff3ce",
        400: "#ffc40a"
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
