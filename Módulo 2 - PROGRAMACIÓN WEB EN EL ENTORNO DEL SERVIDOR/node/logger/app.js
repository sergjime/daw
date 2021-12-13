const Logger = require("./logger");

const logger = new Logger();

logger.on("alerta", (data) => console.log(data));

logger.log("Hola primer log");
