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
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        slideUp: "slideUp 1s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
