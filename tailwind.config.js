/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jetbrains: ['"JetBrains Mono"', "monospace"]
      },
      fontWeight: {
        jetbrainsRegular: 400,
        jetbrainsSemibold: 600,
        jetbrainsBold: 700,
        jetbrainsBlack: 900,
      }
    },
  },
  plugins: [require('tailwind-scrollbar')],
}