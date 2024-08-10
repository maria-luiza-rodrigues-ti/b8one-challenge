/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        "grayscale-200": "#F2F3F6",
        "grayscale-300": "#E9EBEE",
        "grayscale-600": "#B5B5B6",
        "grayscale-700": "#8F8F8F",
        "grayscale-900": "#1C1C1C",
        "pink-b8one-100": "#FEE5EC",
        "red-b8one-500": "#DA4B4F",
        "green-b8one-400": "#40B25C",
        "green-b8one-600": "#1C6C3E",
      }
    },
  },
  plugins: [],
}

