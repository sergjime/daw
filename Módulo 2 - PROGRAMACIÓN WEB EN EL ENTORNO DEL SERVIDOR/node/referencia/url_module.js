// const url = require('url')
// url.parse('http://miweb.com:8000/hola.html?id=100&edad=23')
//Legaci API

//Nueva API
const miUrl = new URL('http://miweb.com:8000/hola.html?id=100&edad=23')
//url serializada
console.log(miUrl.href);
console.log(miUrl.toString())

//Host
console.log(miUrl.host);

console.log(miUrl.hostname);

console.log(miUrl.pathname)

console.log(miUrl.search);

console.log(miUrl.searchParams);

//Añadir un parametro
miUrl.searchParams.append('nombre', 'Jerry')
console.log(miUrl.searchParams);

//Recorre parametros
miUrl.searchParams.forEach((value, name) => {
    console.log(`${name}, ${value}`);
})