import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
    plugins: [],
  },
};

export default config;
