// / @type {import('tailwindcss').Config} */
module.exports = {
  content: ["/public//*.{html,js}", 'index.html'],
  theme: {
    extend: {
      backgroundColor: {
        bodyColor: '#FEF4F4',
        navbarColor: '#FEF4F4',
        buttonColor: '#FF1616',
        redColor: '#FF1616',
        buttonColorHover: '#CF0F0F',
        buttonColorHoverRed: '#FF1616',
        whiteColor: '#fff',
        sectionColorBlue: '#252E56',
        colorMenu: '#4C4C4C',
      },
      borderColor: {
        inpBorder: '#DEE0E6',
        borderAll: '#767676',
        cardBorder: '#EEE1E0',
      },
      textColor: {
        colorBlack: '#000',
        colorWhite: '#fff',
        colorGrey2: '#A6AAB6',
        colorGrey: '#949BAA',
        colorGrey2: '#9097A7',
        colorRed: '#FF1616',
        colorBlack: '#232F55',
      },
    },
  },
  plugins: [],
}