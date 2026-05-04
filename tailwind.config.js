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
          primary: "var(--brand-text)",
          dark: "var(--brand-dark)",
          accent: "var(--brand-accent)",
          "accent-hover": "var(--brand-accent-hover)",
          bg: "var(--brand-bg)",
          "bg-alt": "var(--brand-bg-alt)",
          text: "var(--brand-text)",
          "text-muted": "var(--brand-text-muted)",
          gray: "var(--brand-gray)",
          muted: "var(--brand-muted)",
          border: "var(--brand-border)",
        },
      },
      fontFamily: {
        display: ["var(--font-barlow-condensed)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}


