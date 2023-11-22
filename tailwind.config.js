/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        solana: {
          100: "#848895",
          200: "#c4c4c4",
          300: "#111111",
          400: "#2a282c",
          500: "#a962ff",
        },
      },
    },
  },
  plugins: [],
};
