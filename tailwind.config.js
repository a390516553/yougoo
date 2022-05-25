module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'seo': '#fed82b',
        'title': '#0f8c6f',
        'qus': '#FED72B',
        'h1Color': '#0f8c6f',
        'butBg': '#FFDE56',
        'from': '#53CDBD',
        'to': '#6EB6D1',
        'conbg': '#EDFBFC'
      }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
