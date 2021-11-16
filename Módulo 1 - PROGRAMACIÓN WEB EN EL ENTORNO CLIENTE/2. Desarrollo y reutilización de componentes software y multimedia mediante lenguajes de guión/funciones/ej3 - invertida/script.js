/* Crea una función a la que al pasarle una
    cadena de texto nos la devuelve invertida */

let cadena = prompt("Introduce la cadena que quieres invertir");

function invetirCadena(cadena) {
  return cadena.split("").reverse().join("");
}

console.log(`La cadena invertida es => ${invetirCadena(cadena)}`);