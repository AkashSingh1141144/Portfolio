/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'nest-hub': '1024px', // Custom breakpoint for Nest Hub
      },
    },
  },
  base: "Portfolio",
  plugins: [],
}

