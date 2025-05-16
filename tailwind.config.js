/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D8CA0A',
        dark: '#000000',
        light: '#F4F4F4',
        background: '#FFFFFF',
      },
      fontFamily: {
        heading: ['Coterie', 'Georgia', 'serif'],
        body: ['Inter', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


