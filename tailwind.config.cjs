/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        woodsmoke: "#121212",
      },
    },
    fontFamily: {
      dosis: ["Dosis", "sans-serif"],
      redhat: ["Red Hat Display", "sans-serif"],
    },
  },
  plugins: [],
};
