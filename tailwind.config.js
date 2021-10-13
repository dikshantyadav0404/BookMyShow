module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        navCol: 
        {
          50: '#efeffd',
          100: '#d0d3e4',
          200: '#b2b5cd',
          300: '#9397b8',
          400: '#757aa3',
          500: '#5b6089',
          600: '#464b6b',
          700: '#32354d',
          750: '#2B3148',
          800: '#1d2030',
          900: '#070b16',
        },
        movie:
        {
          50: "#333333"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
