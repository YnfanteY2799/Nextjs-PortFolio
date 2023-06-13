/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "450px",
      },
      fontFamily: {
        local: [`var(--font-local)`],
      },
    },
  },
  darkMode: "class",
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["night", "cupcake"],
    darkTheme: "night",
  },
};
