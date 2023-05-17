/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backColor: '#0E1220',
        primary: '#00CB51',
        primary_20: '#B2DCC6',
        primary_50: '#62C498'
        // secondary: colors.yellow,
        // neutral: colors.gray,
      }
    },
  },
  plugins: [],
}