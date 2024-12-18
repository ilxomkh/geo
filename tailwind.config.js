module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        chevron: `
          repeating-linear-gradient(
            45deg,
            #fff6d9 0,
            #fff6d9 12px,
            #ffeaa7 12px,
            #ffeaa7 24px
          )
        `,
      },
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
