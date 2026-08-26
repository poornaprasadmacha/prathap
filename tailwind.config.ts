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
          950: "#0B192C", // Deepest navy
          900: "#0F2942", // Primary navy blue
          800: "#1E3A8A", // Deep blue
          700: "#1D4ED8", // Strong blue
          600: "#2563EB", // Primary action blue
          500: "#3B82F6", // Light action blue
          100: "#DBEAFE", // Soft blue accent background
          50: "#EFF6FF",  // Lightest blue section background
        },
        navy: {
          dark: "#0F2942",
          light: "#1E3A8A",
        },
        accent: {
          emerald: "#059669", // Trust green for verification badge / approval highlights
          amber: "#D97706",   // Subtle alert/info highlight
        }
      },
      boxShadow: {
        none: 'none !important',
        sm: 'none !important',
        DEFAULT: 'none !important',
        md: 'none !important',
        lg: 'none !important',
        xl: 'none !important',
        '2xl': 'none !important',
        inner: 'none !important',
      }
    },
  },
  plugins: [],
};
export default config;
