/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  screens:{
    sm:"390px",
    md:"830px",
    lg: "1410px",
    xl: '1920px',
  },
 
  theme: {
    extend: {
      colors:{
        secondary: "#168570",
        white: "#FFFFFF",
        primary: "#1B1B1B"
      },
      fontSize:{
        xs:["14px", "19.6px"],
        sm: ["16px", "22.4px"],
        xl: ["50px", "60px"],
        "2xl": ["80px", "90px"],
      }
    },
    fontFamily:{
      raleway:[ "Raleway", "sans-serif"],
      lora:[ "Lora", "serif"]
    }
  },
  plugins: []
};
