/* Crea una función que verifique si un texto es un palíndromo
    ej:
        - esPalindromo('caracol') -> false
        - esPalindromo('la ruta natural') -> true
    Nota: - No se tienen en cuenta los espacios
    (No hace falta usar Foreach, map, filter, reduce) */

let cadena = prompt(
  "Introduce la cadena de la cual quieras ver si es palíndromo o no"
);

function esPalindromo(cadena) {
  let cadenaInvertida = cadena.split("").reverse().join("");
  let result;

  if (cadena === cadenaInvertida) {
    result = "Es palíndromo";
  } else {
    result = "NO es palíndromo";
  }

  return result;
}

console.log(esPalindromo(cadena.replaceAll(" ", "").toLowerCase()));