/* Define un tipo de objeto Cometa cuyas propiedades de instancia (específicas de cada objeto) sean
diametro, temperatura y nombre. La temperatura será un valor numérico que suponemos está en grados centígrados.
Como propiedad común a todos los objetos de tipo cometa define definicionSegunDiccionario
(que debe contener la definición de cometa según el diccionario) y como métodos comunes obtenerRadio (que debe devolver el radio)
y obtenerTemperaturaFarenheit (que debe devolver el valor de temperatura expresado en grados Fahrenheit).
Crea tres objetos de tipo cometa y comprueba que puedes acceder tanto a las propiedades específicas
como a las propiedades comunes y métodos comunes desde cada objeto. */

function Cometa(diametro, temperatura, nombre) {
  this.diametro = diametro;
  this.temperatura = temperatura;
  this.nombre = nombre;
}

Cometa.prototype = {
  definicionSegunDiccionario:
    "Un cometa es un cuerpo celeste constituido por hielo, polvo y rocas que orbita alrededor del Sol siguiendo diferentes trayectorias elípticas.",
  obtenerRadio: function () {
    return this.diametro / 2;
  },
  obtenerTemperaturaFarenheit: function () {
      return (this.temperatura * 9 / 5) + 32;
  }
};

const cometa1 = new Cometa("11km", 77, "Halley");
const cometa2 = new Cometa("11km", 50, "Coggia");
const cometa3 = new Cometa("60km", 45, "Hale-Bopp");
