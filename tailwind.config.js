/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          900: "var(--gray900-color)",
          800: "var(--gray800-color)",
          700: "var(--gray700-color)",
          600: "var(--gray600-color)",
          500: "var(--gray500-color)",
          400: "var(--gray400-color)",
          200: "var(--gray200-color)",
          100: "var(--gray100-color)",
          50: "var(--gray50-color)",
        },
        white: "var(--white-color)",
        blue: "var(--blue-color)",
        red: "var(--red-color)",
      },
    },
    fontSize: {
      base: ["10px", { lineHeight: "1" }], // 기본 폰트 사이즈를 10px로 설정
    },
  },
  plugins: [],
};
