/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "high-bounce": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }, // Increase height here
        },
      },
      animation: {
        "high-bounce": "high-bounce 1s infinite", // Add custom animation
      },
    },
  },
  plugins: [],
};
