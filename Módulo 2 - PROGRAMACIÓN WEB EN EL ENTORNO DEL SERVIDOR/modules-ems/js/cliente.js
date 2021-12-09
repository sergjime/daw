// const nombreCliente = "Pepe"
// (function(){
//     // const nombreCliente = "Pepe"

//     window.nombreCliente  = "Pepe"

// })()

const nombreCliente = "Pepe";
const saldo = 200;

export { nombreCliente, saldo };

const edad = 31;
//exporrtar una función

export function getInfo(nombre, saldo) {
  console.log(edad);
  return `Cliente: ${nombre}, saldo: ${saldo}`;
}

//Exportar una clase
export class Cliente {
  constructor(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
  }
  getInfo() {
    return `Cliente: ${this.nombre}, saldo: ${this.saldo}`;
  }
}

//Export por defecto
/* export default function getSaldo(){
    console.log('No tienes saldo')
} */

export default function () {
  console.log("No tienes saldo");
}
