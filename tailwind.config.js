module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      border: {
        "": "1px",
      },
      colors: {
        dark: "#202020",
        gradientEnd: "#6366f1",
        card: "#272727",
      },
      borderRadius: {
        "": "0.25rem",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
