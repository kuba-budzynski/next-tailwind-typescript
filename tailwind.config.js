module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
      },
      spacing: {
        128: '32rem',
        144: '36rem',
        164: '42rem',
      },
      maxWidth: {
        '8xl': '90rem',
        '9xl': '100rem',
        '10xl': '108rem',
        'screen-3xl': '1920px',
      },
      fontSize: {
        '2xs': '.6rem',
        '3xs': '.5rem',
        '4xs': '.4rem',
        '8xl': '6rem',
      },
      screens: {
        xxl: '1920px',
        xxxl: '2560px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio'), require('@tailwindcss/line-clamp')],
}
