/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./service_images/*.{html,js}", "./works/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#D4AF37',
        accent: '#C62828',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(180deg, #ffffff 0%, #f8fafc 50%, #f1f5f9 100%)',
      }
    },
  },
  plugins: [],
}
