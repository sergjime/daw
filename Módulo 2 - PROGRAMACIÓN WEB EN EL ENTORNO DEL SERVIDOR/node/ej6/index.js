function callBack() {
  console.log("Luego de saludar se ejecuta el callback");
}

const saludar = (nombre, apellido, callBack) => {
  setTimeout(function () {
    console.log(`Hola ${nombre} ${apellido}`);
    callBack();
  }, 1500);
};

saludar("Pepe", "García", callBack);
