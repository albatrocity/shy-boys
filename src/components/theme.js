const theme = {
  global: {
    colors: {
      brand: "#EE8D9C",
      light: "#DDEDE8",
      "light-2": "#afd4c8",
      "dark-1": "#221F1F",
      border: "#000",
      text: {
        light: "#000"
      }
    },
    font: {
      family: "noort, serif",
      weight: 400,
      style: "italic"
    },
    breakpoints: {
      small: {
        value: 834
      }
    }
  },
  button: {
    border: {
      radius: "0.2em"
    },
    extend: `
      font-style: italic
    `,
    color: "dark-1"
  },
  heading: {
    font: {
      family: "silicone, sans-serif",
      weight: 700,
      style: "normal"
    },
    level: {
      4: {
        medium: {
          height: "18px"
        }
      }
    }
  },
  text: {
    extend: `
      font-style: italic;
    `
  },
  paragraph: {
    extend: `
      font-style: italic;
    `,
    medium: {
      maxWidth: "large"
    }
  }
};

export default theme;
