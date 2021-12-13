const EventEmitter = require("events");

//Extendemos de la clase Emitter
class MyEmiter extends EventEmitter {}
//Inicializamos un objeto Emiter
const myEmiter = new MyEmiter();

//Creamos el listener
myEmiter.on("evento", () => console.log("Evento recibido..."));

myEmiter.emit("evento");
myEmiter.emit("evento");
myEmiter.emit("evento");
myEmiter.emit("evento");
myEmiter.emit("evento");
