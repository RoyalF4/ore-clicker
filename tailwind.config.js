/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        ore: "url('/images/Ore.png')",
      },
      spacing: {
        "84rem": "84rem",
      },
    },
  },
  plugins: [],
};
