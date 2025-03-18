import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background:"#08090a",
        primary: "#1DA1F2", // Custom blue
        secondary: "#14171A", // Custom dark
      },

      fontSize:{
        md:"1.6rem",
        lg:"2.2rem",
        "5xl":"8rem",
      },
      fontFamily:{
        sans:'"Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif'
      },
    
      spacing: {
        18: "4.5rem", // Custom spacing
      },
    },
  },
  plugins: [],
};

export default config;
