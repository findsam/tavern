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
          900: "#171717",
          800: "#262626",
          700: "#404040",
          600: "#525252",
          500: "#737373",
          400: "#a3a3a3",
          300: "#d4d4d4",
          200: "#e5e5e5",
          100: "#f5f5f5",
          border: "hsla(0,0%,99%,.08)",
        },
      },
    },
  },
  plugins: [],
};
