let cadena = prompt("Introduce una cadena de texto")
  .replace(/ /g, "")
  .toLowerCase();
let contador_a = contador_e = contador_i = contador_o = contador_u = 0;

for (let i = 0; i < cadena.length; i++) {
  if (cadena[i] === "a") {
    contador_a++;
  } else if (cadena[i] === "e") {
    contador_e++;
  } else if (cadena[i] === "i") {
    contador_i++;
  } else if (cadena[i] === "o") {
    contador_o++;
  } else if (cadena[i] === "u") {
    contador_u++;
  }
}

document.write(
  `En tu cadena de texto hay <b>${contador_a}</b> veces la letra a</b><br>`
);
document.write(
  `En tu cadena de texto hay <b>${contador_e}</b> veces la letra e</b><br>`
);
document.write(
  `En tu cadena de texto hay <b>${contador_i}</b> veces la letra i</b><br>`
);
document.write(
  `En tu cadena de texto hay <b>${contador_o}</b> veces la letra o</b><br>`
);
document.write(
  `En tu cadena de texto hay <b>${contador_u}</b> veces la letra u</b>`
);
