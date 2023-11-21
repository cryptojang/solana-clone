/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        solana: {
          100: "#848895",
        },
      },
    },
  },
  plugins: [],
};
