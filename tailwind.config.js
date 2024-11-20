/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Niconne', 'sans-serif'],
        freehand: ['Freehand', 'cursive'],
        garamond: ['EB Garamond', 'serif'],
      },
      fontSize: {
        "20": "20px",
      },
      colors: {
        foundation: "var(--theme-foundation)",
        primary: "var(--theme-primary)",
        secondary: "var(--theme-secondary)",
        yellow: "var(--theme-yellow)",
      }
    },
  },
  plugins: [],
};