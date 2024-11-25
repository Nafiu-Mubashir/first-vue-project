/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        // sans: ["Popins", "sans-serif"]
      },
      // gridTemplateColumns: {
      //   "70/30": "70%, 28%"
      // }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

