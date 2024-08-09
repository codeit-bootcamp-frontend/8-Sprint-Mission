/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        "4xl": "2.5rem",
      },
      height: {
        header: "4.375rem",
        banner: "33.75rem",
      },
    },
    screens: {
      // 320
      xs: "20em",
      // 425
      sm: "26.5625em",
      // 768
      md: "48em",
      // 1024
      lg: "64em",
      // 1200
      xl: "75em",
    },
    keyframes: {
      shimmer: {
        "100%": {
          transform: "translateX(100%)",
        },
      },
    },
  },
  plugins: [],
};
