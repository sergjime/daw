/* Crea un programa en javascript que emule la máquina de la O.R.A.
    Se pide al usuario que inserte una cantidad en un prompt.
    ( se supone que en un és número)
    Si la cantidad es inferior a 30 avisar que no es suficiente y
    volver a pedir que ingrese la cantidad.
    Si la cantidad es superior a 210 decir que se ha pasado
    y volver a pedir la cantidad.
    Si la cantidad es correcta devolver el tiempo que podrá estar estacionado.
    Teniendo en cuenta que 1 céntimo equivale a 1 minuto. */
function calcularTiempo(cantidad) {
  const horas = Math.floor(cantidad / 60);
  const minutos = cantidad - horas * 60;
  if (cantidad < 60) return minutos + " minutos";
  else if (cantidad == 60) return "1 hora";
  else if (cantidad < 120) return "1 hora y " + minutos + " minutos";
  else return horas + " horas y " + minutos + " minutos";
}

let cantidad = 0;
do {
  cantidad = prompt(
    "Qué cantidad ingresas para la ORA (entre 30 y 210 cénts.): "
  );
} while (cantidad < 30 || cantidad > 210);
document.write(`<h1>Cantidad: ${cantidad} céntimos.</h1>`);
document.write(
  `<h1>Tiempo de estacionamiento: ${calcularTiempo(cantidad)}.</h1>`
);