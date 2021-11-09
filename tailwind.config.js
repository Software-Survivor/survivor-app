module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      color: {
        //Aquí van los nuevos colores. Ejemplo: nombre: "#00000"
        //Ejecutar el comando yarn build cada vez que se modifique este archivo
      },  
      height: {
        21: '5.25rem',
        22: '5.5rem',
        23: '5.75rem',
        25: '6.25rem',
        26: '6.50rem',
        27: '6.75rem',
       },
       width: {
        21: '5.25rem',
        22: '5.5rem',
        23: '5.75rem',
        25: '6.25rem',
        26: '6.50rem',
        27: '6.75rem',
       },  
       margin: {
        21: '5.25rem',
        22: '5.5rem',
        23: '5.75rem',
        25: '6.25rem',
        26: '6.50rem',
        27: '6.75rem',
       }
    },
 
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
