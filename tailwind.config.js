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
    },
  },
  plugins: [],
};
