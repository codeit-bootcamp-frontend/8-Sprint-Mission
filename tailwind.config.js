/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{html,js,jsx,ts,tsx}",
    "./pages/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-blue": "#3692ff",
        "brand-light-blue": "#cfe5ff",
        "brand-red": "#f74747",
      },
    },
  },
  plugins: [],
};
