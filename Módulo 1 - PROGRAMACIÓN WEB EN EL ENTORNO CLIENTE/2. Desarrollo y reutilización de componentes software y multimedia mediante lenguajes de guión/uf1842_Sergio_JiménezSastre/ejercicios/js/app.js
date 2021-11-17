// ----------------------- EJERCICIO 1 -----------------------

function sonIguales(cadena1, cadena2) {
  let result;
  if (cadena1 === cadena2) {
    result = "Las dos cadenas son iguales";
  }
  return result;
}

const submit = document.querySelector("input[type='submit']");
const pass1 = document.querySelector("#pass1").value;
const pass2 = document.querySelector("#pass2").value;

submit.addEventListener("click", function (event) {
  event.preventDefault();
  alert(sonIguales(pass1, pass2));
});

// ----------------------- EJERCICIO 2 -----------------------

const pasatiempos = [
  " Ir al cine",
  " Viajar",
  " Quedar con amigos",
  " Salir de paseo",
  " Escuchar música",
];

// Añadiendo un elemento al principio del array
pasatiempos.unshift(" Jugar a juegos de mesa");

// Añadiendo un elemento al final del array
pasatiempos.push(" Jugar a videojuegos");

// Ordenando los elementos alfabéticamente
pasatiempos.sort();

// ----------------------- EJERCICIO 3 -----------------------

const alumnos = [
  {
    nombre: "Sergio",
    apellido1: "Jiménez",
    apellido2: "Sastre",
    edad: 33,
    curso: "Curso de Angular",
    mayorEdad: function () {
      if (this.edad >= 18) {
        console.log(
          `El elemento del objeto: ${this.nombre} ${this.apellido1} ${this.apellido2} con edad de ${this.edad} y haciendo el curdo de "${this.curso}" es mayor de edad`
        );
      } else {
        console.log(
          `El elemento del objeto: ${this.nombre} ${this.apellido1} ${this.apellido2} con edad de ${this.edad} y haciendo el curdo de "${this.curso}" es menor de edad`
        );
      }
    },
  },
];

// ----------------------- EJERCICIO 4 -----------------------

const form = document.querySelector("form");
const div = document.createElement("div");
div.id = "pasatiempos";
document.querySelector(".contenedor").appendChild(div);

const h2 = document.createElement("h2");
const texto = document.createTextNode("Pasatiempos favoritos");
h2.appendChild(texto);
h2.className = "mb-3";
div.appendChild(h2);

const ul = document.createElement("ul");
document.querySelector(".container").appendChild(ul);

for (let i = 0; i < pasatiempos.length; i++) {
  let li = document.createElement("li");
  li.className = "normal";
  li.style.display = "block";
  let texto = document.createTextNode(pasatiempos[i]);
  li.appendChild(texto);
  ul.appendChild(li);
}

// ----------------------- EJERCICIO 5 -----------------------

const mostrarOcultar = document.querySelector(".mostrarOcultar");
const invertir = document.querySelector(".invertir");

mostrarOcultar.addEventListener("click", showHidden);
invertir.addEventListener("click", classInvest);

function classInvest() {
  const lista = document.querySelectorAll("li");
  lista.forEach(function (pasatiempo) {
    if (pasatiempo.className === "invertido") {
      pasatiempo.className = "normal";
    } else if (pasatiempo.className === "normal") {
      pasatiempo.className = "invertido";
    }
  });
}

function showHidden() {
  const lista = document.querySelectorAll("li");
  lista.forEach(function (pasatiempo) {
    if (pasatiempo.style.display === "block") {
      pasatiempo.style.display = "none";
    } else if (pasatiempo.style.display === "none") {
      pasatiempo.style.display = "block";
    }
  });
}
