const path = require('path')


// console.log(__filename)
// console.log(__dirname);

//Basename
console.log(path.basename(__filename))

//Directorio
console.log(path.dirname(__filename));

//Extensión del archivo
console.log(path.extname('/miruta/miarchivo.png'));

//Crea un objeto a partir de path

console.log(path.parse(__filename));

//Concatena paths
console.log(path.join(__dirname, 'test', 'hello.html'));