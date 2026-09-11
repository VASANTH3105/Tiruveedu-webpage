import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0F2C59", // Dark navy
          dark: "#0A1F3F",
          light: "#183D75",
        },
        accent: {
          orange: "#F5821F",
          red: "#E63946",
          orangeLight: "#FFF4EB",
        },
        text: {
          dark: "#0F2C59",
          gray: "#5A6472",
          muted: "#8A94A6",
        },
        bg: {
          offwhite: "#FFFFFF",
          lightgray: "#F7F8FA",
        },
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        script: ["var(--font-caveat)", "cursive"],
      },
      boxShadow: {
        soft: "0 10px 30px -5px rgba(15, 44, 89, 0.08)",
        card: "0 15px 35px -5px rgba(15, 44, 89, 0.12)",
        float: "0 20px 40px -10px rgba(245, 130, 31, 0.25)",
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
};
export default config;
