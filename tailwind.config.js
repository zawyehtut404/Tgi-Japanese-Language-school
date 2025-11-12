/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        padauk: ['Padauk', 'sans-serif'], // <-- ဒီစာကြောင်းကို ထပ်ထည့်ပါ
      },
    },
  },
  plugins: [],
}