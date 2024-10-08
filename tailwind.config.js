module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        darkBlueIntro: 'hsl(217, 28%, 15%)',
        darkBlueMain: 'hsl(218, 28%, 13%)',
        darkBlueFooter: 'hsl(216, 53%, 9%)',
        darkBlueTestimonials: 'hsl(219, 30%, 18%)',
        cyanCTA: 'hsl(176, 68%, 64%)',
        blueCTA: 'hsl(198, 60%, 50%)',
        lightRedError: 'hsl(0, 100%, 63%)',
        white: 'hsl(0, 0%, 100%)',
    },
    fontFamily : {
      raleway: ['Raleway','serif'],
      opensans : ['Open Sans', 'sans-serif'],

    },
  },
  plugins: [],
}
}