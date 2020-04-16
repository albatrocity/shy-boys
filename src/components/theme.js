const theme = {
  global: {
    colors: {
      brand: "#EE8D9C",
      light: "#DDEDE8",
      "dark-1": "#221F1F",
      border: "#000",
      text: {
        light: "#000",
      },
    },
    font: {
      family: "noort, serif",
      weight: 400,
      style: "italic",
    },
  },
  heading: {
    font: {
      family: "silicone, sans-serif",
      weight: 700,
      style: "normal",
    },
    level: {
      4: {
        medium: {
          height: "18px",
        },
      },
    },
  },
  text: {
    extend: `
      font-style: italic;
    `,
  },
  paragraph: {
    extend: `
      font-style: italic;
    `,
  },
}

export default theme
