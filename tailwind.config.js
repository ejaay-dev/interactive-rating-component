/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        overpass: ["Overpass", "sans-serif"],
      },
      colors: {
        "custom-orange": "hsl(25, 97%, 53%)",
        "custom-white": "hsl(0, 0%, 100%)",
        "light-gray": "hsl(217, 12%, 63%)",
        "dark-gray": "hsl(215, 18%, 19%)",
        "grayish-blue": "hsl(218, 21%, 15%)",
        "dark-blue": "hsl(218, 24%, 13%)",
        "very-dark-blue": "hsl(225, 9%, 9%)",
      },
    },
  },
  plugins: [],
}
