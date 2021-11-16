/* Crea una función que devuelva el resultado de sumar todas las edades de este array.
	
	const edades = [1,2,3,14,16,65,44,88]; */

const edades = [1, 2, 3, 14, 16, 65, 44, 88];

let sumaSinReduce = 0;

for (let i = 0; i < edades.length; i++) {
  sumaSinReduce += edades[i];
}

console.log(`La suma sin el método reduce: ${sumaSinReduce}`);

/////////////////////////////////////////////// MÉTODO REDUCE ///////////////////////////////////////////////

function sumarElementos(edades) {
  return (suma = edades.reduce((arg1, arg2) => arg1 + arg2));
}

console.log(`La suma con el método reduce: ${sumarElementos(edades)}`);
