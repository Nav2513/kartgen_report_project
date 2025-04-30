// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', // Ensure the paths are correct for your project
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'ice-cold': '#a0d2eb',
        'soft-orange': '#EBB9A0',
      },
    },
  },
  plugins: [],
}
