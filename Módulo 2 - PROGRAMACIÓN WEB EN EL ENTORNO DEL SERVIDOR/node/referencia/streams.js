const fs = require('fs')

// console.log(fs.readFileSync(__dirname + '/data.txt'))
// console.log("Leido....")

const myReadStream = fs.createReadStream(__dirname + '/data/data.txt', 'utf-8')
const myWriteStream = fs.createWriteStream(__dirname + '/data/data2.txt')

myReadStream.pipe(myWriteStream);
/* myReadStream.on('data', (chunk) => {
    console.log('Nuevos datos recibidos...')
    //console.log(chunk)
    myWriteStream.write(`
    \n-------------------------------
    *
    *
    * REcibido un Nuevo CHUNKKKKK
    \n`)
    myWriteStream.write(chunk)
}) */