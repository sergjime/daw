const http = require('http')

//Crear un servidor
http.createServer((req,res) => {
    //Escribir una respuesta al recibir una petición
    res.write('Helloo world from Nodejs http module')
    res.end()

    // console.log(req)
}).listen(5001, () => console.log('Servidor arrancado..'))