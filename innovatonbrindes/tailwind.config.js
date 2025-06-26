/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', 
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        verde: '#80BC04', 
        'branco': '#FFFFFF',
        'verdeToast': '#16A34A',
        'verdeEscuroHover': '#16A34A',
        'verdeEscuro': '#144015',
        
      },
      keyframes: {
        'slide-in': {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        'slide-in': 'slide-in 0.3s ease forwards',
      },
    },
  },
  plugins: [],
}
