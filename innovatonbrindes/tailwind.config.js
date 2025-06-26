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
        branco: '#FFFFFF',
        verdeToast: '#16A34A',
        verdeEscuroHover: '#16A34A',
        verdeEscuro: '#144015',
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
  plugins: [
    function({ addComponents }) {
      addComponents({
        '.custom-checkbox': {
          appearance: 'none',
          width: '1.12rem',     
          height: '1.14rem',
          borderWidth: '2px',
          borderColor: '#FFFFFF',
          borderRadius: '4px',   
          backgroundColor: 'transparent',
          cursor: 'pointer',
          position: 'relative',
          transition: 'background-color 0.2s ease',

          '&:checked::after': {
            content: "''",
            position: 'absolute',
            left: '5px',
            top: '2px',
            width: '5px',
            height: '10px',
            border: 'solid #FFFFFF',  
            borderWidth: '0 2px 2px 0',
            transform: 'rotate(45deg)',
          },
        },
      })
    }
  ],
}
