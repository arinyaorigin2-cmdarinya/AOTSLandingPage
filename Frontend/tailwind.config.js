

// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "border-glow": {
          "0%": { top: "0%", left: "0%" },         // top-left corner
          "25%": { top: "0%", left: "100%" },      // top-right
          "50%": { top: "100%", left: "100%" },    // bottom-right
          "75%": { top: "100%", left: "0%" },      // bottom-left
          "100%": { top: "0%", left: "0%" },       // back to top-left
        },
      },
      animation: {
        "border-glow": "border-glow 8s linear infinite",
      },
    },
  },
  plugins: [],
};
