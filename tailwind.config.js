module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#25272d',
        primary: '#646cb4',
        secondary: '#9ba1b0'
      },
      dropShadow: {
        'card': '0 12px 18px #10111f',
      },
      fontFamily: {
        'sans-hack': ['Hack', '"Open Sans"', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Roboto', '"Helvetica Neue"'],
      },
    },
  },
  plugins: [],
}
