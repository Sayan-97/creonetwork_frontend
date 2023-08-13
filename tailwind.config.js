/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {

      // Screens
      screens: {
        'sm': '480px',
        'md': '760px',
        'lg': '1024px',
        'xl': '1600px'
      },

      // Font Family
      fontFamily: {
        Outfit: ['Outfit', 'sans-serif']
      },

      // Font Weight
      fontWeight: {
        'customNormal': '400',
        'customMedium': '500',
        'customSemibold': '600',
        'customBold': '700'
      },

      // Border Radius
      borderRadius: {
        'customSmall': '7px',
        'customLarge': '10px'
      },

      // Colors
      colors: {
        'primaryBg': '#0A0A0A',
        'primaryColor': '#15DBFF',
        'secondaryColor': '#A514FC',
        'divideColor': '#616161',
        'textGrayColor': '#9E9E9E',
        'accentColor': '#171717'
      },

      // Color Gradient
      backgroundImage: {
        'primaryGradient': 'linear-gradient(96.99deg, #15DBFF 0%, #A514FC 104.31%)'
      },

    },
  },
  plugins: [],
}

