/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./resources/**/*.blade.php",
  "./resources/**/*.js",
  "./resources/**/*.vue",],
  theme: {
    extend: {
      height: {
        "15v": "15vh",
        "10": "10h",
        "65v": "65vh",
      },
    },
  },
  plugins: [],
}
