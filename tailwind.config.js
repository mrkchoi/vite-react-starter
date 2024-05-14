/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "2fr1fr": "2fr 1fr",
        "1fr1fr": "1fr 1fr",
        repeat2: "repeat(2, 1fr)",
        repeat4: "repeat(4, 1fr)",
      },
    },
  },
  plugins: [],
};
