module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
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
        "blue-a": "#4556ac",
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
        128: '32rem',
        "1/24": "4.166666666666666%",
        "2/24": "8.333333333333332%",
        "3/24": "12.5%",
        "4/24": "16.666666666666664%",
        "5/24": "20.833333333333336%",
        "6/24": "25.0%",
        "7/24": "29.166666666666668%",
        "8/24": "33.33333333333333%",
        "9/24": "37.5%",
        "10/24": "41.66666666666667%",
        "11/24": "45.83333333333333%",
        "12/24": "50.0%",
        "13/24": "54.166666666666664%",
        "14/24": "58.333333333333336%",
        "15/24": "62.5%",
        "16/24": "66.66666666666666%",
        "17/24": "70.83333333333334%",
        "18/24": "75.0%",
        "19/24": "79.16666666666666%",
        "20/24": "83.33333333333334%",
        "21/24": "87.5%",
        "22/24": "91.66666666666666%",
        "23/24": "95.83333333333334%",
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
      fontFamily:{
        Nunito: ["Nunito Sans", "sans-serif"]},
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
