/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0EA5E9',     // Sky-500
        background: '#F8FAFC',  // Gray-50
        accent: '#38BDF8',      // Sky-400
        highlight: '#F472B6',   // Pink-400
        text: '#1E293B',        // Gray-900
      },
    },
  },
  plugins: [],
}


