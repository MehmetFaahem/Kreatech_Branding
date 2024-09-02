/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html", // All HTML files in the root directory
    "./**/*.html", // All HTML files in any subdirectories
    "./partials/**/*.html", // If you have partials or components in a specific folder
  ],
  theme: {
    screens: {
      sm: "530px",
      // => @media (min-width: 640px) { ... }

      md: "720px",
      // => @media (min-width: 768px) { ... }

      lg: "1280px",
      // => @media (min-width: 1024px) { ... }

      xl: "1540px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        primary: "#1E40AF", // Custom primary color
        secondary: "#64748B", // Custom secondary color
        accent: "#22D3EE", // Custom accent color
      },
      spacing: {
        128: "32rem", // Custom spacing
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem", // Custom border radius
      },
      fontFamily: {
        sans: ["Graphik", "sans-serif"], // Custom sans-serif font
        serif: ["Merriweather", "serif"], // Custom serif font
      },
      // Add more customizations as needed
    },
  },
  plugins: [
    require("@tailwindcss/forms"), // Optional: Tailwind Forms plugin
    require("@tailwindcss/typography"), // Optional: Tailwind Typography plugin
    require("@tailwindcss/aspect-ratio"), // Optional: Tailwind Aspect Ratio plugin
    // Add more plugins if needed
  ],
};
