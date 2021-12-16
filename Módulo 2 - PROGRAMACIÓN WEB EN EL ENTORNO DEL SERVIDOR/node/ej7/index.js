const saludo = require("./saludador");

function callBack() {
  console.log("Luego de saludar se ejecuta el callback");
}

saludo("Manolo", "Gómez", callBack);
