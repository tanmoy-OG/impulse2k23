/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        linear: 'animate 8s linear infinite'
      },
      keyframes: {
        linear: {
          "0%": {
            transform: "background-position: 0%"
          },
          "100%": {
            transform: "background-position: 50%"
          }
        }
      }
    },
  },
  plugins: [],
}

