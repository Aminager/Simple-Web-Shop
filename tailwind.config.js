/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
      colors: {
        'blue': '#0057AD',
        'blue-light': '#669acd',
        'yellow': '#FBDA0C',
      },
    },
  },
  plugins: [],
}

