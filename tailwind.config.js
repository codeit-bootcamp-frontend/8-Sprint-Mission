/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "my-blue": "#3692ff",
        "my-sky-blue": "#cfe5ff",
        "my-error-red": "#f74747",
      },
    },
    screens: {
      sm: "1px",
      md: "768px",
      lg: "1200px",
    },
  },
  plugins: [],
};
