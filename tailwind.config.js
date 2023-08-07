/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        logo: ['Borel', 'cursive'],
        serif: ['var(--font-gelasio)'],
        sans:['var(--font-plus-jakarta-sans)'],
        mono:['var(--font-inconsolata)']
      },
    },
  },
  plugins: [],
}
