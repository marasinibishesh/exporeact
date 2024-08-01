/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./Apps/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ['YourCustomFont', 'sans-serif'], // Replace 'YourCustomFont' with the actual font name
      },
    },
  },
  plugins: [],
}

