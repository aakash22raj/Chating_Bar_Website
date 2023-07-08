/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('../image/Rec.jpeg')",
      },
  }
  },
  plugins: [],
}
