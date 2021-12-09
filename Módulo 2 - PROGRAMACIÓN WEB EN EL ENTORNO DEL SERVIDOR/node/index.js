const { animales, color } = require("./animales");
const cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: "I'm a moooodule",
    e: "oO",
    T: "U ",
  })
);

console.log(animales, color);

animales.forEach((animal) => console.log(animal));
