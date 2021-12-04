module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textColor: {
      "gray-100": "#393939",
      "gray-75": "#585858",
      "gray-50": "#8f8f8f",
      "gray-25": "#f9f9f9",
      "tic-100": "#892c7f",
      "tic-75": "#985295",
      "tic-50": "#ba7eaf",
      "tic-250": "#e0b9d5",
      "black":"#000",
      "black-50":"##3a3a3a",
      "white":"#fff",
      "tic-green": "#82FF9E",
    },
    extend: {
      backgroundColor:{
        "tic-100": "#892c7f",
        "tic-75": "#985295",
        "tic-50": "#ba7eaf",
        "tic-250": "#e0b9d5",
        "gray-a": "#393939",
        "gray-b": "#585858",
        "gray-c": "#8f8f8f",
        "gray-d": "#f9f9f9",
      },
      height: {
        21: "5.25rem",
        22: "5.5rem",
        23: "5.75rem",
        25: "6.25rem",
        26: "6.50rem",
        27: "6.75rem",
      },
      width: {
        21: "5.25rem",
        22: "5.5rem",
        23: "5.75rem",
        25: "6.25rem",
        26: "6.50rem",
        27: "6.75rem",
        29: "7.25rem",
        30: "7.5rem",
      },
      margin: {
        21: "5.25rem",
        22: "5.5rem",
        23: "5.75rem",
        25: "6.25rem",
        26: "6.50rem",
        27: "6.75rem",
      },
      ringColor:{
        "gray-100": "#393939",
      "gray-75": "#585858",
      "gray-50": "#8f8f8f",
      "gray-25": "#f9f9f9",
      "tic-100": "#892c7f",
      "tic-75": "#985295",
      "tic-50": "#ba7eaf",
      "tic-250": "#e0b9d5",
      },
      fontFamily: ["Quicksand", "sans-serif"],
      inset: {
        '25': '6.25rem',
        '26': '6.5rem',
        '27': '6.75rem',
        '29': '7.25rem',
        '30': '7.5rem',
        '31': '7.25rem',
       },
      borderWidth:{
        "0.5":"0.5px"
      },
      borderColor:{
        "tic-100": "#892c7f",
      "tic-75": "#985295",
      "tic-50": "#ba7eaf",
      "tic-25": "#e0b9d5",
      

      },
      fontSize: {
        "xxs":".5rem",
        "2xxs":".25rem",
      }
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      backgroundColor: ['disabled'],
      textColor: ['disabled'],
    },
  },
  plugins: [],
};
