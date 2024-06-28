/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "poppins": '"Poppins", sans-serif',
        "kanit": '"kanit",sans-serif',
      },
    },
  },
  plugins: [require("daisyui")],
};
