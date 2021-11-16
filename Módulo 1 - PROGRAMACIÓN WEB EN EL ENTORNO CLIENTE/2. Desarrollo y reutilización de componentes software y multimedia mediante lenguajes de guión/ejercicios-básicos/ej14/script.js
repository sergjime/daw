let num = +prompt("Introduce un número");

if (num % 2 === 0) {
  document.write(`El número intducido es divisible entre 2`);
} else if (num % 3 === 0) {
  document.write(`El número intducido es divisible entre 3`);
} else if (num % 5 === 0) {
  document.write(`El número intducido es divisible entre 5`);
} else if (num % 7 === 0) {
  document.write(`El número intducido es divisible entre 7`);
}
