/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Montserrat']
    },
    extend: {
      backgroundImage: {
        'login-bg': "url('assets/images/backgroundImg.jpg')",
      },
      animation: {
        bounce200: 'bounce 1s infinite 200ms',
        bounce400: 'bounce 1s infinite 400ms',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

