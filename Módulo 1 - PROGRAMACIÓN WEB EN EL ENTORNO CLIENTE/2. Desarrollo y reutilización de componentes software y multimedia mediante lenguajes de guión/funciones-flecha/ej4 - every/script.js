/* Crea una función que devuelva si todos los items de este array tienen un precio > 1000 o no.

	const carrito = [
   		{ nombre: 'Monitor 20 Pulgadas', precio: 500},
    	{ nombre: 'Televisión 50 Pulgadas', precio: 700},
    	{ nombre: 'Tablet', precio: 300},
   		{ nombre: 'Audifonos', precio: 200},
  		{ nombre: 'Teclado', precio: 50},
   	 	{ nombre: 'Celular', precio: 500},
  		{ nombre: 'Bocinas', precio: 300},
    	{ nombre: 'Laptop', precio: 800},
]; */

const carrito = [
  { nombre: "Monitor 20 Pulgadas", precio: 500 },
  { nombre: "Televisión 50 Pulgadas", precio: 700 },
  { nombre: "Tablet", precio: 300 },
  { nombre: "Audifonos", precio: 200 },
  { nombre: "Teclado", precio: 50 },
  { nombre: "Celular", precio: 500 },
  { nombre: "Bocinas", precio: 300 },
  { nombre: "Laptop", precio: 800 },
];

let test = false;
let contador = 0;

for (let i = 0; i < carrito.length; i++) {
  if (carrito.precio > 1000) {
    contador++;
  }
}

if (contador === carrito.length) {
  test = true;
}

console.log(`La suma sin el método every: ${test}`);

/////////////////////////////////////////////// MÉTODO EVERY ///////////////////////////////////////////////

function menosCantidadPrecio(carrito) {
  return carrito.every((producto) => producto.precio > 1000);
}

console.log(`La suma con el método every: ${menosCantidadPrecio(carrito)}`);
