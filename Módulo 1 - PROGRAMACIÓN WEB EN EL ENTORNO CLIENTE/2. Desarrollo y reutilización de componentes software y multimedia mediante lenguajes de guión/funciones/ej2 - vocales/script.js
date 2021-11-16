/* Crea una función que le pasemos una
    cadena de caracteres ( string ) y
    nos devuelva el numero de vocales que tiene
    (suponemos que la cadena no tiene acentos) */
function devolverNumVocales(cadena) {
  const vocales = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
  const almacenaje = [];

  for (let i = 0; i < cadena.length; i++) {
    if (vocales.includes(cadena[i])) {
      almacenaje.push(cadena[i]);
    }
  }

  return almacenaje.length;
}

let texto = prompt('Introduce una palabra y contaremos cuantas vocales tiene');
console.log(devolverNumVocales(texto));