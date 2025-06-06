module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'dark',
    'dark:bg-gray-900',
    'dark:text-white',
    'dark:bg-blue-900',
    'dark:border-gray-600',
    'dark:bg-gray-800',
    'dark:text-gray-300',
    'dark:hover:text-blue-400',
    'dark:text-gray-400'
  ],
  theme: {
    extend: {
      fontFamily: {
        jp: ['"Noto Sans JP"', 'sans-serif'],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
