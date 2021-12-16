const esPar = require("./numeros");

const numbers = [2, 3, 101, 201, 202, 100];

numbers.forEach((num) => {
  if (esPar(num)) {
    console.info(`${num} => El número es par`);
  } else {
    console.error(`${num} => El número no es par`);
  }
});
