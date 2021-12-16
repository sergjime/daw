module.exports = saludar = (nombre, apellido, callBack) => {
  setTimeout(function () {
    console.log(`Hola ${nombre} ${apellido}`);
    callBack();
  }, 1500);
};
