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
        brand: {
          deep: "#17104F",
          primary: "#4935D4",
          main: "#6C3DF5",
          accent: "#8B4DFF",
          highlight: "#C084FC",
          light: "#F5F1FF",
          border: "#E7E2F2",
          borderHover: "#D8CCFF",
        },
        bg: {
          offwhite: "#FAF9FF",
          card: "#FFFFFF",
        },
        text: {
          dark: "#17152B",
          muted: "#625F73",
          light: "#A09CB3",
        },
      },
      backgroundImage: {
        'brand-gradient': "linear-gradient(135deg, #4935D4 0%, #6C3DF5 50%, #C084FC 100%)",
        'brand-gradient-hover': "linear-gradient(135deg, #3C29C2 0%, #5B2CE4 50%, #B06DEF 100%)",
        'brand-glow': "radial-gradient(circle at 50% 50%, rgba(108, 61, 245, 0.15) 0%, rgba(192, 132, 252, 0.05) 50%, transparent 100%)",
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        script: ["var(--font-caveat)", "cursive"],
      },
      boxShadow: {
        soft: "0 10px 30px -5px rgba(23, 16, 79, 0.04)",
        card: "0 15px 35px -5px rgba(23, 16, 79, 0.08)",
        purpleGlow: "0 12px 28px -6px rgba(108, 61, 245, 0.35)",
        btnHover: "0 14px 32px -4px rgba(108, 61, 245, 0.45)",
      },
      borderRadius: {
        'xl': '0.75rem',    // 12px
        '2xl': '1rem',      // 16px
        '3xl': '1.5rem',    // 24px
      }
    },
  },
  plugins: [],
};
export default config;
