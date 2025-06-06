/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './public/index.html',
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
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
