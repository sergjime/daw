/* Crea un objeto calculadora con los métodos sumar, restar, multiplicar y dividir.
    Estos métodos esperan dos números y devuelven el resultado de la operación.
    Luego usa el objeto para realizar algunos cálculos y enséñalos por la consola.

    Mini-bonus: Si se divide entre 0 retornar que no està permitido.

    Bonus: el método sumar puede admitir una lista infinita de números. */
const Calculadora = {
  sumar: function (...nums) {
    let result = 0;
    for (let num of nums) result += num;
    return result;
  },
  restar: function (num1, num2) {
    return num1 - num2;
  },
  multiplicar: function (num1, num2) {
    return num1 * num2;
  },
  dividir: function (num1, num2) {
    let resultado;
    if (num1 === 0 || num2 === 0) {
      resultado = "No se pueden dividir ya que uno de estos números es 0";
    } else {
      resultado = num1 / num2;
    }
    return resultado;
  },
};

console.log(sumar());
