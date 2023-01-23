const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./pages/**/*.tsx', './components/**/*.tsx', './layouts/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        base: {
          0: '#fff',
          50: '#f5f5f5',
          100: '#ebebeb',
          150: '#ddd',
          200: '#d0d0d0',
          250: '#c3c3c3',
          300: '#b5b5b5',
          350: '#a8a8a8',
          400: '#9a9a9a',
          450: '#8d8d8d',
          500: 'grey',
          550: '#727272',
          600: '#656565',
          650: '#575757',
          700: '#4a4a4a',
          750: '#3c3c3c',
          800: '#2f2f2f',
          850: '#222',
          900: '#141414',
          950: '#070707',
          1000: '#000'
        }
      },
      fontFamily: {
        sans: ['var(--font-body)'],
        mono: ['var(--font-mono)', ...fontFamily.mono]
      },

      container: {
        center: true
      }
    }
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: 'min(100% - 2em, 60em)'
        }
      });
    }
  ]
};
