/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        lg: { max: "1040px" },
        md: { max: "960px" },
        sm: { max: "500px" },
      },
    },
  },
  plugins: [],
};
