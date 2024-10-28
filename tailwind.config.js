/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#347928", //green
        secondary: "#FFFBE6", // white
        third: "#FCCD2A", // yellow
        four: "#C0EBA6", //low green
      },
    },
  },
  plugins: [],
};
