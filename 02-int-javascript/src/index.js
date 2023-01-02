import heroes, {pepe} from "./data/hero";

const getHeroesById = (id) => heroes.find((elemento) => elemento.id === id);

console.log(getHeroesById(4));

const getHeroesByOwner = function(owner) {
  return heroes.filter((elemento) => elemento.owner === owner)
}

console.log(getHeroesByOwner('DC'))