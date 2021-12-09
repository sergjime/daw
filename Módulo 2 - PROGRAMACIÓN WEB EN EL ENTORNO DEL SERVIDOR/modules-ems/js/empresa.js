import { Cliente } from "./cliente.js";

export class Empresa extends Cliente {
  constructor(nombre, saldo, categoria) {
    super(nombre, saldo);
    this.categoria = categoria;
  }

  getInfo() {
    return `Cliente: ${this.nombre}, saldo: ${this.saldo},
            categoria: ${this.categoria}`;
  }
}
