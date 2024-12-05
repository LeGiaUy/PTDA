/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Thêm đoạn này để Tailwind có thể tìm kiếm các lớp CSS trong các file JSX
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};


