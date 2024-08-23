import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      md: "768px",
      xl: "1200px",
    },
    extend: {
      colors: {
        gray: {
          DEFAULT: "#ffffff",
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
        "error-red": "#f74747",
        "brand-blue": "#3692ff",
        "blue-hover": "#1967d6",
        "blue-active": "#1251aa",
        "header-under": "#dfdfdf",
        "comment-bg": "#fcfcfc",
        "blue-login": "#e6f2ff",
      },
    },
  },
  plugins: [],
};
export default config;
