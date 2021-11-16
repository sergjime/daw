let num1 = +prompt("Introduce un primer número");
let num2 = +prompt("Introduce un segundo número");
let num3 = +prompt("Introduce un tercer número");

if ((num1 > num2) && (num1 > num3)) {
  document.write(`El número más grande es: <b>${num1}</b>`);
} else if ((num2 > num1) &&  (num2 > num3)) {
  document.write(`El número más grande es: <b>${num2}</b>`);
} else if ((num3 > num1) &&  (num3 > num2)) {
  document.write(`El número más grande es: <b>${num3}</b>`);
} else if ((num1 === num2) || (num1 === num3) || (num2 === num3)) {
    document.write(`De los tres números hay dos números o los tres que son: <b>Iguales</b>`);
}