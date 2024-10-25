/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}", // Ensure this captures all relevant files
  ],
  darkMode: 'class', // Enables dark mode based on class
  theme: {
    extend: {},
  },
  plugins: [],
}
