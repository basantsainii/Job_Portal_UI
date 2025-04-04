

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      smd: '560px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      keyframes : {
        crosal :{
          '0%' : {transform: 'translateX(100%)'},
          '100%': {transform : 'translateX(0%)'},
        }
      },
      animation: {
        crosal : "crosal 0.5s linear",
      }
    },
  },
  plugins: [],
}

