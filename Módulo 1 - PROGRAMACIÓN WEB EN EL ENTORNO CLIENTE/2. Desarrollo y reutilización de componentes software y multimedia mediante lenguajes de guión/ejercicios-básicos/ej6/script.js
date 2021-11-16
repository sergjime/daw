let num1 = +prompt("Introduce un primer número");
let num2 = +prompt("Introduce un segundo número");

if (num1 < num2) {
  document.write(`El número más grande es: <b>${num2}</b>`);
} else if (num1 > num2) {
  document.write(`El número más grande es: <b>${num1}</b>`);
} else {
  document.write(`Los dos números son: <b>Iguales</b>`);
}
