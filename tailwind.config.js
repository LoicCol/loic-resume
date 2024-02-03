/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      sm: "0.7rem",
      base: "0.95rem",
      xl: "1.2rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
      "8xl": "6rem",
      "9xl": "7rem",
    },
    extend: {
      colors: {
        "nice-white": "#e4e4e0",
      },
      // fontFamily: {
      //   sans: ['"Proxima Nova"', ...defaultTheme.fontFamily.sans],
      // },
    },
  },
  plugins: [],
  darkMode: "class",
};
