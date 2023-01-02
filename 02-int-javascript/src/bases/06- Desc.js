
const persona = {
  nombre: 'Juan',
  edad: 45,
  rango: 'Soldado'
}

const useContext = ({nombre, edad, rango = 'No asignado'}) => {
  return {
    rangoUsuario: rango,
    nombreUsuario: nombre,
    ubicacion: {
      lat: 1233,
      lng: 12313
    }
  }
}

/* Con : hacer referencia al objeto que esta dentro y ahi mismo lo extraemos */
const {rangoUsuario, nombreUsuario, ubicacion:{lat, lng}} = useContext(persona)

console.log(rangoUsuario, nombreUsuario, lat, lng)