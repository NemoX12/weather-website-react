/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{html,js,jsx}", "./public/index.html"],
  theme: {
    extend: {
      screens: {
        sm: "639px", // Increase sm from 640px to 641px
        md: "768px", // Increase md from 768px to 769px
        lg: "1023px", // Increase lg from 1024px to 1025px
        xl: "1279px", // Increase xl from 1280px to 1281px
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
