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
    screens: {

      '350px':'350px',
      'sm': '599px',
      '700px': '700px',
      'md': '768px',
      '950px': '950px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}

