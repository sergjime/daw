/* Dado el siguiente array de pokemons, crear una función que devuelva un nuevo array que contenga solo los pokemons de tipo fire.

let pokemons = [
  { name: "pikachu", type: "electric"},
  { name: "charmander", type: "fire"},
  { name: "bulbasaur", type: "grass"},
  { name: "squirtle", type: "water"},
  { name: "flareon", type: "fire"},
  { name: "jolteon", type: "electric"}
] */

let pokemons = [
  { name: "pikachu", type: "electric" },
  { name: "charmander", type: "fire" },
  { name: "bulbasaur", type: "grass" },
  { name: "squirtle", type: "water" },
  { name: "flareon", type: "fire" },
  { name: "jolteon", type: "electric" },
];

function filtrarTipoFuego(pokemons) {
  return pokemons.filter(pokemon => pokemon.type === "fire");
}

console.log(filtrarTipoFuego(pokemons));