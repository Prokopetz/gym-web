const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      dark: "#202020",
      gradientEnd: "#6366f1",
      card: "#272727",
      resizeBar: "linear-gradient(hsla(0,0%,100%,.3),hsla(0,0%,100%,.3)) no-repeat 50%/1px 100%",
      ...colors,
    },
    extend: {
      border: {
        "": "1px",
      },
      borderRadius: {
        "": "0.25rem",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
