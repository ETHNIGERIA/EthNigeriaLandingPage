/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: {
        DEFAULT: "#0178D4",
        100: "#CCE4F6",
        200: "#AAD2F1",
        300: "#80BCEA",
        400: "#56A5E2",
        500: "#2B8FDB",
        600: "#0178D4",
        700: "#0164B1",
        800: "#01508D",
        900: "#013C6A",
        000: "#002847",
        dark: "#00182A",
      },
      secondary: {
        DEFAULT: "#DFF3FC",
        100: "#F9FDFE",
        200: "#F4FBFE",
        300: "#EFF9FD",
        400: "#EAF7FD",
        500: "#E4F5FC",
        600: "#DFF3FC",
        700: "#BACAD2",
        800: "#95A2A8",
        900: "#707A7E",
        000: "#4A5154",
        dark: "#2D3132",
        cyan: "#CCFCFF",
      },
    },
    extend: {},
  },
  plugins: [],
};
