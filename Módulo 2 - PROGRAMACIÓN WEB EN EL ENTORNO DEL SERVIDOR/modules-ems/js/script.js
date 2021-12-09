import getSaldo, {
  nombreCliente,
  saldo as sueldo,
  getInfo,
} from "./cliente.js";

console.log(nombreCliente);
console.log(sueldo);

const infoCliente = getInfo(nombreCliente, sueldo);
console.log(infoCliente);

import { Cliente } from "./cliente.js";

const cliente = new Cliente("Lola", 300);

console.log(cliente.getInfo());

// import getSaldo from './cliente.js'

getSaldo();

import { Empresa } from "./empresa.js";

const empresa = new Empresa("Tablisa", 2000, "Seguridad");
console.log(empresa.getInfo());
