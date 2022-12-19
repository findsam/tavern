/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        main: {
          900: "#1c1d21",
          800: "#242529",
          700: "#323337",
          600: "#3e4044",
          500: "#5d5e62",
          400: "#75777b",
          300: "#95969a",
          200: "#b1b2b6",
          100: "#cecfd3",
        },
      },
    },
  },
  plugins: [],
};
