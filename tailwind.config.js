/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // 🔹 Add your React source files here
    "./public/index.html"         // 🔹 Include your HTML
  ],
  theme: {
    extend: {
      fontFamily: {
        jp: ['"Noto Sans JP"', 'sans-serif']
      }
    }
  },
  darkMode: 'class', // 🔹 Ensure dark mode works via class
  plugins: []
}
