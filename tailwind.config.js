module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    spacing: {
      0: "0rem",
      4: "0.25rem",
      8: "0.5rem",
      16: "1rem",
      20: "1.25rem",
      24: "1.5rem",
      32: "2rem",
      48: "3rem",
      56: "3.5rem",
      64: "4rem",
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
