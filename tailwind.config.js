/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        antique: ["Bacasime Antique", "serif"],
        playfair: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["sunset", "dark", "halloween"],
  },
};
