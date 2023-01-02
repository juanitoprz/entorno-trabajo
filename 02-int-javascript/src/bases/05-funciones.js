
/* Funciones */

/* Declarar funciones como constantes, ya que como no se van a cambiar su funcionalidad como constante evita que se pueda remplazar ese valor a futuro */
const saludar = function(nombre) {
  return `Hola, ${nombre}`
}

const saludar2 = (nombre) => {
  return `Hola, ${nombre}`
}

const saludar3 = (nombre) => `Hola, ${nombre}`

const getUser2 = (nombre) => {
  return {
    nombre: 'Juan',
    edad: 34
  }
}

const getUser = (nombre) => ({
    nombre: 'Juan',
    edad: 34
})

console.log(getUser())
console.log(getUser2())

/* Pruebas */

/* Retorna un objeto implicito, es decir obvia el return porque solo develve un objeto. Para eso son los parentesis antes de las llaves */
const getUsuarioActivo = (nombre) => ({
  uid: '123213',
  usuario: nombre
})

const usuarioActivo = getUsuarioActivo('Ernesto')
console.log(usuarioActivo)