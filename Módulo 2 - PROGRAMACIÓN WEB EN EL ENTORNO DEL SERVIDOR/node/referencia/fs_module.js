const fs = require("fs");
const path = require("path");

//Crear un dir
// fs.mkdir(
//     path.join(__dirname, "test"),
//     { recursive: false },
//     (err) => {
//         if (err) throw err;
//         console.log("Directorio creado correctamente...");
//     }
//     );

//Crear y escribir archivos
// fs.writeFile(
//   path.join(__dirname, "test", "hello.txt"),
//   "Hello World",
//   (err) => {
//     if (err) throw err;
//     console.log("Archivo ok!");
//   }
// );


//Añadir texto a un archivo
/* fs.appendFile(
  path.join(__dirname, "test", "hello.js"),
  "const a = 19",
  (err) => {
    if (err) throw err;
    console.log("Archivo actualizado ok!");
  }
); */

//Leer un archivo
/* fs.readFile(
    path.join(__dirname, "test", "hello.txt"),
    'utf-8',
    (err, data) => {
        if(err) throw err.code;
        console.log(data, error)
    }

)
 */

fs.rename(
  path.join(__dirname, "test", "hello.txt"),
  path.join(__dirname, "test", "renombreado.txt"),
  err => {
    if(err) throw err
    console.log('All ok!!');
  }
  )

  //Copiar un archivo

  //Mover un archivo

  //Eliminar un archivo

  //Crear una carpeta, si esta se crea bién crear un 
  //archivo .json dentro con algunos objetos,
  //luego leer el archivo y mostrar los objetos por
  //consola 
