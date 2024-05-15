const { title } = require('process');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundDefault: '#313131'
      },
      fontFamily:{
        "orbitron":["Orbitron", "sans-serif"]
      }
    },
    duration: {
      fast: "1s",
      normal: "3s",
      slow: "6s"
    }
  },
  plugins: [
    require("@designbycode/tailwindcss-text-glitch")
  ],
}

