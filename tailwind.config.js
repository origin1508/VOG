/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,js}", "./components/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#AA9377",
        secondary: "#CB1944",
      },
      keyframes: {
        slideRight: {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        slideLeft: {
          "0%": {
            transform: "translateX(100%)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        slideIn: {
          "0%": {
            opacity: 0,
            transform: "translateY(-200%)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        slideOut: {
          "0%": {
            opacity: 1,
            transform: "translateY(0)",
          },
          "100%": {
            opacity: 0,
            transform: "translateY(-200%)",
          },
        },
        slideInOut: {
          "0%": {
            opacity: 0,
            transform: "translateY(-200%)",
          },
          "25%, 75%": {
            opacity: 1,
            transform: "translateY(0)",
          },
          "100%": {
            opacity: 0,
            transform: "translateY(-200%)",
          },
        },
      },
    },
  },
  plugins: [],
};
