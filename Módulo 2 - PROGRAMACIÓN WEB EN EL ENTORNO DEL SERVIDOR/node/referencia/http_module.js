const http = require("http");
const fs = require("fs");

//Crear un servidor
http
  .createServer((req, res) => {
    //Escribir una respuesta al recibir una petición
    /*     res.write('Helloo world from Nodejs http module')
    res.end() */

    //Creamos el stream, de lectura
    const myReadStream = fs.createReadStream(__dirname + "/data/data.txt", "utf-8");

    res.writeHead(200, { "Content-Type": "text/plain" });
    // res.write("<h1>Helloo world from Nodejs http module</h1>");
    // res.end();
    //Respuesta en el stream de la response
    myReadStream.pipe(res);
    // console.log(req)
  })
  .listen(5000, () => console.log("Servidor arrancado.."));
