/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#FFFFFF",
          dark: "#1A1A1A",
          accent: "#D64B2A",
          secondary: "#2D5016",
          bg: "#F5F2EE",
          text: "#2C2C2C",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-dm-sans)", "sans-serif"],
        serif: ["var(--font-lora)", "serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}


