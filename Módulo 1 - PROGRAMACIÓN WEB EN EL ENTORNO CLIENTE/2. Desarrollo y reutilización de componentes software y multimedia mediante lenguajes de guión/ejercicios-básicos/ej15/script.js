let num = +prompt("Introduce un número");
let numeros = [];

for (i = 0; i < num; i++) {
  if (num % i === 0) {
    numeros.push(parseInt(i));
  }
}

document.write(`Los divisores de ${num} son: <b>${numeros}</b>`);