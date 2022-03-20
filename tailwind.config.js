module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      md: '769px',
      lg: '1025px',
      xl: '1441px'
    },
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
      80: "5rem",
      96: "6rem",
      112: "7rem",
    },

    fontSize: {
      s: "0.75rem",
      DEFAULT: "1rem",
      m: "1.5rem",
      l: "2rem",
      xl: "3rem",
    },

    fontFamily: {
      display: ['Bebas Neue', 'cursive'],
      body: ['Roboto', 'sans-serif'],
    },

    colors: {
      offWhite: "#F2F2F2",
      primary: "#F0F5FF",
      lightPrimary: "#F0F5FF",
      darkPrimary: "#0E3B5C",
      secondary: "#FFFBF0",
      dark: "#000000",
      light: "#FFFFFF",
      
    },

    boxShadow: {
      DEFAULT: "0px 1px 4px rgba(0, 0, 0, 0.25)",
    },
  },
  plugins: [],
}
