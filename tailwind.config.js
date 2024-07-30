const { addDynamicIconSelectors } = require('@iconify/tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      // fontSize: {
      //   sm: ['20px', '20px'],
      //   base: ['22px', '24px'],
      //   lg: ['26px', '28px'],
      //   xl: ['30px', '32px'],
      //   "2xl": ['36px', '32px'],
      //   "3xl": ['42px', '32px'],
      // },
  
    },
    colors: {
      transparent: 'transparent',
      'primary': '#0784B5',
      'secondary': '#39ACE7',
      'darkf': '#192428',
      'darks': '#2C363A',
      'lightf': '#F0F4F8',
      'lights': '#BECEDD',
      'black': '#000',
      'white': '#fff',
    },
  },
  plugins: [
    addDynamicIconSelectors(),
  ],
}

