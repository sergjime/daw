let cadena = prompt("Introduce una cadena de texto").replace(/ /g, "").toLowerCase();
let almacenadas = [];
let contador = 0;

for (let i = 0; i < cadena.length; i++) {
  if ((cadena[i] === "a") || (cadena[i] === "e") || (cadena[i] === "i") || (cadena[i] === "o") || (cadena[i] === "u")) {
    almacenadas.push(cadena[i]);
    contador++;
  }
}

document.write(`En tu cadena de texto hay <b>${contador}</b> vocales, que son: <b>${almacenadas}</b>`);

