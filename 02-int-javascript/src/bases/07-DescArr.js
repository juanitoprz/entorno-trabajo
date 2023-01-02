const personajes = ['Juan', 'Pepe']

const [, p2] = personajes

console.log(p2)

const retornaArreglo = () => {
  return ['ABC', 123]
}

const [letras, numeros] = retornaArreglo()

console.log(letras, numeros)

/* Pruebas */
const useState = (valor) => {
  return [valor, () => {console.log('Hola Mundo')}]
}

const [nombre, setNombre] = useState('Cuero')

console.log(nombre)
setNombre()

/* Forma de ejecutar una funcion que esta dentro de una arreglo */
// arr[1]();