/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'navy': '#1D3557',
        'cool-gray': '#A8A9AD',
        'sky-blue': '#4DD0E1',
        'soft-green': '#81C784',
        'off-white': '#F5F5F5',
        // Semantic color palette
        'primary': '#164863',      // Dark blue
        'secondary': '#427D9D',    // Medium blue
        'accent': '#9BBEC8',       // Light blue
        'muted': '#DDF2FD',        // Pale blue
        // Legacy colors for backward compatibility
        'dark-blue': '#164863',
        'medium-blue': '#427D9D',
        'light-blue': '#9BBEC8',
        'pale-blue': '#DDF2FD',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'sans': ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 