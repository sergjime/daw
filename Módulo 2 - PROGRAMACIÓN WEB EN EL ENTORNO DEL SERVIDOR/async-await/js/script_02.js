//Async Await
function getClientes() {
  return new Promise((resolve, reject) => {
    const error = false;

    setTimeout(() => {
      if (!error) resolve("Los clientes se han descargado!");
      else reject("No se pudo descargar");
    }, 3000);
  });
}

function getPedidos() {
  return new Promise((resolve, reject) => {
    const error = false;

    setTimeout(() => {
      if (!error) resolve("Pedidos descargados");
      else reject("No se pudo descargar los pedidos");
    }, 2000);
  });
}

/* async function ejecutar() {
    try {
      const clientes = await getClientes();
      console.log(clientes);
      const pedidos = await getPedidos();
      console.log((pedidos));
    } catch (err) {
      console.log(err);
    }
  }
   */

async function ejecutar() {
  try {
    const respuesta = await Promise.all([getClientes(), getPedidos()]);
    console.log(respuesta);
    console.log(respuesta[0]);
    console.log(respuesta[1]);
  } catch (err) {
    console.log(err);
  }
}
ejecutar();
console.log("Hola");
