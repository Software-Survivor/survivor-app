module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      color: {
        //Aquí van los nuevos colores. Ejemplo: nombre: "#00000"
        //Ejecutar el comando yarn build cada vez que se modifique este archivo
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
