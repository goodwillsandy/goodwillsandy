module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    spacing: {
      4: "4px",
      8: "8px",
      16: "16px",
      32: "32px",
      48: "48px",
      56: "56px",
      64: "64px",
    },

    fontSize: {
      base: "1rem",
      large: "1.5rem",
      veryLarge: "2rem",
    },

    colors: {
      offWhite: "#F2F2F2",
      primary: "#1f2937",
      secondary: "#f5f5f5",
    },
  },
  plugins: [],
}
