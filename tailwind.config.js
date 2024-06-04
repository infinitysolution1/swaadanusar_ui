/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        cream: "#f9f9ed",
        lightBrown: "#af9b96",
        darkBrown: "#4d262a",
        logoOrange: "#f5a32d",
        logoGreen: "#265046",
        quirkyReddishOrange: "#ee6c54",
        quirkyMarineBlue: "#447a91",
      },
      keyframes: {
        slideInLeft: {
          "0%": { opacity: 0, transform: "translateX(-10vw)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: 0, transform: "translateX(10vw)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        slideUp: {
          "0%": { opacity: 0, transform: "translateY(5vh)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        bounce: {
          "0%, 50%, 100%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
          },

          "25%, 75%": {
            transform: "translateY(20px) ",

            animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
          },
        },
      },
      animation: {
        slideIn: "slideIn 2.5s ease-in-out forwards",
        slideUp: "slideUp 1s ease-in-out forwards",
        slideInLeft: "slideInLeft 2.5s ease-in-out forwards",
        slideInRight: "slideInRight 2.5s ease-in-out forwards",
        slideUpDelay: "slideUp 1.5s ease-in-out forwards delay-200",
        bounce: "bounce 2s infinite",
        rotate: "rotate 4s linear infinite",
      },
    },
  },
  plugins: [],
};
