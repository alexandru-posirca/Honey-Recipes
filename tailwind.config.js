/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      yellow: {
        100: "#fff3ce",
        200: "#fce69e",
        400: "#e8b307",
      },
      gray: {
        100: "#939393",
        200: "#444444"
      },
      white: "#ffffff"
    },
    screens: {
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    container: {
      padding: "1rem",
    },
    extend: {},
  },
  plugins: [],
};
