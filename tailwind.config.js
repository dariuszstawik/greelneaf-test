/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryOrange: "#d9994d",
        primaryGray: "#e5e8e0",
        primaryGreen: "#40915e",
        secondaryGreen: "#265452",
      },
    },
  },
  plugins: [],
};
