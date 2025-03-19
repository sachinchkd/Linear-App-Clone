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
        primary: "#f7f8f8", // Custom blue
        secondary: "#d0d6e0", // Custom dark
        tertiary:"#8a8f98"
      },

      fontSize:{
        md:"1rem",
        lg:"1.3125rem",
        "5xl":["3.5rem","1.1"],
      },

      fontWeight: {
        'extrabold': '510',  // Custom font-weight for lg
        'bold': '538', // Custom font-weight for 5xl
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
