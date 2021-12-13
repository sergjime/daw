const { animales, color } = require("./animales");
const cowsay = require("cowsay");
const Persona = require("./Persona");

const persona1 = new Persona("Joselito", 60);
console.log(persona1.saludar());

console.log(
  cowsay.say({
    text: "I'm a moooodule",
    e: "oO",
    T: "U ",
  })
);

console.log(animales, color);

animales.forEach((animal) => console.log(animal));
