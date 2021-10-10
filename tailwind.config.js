module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#4DB26A",
        secondary: "#B24D95",
        lightPrimary: "#C0E4CA",
        lightSecondary: "#E4C0D9",
        darkPrimary: "#357948",
        darkSecondary: "#793566",
        blue: "#518dae",
        red: "#c23d46",
      },
      spacing: {
        "82vh": "82vh",
        "50vh": "50vh",
        "30vw": "30vw",
        "18vw": "18vw",
        "15vw": "15vw",
        "13vw": "13vw",
        "9vw": "9vw",
        "7vw": "7vw",
        "4vw": "4vw",
        "2vw": "2vw",
        "22px": "22px",
        "30px": "30px",
        "36px": "36px",
        "180px": "180px",
        "150px": "150px",
        "240px": "240px",
        "300px": "300px",
        "1%": "1%",
        "2%": "2%",
        "3%": "3%",
        "4%": "4%",
        "5%": "5%",
        "6%": "6%",
        "7%": "7%",
        "8%": "8%",
        "9%": "9%",
        "10%": "10%",
        "12%": "12%",
        "13%": "13%",
        "15%": "15%",
        "20%": "20%",
        "25%": "25%",
        "30%": "30%",
        "35%": "35%",
        "40%": "40%",
        "50%": "50%",
        "60%": "60%",
        "70%": "70%",
        "75%": "75%",
        "80%": "80%",
        "85%": "85%",
        "90%": "90%",
        "95%": "95%",
        "100%": "100%",
      },
      fontFamily: {
        header: "IBM Plex Sans Arabic, serif",
        body: "Lato, sans-serif",
        code: "Roboto Mono, monospace",
      },
      minHeight: {
        40: "10rem",
        "200px": "200px",
      },
      maxHeight: {
        "400px": "400px",
        "50px": "50px",
      },
      minWidth: {
        40: "10rem",
        "200px": "200px",
      },
      maxWidth: {
        "500px": "500px",
        "400px": "400px",
        "350px": "350px",
        "200px": "200px",
      },
      borderWidth: {
        24: "24px",
      },
      blur: {
        "1px": "1px",
      },
      transformOrigin: {
        lever: "13%",
      },
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      md: "16px",
      lg: "18px",
      xl: "20px",
      "2xl": "24px",
      "3xl": "30px",
      "4xl": "36px",
      "5xl": "48px",
      "6xl": "64px",
      "7xl": "80px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
