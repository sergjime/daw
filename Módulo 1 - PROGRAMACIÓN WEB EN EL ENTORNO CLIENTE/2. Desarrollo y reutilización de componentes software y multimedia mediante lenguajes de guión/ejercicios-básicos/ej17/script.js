const numero = prompt("Escribe un numero: ");

for (var i = 2; i < numero; i++) {
  console.log("Modulo entre " + numero + " y " + i + " = " + (numero % i));

  if (numero % i === 0) {
    console.log(i + " es un multiplo de " + numero);
    console.log(
      numero + " no es un numero primo porque " + i + " es un multiplo"
    );
  }
}

if (numero === 1) {
  console.log("Me has pasado el numero 1, recuerda que NO es un numero primo");
} else {
  console.log(
    "Como el numero ingresado no tuvo mas múltiplos entonces determinamos que SI es un numero primo."
  );
}