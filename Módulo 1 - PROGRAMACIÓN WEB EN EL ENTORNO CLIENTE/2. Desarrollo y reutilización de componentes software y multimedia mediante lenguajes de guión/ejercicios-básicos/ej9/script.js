let cadena = prompt("Introduce una cadena de texto")
  .replace(/ /g, "")
  .toLowerCase();
let contador = 0;

for (let i = 0; i < cadena.length; i++) {
  if (cadena[i] === "a") {
    contador++;
  }
}

document.write(`En tu cadena de texto hay <b>${contador}</b> veces la letra a`);
