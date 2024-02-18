/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      xs: '320px',
      sm: '560px',
      md: '830px',
      '2md': '1200px',
      lg: '1430px',
      xl: '1920px'
    },
    extend: {
      colors: {
        secondary: '#168570',
        white: '#FFFFFF',
        primary: '#1B1B1B'
      },
      fontSize: {
        xs: ['15px', '19.6px'],
        sm: ['16px', '22.4px'],
        lg: ['50px', '60px'],
        xl: ['80px', '90px']
      }
    },
    fontFamily: {
      raleway: ['Raleway', 'sans-serif'],
      lora: ['Lora', 'serif']
    }
  },
  plugins: []
};
