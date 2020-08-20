module.exports = {
  purge: [],
  theme: {
    typography: {
      default: {
        css: {
          h2: {
            marginTop: '0.35rem',
            marginBottom: '0.2rem',
            fontWeight: 400
          },
          h3: {
            marginTop: '0.35rem',
            marginBottom: '0.2rem',
            fontWeight: 400
          },
          img: {
            marginTop: 0,
            marginBottom: 0
          },
          ul: {
            marginTop: 0,
            marginBottom: 0
          }
        }
      }
    },
    extend: {},
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/custom-forms'),
  ],
}
