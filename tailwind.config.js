/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'VeryDarkGray': 'hsl(0, 0%, 17%)',
        'DarkGray': 'hsl(0, 0%, 59%)'
      },
      backgroundImage:{
        "bg-desk": "url('/images/pattern-bg-desktop.png')",
        "bg-mobile": "url('/images/pattern-bg-mobile.png')",
      }
    },
  },
  plugins: [],
}