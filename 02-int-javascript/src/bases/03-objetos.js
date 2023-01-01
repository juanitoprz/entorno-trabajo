const persona = {
  nombre: 'Juanito',
  apellido: 'Perez',
  edad: 34,
  direccion: {
    ciudad: 'New York',
    zip: 10080,
  }
}

console.table( {persona} )

const persona2 = persona;

console.log(persona2)