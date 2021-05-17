module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class',
  theme: {
    customForms: theme => ({
      default: {
        input: {
          borderColor: theme("colors.transparent"),
          borderRadius: theme("borderRadius.none"),
          backgroundColor: theme("colors.gray.100"),
          "&:focus": {
            backgroundColor: theme("colors.white"),
            boxShadow: theme("boxShadow.none"),
            borderColor: theme("colors.red.500"),
          },
        },
        select: {
          borderRadius: theme("borderRadius.none"),
          "&:focus": {
            boxShadow: theme("boxShadow.none"),
            borderColor: theme("colors.red.500"),
          },
        },
        checkbox: {
          width: theme("spacing.6"),
          height: theme("spacing.6"),
        },
      },
    }),
    extend: {
      colors: {
        'brandBlack': '#272727',
        gray: {
          100: "#f5f5f5",
          200: "#eeeeee",
          300: "#e0e0e0",
          400: "#bdbdbd",
          500: "#9e9e9e",
          600: "#757575",
          700: "#525252",
          800: "#414141",
          900: "#313131",
        },
        red: {
          500: "#cb3740",
        }
      },
      fontFamily: {
        sans: ['Open Sans', 'system-ui', 'sans-serif']
      },
      inset: {
        menu: "178px",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
