let num1 = +prompt("Introduce un primer número");
let num2 = +prompt("Introduce un segundo número");

let numeros1 = [];
let numeros2 = [];
let divisoresIguales = [];

for (i = 0; i < num1; i++) {
  if (num1 % i === 0) {
    numeros1.push(parseInt(i));
  }
}

for (i = 0; i < num2; i++) {
  if (num2 % i === 0) {
    numeros2.push(parseInt(i));
  }
}

document.write(`Los divisores de ${num1} son: <b>${numeros1}</b><br>`);
document.write(`Los divisores de ${num2} son: <b>${numeros2}</b><br><hr>`);

for (let i = 0; i < numeros1.length; i++) {
  for (let j = 0; j < numeros1.length; j++) {
    if (numeros1[i] == numeros2[j]) divisoresIguales.push(numeros1[i]);
  }
}

document.write(`Los divisores que coinciden son: <b>${divisoresIguales}</b>`)
