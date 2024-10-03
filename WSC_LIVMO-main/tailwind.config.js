/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hoverColor: "#003FFF",
        brightColor: "#dd8036",
        backgroundColor: "#393f39",
      },
    },
  },
  plugins: [],
}

