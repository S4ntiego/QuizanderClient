/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1440px",
      },
      
        animation: {
          // Tooltip
          "slide-up-fade": "slide-up-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          "slide-down-fade":
            "slide-down-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        },
        keyframes: {
          // Tooltip
          "slide-up-fade": {
            "0%": { opacity: 0, transform: "translateY(6px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
          },
          "slide-down-fade": {
            "0%": { opacity: 0, transform: "translateY(-6px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
          },
        },
      },
    },
    plugins: [
      require("@tailwindcss/forms"),
      require("@tailwindcss/typography"),
      require("@tailwindcss/line-clamp"),
      plugin(({ addVariant }) => {
        addVariant("radix-side-top", '&[data-side="top"]');
        addVariant("radix-side-bottom", '&[data-side="bottom"]');
      }),
    ],
  },
};
