/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { pretendard: ["Pretendard", "sans-serif"] },
      colors: {
        brand: "#3692ff",
        banner: "#cfe5ff",
        lightGray: "#FCFCFC",
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    {
      tailwindcss: {},
      autoprefixer: {},
    },
  ],
};
