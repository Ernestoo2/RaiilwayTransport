/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
   "./src/**/*.{js,jsx,ts,tsx}",'./pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}', 
  ],
  theme: {
    extend: {
     
      colors: {
        primary: '#1D4ED8', // Custom primary color
        secondary: '#9333EA', // Custom secondary color
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Custom font
      },
      screens: {
        'sm': "640px", // For phones or small devices
        'md': "768px", // For tablets or medium devices
        'lg': "1024px", // For desktops or large devices
        'xl': "1280px", // For extra-large screens
        '2xl': "1536px",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')
  ],
};