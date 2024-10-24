/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./client/src/**/*.{html,js,jsx,ts,tsx}'], // Update with your project file paths
  theme: {
    extend: {
      backgroundImage: {
        space: "url('/client/src/assets/space.jpg')",
      },
    },
  },
  plugins: [],
};
