/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./components/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        spartan: ["League Spartan", "sans"],
      },
    },
  },
  plugins: [],
};
