//Async Await
function getClientes() {
  return new Promise((resolve, reject) => {
    const error = true;

    setTimeout(() => {
      if (!error) resolve("Los clientes se han descargado!");
      else reject("No se pudo descargar");
    }, 3000);
  });
}

async function ejecutar() {
  try {
    const respuesta = await getClientes();
    console.log(respuesta);
  } catch (err) {
    console.log(err);
  }
}

ejecutar();
console.log("Hola");
