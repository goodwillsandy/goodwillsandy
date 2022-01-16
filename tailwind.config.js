module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    spacing: {
      0: "0px",
      4: "4px",
      8: "8px",
      16: "16px",
      20: "20px",
      24: "24px",
      32: "32px",
      48: "48px",
      56: "56px",
      64: "64px",
    },

    fontSize: {
      small: "0.75rem",
      base: "1rem",
      large: "1.5rem",
      veryLarge: "2rem",
    },

    fontFamily: {
      display: ['Bebas Neue', 'cursive'],
    },

    colors: {
      offWhite: "#F2F2F2",
      primary: "#228CDB",
      lightPrimary: "#F0F5FF",
      darkPrimary: "#0E3B5C",
      secondary: "#33424D",
    },
  },
  plugins: [],
}
