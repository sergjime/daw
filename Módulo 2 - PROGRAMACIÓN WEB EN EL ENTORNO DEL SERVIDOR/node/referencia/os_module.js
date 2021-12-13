//Información del sistema

const os = require('os')

//Plataforma
console.log(os.platform());

//CPU arquitectura
console.log(os.arch());

//CPU core info
console.log(os.cpus());

//memoria libre
console.log(os.freemem())
//memoria total
console.log(os.totalmem());

//network info
// console.log(os.networkInterfaces());

console.log(os.uptime())

//home directory
console.log(os.homedir())