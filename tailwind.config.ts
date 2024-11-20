import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-primary": {
          50: "#EBEEF5",
          100: "#8E95A9",
          200: "#FFAD49",
          300: "#7B61FF",
          400: "#7B6EF6",
          500: "#1EA5FC",
          800: "#20283E",
          900: "#121829",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
