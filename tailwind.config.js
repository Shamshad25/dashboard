/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkblue: "#05004e",
        lightblue: "#28518a",
      },
    },
  },
  plugins: [],
};
